import { nanoid } from "nanoid";

export const getRandomId = () => {
  const randomId = nanoid();
  return randomId;
};
