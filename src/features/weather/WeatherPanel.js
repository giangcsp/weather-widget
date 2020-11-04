import { Spinner } from '../util/Spinner';
import React, {useEffect} from 'react';
import {StyledWeatherPanel} from '../util/StyledWeatherPanel';
import { StyledHeader } from '../util/StyledHeader';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectError, selectData } from './weatherSlice';
import {Today} from './Today';
import { ForeCastPanel } from './ForeCastPanel';

export default function WeatherPanel() {
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const data = useSelector(selectData);

    if (loading) {
        return (
            <StyledWeatherPanel>
                <Spinner/>
            </StyledWeatherPanel>
        )
    } else if (error != false) {
        return (
            <StyledWeatherPanel>
                City Not Found
            </StyledWeatherPanel>
        )
    } else {
        return (
            <StyledWeatherPanel>
                <StyledHeader>
                    <b>{data.current.name}</b>
                </StyledHeader>
                <Today {...data.current}></Today>
                <ForeCastPanel {...data.forecast}/>
            </StyledWeatherPanel>
        )
    }
}