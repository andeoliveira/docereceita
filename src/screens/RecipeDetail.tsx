import React from "react";
import { 
    Text, 
    View 
} from "native-base";
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamListType} from "../routes/RootStackParamListType";

type ScreenProps = NativeStackScreenProps<RootStackParamListType, 'Details'>

const RecipeDetail = ({route, navigation}:ScreenProps) => {

    const item = route.params.item
    return (
        <View>
            <Text>
               {item.preparation}
            </Text>
        </View>
    )
}

export default RecipeDetail