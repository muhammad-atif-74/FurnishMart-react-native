import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Initialization from "screens/auth/Initialization";
import { Signin } from "screens/auth/Signin";
import { Signup } from "screens/auth/Signup";

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animationDuration: 100 }}>
            <Stack.Screen name="Initialization" component={Initialization} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}

export default AuthNavigator