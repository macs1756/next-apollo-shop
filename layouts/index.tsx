import { IloadingProviderProps } from "@/types/main";
import { CircularProgress } from "@chakra-ui/react";
import React from "react";

export const LoadingProvider: React.FC<IloadingProviderProps> = ({
  children,
  errors,
  loading,
}) => {
  if (errors) return <div>{errors.message}</div>;
  if (loading) return <CircularProgress isIndeterminate color="blue.300" />;

  return children;
};
