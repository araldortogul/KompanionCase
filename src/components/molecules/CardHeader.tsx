import { FC } from "react";
import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { CardHeaderProp } from "../../utils/types";

const CardHeader: FC<CardHeaderProp> = ({username, date}) => {

    return (
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 5, marginHorizontal: 10}}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
            <Image
                source={require("../../assets/images/pp.png")}
                resizeMode="contain"
                style={{height: 35, width: undefined, aspectRatio: 1, marginRight: 10 }}
            />
            <Text>
                {username}
            </Text>
            </View>
            <Text>
                {new Date(date).toLocaleString()}
            </Text>
        </View>
    );
}

export default CardHeader;