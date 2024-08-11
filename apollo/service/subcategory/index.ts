import { gql, DocumentNode } from "@apollo/client";

interface SubcategoryServiceInterface {
  createOne: DocumentNode;
}

const createOne = gql`
  mutation CreateSubcategory($label: String!, $categoryId: Float!) {
    createSubcategory(args: { label: $label, categoryId: $categoryId }) {
      id
      label
      slug
      categoryId
    }
  }
`;

export const SubcategoryService: SubcategoryServiceInterface = {
  createOne,
};
