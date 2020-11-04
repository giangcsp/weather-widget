import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchCurrentWeather} from './weatherSlice'
import styles from './Weather.css';
import WeatherPanel from './WeatherPanel';
import { Wrapper } from '../util/Wrapper';
export function Weather() {
    const dispatch = useDispatch();
    const [current_city, set_current_city] = useState("hanoi");

    // useEffect (
    //     () => {dispatch(fetchCurrentWeather(current_city))}, []
    // );

        return (
            <Wrapper>
                <div>
                    <input
                        className={styles.textbox}
                        aria-label="Enter City"
                        value={current_city}
                        onChange={(e) => set_current_city(e.target.value)}
                    />
                    <button
                        className={styles.button}
                        onClick={() => dispatch(fetchCurrentWeather(current_city))}
                    >Click Me
                    </button>
                </div>
                <WeatherPanel />
            </Wrapper>
        )
    
}