import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FC, useState } from "react";
import { View } from "react-native";
import colors from "../../assets/colors";
import { MainStackParamList } from "../../utils/types";
import SearchBar from "../molecules/SearchBar";

interface HeaderProp {
    navigation: NativeStackNavigationProp<MainStackParamList, "Feed", "myStack">
}

const Header: FC<HeaderProp> = ({ navigation }) => {
    const [query, setQuery] = useState<string>('');

    const onChangeQuery = (newText: string) => { setQuery(newText) }
    const handleSearch = () => { navigation.push("Search", { query: query }) }

    return (
        <View style={{ width: "100%", height: 70, backgroundColor: "#dedede", alignItems: "center", justifyContent: "center" }}>
            <SearchBar value={query} onChangeText={onChangeQuery} onSearch={handleSearch} />
        </View>
    );

}


export default Header;