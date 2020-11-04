import React from 'react';
import {StyledToday} from '../util/StyledToday';
import styled from 'styled-components';
import moment from 'moment';
import styles from './Weather.css';
import { useSelector } from 'react-redux';
import { selectCurrent } from './weatherSlice';

const MainInfo = styled.div`
    display: flex;
    flex-shrink: 0;
    flex-direction: row;
    margin-left: 10px;
`;

const AdditionalInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: begin
`;

const ColumnItem = styled.div`
    font-size: small;
    font: initial;
    margin-block-start: 0px;
    margin-block-end: 0px;
`

const RowItem = styled.div`
    font-size: large;
    font: initial;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0px;
    margin-left: 20px;
`

const P = styled.p`
    margin-block-start: 0px;
    margin-block-end: 0px;
    text-align: left;
`

const Img = styled.img`
    margin-left: 8px;
    width: 60px;
    height: 60px;
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: xx-large;
    margin-left: 20px;
`

export function Today(data) {
    return (
        <StyledToday>
            <MainInfo>
                <RowItem>
                    <Img style={styles.img} src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}></Img>
                    <div><b>{data.weather[0].description}</b></div>
                </RowItem>
                <Div><b>{data.main.temp}&#8451;</b></Div>
            </MainInfo>
            <AdditionalInfo>
                <ColumnItem><P>Wind: {data.wind.speed} m/s</P></ColumnItem>
                <ColumnItem><P style={styles.columnItem}>Sunrise: {moment(data.sys.sunrise).format("HH:mm A")}</P></ColumnItem>
                <ColumnItem><P style={styles.columnItem}>Sunset: {moment(data.sys.sunset).format("HH:mm A")}</P></ColumnItem>
            </AdditionalInfo>
        </StyledToday>
    )
}