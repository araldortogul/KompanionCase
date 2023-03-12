import { FC } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface SearchBarProps extends TextInputProps {
    value: string
    onChangeText: (text: string) => void,
    onSearch: () => void
}

const SearchBar: FC<SearchBarProps> = ({
    placeholder = "Search for posts...",
    onSearch,
    ...props
}) => {

    return (
        <View style={{ flexDirection: "row", alignItems: "center", borderWidth: 1, borderRadius: 10, backgroundColor: "#f0f0f0", width: "75%", paddingHorizontal: 5 }}>
            <Icon name="search" size={24} onPress={onSearch} />
            <TextInput
                {...props}
                placeholder={placeholder}
                style={{ paddingLeft: 5, paddingVertical: 5, flexGrow: 1 }}
                cursorColor="gray"
                numberOfLines={1}
                onSubmitEditing={onSearch}
            />
        </View>
    );
}

export default SearchBar;