import { ReactNode } from "react";

export type children = {
  children: ReactNode;
};

export type headingTypes = {
  title?: string;
  desc?: string;
};
export type CategoryCardProps = {
  title?: string;
  image: string;
};

export type ArticlesCardsProps = {
  image: string;
  category: string;
  date: string;
  title: string;
};
export type productCardProps = {
  image: string;
  title: string;
  price: number;
  discount: number;
  rating: number;
};
