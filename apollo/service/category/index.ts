// categoryService.ts
import { gql, DocumentNode } from "@apollo/client";

interface CategoryServiceInterface {
  findOne: DocumentNode;
  findAll: DocumentNode;
  createOne: DocumentNode;
  deleteOne: DocumentNode;
  updateOne: DocumentNode;
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

const findOne = gql`
  query GetOneCategory($slug: String!) {
    getOneCategory(slug: $slug) {
      id
      label
      slug
      subcategories {
        label
        slug
      }
    }
  }
`;

const createOne = gql`
  mutation CreateCategory($label: String!) {
    createCategory(args: { label: $label }) {
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

export const updateOne = gql`
  mutation UpdateCategory($label: String, $id: Int!, $slug: String) {
    updateCategory(
      updateCategoryInput: { label: $label, id: $id, slug: $slug }
    ) {
      id
      slug
      label
    }
  }
`;

export const CategoryService: CategoryServiceInterface = {
  findOne,
  findAll,
  createOne,
  deleteOne,
  updateOne,
};
