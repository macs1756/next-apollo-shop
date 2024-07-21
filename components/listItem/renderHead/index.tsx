import { IlistItemProps } from "@/types/main";
import { LinkIcon } from "@chakra-ui/icons";
import { Box, ListIcon, Text } from "@chakra-ui/react";
import React from "react";

const ListItemHead: React.FC<IlistItemProps> = (props) => {
  return (
    <Box className="flex items-center">
      <ListIcon as={LinkIcon} color="blue.300" />
      <Text fontSize="m">{props.label}</Text>
    </Box>
  );
};

export default ListItemHead;
