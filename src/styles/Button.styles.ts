import { StyleSheet, ViewStyle } from "react-native";
import colors from "../assets/colors";

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: colors.primary,
    }
})

export default styles;