import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView } from "react-native";
import Header from "../components/organisms/Header";
import PostPreview from "../components/organisms/PostPreview";
import { MainStackParamList, PostData } from "../utils/types";

type Prop = NativeStackScreenProps<MainStackParamList, "Feed", "myStack">

const FeedScreen: FC<Prop> = ({ navigation, route }) => {

    const [isLoading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<PostData[]>([]);

    useEffect(() => {
        fetch("/api/posts")
            .then((response) => response.json())
            .then((json) => { setData(json) })
            .catch((error) => console.log(error))
            .finally(() => { setLoading(false) })
    }, []);

    return (
        <SafeAreaView>
            {isLoading ?
                <ActivityIndicator style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }} />
            :
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <PostPreview {...item} />
                    )}
                    windowSize={1}
                    ListHeaderComponent={<Header navigation={navigation} />}
                />
            }
        </SafeAreaView>
    );
}

export default FeedScreen;