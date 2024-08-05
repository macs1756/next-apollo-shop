import { IlistItemProps } from "@/types/main";
import { LinkIcon } from "@chakra-ui/icons";
import { Box, ListIcon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const ListItemHead: React.FC<IlistItemProps> = (props) => {
  return (
    <Box className="flex items-center w-full">
      <ListIcon as={LinkIcon} color="blue.300" />
      <Link href={`/admin/categories/${props.slug}`}>
        <Text fontSize="m">{props.label}</Text>
      </Link>
    </Box>
  );
};

export default ListItemHead;
