export interface Payload<D = unknown> {
  /**
   * Response code sent with the response.
   *
   * @type {number}
   * @memberof Payload
   */
  response_code: 0 | 1 | 2 | 3 | 4;

  /**
   * data returned with the payload.
   *
   * @type {D}
   * @memberof Payload
   */
  results: D;
}
