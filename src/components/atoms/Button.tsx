import { FC, useState } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "../../styles/Button.styles";


interface ButtonProp extends TouchableOpacityProps {
    title: string
}
const Button: FC<ButtonProp> = ({title,  ...props }) => {
    const [isFocused, setFocused] = useState<boolean>(false);


    return(
        <TouchableOpacity
            style={isFocused ? styles.focused.container : styles.unfocused.container}
            onPressIn={() => setFocused(true)}
            onPressOut={() => setFocused(false)}
            {...props}
        >
            <Text>
                {title}
            </Text>
        </TouchableOpacity>
    );
}


export default Button;