import { FC, useState } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "../../styles/Button.styles";


interface ButtonProp extends TouchableOpacityProps {
    title: string
}
const Button: FC<ButtonProp> = ({title,  ...props }) => {

    return(
        <TouchableOpacity
            style={styles.container}
            {...props}
        >
            <Text>
                {title}
            </Text>
        </TouchableOpacity>
    );
}


export default Button;