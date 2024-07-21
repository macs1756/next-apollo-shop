import { IlistItemProps } from "@/types/main";
import { Box, ListItem } from "@chakra-ui/react";
import React from "react";
import ListItemDeleteButton from "./deleteService";
import ListItemHead from "./renderHead";
import UpdateListItem from "./updateListItem";

const DlistItem: React.FC<IlistItemProps> = (linkItemData) => {
  return (
    <ListItem
      data-id={linkItemData.id}
      className="flex items-center w-[300px] relative"
    >
      <ListItemHead {...linkItemData} />

      <Box className="flex gap-2">
        <UpdateListItem {...linkItemData} />
        <ListItemDeleteButton {...linkItemData} />
      </Box>
    </ListItem>
  );
};

export default DlistItem;
