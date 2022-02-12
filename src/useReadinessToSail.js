import { useSelector } from 'react-redux';

export function useReadinessToSail(shipType = "cruiser") {
    let shipStatePropertyName = "cruiserState";
    if(shipType==="destroyer") shipStatePropertyName = "destroyerState";

    const isReadyToSail = useSelector((state) => state[shipStatePropertyName].isReadyToSail);

    return isReadyToSail;
}