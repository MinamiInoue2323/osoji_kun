import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Place } from "../hooks/usePlace";

const { persistAtom } = recoilPersist();

const currentTargetPlaceState = atom({
  key: "currenttargetplace",
  default: null as Place | null,
  effects: [persistAtom],
});

export const useCurrentTargetPlace = () => {
  const [currentTargetPlace, setCurrentTargetPlace] = useRecoilState(
    currentTargetPlaceState
  );
  return { currentTargetPlace, setCurrentTargetPlace };
};
