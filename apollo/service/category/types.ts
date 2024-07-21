import { OperationVariables } from "@apollo/client";



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

export interface IcreateCategoryProps {
  triggerGetCategories: any
}