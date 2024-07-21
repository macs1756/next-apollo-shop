import { CategoryService } from "@/apollo/service/category";
import {
  CreateCategoryResponse,
  CreateCategoryVariables,
  IcreateCategoryProps,
} from "@/apollo/service/category/types";
import { useMutation } from "@apollo/client";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const CreateListItem: React.FC<IcreateCategoryProps> = ({
  triggerGetCategories,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [createCategory] = useMutation<
    CreateCategoryResponse,
    CreateCategoryVariables
  >(CategoryService.createOne);

  const submitCategory = async () => {
    setIsLoading(true);
    const { errors } = await createCategory({
      variables: { label: inputValue },
    });
    if (errors) {
      alert(JSON.stringify(errors));
    }
    await triggerGetCategories();
    setInputValue("");
    setIsLoading(false);
  };

  return (
    <Box className="w-[300px] mt-[20px]">
      <Text fontSize="sm" mb={1}>
        Label
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
          submitCategory();
        }}
        mt={4}
        colorScheme="teal"
        isLoading={isLoading}
        type="submit"
      >
        Submit
      </Button>
    </Box>
  );
};

export default CreateListItem;
