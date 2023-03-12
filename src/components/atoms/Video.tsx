import { FC, useState } from "react";
import { Dimensions, ScaledSize, View } from "react-native";
import DefaultVideo, { VideoProperties } from "react-native-video";
import VideoPlayer from 'react-native-media-console';

const { height, width }: ScaledSize = Dimensions.get("window");

interface VideoProp {
    url: string
}

const Video: FC<VideoProp> = ({ url }) => {

    const [isFullScreen, setFullScreen] = useState<boolean>(false);

    const enterFullScreen = () => {
        console.log("entering full screen")
        setFullScreen(true)};
    const exitFullScreen = () => {
        console.log("exiting full screen")
        setFullScreen(false)};

    return(
        <View style={{width: width, height: width}}>
        <VideoPlayer
            source={require("../../scenes/earth.mp4")}
            repeat={true}
            disableBack
            disableSeekButtons
            onEnterFullscreen={enterFullScreen}
            onExitFullscreen={exitFullScreen}
        />
        </View>
    )
}

export default Video;