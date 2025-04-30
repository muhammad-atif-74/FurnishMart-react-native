import { Tabs } from "expo-router"
import { EvilIcons, FontAwesome, Ionicons } from '@expo/vector-icons'

const TabLayout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false, tabBarActiveTintColor: "white", tabBarInactiveTintColor: "#696969",
            tabBarStyle: {
                backgroundColor: "#4a4a4a",
                height: 75,
                paddingBottom: 10
            }
        }}>
            <Tabs.Screen name="home" options={{
                title: "Home", tabBarIcon: ({ color }) => (
                    <Ionicons name="home" size={24} color={color} />
                )
            }} />
            <Tabs.Screen name="profile" options={{
                title: "Profile", tabBarIcon: ({ color }) => (
                    <FontAwesome name="user-o" size={24} color={color} />
                )
            }} />
            <Tabs.Screen name="settings" options={{
                title: "Settings", tabBarIcon: ({ color }) => (
                    <EvilIcons name="gear" size={24} color={color} />
                )
            }} />
        </Tabs>
    )
}

export default TabLayout