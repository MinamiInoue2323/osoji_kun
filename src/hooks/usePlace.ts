import { Place } from "@mui/icons-material";
import { atom, useRecoilState } from "recoil";

export type Place = {
  id: string;
  name: string;
};

const placeListState = atom({
  key: "placeList", // unique ID (with respect to other atoms/selectors)
  default: [] as Place[], // default value (aka initial value)
});

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
  const [placeList, setPlaceList] = useRecoilState(placeListState);

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
