import { Place } from "@mui/icons-material";
import { useId, useState } from "react";

export type Place = {
  id: string;
  name: string;
};

export const getRandomId = () => {
  let ret = "";
  const arr = new Uint8Array(16);

  if (window.crypto) {
    window.crypto.getRandomValues(arr);
  }

  for (let i = 0; i < arr.length; i += 1) {
    ret += arr[i].toString(16);
  }

  return ret.toUpperCase();
};

export const usePlace = () => {
  const [placeList, setPlaceList] = useState([] as Place[]);

  const addPlace = (name: string) => {
    const id = getRandomId();
    setPlaceList((prev) => [...prev, { id, name }]);
  };

  const deletePlace = (id: string) => {
    setPlaceList((prev) => {
      const deletePlaces = prev.filter((item) => item.id !== id);
      return deletePlaces;
    });
  };

  const renamePlace = (id: string, name: string) => {
    setPlaceList((prev) =>
      prev.map((item) => (item.id === id ? { id, name } : item))
    );
  };

  return {
    placeList,
    addPlace,
    deletePlace,
    renamePlace,
  };
};
