import { StyleSheet } from "react-native";

const styles = {

    focused: StyleSheet.create({
        container: {
            borderRadius: 10,
            padding: 5,
            margin: 5,
            borderWidth: 1.5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        }
    }),
    unfocused: StyleSheet.create({
        container: {
            borderRadius: 10,
            padding: 5,
            margin: 5,
            borderWidth: 1.5,
            borderColor: "gray",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        }
    })
}

export default styles;