import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native";
import { MainStackParamList } from "../utils/types";

type Prop = NativeStackScreenProps<MainStackParamList, "Search", "myStack">

const SearchScreen: FC<Prop> = ({ navigation, route }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Button title="Back" onPress={() => { navigation.pop() }} />
                <Text>
                    Search Screen
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SearchScreen;