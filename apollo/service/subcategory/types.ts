export interface Isubcategory {
  id: string;
  label: string;
  slug: string;
  categoryId: number;
}

export interface createSubcategoryVariables {
    label: string;
    categoryId: number;
}

export interface createSubcategoryResponse {
  createSubcategory: Isubcategory;
}
