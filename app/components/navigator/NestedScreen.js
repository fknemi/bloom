import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NestedScreen = ({route}) => {

    return (
        <View className="">
            <Text>{route.params.msg}</Text>
        </View>
    )
}

export default NestedScreen


