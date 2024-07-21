


export interface Category {
  __typename: string;
  id: number;
  label: string;
  slug: string;
}

export type getCategories = {
  getAllCategory: Category[];
};