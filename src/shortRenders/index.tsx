import { findOneCategoryResponse } from "@/apollo/service/category/types";
import { nanoid } from "nanoid";
import React from "react";

export const renderSubcategoriesA = (data: findOneCategoryResponse) => {
  const arr = data?.getOneCategory?.subcategories || [];

  const res = arr.map((e) => <li className="py-[10px]" key={nanoid()}>{e.label}</li>);

  return res;
};
