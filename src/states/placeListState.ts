import { atom, useRecoilState } from "recoil";
import { Place } from "../hooks/usePlace";

const placeListState = atom({
  key: "placelist",
  default: [] as Place[],
});

export const usePlaceList = () => {
  const [placeList, setPlaceList] = useRecoilState(placeListState);
  return { placeList, setPlaceList };
};
