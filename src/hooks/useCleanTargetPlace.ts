import { useEffect, useRef } from "react";
import { useCurrentTargetPlace } from "../states/currentTargetPlaceState";
import { useFinishPlaceList } from "../states/finishPlaceListState";
import { usePlaceList } from "../states/placeListState";
import { Place } from "./usePlace";

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const useCleanTargetPlace = () => {
  const { placeList } = usePlaceList();
  const { finishPlaceList, setFinishPlaceList } = useFinishPlaceList();
  const { currentTargetPlace, setCurrentTargetPlace } = useCurrentTargetPlace();

  const isFirstRender = useRef(false);

  useEffect(() => {
    if (!currentTargetPlace) {
      updateCurrentCleanTargetPlace();
    }
    isFirstRender.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      if (finishPlaceList.length !== 0 && currentTargetPlace) {
        updateCurrentCleanTargetPlace();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finishPlaceList]);

  const updateCurrentCleanTargetPlace = () => {
    //placelistに存在してfinishPlaceListにないPlaceを抽出
    let candidatePlaces = placeList.filter(
      (item) => !finishPlaceList.includes(item)
    );
    //place Listの場所が全て掃除済みだった場合はreset
    if (!candidatePlaces.length) {
      candidatePlaces = [...placeList];
      setFinishPlaceList([]);
    }
    const newTargetPlace =
      candidatePlaces[getRandomInt(candidatePlaces.length)];
    setCurrentTargetPlace(newTargetPlace);
  };

  const finishClean = (place: Place) => {
    setFinishPlaceList((prev) => [...prev, place]);
  };

  return {
    currentTargetPlace,
    setCurrentTargetPlace,
    updateCurrentCleanTargetPlace,
    finishClean,
  };
};
