import { VercelResponse } from "@vercel/node";

export const response = (res: VercelResponse) => {
  return {
    success: (payload: object) =>
      res.json({
        isError: false,
        payload,
      }),
    error: (errorCode: number, payload: object) =>
      res.status(errorCode).json({
        isError: true,
        payload,
      }),
  };
};