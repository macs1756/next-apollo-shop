// categoryService.ts
import { gql, DocumentNode } from "@apollo/client";

interface CategoryServiceInterface {
  findAll: DocumentNode;
  createOne: DocumentNode;
  deleteOne: DocumentNode;
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

export const deleteOne = gql`
  mutation DeleteCategory($id: Int!) {
    deleteCategory(id: $id) {
      message
    }
  }
`;

export const CategoryService: CategoryServiceInterface = {
  findAll,
  createOne,
  deleteOne,
};
