import { createRootRoute, createRoute } from "@tanstack/react-router";
import Layout from "../Layout";
import Home from "../Featured/Pages/Home";

export const rootRoute = createRootRoute({
  component: Layout,
});

export const HomeRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

export const routeTree = rootRoute.addChildren([
  HomeRouter,
]);
