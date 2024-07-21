import { IlistItemProps } from "@/types/main";
import { DeleteIcon, DragHandleIcon, LinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Icon,
  IconButton,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ListItemDeleteButton from "./deleteService";
import ListItemHead from "./renderHead";

const DlistItem: React.FC<IlistItemProps> = (linkItemData) => {
  return (
    <ListItem data-id={linkItemData.id} className="flex items-center w-[300px]">
      <ListItemHead {...linkItemData} />
      <ListItemDeleteButton {...linkItemData} />
    </ListItem>
  );
};

export default DlistItem;
