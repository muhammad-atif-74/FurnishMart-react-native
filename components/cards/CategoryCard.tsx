import { Image, Text, TouchableOpacity, View } from 'react-native'

const CategoryCard = ({ item }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} className='w-72 rounded-2xl h-96 relative overflow-hidden'>
            <Image source={{ uri: item?.image }} className='w-full h-full' resizeMode="cover" />

            <View className='absolute bottom-4 left-0 right-0 mx-auto z-10'>
                <Text className='font-bold text-2xl ms-3 text-white shadow-sm'>{item?.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryCard