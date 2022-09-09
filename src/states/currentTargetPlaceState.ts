import { atom, useRecoilState } from "recoil";
import { Place } from "../hooks/usePlace";

const currentTargetPlaceState = atom({
  key: "currenttargetplace",
  default: null as Place | null,
});

export const useCurrentTargetPlace = () => {
  const [currentTargetPlace, setCurrentTargetPlace] = useRecoilState(
    currentTargetPlaceState
  );
  return { currentTargetPlace, setCurrentTargetPlace };
};
