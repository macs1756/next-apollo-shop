import { CategoryService } from "@/apollo/service/category";
import { useQuery } from "@apollo/client";
import React from "react";

const AdminCategories: React.FC = () => {
 
  const { data, loading, error } = useQuery(CategoryService.findAll);

  console.log(data);

  return <div>Categories</div>;
};

export default AdminCategories;
