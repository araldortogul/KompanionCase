import { FC, useState } from "react";
import { Dimensions, Image, NativeScrollEvent, NativeSyntheticEvent, ScaledSize, ScrollView, Text, View } from "react-native";
import styles from "../../styles/Slider.styles";
import { SliderProp } from "../../utils/types";

const { height, width }: ScaledSize = Dimensions.get("window");

const Slider: FC<SliderProp> = ({ content }) => {

    const [active, setActive] = useState<number>(1);

    const handlePageChange = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offset = event.nativeEvent.contentOffset;
        if (offset) {
            const page = Math.ceil(offset.x / event.nativeEvent.layoutMeasurement.width);
            if (page != active) {
                setActive(page);
            }
        }
    }

    return (
        <View>
            <ScrollView
                horizontal
                pagingEnabled
                onMomentumScrollEnd={handlePageChange}
                style={{ width: width, height: width }}
                showsHorizontalScrollIndicator={false}
            >
                {content.map((url, index) =>
                    <Image
                        key={index}
                        source={{ uri: url }}
                        resizeMode="contain"
                        style={{ width: width, ...styles.image }}
                    />
                )}
            </ScrollView>
            <View style={styles.pagination}>
                {content.map((value, index) =>
                    <Text
                        key={index}
                        style={index == active ? styles.activeDot : styles.dot}
                    >
                        ●
                    </Text>
                )}

            </View>
        </View>
    );
}

export default Slider;