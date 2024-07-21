import { QueryResult } from "@apollo/client";



export interface Category {
  __typename: string;
  id: number;
  label: string;
  slug: string;
}

export type getCategories = {
  getAllCategory: Category[];
};


export interface CreateCategoryVariables {
  label: string;
}

export interface CreateCategoryResponse {
  createCategory: Category;
}

export interface UpdateCategoryVariables {
  id: number;
  label?: string;
  slug?: string;
}

export interface UpdateCategoryResponse {
  updateCategory: Category;
}

export interface DeleteCategoryVariables {
  id: number;
}

export interface DeleteCategoryResponse {
  deleteCategory: {
    message: string
  };
}


export interface IcreateCategoryProps {
  triggerGetCategories: QueryResult<getCategories>["refetch"];
}