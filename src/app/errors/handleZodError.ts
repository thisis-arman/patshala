import { ZodError, ZodIssue } from "zod";
import {  TErrorSources, TGenericErrorResponse } from "../interface/error";

export const handleZodError = (error: ZodError): TGenericErrorResponse => {
  const errorSource: TErrorSources = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  const statusCode = 400;

  return {
    statusCode,
    message: "Validation error",
    errorSource,
  };
};
