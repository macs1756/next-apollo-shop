import { findOneCategoryResponse } from "@/apollo/service/category/types";
import { QueryResult } from "@apollo/client";

export interface IcreateSubcategoryProps {
  refetch: QueryResult<findOneCategoryResponse>["refetch"];
  categoryId: number
}
