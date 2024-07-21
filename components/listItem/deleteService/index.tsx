import { CategoryService } from "@/apollo/service/category";
import {
  DeleteCategoryResponse,
  DeleteCategoryVariables,
} from "@/apollo/service/category/types";
import { IlistItemProps } from "@/types/main";
import { useMutation } from "@apollo/client";
import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Icon } from "@chakra-ui/react";
import React from "react";

const ListItemDeleteButton: React.FC<IlistItemProps> = (props) => {
  const [deleteCategory] = useMutation<
    DeleteCategoryResponse,
    DeleteCategoryVariables
  >(CategoryService.deleteOne);

  const { id, triggerGetCategories } = props;

  const deleteItem = async (id: number) => {
    await deleteCategory({ variables: { id: id } });

    if (triggerGetCategories) {
      await triggerGetCategories();
    }
  };

  return (
    <Box className="flex items-center justify-end w-full">
      <Icon
        onClick={() => {
          deleteItem(id);
        }}
        as={DeleteIcon}
        color="blue.300"
        _hover={{ color: "pink.500", cursor: "pointer" }}
      />
    </Box>
  );
};

export default ListItemDeleteButton;
