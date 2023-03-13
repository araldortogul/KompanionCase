import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView } from "react-native";
import Header from "../components/organisms/Header";
import SearchItem from "../components/organisms/SearchItem";
import styles from "../styles/ActivityIndicator.styles";
import { MainStackParamList, PostData } from "../utils/types";

type Prop = NativeStackScreenProps<MainStackParamList, "Search", "myStack">

const SearchScreen: FC<Prop> = ({ navigation, route }) => {

    const [isLoading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<PostData[]>([]);

    useEffect(() => {
        fetch("/api/search")
            .then((response) => response.json())
            .then((json) => { setData(json) })
            .catch((error) => console.log(error))
            .finally(() => { setLoading(false) })
    }, []);

    return (
        <SafeAreaView>
            {isLoading ?
                <ActivityIndicator style={styles.container} />
            :
                <FlatList
                    data={data}
                    renderItem={({ item }) => <SearchItem {...item} />}
                    numColumns={3}
                    ListHeaderComponent={<Header navigation={navigation} query={route.params.query} />}
                />
            }
        </SafeAreaView>
    );
}

export default SearchScreen;