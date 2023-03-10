import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Button from "../components/atoms/Button";
import LoginFields from "../components/organisms/LoginFields";
import styles from "../styles/LoginScreen.styles";
import { MainStackParamList } from "../utils/types";

type Prop = NativeStackScreenProps<MainStackParamList, "Login", "myStack">

const LoginScreen: FC<Prop> = ({ navigation, route }) => {

    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleChangeUser = (text: string) => { setUser(text) };
    const handleChangePassword = (text: string) => { setPassword(text) };

    const handleLogin = () => { navigation.push("Feed") };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <LoginFields
                    user={user}
                    password={password}
                    handleChangeUser={handleChangeUser}
                    handleChangePassword={handleChangePassword}
                />
                <Button
                    title="Log In"
                    onPress={handleLogin}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default LoginScreen;