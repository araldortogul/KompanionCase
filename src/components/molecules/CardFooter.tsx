import { FC } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { CardFooterProp } from "../../utils/types";

const CardFooter: FC<CardFooterProp> = ({likes, comments}) => {

    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 5, marginHorizontal: 10 }}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Icon name="heart-outline" size={20} color="black" style={{marginRight: 10}}/>
                <Text>{likes}</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text>{comments}</Text>
                <Icon name="chatbubble-outline" size={20} color="black" style={{marginLeft: 10}}/>
            </View>
        </View>

    );
}

export default CardFooter;