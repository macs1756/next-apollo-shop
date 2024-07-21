import { ApolloError } from "@apollo/client";
import { ReactNode } from "react";

export interface IloadingProviderProps {
  children: ReactNode;
  errors: ApolloError | undefined;
  loading: boolean;
}

export interface IlistItemProps {
  id: number
  label: string
}