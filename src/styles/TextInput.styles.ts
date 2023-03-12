import { StyleSheet } from "react-native";
import colors from "../assets/colors";

const styles = {

    focused: StyleSheet.create({
        container: {
            borderRadius: 10,
            padding: 5,
            margin: 5,
            borderWidth: 1.5,
            borderColor: colors.primary,
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
            borderColor: colors.secondary,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        }
    })
}

export default styles;