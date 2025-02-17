import {View, Text} from "react-native";
import React from "react";
import { DefaultNavigator } from "expo-router/build/views/Navigator";
import { useLocalSearchParams } from "expo-router";

const Property = () =>{
    const {id} = useLocalSearchParams();


    return (
        <View>
            <Text>Property</Text>
        </View>
    )
}

export default Property;