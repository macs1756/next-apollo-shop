import { IlistItemProps } from "@/types/main";
import { ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";

const DlistItem: React.FC<IlistItemProps> = (iterface) => {
  return (
    <ListItem data-id={iterface.id}>
      <ListIcon as={MdCheckCircle} color="green.500" />
      {iterface.label}
    </ListItem>
  );
};

export default DlistItem;
