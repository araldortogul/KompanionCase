import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from "./navigations/MainNavigation";
import { mockAPI } from './utils/api/mockAPI';

mockAPI();

function App(): JSX.Element {

    return (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    );
}

export default App;