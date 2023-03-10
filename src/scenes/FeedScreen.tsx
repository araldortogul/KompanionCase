import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native";
import { MainStackParamList } from "../utils/types";

type Prop = NativeStackScreenProps<MainStackParamList, "Feed", "myStack">

const FeedScreen: FC<Prop> = ({ navigation, route }) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <Button title="search" onPress={() => navigation.push("Search")} />
                <Text>
                    Home Feed
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default FeedScreen;