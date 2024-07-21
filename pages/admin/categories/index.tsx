import { CategoryService } from "@/apollo/service/category";
import { getCategories } from "@/apollo/service/category/types";
import { LoadingProvider } from "@/layouts";
import { useQuery } from "@apollo/client";
import { List } from "@chakra-ui/react";
import React from "react";

const AdminCategories: React.FC = () => {
  const { data, loading, error } = useQuery<getCategories>(
    CategoryService.findAll
  );

  console.log(data?.getAllCategory);

  return (
    <LoadingProvider errors={error} loading={loading}>
      <div className="p-[50px]">
        <List spacing={3}>
          {data?.getAllCategory.map((e) => (
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              {e.label}
            </ListItem>
          ))}
        </List>
      </div>
    </LoadingProvider>
  );
};

export default AdminCategories;
