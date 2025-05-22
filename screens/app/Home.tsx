import CategoryCard from 'components/cards/CategoryCard';
import DetailItemCard from 'components/cards/DetailItemCard';
import FurnitureCard from 'components/cards/FurnitureCard';
import Button from 'components/utils/Button';
import { categories, furnitureItems } from 'data/data';
import { useState } from 'react';
import { Text, View, Pressable, SafeAreaView, Alert, Image, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

export const Home = () => {
    const [activeTab, setActiveTab] = useState<number | null>(null);

    const renderItem = ({ item }) => (
        <FurnitureCard item={item} />
    );

    const renderCategoryItem = ({ item }) => (
        <CategoryCard item={item} />
    );
    return (
        <SafeAreaView className="flex-1">
            <View className='my-2'>
                <FlatList
                    data={categories}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ padding: 4 }}
                    renderItem={({ item }) => {
                        const isActive = item.id === activeTab;

                        return (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => setActiveTab(item.id)}
                                className={`mx-1 rounded-lg px-4 py-2 ${isActive ? 'bg-primaryColor' : 'bg-white'
                                    }`}
                            >
                                <Text className={isActive ? 'text-white' : 'text-black'}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
            <ScrollView className='px-3'>
                <View className="flex-row items-center justify-between py-2">
                    <Text className='text-xl font-bold'>Popular Products</Text>
                    <Text className='text-base text-gray-400 underline'>View More</Text>
                </View>
                <View>
                    {furnitureItems.length > 0 ? (
                        <FlatList
                            data={furnitureItems}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerClassName='gap-2'
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    ) : (
                        <View style={{
                            padding: 20,
                            alignItems: 'center',
                        }}>
                            <ActivityIndicator size="large" color={"blue"} />
                        </View>
                    )}
                </View>


                <View className='w-full rounded-2xl bg-primaryColor/20 my-8 !px-8 py-8'>
                    <Text className='text-2xl font-bold mb-1 text-center'>Buy your furniture responsively</Text>
                    <Text className='text-sm font-medium text-center mb-8'>A little gesture for the planet makes big differences</Text>

                    <Button title='Get Started Now' variant='secondary' />
                </View>


                <View className="flex-row items-center justify-between py-2">
                    <Text className='text-xl font-bold'>Browse Categories</Text>
                    {/* <Text className='text-base text-gray-400 underline'>View More</Text> */}
                </View>
                <View className='mb-8'>
                    {furnitureItems.length > 0 ? (
                        <FlatList
                            data={categories}
                            renderItem={renderCategoryItem}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerClassName='gap-2'
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    ) : (
                        <View style={{
                            padding: 20,
                            alignItems: 'center',
                        }}>
                            <ActivityIndicator size="large" color={"blue"} />
                        </View>
                    )}
                </View>


                <View className="flex-row items-center justify-between py-2">
                    <Text className='text-xl font-bold'>Browse More</Text>
                </View>
                <View className="flex-row flex-wrap">
                    {furnitureItems.map((item, i) => (
                        <View className="w-1/2 p-2" key={i}>
                            <DetailItemCard item={item} />
                        </View>
                    ))}
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};