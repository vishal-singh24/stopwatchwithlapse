import { Dimensions, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const { height, width } = Dimensions.get('screen')
export default function Buttons({ isActive,
    handleStart,
    handleLap,
    handleStop, }) {
    return (
        <View style={styles.Container}>
            <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: colors.color3 }]} onPress={handleStop}>
                <FontAwesome5 name='stop' color="white" size={22} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: colors.color2 }]} onPress={handleStart}>
                <FontAwesome5 name={isActive ? "pause" : "play"} color={colors.color3} size={22} />

            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: colors.color3 }]} onPress={handleLap}>
                <FontAwesome5 name='step-forward' color="white" size={22} />
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        width: width
    },
    buttonContainer: {
        height: 70,
        width: 70,
        borderRadius: 70 / 2,
        justifyContent: 'center',
        alignItems: 'center'

    }


})