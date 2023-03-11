import { FC } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { CardHeaderProp } from "../../utils/types";

const CardHeader: FC<CardHeaderProp> = ({username, date}) => {

    return (
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 5, marginHorizontal: 10}}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
            <Icon
                name="person"
                size={25}
                color="black"
                style={{ marginRight: 5, borderWidth: 1, borderRadius: 20, padding: 4}}

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