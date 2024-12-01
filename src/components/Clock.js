import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'


export default function Clock({time}) {

    //function to format time in minutes:seconds
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60); 
        const seconds = Math.floor(time % 60); 
        return {
            minutes: minutes.toString().padStart(2, '0'),
            seconds: seconds.toString().padStart(2, '0'),
        };
    };

    const { minutes, seconds} = formatTime(time);
    return (
        <View style={styles.clockContainer}>
            <View style={styles.roundContainer}>
                <Text style={{color:colors.color5}}>STOPWATCH</Text>
                <View style={styles.timerContainer}>
                    <View style={styles.timerInnerContainer}>
                        <Text style={styles.timeValue}>{minutes}</Text>
                        <Text style={styles.timeText}>Min</Text>
                    </View>
                    <View>
                        <Text style={{color:colors.color5,fontSize:30}}>:</Text>
                    </View>
                    <View style={styles.timerInnerContainer}>
                        <Text style={styles.timeValue}>{seconds}</Text>
                        <Text style={styles.timeText}>sec</Text>
                    </View>
                    
                </View>
                <View></View>
            </View>


        </View>
    )
}



const styles = StyleSheet.create({
    clockContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    roundContainer: {
        backgroundColor:colors.color4,
        height: 300,
        width: 300,
        borderRadius: 300/2,
        justifyContent: 'space-around',
        alignItems: 'center',
        elevation:10,
        shadowColor:'grey',
        
       
    },
    timerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '80%'
    },
    timerInnerContainer: {
        alignItems: 'center'
    },
    timeValue: {
        fontSize: 30,
        color:colors.color5
    },
    timeText:{
        color:colors.color5,
        opacity:0.5
    }
})