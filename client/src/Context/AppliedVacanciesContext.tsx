import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AppliedVacancy {
  id: string | number;
  name: string;
  company: string;
  appliedAt: Date;
}

interface ContextType {
  appliedList: AppliedVacancy[];
  addApply: (vacancy: AppliedVacancy) => void;
  removeApply: (id: string | number) => void;
  checkApplied: (id: string | number) => boolean;
}

const AppliedVacanciesContext = createContext<ContextType | undefined>(
  undefined
);

export const AppliedVacanciesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [appliedList, setAppliedList] = useState<AppliedVacancy[]>([]);

  const addApply = (vacancy: AppliedVacancy) => {
    const exists = appliedList.find((item) => item.id === vacancy.id);
    if (exists) {
      return;
    }
    setAppliedList([...appliedList, vacancy]);
  };

  const removeApply = (id: string | number) => {
    setAppliedList(appliedList.filter((item) => item.id !== id));
  };

  const checkApplied = (id: string | number) => {
    return appliedList.some((item) => item.id === id);
  };

  return (
    <AppliedVacanciesContext.Provider
      value={{ appliedList, addApply, removeApply, checkApplied }}
    >
      {children}
    </AppliedVacanciesContext.Provider>
  );
};

export const useAppliedVacancies = () => {
  const context = useContext(AppliedVacanciesContext);

  if (!context) {
    throw new Error("Some thing went wrong");
  }

  return context;
};


export const isUserLoggedIn = () => {
  const token = localStorage.getItem("token");
  return !!token;
};
