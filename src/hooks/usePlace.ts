import { Place } from "@mui/icons-material";
import { usePlaceList } from "../states/placeListState";
import { getRandomId } from "../helpers/getRandomId";

export type Place = {
  id: string;
  name: string;
};

export const usePlace = () => {
  const { placeList, setPlaceList } = usePlaceList();

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
