import { atom, useRecoilState } from "recoil";
import { Place } from "../hooks/usePlace";

const finishPlaceListState = atom({
  key: "finishplacelist",
  default: [] as Place[],
});

export const useFinishPlaceList = () => {
  const [finishPlaceList, setFinishPlaceList] =
    useRecoilState(finishPlaceListState);
  return { finishPlaceList, setFinishPlaceList };
};
