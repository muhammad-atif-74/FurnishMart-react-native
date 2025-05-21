import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

export default function AppNavigator() {
    return (
        <NavigationContainer>
            {/* <AuthNavigator /> */}
            <MainNavigator />
        </NavigationContainer>
    );
}
