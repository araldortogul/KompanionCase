import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { Button, SafeAreaView, ScrollView, Text } from "react-native";
import { MainStackParamList } from "../utils/types";

type Prop = NativeStackScreenProps<MainStackParamList, "Login", "myStack">

const LoginScreen: FC<Prop> = ({ navigation, route }) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <Text>
                    Login Screen
                </Text>
                <Button title="Log in" onPress={() => navigation.push("Feed")}/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default LoginScreen;