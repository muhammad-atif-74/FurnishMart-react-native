import { FontAwesome, Ionicons } from "@expo/vector-icons"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TouchableOpacity } from "react-native"
import { Home } from "screens/app/Home"
// https://www.figma.com/community/file/1251591963601126182
const MainNavigator = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "white",
            },
            headerTintColor: '#333', // Back button 
            headerTitleStyle: {
                fontWeight: 'bold',     
            },
            headerTitleAlign: 'left', 
            title: 'FurnishMart', 
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => {
                        console.log('Bars icon pressed');
                    }}
                >
                    <FontAwesome name="bars" size={24} color="black" />
                </TouchableOpacity>
            ),
        }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default MainNavigator