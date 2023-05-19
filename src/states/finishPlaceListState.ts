import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Place } from "../hooks/usePlace";

const { persistAtom } = recoilPersist();

const finishPlaceListState = atom({
  key: "finishplacelist",
  default: [] as Place[],
  effects_UNSTABLE: [persistAtom],
});

export const useFinishPlaceList = () => {
  const [finishPlaceList, setFinishPlaceList] =
    useRecoilState(finishPlaceListState);
  return { finishPlaceList, setFinishPlaceList };
};
