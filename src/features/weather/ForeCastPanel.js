import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectForeCastLoading, selectForeCastError, selectForeCast, fetchWeatherForecast, selectCurrent } from './weatherSlice';
import { Spinner } from '../util/Spinner';
import moment from 'moment';

const StyledPanel = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`

const ForeCastTab = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: small;
`

export function ForeCastPanel(props) {

    const forecasts = props.daily.slice(1, 6).map((day) =>
        <ForeCastTab key={day.dt}>
            <div>{moment.unix(day.dt).utc().format("ddd")}</div>
            <div><img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} /></div>
            <div>{Math.round(day.temp.day)}&#8451;</div>
        </ForeCastTab>
    );
    return (
        <StyledPanel>
            {forecasts}
        </StyledPanel>
    )
}