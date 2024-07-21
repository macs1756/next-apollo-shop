import { CategoryService } from "@/apollo/service/category";
import { getCategories } from "@/apollo/service/category/types";
import DlistItem from "@/components/listItem";
import { LoadingProvider } from "@/layouts";
import { useQuery } from "@apollo/client";
import { List } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React from "react";

const AdminCategories: React.FC = () => {
  const { data, loading, error } = useQuery<getCategories>(
    CategoryService.findAll
  );


  return (
    <LoadingProvider errors={error} loading={loading}>
      <div className="p-[50px]">
        <List spacing={5}>
          {data?.getAllCategory.map((e) => (
            <DlistItem key={nanoid()} id={e.id} label={e.label} />
          ))}
        </List>
      </div>
    </LoadingProvider>
  );
};

export default AdminCategories;
