import React, { FC, useRef, useState } from "react";
import { View, TextInput as Input, TextInputProps, TouchableWithoutFeedback } from "react-native";
import styles from "../../styles/TextInput.styles";
import Icon from 'react-native-vector-icons/Ionicons';


interface Prop extends TextInputProps {
    leftIcon?: string
    rightIcon?: string
    onLeftIconPress?: any
    onRightIconPress?: any
}

const TextInput: FC<Prop> = ({ leftIcon, rightIcon, onLeftIconPress, onRightIconPress, ...textInputProps }) => {

    const inputRef = useRef<Input>(null);
    const [isFocused, setFocused] = useState<boolean>(false);

    return (
        <TouchableWithoutFeedback onPress={() => { inputRef.current?.focus() }}>
            <View style={isFocused ? styles.focused.container : styles.unfocused.container}>
                <View
                    style={{ flexDirection: "row", alignItems: "center", flexGrow: 1 }}
                >
                    {leftIcon &&
                        <Icon
                            name={leftIcon}
                            size={25}
                            color={isFocused ? "black" : "gray"}
                            style={{ marginRight: 5 }}
                        />}
                    <Input {...textInputProps}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        style={{ borderWidth: 0 }}
                        ref={inputRef}
                    />
                </View>
                {rightIcon &&
                    <Icon
                        name={rightIcon}
                        size={25}
                        color={isFocused ? "black" : "gray"}
                        onPress={onRightIconPress}
                    />}
            </View>
        </TouchableWithoutFeedback>
    );
}

export default TextInput;