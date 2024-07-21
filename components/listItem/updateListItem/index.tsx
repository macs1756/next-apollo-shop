import { CategoryService } from "@/apollo/service/category";
import {
  UpdateCategoryResponse,
  UpdateCategoryVariables,
} from "@/apollo/service/category/types";
import { IlistItemProps } from "@/types/main";
import { useMutation } from "@apollo/client";
import { EditIcon } from "@chakra-ui/icons";
import { Box, Button, Icon, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const UpdateListItem: React.FC<IlistItemProps> = (props) => {
  const { label, id, triggerGetCategories } = props;

  const [updateCategory] = useMutation<
    UpdateCategoryResponse,
    UpdateCategoryVariables
  >(CategoryService.updateOne);

  const [isShow, setIsShow] = useState(false);
  const [inputValue, setInputValue] = useState(label);
  const [isLoading, setIsLoading] = useState(false);

  const updateCategoryAction = async () => {
    await updateCategory({ variables: { id, label: inputValue } });

    setIsLoading(true);
    if (triggerGetCategories) {
      await triggerGetCategories();
    }
    setIsShow(false);
    setIsLoading(false);
  };

  return (
    <Box>
      <Icon
        onClick={() => {
          setIsShow((prev) => !prev);
        }}
        as={EditIcon}
        color="blue.300"
        _hover={{ color: "blue.500", cursor: "pointer" }}
      />

       {isShow && (
        <Box className="absolute top-[110%] left-0 bg-white border z-20 p-[5px]">
          <Box className="w-[290px] mt-[20px]">
            <Text fontSize="xs" mb={1}>
              Change label for your category
            </Text>
            <Input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              type="string"
              placeholder="name"
            />

            <Button
              onClick={() => {
                updateCategoryAction();
              }}
              mt={4}
              colorScheme="teal"
              isLoading={isLoading}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default UpdateListItem;
