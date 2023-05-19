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
    setPlaceList((prev: any) => [...prev, { id, name }]);
  };

  const deletePlace = (id: string) => {
    setPlaceList((prev: any) => {
      const deletePlaces = prev.filter(
        (item: { id: string }) => item.id !== id
      );
      return deletePlaces;
    });
  };

  const renamePlace = (id: string, name: string) => {
    setPlaceList((prev: any[]) =>
      prev.map((item: { id: string }) => (item.id === id ? { id, name } : item))
    );
  };

  return {
    placeList,
    addPlace,
    deletePlace,
    renamePlace,
  };
};
