import { ReactNode } from "react";

export type children = {
  children: ReactNode;
};

export type CompaniesCardProps = {
  logo: string;
  name: string;
};

export type vacanciesCardProps = {
  logo: string;
  company: string;
  title: string;
  location: string;
  level: string;
  department: string;
};
