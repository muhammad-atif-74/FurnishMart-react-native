import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 48 = margins and gap

const DetailItemCard = ({ item, onPress }) => {
    const formatPrice = (price) => {
        return `PKR ${price.toFixed(2)}`;
    };

    return (
        <TouchableOpacity
            className="bg-white rounded-2xl mb-4 shadow-sm"
            style={{ width: cardWidth }}
            onPress={() => onPress && onPress(item)}
            activeOpacity={0.8}
        >
            {/* Image Container */}
            <View className="relative w-full" style={{ height: cardWidth * 0.75 }}>
                <Image
                    source={{ uri: item.image }}
                    className="w-full h-full rounded-t-2xl"
                    style={{ resizeMode: 'cover' }}
                />

                {/* Stock Badge */}
                <View className={`absolute top-2 right-2 px-2 py-1 rounded-xl ${item.inStock ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                    <Text className="text-white text-xs font-semibold">
                        {item.inStock ? 'In Stock' : 'Out of Stock'}
                    </Text>
                </View>

                {/* Brand Badge */}
                <View className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded-lg">
                    <Text className="text-white text-xs font-medium">
                        {item.brand}
                    </Text>
                </View>
            </View>

            {/* Content Container */}
            <View className="p-3">
                {/* Category */}
                <Text className="text-xs font-bold text-gray-500 tracking-wider mb-1">
                    {item.category.toUpperCase()}
                </Text>

                {/* Product Name */}
                <Text className="text-sm font-bold text-gray-900 mb-2 leading-4" numberOfLines={2}>
                    {item.name}
                </Text>

                {/* Material & Color */}
                <View className="flex-row justify-between mb-2">
                    <View className="flex-1 mr-2">
                        <Text className="text-xs font-semibold text-gray-400 mb-0.5">
                            Material
                        </Text>
                        <Text className="text-xs font-medium text-gray-700" numberOfLines={1}>
                            {item.material}
                        </Text>
                    </View>
                    <View className="items-end">
                        <Text className="text-xs font-semibold text-gray-400 mb-0.5">
                            Color
                        </Text>
                        <Text className="text-xs font-medium text-gray-700">
                            {item.color}
                        </Text>
                    </View>
                </View>

                {/* Dimensions */}
                <View className="mb-3">
                    <Text className="text-xs font-semibold text-gray-400 mb-0.5">
                        Size
                    </Text>
                    <Text className="text-xs font-medium text-gray-700">
                        {item.dimensions.width} × {item.dimensions.height} × {item.dimensions.depth}
                    </Text>
                </View>

                {/* Price */}
                <View className="flex-row justify-between items-center">
                    <Text className="text-base font-extrabold text-gray-900">
                        {formatPrice(item.price)}
                    </Text>
                    {/* <TouchableOpacity className="bg-primaryColor px-3 py-1.5 rounded-lg">
                        <Text className="text-white text-xs font-semibold">
                            Add
                        </Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default DetailItemCard;