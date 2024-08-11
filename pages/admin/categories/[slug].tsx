import { CategoryService } from "@/apollo/service/category";
import {
  findOneCategoryResponse,
  findOneCategoryVariables,
} from "@/apollo/service/category/types";
import { LoadingProvider } from "@/layouts";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";

const CategorySingle: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const slugTransformation =
    Array.isArray(slug) || slug === undefined ? "" : slug;

  const { data, loading, error } = useQuery<
    findOneCategoryResponse,
    findOneCategoryVariables
  >(CategoryService.findOne, {
    variables: { slug: slugTransformation },
  });

  return (
    <LoadingProvider errors={error} loading={loading}>
      <div className="p-[50px]">
        <h4>moderation of the {data?.getOneCategory.label} category</h4>

        
      </div>
    </LoadingProvider>
  );
};

export default CategorySingle;
