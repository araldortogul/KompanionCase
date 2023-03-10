import { FC, useState } from "react";
import { View } from "react-native";
import styles from "../../styles/TextInput.styles";
import TextInput from "../molecules/TextInput";

interface Prop {
    user: string
    password: string
    handleChangeUser: (text: string) => void
    handleChangePassword: (text: string) => void
}

const LoginFields: FC<Prop> = ({ user, password, handleChangeUser, handleChangePassword }) => {

    const [isHidden, setHidden] = useState<boolean>(true);
    const toggleVisible = () => { setHidden((oldValue: boolean) => !oldValue) }

    return (
        <View style={{ marginVertical: 20 }}>
            <TextInput
                placeholder="Phone number, username or email"
                value={user}
                onChangeText={handleChangeUser}
                style={styles.focused.container}
                leftIcon="person"
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={handleChangePassword}
                secureTextEntry={isHidden}
                style={styles.unfocused.container}
                leftIcon="lock-closed"
                rightIcon={isHidden ? "eye-off" : "eye"}
                onRightIconPress={toggleVisible}
            />
        </View>
    )
}

export default LoginFields;