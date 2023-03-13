import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
    },
    pagination: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
    },
    dot: {
        color: "#888",
        margin: 3,
    },
    activeDot: {
        color: "black",
        margin: 3,
    }
})

export default styles;