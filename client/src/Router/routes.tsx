import { createRootRoute, createRoute } from "@tanstack/react-router";
import Layout from "../Layout";
import Home from "../Featured/Pages/Home";
import Detail from "../Featured/Pages/detail";

export const rootRoute = createRootRoute({
  component: Layout,
});

export const HomeRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
export const VacancyDetailRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/vacancy/$id",
  component: Detail,
});
export const routeTree = rootRoute.addChildren([
  HomeRouter,
  VacancyDetailRouter,
]);
