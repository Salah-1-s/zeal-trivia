import CategoriesPage from "../../pages/categories";
import QuestionsPage from "../../pages/questions";
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
  questionsPage: {
    path: "/questions",
    Component: QuestionsPage,
  },
  scorePage: {
    path: "/score",
    // Change this component after implementing the score page
    Component: WelcomePage,
  },
};
