import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import FeedScreen from "../scenes/FeedScreen";
import LoginScreen from "../scenes/LoginScreen";
import SearchScreen from "../scenes/SearchScreen";
import { MainStackParamList } from "../utils/types";

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigation: FC = () => {

    return (
        <Stack.Navigator id="mainStack" initialRouteName="Login"
            screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen
                name="Feed"
                component={FeedScreen}
            />
            <Stack.Screen
                name="Search"
                component={SearchScreen}
            />
        </Stack.Navigator>
    );
}

export default MainNavigation;