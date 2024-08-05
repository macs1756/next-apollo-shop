import { getCategories } from "@/apollo/service/category/types";
import { ApolloError, QueryResult } from "@apollo/client";
import { ReactNode } from "react";

export interface IloadingProviderProps {
  children: ReactNode;
  errors: ApolloError | undefined;
  loading: boolean;
}

export interface IlistItemProps {
  id: number;
  label: string;
  triggerGetCategories?: QueryResult<getCategories>["refetch"];
  slug?: string;
}
