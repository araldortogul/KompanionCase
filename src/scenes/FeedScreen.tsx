import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { Button, FlatList, SafeAreaView, ScrollView } from "react-native";
import PostPreview from "../components/organisms/PostPreview";
import { MainStackParamList } from "../utils/types";

type Prop = NativeStackScreenProps<MainStackParamList, "Feed", "myStack">

interface PostData {
    username: string
    date: string
    likes: number
    comments: number
    content: string[] | string
}
const data: PostData[] = [
    {
        username: "user1",
        date: "2023-03-11T20:57:29",
        likes: 14,
        comments: 1,
        content: [
            "https://lp-cms-production.imgix.net/features/2017/09/RS-shutterstock_314150237-2cae9a76a618.jpg",
            "https://www.zuerich.com/sites/default/files/styles/1920_1244_focal_scale_crop/public/frontpage/web_zurich_viewport_scheffold-icon1_1600x900_03.jpg?h=1597416073"
        ]
    },
    {
        username: "user1",
        date: "2023-03-11T20:57:29",
        likes: 26,
        comments: 12,
        content: [
            "https://static01.nyt.com/images/2018/10/19/obituaries/19GULER2/merlin_145480005_cf1eac94-240d-4ac5-bb43-81d93131c51f-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
            "https://live.staticflickr.com/2579/3995178982_ed812c9330_b.jpg"
        ]
    },
    {
        username: "user1",
        date: "2023-03-11T20:57:29",
        likes: 11,
        comments: 5,
        content: [
            "https://yolgunlukleri.net/wp-content/uploads/2020/06/Kapadokya-_-Nevşehir.jpg",
            "https://i4.hurimg.com/i/hurriyet/75/1110x740/59e9ad147152d83b24393916.jpg"
        ]
    },
    {
        username: "user1",
        date: "2023-03-11T20:57:29",
        likes: 5,
        comments: 7,
        content: "http://techslides.com/demos/sample-videos/small.mp4"
    },
    {
        username: "user1",
        date: "2023-03-11T20:57:29",
        likes: 1,
        comments: 2,
        content: [
            "https://lp-cms-production.imgix.net/features/2017/09/RS-shutterstock_314150237-2cae9a76a618.jpg",
            "https://www.zuerich.com/sites/default/files/styles/1920_1244_focal_scale_crop/public/frontpage/web_zurich_viewport_scheffold-icon1_1600x900_03.jpg?h=1597416073"
        ]
    }
]
const FeedScreen: FC<Prop> = ({ navigation, route }) => {

    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <PostPreview {...item} />
                )}
            />
        </SafeAreaView>
    );
}

export default FeedScreen;