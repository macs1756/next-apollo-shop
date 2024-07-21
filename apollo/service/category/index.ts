// categoryService.ts
import { gql, DocumentNode } from "@apollo/client";

interface CategoryServiceInterface {
  findAll: DocumentNode;
  createOne: DocumentNode;
}

const findAll = gql`
  query GetAllCategory {
    getAllCategory {
      id
      label
      slug
    }
  }
`;

const createOne = gql`
  mutation CreateCategory($label: String!) {
    createCategory(createCategoryInput: { label: $label }) {
      id
      label
      slug
    }
  }
`;

export const CategoryService: CategoryServiceInterface = { findAll, createOne };
