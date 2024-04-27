import CategoriesPage from "../../pages/categories";
import QuestionsPage from "../../pages/questions";
import ScorePage from "../../pages/score";
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
    Component: ScorePage,
  },
};
