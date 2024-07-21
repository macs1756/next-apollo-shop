import { EditIcon } from "@chakra-ui/icons";
import { Box, Icon } from "@chakra-ui/react";
import React from "react";

const UpdateListItem: React.FC = () => {
  return (
    <Box>
      <Icon as={EditIcon} color="blue.300" _hover={{color: 'blue.500', cursor: 'pointer'}}/>
    </Box>
  );
};

export default UpdateListItem;
