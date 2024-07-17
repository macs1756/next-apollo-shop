// categoryService.ts
import { gql, DocumentNode } from "@apollo/client";

interface CategoryServiceInterface {
  findAll: DocumentNode;
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

export const CategoryService: CategoryServiceInterface = { findAll };
