import { FC } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../../styles/SearchBar.styles";

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
        <View style={styles.container}>
            <Icon name="search" size={24} onPress={onSearch} testID="search-button" />
            <TextInput
                {...props}
                placeholder={placeholder}
                style={styles.textinput}
                cursorColor="gray"
                numberOfLines={1}
                onSubmitEditing={onSearch}
            />
        </View>
    );
}

export default SearchBar;