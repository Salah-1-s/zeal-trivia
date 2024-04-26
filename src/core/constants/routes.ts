import CategoriesPage from "../../pages/categories";
import WelcomePage from "../../pages/welcome";

export const ROUTES = {
  welcomeScreen: {
    path: "/",
    Component: WelcomePage,
  },
  categoriesPage: {
    path: "/categories",
    Component: CategoriesPage,
  },
};
