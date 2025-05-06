import colors from '@/assets/colors'
import { furnitureItems } from '@/assets/data/furnitureData'
import { commonStyles } from '@/assets/styles'
import FurnitureCard from '@/components/cards/FurnitureCard'
import Topbar from '@/components/common/Topbar'
import { FurnitureItem } from '@/types'
import React from 'react'
import { ActivityIndicator, Button, FlatList, Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const tabs = [
  {
    id: 1,
    title: "Chairs"
  },
  {
    id: 2,
    title: "Sofas"
  },
  {
    id: 3,
    title: "Beds"
  },
  {
    id: 4,
    title: "Tables"
  },
  {
    id: 5,
    title: "Storage"
  },
  {
    id: 6,
    title: "Outdoor"
  },
  {
    id: 7,
    title: "Office"
  },
  {
    id: 8,
    title: "Kids"
  }
];

const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const renderItem = ({ item }: { item: FurnitureItem }) => (
    <FurnitureCard item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Topbar />
      <View>
        <FlatList
          data={tabs}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.8} style={{ marginHorizontal: 4, borderRadius: 24, paddingHorizontal: 16, paddingVertical: 9, backgroundColor: "#4d4f4e" }}>
              <Text style={{color: "white"}}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          contentContainerStyle={styles.listContainer}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text style={styles.sectionTitle}>Featured Furniture</Text>
        {furnitureItems.length > 0 ? (
          <FlatList
            data={furnitureItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={styles.listContainer}
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}

        <Text style={styles.sectionTitle}>Featured Furniture</Text>
        {furnitureItems.length > 0 ? (
          <FlatList
            data={furnitureItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={styles.listContainer}
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}

        <Text style={styles.sectionTitle}>Featured Furniture</Text>
        {furnitureItems.length > 0 ? (
          <FlatList
            data={furnitureItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={styles.listContainer}
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}
      </ScrollView>

      
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: colors.background,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8,
    color: "white"
  },
  listContainer: {
    padding: 16,
  },
  loaderContainer: {
    padding: 20,
    alignItems: 'center',
  },
  furnitureCard: {
    width: 180,
    marginRight: 16,
    borderRadius: 8,
    backgroundColor: '#FFF',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  furnitureImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  furnitureName: {
    fontSize: 14,
    fontWeight: '600',
    marginHorizontal: 12,
    marginTop: 8,
  },
  furniturePrice: {
    fontSize: 14,
    color: colors.primary,
    marginHorizontal: 12,
    marginVertical: 8,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500
  },
})