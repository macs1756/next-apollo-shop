import { IlistItemProps } from "@/types/main";
import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Icon } from "@chakra-ui/react";
import React from "react";

const ListItemDeleteButton: React.FC<IlistItemProps> = (props) => {
  const deleteItem = (id: number) => {
    alert(id);
  };

  return (
    <Box className="flex items-center justify-end w-full">
      <Icon
        onClick={() => {
          deleteItem(props.id);
        }}
        as={DeleteIcon}
        color="blue.300"
        _hover={{ color: "pink.500" }}
      />
    </Box>
  );
};

export default ListItemDeleteButton;
