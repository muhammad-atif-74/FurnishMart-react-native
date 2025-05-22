import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const FurnitureCard = ({ item, onPress, onFavoritePress }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    const formatPrice = (price) => {
        return `PKR ${price.toLocaleString()}`;
    };

    const calculateDiscount = (originalPrice, currentPrice) => {
        const discount = ((originalPrice - currentPrice) / originalPrice) * 100;
        return Math.round(discount);
    };

    const handleFavoritePress = () => {
        setIsFavorited(!isFavorited);
        onFavoritePress && onFavoritePress(item, !isFavorited);
    };

    // Assuming original price is 20% higher for demonstration
    const originalPrice = Math.round(item.price * 1.2);
    const discountPercentage = calculateDiscount(originalPrice, item.price);

    return (
        <TouchableOpacity 
            activeOpacity={0.8} 
            className='w-64 bg-white rounded-2xl shadow-sm overflow-hidden'
            onPress={() => onPress && onPress(item)}
        >
            {/* Image Container */}
            <View className='relative w-full h-44 overflow-hidden'>
                <Image 
                    source={{ uri: item.image }} 
                    className='w-full h-full' 
                    style={{ resizeMode: 'cover' }}
                />
                
                {/* Favorite Button */}
                <TouchableOpacity 
                    className='absolute top-3 right-3 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full items-center justify-center shadow-sm'
                    onPress={handleFavoritePress}
                    activeOpacity={0.7}
                >
                    <Ionicons 
                        name={isFavorited ? 'heart' : 'heart-outline'} 
                        size={18} 
                        color={isFavorited ? '#EF4444' : '#6B7280'} 
                    />
                </TouchableOpacity>

                {/* Stock Badge */}
                {item.inStock !== undefined && (
                    <View className={`absolute top-3 left-3 px-2 py-1 rounded-lg ${
                        item.inStock ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                        <Text className='text-white text-xs font-semibold'>
                            {item.inStock ? 'In Stock' : 'Out of Stock'}
                        </Text>
                    </View>
                )}

                {/* Discount Badge */}
                {discountPercentage > 0 && (
                    <View className='absolute bottom-3 left-3 bg-primaryColor px-2 py-1 rounded-lg'>
                        <Text className='text-white text-xs font-bold'>
                            -{discountPercentage}%
                        </Text>
                    </View>
                )}
            </View>

            {/* Content Container */}
            <View className='p-4'>
                {/* Brand */}
                <Text className='text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide'>
                    {item.brand}
                </Text>

                {/* Product Name */}
                <Text className='text-base font-bold text-gray-900 mb-2 leading-5' numberOfLines={2}>
                    {item.name}
                </Text>

                {/* Category & Material */}
                {(item.category || item.material) && (
                    <View className='flex-row items-center mb-3'>
                        {item.category && (
                            <View className='bg-gray-100 px-2 py-1 rounded-md mr-2'>
                                <Text className='text-xs font-medium text-gray-600'>
                                    {item.category}
                                </Text>
                            </View>
                        )}
                        {item.material && (
                            <View className='bg-gray-100 px-2 py-1 rounded-md'>
                                <Text className='text-xs font-medium text-gray-600'>
                                    {item.material.split(' ')[0]} {/* Show first material only */}
                                </Text>
                            </View>
                        )}
                    </View>
                )}

                {/* Price Section */}
                <View className='flex-row justify-between items-center'>
                    <View className='flex-1'>
                        <View className='flex-row items-center'>
                            <Text className='text-lg font-bold text-gray-900 mr-2'>
                                {formatPrice(item.price)}
                            </Text>
                            {discountPercentage > 0 && (
                                <Text className='text-sm text-gray-400 font-medium line-through'>
                                    {formatPrice(originalPrice)}
                                </Text>
                            )}
                        </View>
                        {item.color && (
                            <Text className='text-xs text-gray-500 mt-0.5'>
                                Available in {item.color}
                            </Text>
                        )}
                    </View>

                    {/* Add to Cart Button */}
                    <TouchableOpacity 
                        className='bg-primaryColor w-9 h-9 rounded-full items-center justify-center shadow-sm'
                        activeOpacity={0.8}
                    >
                        <Ionicons name='add' size={20} color='white' />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default FurnitureCard;