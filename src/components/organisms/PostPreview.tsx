import { FC } from "react"
import { View } from "react-native"
import { PostPreviewProp } from "../../utils/types";
import CardFooter from "../molecules/CardFooter";
import CardHeader from "../molecules/CardHeader";
import CardMainContent from "../molecules/CardMainContent";

const PostPreview: FC<PostPreviewProp> = (props) => {
    return (
        <View style={{ marginVertical: 10 }}>
            <CardHeader username={props.username} date={props.date} />
            <CardMainContent content={props.content} />
            <CardFooter likes={props.likes} comments={props.comments} />
        </View>
    )
}

export default PostPreview;