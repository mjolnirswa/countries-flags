import {useDispatch, useSelector} from 'react-redux';
import { selectNeighbors } from './details-slice';
import { useEffect } from 'react';
import { loadNeighborsByBorder } from './details-slice';

export const useNeighbors = (borders = []) => {
    const dispatch = useDispatch();
    const neighbors = useSelector(selectNeighbors);

    useEffect(() => {
        if (borders.length) {
        dispatch(loadNeighborsByBorder(borders));
        }
    }, [borders, dispatch]);

    return neighbors;
}