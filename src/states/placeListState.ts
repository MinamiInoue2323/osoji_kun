import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Place } from "../hooks/usePlace";

const { persistAtom } = recoilPersist();

const placeListState = atom({
  key: "placelist",
  default: [] as Place[],
  effects: [persistAtom],
});

export const usePlaceList = () => {
  const [placeList, setPlaceList] = useRecoilState(placeListState);
  return { placeList, setPlaceList };
};
