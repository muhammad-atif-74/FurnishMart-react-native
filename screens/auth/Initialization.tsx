import { Image, SafeAreaView, Text, View } from "react-native"
import bgImage from '../../assets/initialization.jpg'
import Button from "components/utils/Button"
import { useNavigation } from "@react-navigation/native"


const Initialization = () => {
    const navigator = useNavigation()
    return (
        <SafeAreaView className="flex-1 items-center justify-between bg-white">
            <View className="w-full flex-1 justify-between pb-16">
                <Image source={bgImage} style={{ resizeMode: "cover", width: "100%", height: 400 }} />
                <View className="px-8">
                    <Text className="text-center text-3xl font-bold mb-2">FURNISHMART</Text>
                    <Text className="text-center mb-8 text-gray-600">This app lets users easily buy, sell, or explore home and office furniture with detailed listings, smart search, and real-time chat.</Text>
                    <Button title='Getting Started' styleType="fill" variant="secondary" handleSubmit={() => { navigator.navigate('Signup') }} />
                    <View className="flex-row items-center my-3">
                        <View className="flex-1 h-px bg-gray-300" />
                        <Text className="mx-2 text-gray-500">or</Text>
                        <View className="flex-1 h-px bg-gray-300" />
                    </View>
                    <Text className="text-center text-base" >Open as Guest</Text>
                </View>
                <View></View>
            </View>
        </SafeAreaView>
    )
}

export default Initialization