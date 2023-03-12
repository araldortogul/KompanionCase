import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Button from "../components/atoms/Button";
import LoginFields from "../components/organisms/LoginFields";
import Logo from "../assets/images/kompanion-logo.svg"
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
                <View style={{alignSelf: "center", width: "75%", aspectRatio: 1901/362}}>
                    <Logo width="100%" height="100%" />
                </View>
                <LoginFields
                    user={user}
                    password={password}
                    handleChangeUser={handleChangeUser}
                    handleChangePassword={handleChangePassword}
                />
                <Button
                    title="Log In"
                    onPress={handleLogin}
                    testID="loginButton"
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default LoginScreen;