import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constants/colors'

const { height, width } = Dimensions.get('screen')
export default function Lap({lapse}) {

    //function to format time in minutes:seconds
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60); 
        const seconds = Math.floor(time % 60); 
        
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    return (
        <View style={styles.clockContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    Lap Time
                </Text>
                <Text style={styles.titleText}>
                    Lap No
                </Text>
            </View>
            <FlatList data={lapse} renderItem={item => {
                return (
                    <View style={{flexDirection:'row',justifyContent:'space-around',width:width,marginVertical:10}}>
                        <Text style={{ color: 'white' }}>
                            {formatTime(item.item)}
                        </Text>
                        <Text style={{color:'white'}}>
                        {lapse.length-item.index}
                    </Text>
                    </View>
                )
            }} />
        </View>
    )
}



const styles = StyleSheet.create({
    clockContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width,
        backgroundColor: colors.color4,
        paddingVertical: 10

    },
    titleText: {
        color: colors.color5,
        textTransform: 'uppercase',
        fontWeight: 700

    }

})