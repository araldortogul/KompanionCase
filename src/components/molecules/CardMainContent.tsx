import { FC } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { CardMainContentProp } from "../../utils/types";
import Slider from "./Slider";

const CardMainContent: FC<CardMainContentProp> = ({ content }) => {

    return (
        <View style={styles.mainContentContainer}>
            {
                Array.isArray(content) &&
                <Slider content={content} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    mainContentContainer: {
        marginVertical: 5,
    },
})

export default CardMainContent;