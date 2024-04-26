/**
 * Get the full path to the endpoint.
 *
 * @param path The relative path to the API
 * @example getApiUrl("/users") // https://api.example.com/users
 * @returns The full path to the API using the API_URL environment variable
 */
export function getApiUrl(path: string) {
  return `${import.meta.env.VITE_API_URL}${path}`;
}

export const fetch = async <T, F = void, E = void>(
  info: RequestInfo | URL,
  init: RequestInit
) => {
  let response: Response;
  let data;
  const fetchInit: RequestInit = {
    ...init,
  };

  try {
    response = await globalThis.fetch(info, fetchInit);
  } catch (error) {
    // Skip intentionally cancelled requests errors
    if ((error as Error)?.name === "AbortError") {
      return;
    }

    const { message } = error as Error;

    response = new Response(
      JSON.stringify({
        error: message,
      }),
      {
        status: 500,
      }
    );
  }

  if (response.ok) {
    data = response.json() as T;
  } else {
    data = response.json().then<E>((data) => Promise.reject(data)) as
      | F
      | { error: string };
  }

  return data as Promise<typeof data>;
};
