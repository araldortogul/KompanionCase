import { StyleSheet, ViewStyle } from "react-native";

const styles = {
    unfocused: StyleSheet.create({
        container: {
            alignSelf: "center",
            paddingVertical: 5,
            paddingHorizontal: 30,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "blue",
        }
    }),
    focused: StyleSheet.create({
        container: {
            alignSelf: "center",
            paddingVertical: 5,
            paddingHorizontal: 30,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "blue",
        }
    }),
}

export default styles;