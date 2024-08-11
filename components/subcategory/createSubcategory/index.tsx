import React, { useState } from "react";
import { IcreateSubcategoryProps } from "./types";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { SubcategoryService } from "@/apollo/service/subcategory";
import {
  createSubcategoryResponse,
  createSubcategoryVariables,
} from "@/apollo/service/subcategory/types";

const CreateSubcategory: React.FC<IcreateSubcategoryProps> = (props) => {
  const { refetch, categoryId } = props;
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [createSubcategory] = useMutation<
    createSubcategoryResponse,
    createSubcategoryVariables
  >(SubcategoryService.createOne);

  const submitSubcategory = async () => {
    setIsLoading(true);

    try {
      const { errors } = await createSubcategory({
        variables: { label: inputValue, categoryId },
      });

      if (errors) {
        alert(JSON.stringify(errors));
      }

      await refetch();
    } catch (e) {
      console.error("Unexpected error:", e);
      alert(
        "An unexpected error occurred: " +
          (e instanceof Error ? e.message : "Unknown error")
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box className="w-[300px] mt-[20px]">
      <Text fontSize="sm" mb={1}>
        Label
      </Text>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="name"
      />

      <Button
        onClick={submitSubcategory}
        mt={4}
        colorScheme="teal"
        isLoading={isLoading}
        type="button"
      >
        Submit
      </Button>
    </Box>
  );
};

export default CreateSubcategory;
