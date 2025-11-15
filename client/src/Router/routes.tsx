import { createRootRoute, createRoute } from "@tanstack/react-router";
import Layout from "../Layout";
import Home from "../Featured/Pages/Home";
import login from "../Featured/Pages/login";
import Register from "../Featured/Pages/register";
import Detail from "../Featured/Pages/detail";

export const rootRoute = createRootRoute({
  component: Layout,
});

export const HomeRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
export const LoginRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: login,
});
export const RegisterRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: Register,
});

export const VacancyDetailRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/vacancy/$id",
  component: Detail,
});
export const routeTree = rootRoute.addChildren([
  HomeRouter,
  LoginRouter,
  RegisterRouter,
  VacancyDetailRouter,
]);
