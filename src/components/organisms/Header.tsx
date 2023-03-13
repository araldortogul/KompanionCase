import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FC, useState } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../assets/colors";
import { MainStackParamList } from "../../utils/types";
import SearchBar from "../molecules/SearchBar";

interface HeaderProp {
    navigation: NativeStackNavigationProp<MainStackParamList, ("Feed" | "Search"), "myStack">
    query?: string
}

const Header: FC<HeaderProp> = ({ navigation, query="" }) => {
    const [searchQuery, setQuery] = useState<string>(query);

    const onChangeQuery = (newText: string) => { setQuery(newText) }
    const handleSearch = () => { navigation.push("Search", { query: searchQuery }) }
    const handleGoBack = () => { navigation.pop() }

    return (
        <View style={{ width: "100%", height: 70, backgroundColor: "#88b04b", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <Icon
                name="chevron-back"
                size={30}
                style={{position: "absolute", left: 0, marginLeft: 10}}
                onPress={handleGoBack}
            />
            <SearchBar value={searchQuery} onChangeText={onChangeQuery} onSearch={handleSearch} />
        </View>
    );

}


export default Header;