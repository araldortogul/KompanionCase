import { FC } from "react";
import { Dimensions, ScaledSize, View } from "react-native";
import VideoPlayer, { VideoPlayerProps } from 'react-native-media-console';

const { height, width }: ScaledSize = Dimensions.get("window");


interface VideoProp {
    url: string
    resizeMode?: ("contain" | "cover" | "none" | "stretch")
    videoStyle?: VideoPlayerProps["videoStyle"]
    containerStyle?: VideoPlayerProps["containerStyle"]
    muted?: boolean
    disableVolume?: boolean
}

const Video: FC<VideoProp> = ({
    url ,
    resizeMode="contain",
    videoStyle,
    containerStyle,
    muted=false,
    disableVolume=false
}) => {

    return(
        <View style={{width: width, height: width}}>
        <VideoPlayer
            source={{uri: url}}
            repeat={true}
            disableBack
            disableSeekButtons
            resizeMode={resizeMode}
            videoStyle={videoStyle}
            containerStyle={containerStyle}
            disableVolume={disableVolume}
            muted={muted}
        />
        </View>
    )
}

export default Video;