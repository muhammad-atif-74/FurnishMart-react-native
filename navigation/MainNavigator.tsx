import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "screens/app/Home"
// https://www.figma.com/community/file/1251591963601126182
const MainNavigator = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}

export default MainNavigator