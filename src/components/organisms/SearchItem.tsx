import { FC } from "react";
import { View, Image, ScaledSize, Dimensions } from "react-native";
import { PostData } from "../../utils/types";
import Video from "../atoms/Video";

const { height, width }: ScaledSize = Dimensions.get("window");

const SearchItem: FC<PostData> = (postData) => {

    return (
        <View style={{ flex: 1 / 3 }}>
            {
                Array.isArray(postData.content) ?
                    <Image
                        source={{ uri: postData.content[0] }}
                        resizeMode="cover"
                        style={{ width: "100%", aspectRatio: 1 }}
                    /> :
                    <Video
                        url={postData.content}
                        resizeMode="cover"
                        containerStyle={{ flex: 1 / 3, aspectRatio: 1 }}
                        disableVolume={true}
                        muted={true}
                    />
            }
        </View>
    )
}

export default SearchItem;