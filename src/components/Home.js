import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import Clock from './Clock'
import Lap from './Lap'
import Buttons from './Buttons'
import { colors } from '../constants/colors'

export default function Home() {
    const [time, setTime] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [lapse, setLapse] = useState([])
    const timer = useRef(null)

    //handle start  
    const handleStart = useCallback(() => {
        if (!isActive) {
            const interval = setInterval(() => {
                setTime((previosTime) =>
                    previosTime + 1
                )
            }, 1000);

            timer.current = interval;
        } else {
            clearInterval(timer.current);
        }
        setIsActive((previousState) => !previousState);
    }, [isActive]);

    //function to add lap
    const handleLap = useCallback(() => {
        if (isActive) {
            setLapse((previousState) => [time, ...previousState]);
        }
    }, [isActive, time]);
 
    //function to handle stop
    const handleStop = useCallback(() => {
            setLapse([]);
            setTime(0);
            clearInterval(timer.current);
            setIsActive(false)
    },[isActive])
    return (
        <View style={styles.container}>
            <View style={{ flex: 50 }}>
                <Clock time={time}/>
            </View>
            <View style={{ flex: 25 }}>
                <Lap lapse={lapse}/>
            </View>
            <View style={{ flex: 25 }}>
                <Buttons isActive={isActive} 
                handleStart={handleStart} 
                handleLap={handleLap} 
                handleStop={handleStop} />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.color1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})