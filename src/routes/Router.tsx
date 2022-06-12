import React from "react"
import {createDrawerNavigator} from "@react-navigation/drawer"
import {createStackNavigator} from "@react-navigation/stack"
import RecipeList from "../screens/RecipeList"
import Sobre from "../screens/Sobre"
import RecipeDetail from "../screens/RecipeDetail"
import {RootStackParamListType} from '../routes/RootStackParamListType'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator<RootStackParamListType>()
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{headerTintColor:'#000'}}>
            <Drawer.Screen name="Receitas" component={RecipeList} />
            <Drawer.Screen name="Sobre" component={Sobre} />
        </Drawer.Navigator>
    )
}
const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name="Drawer" component={DrawerNavigator} />
            <Stack.Screen options={({route})=>({headerTitle: route.params.titleScreen})} name="Details" component={RecipeDetail} />
        </Stack.Navigator>
    )
}

export default Router