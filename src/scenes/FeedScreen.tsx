import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { Button, SafeAreaView, ScrollView } from "react-native";
import PostPreview from "../components/organisms/PostPreview";
import { MainStackParamList } from "../utils/types";

type Prop = NativeStackScreenProps<MainStackParamList, "Feed", "myStack">

const content = [
    "https://i.pinimg.com/originals/46/98/71/469871bb72c9edf84af3f40669a1c610.jpg",
    "https://i.pinimg.com/originals/46/98/71/469871bb72c9edf84af3f40669a1c610.jpg",
    "https://i.pinimg.com/originals/46/98/71/469871bb72c9edf84af3f40669a1c610.jpg"
]
const FeedScreen: FC<Prop> = ({ navigation, route }) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <Button title="search" onPress={() => navigation.push("Search")} />
                <PostPreview likes={0} comments={0} content={content} username={"user"} date={"1995-12-17T03:24:00"} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default FeedScreen;