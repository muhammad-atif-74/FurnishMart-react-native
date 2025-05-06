import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FurnitureItem } from '@/types';
import { commonStyles } from '@/assets/styles';
import colors from '@/assets/colors';
import { Vibration } from 'react-native';

const FurnitureCard = ({ item }: { item: FurnitureItem }) => {
    return (
        <TouchableOpacity style={styles.furnitureCard} activeOpacity={0.85}>
            <Image
                source={{ uri: item.image.toString() }}
                style={styles.furnitureImage}
            />
            <View style={styles.contentContainer}>
                <Text style={styles.furnitureName}>{item.name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                    <Text style={[styles.furniturePrice, { flex: 1, marginRight: 5 }]}>${item.price.toString()}</Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.buttonFill}
                        onPress={() => { console.log('Added to cart:', item.name); Vibration.vibrate([0, 50, 0]); }}
                    >
                        <Text style={styles.buttonText}>Add to cart</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    furnitureCard: {
        // backgroundColor: '#FFFFFF',
        backgroundColor: colors.border,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 1,
        marginVertical: 8,
        marginHorizontal: 10,
        overflow: 'hidden',
        width: 240,
        paddingBottom: 6,
    },
    furnitureImage: {
        width: '100%',
        height: 220,
        resizeMode: 'cover',
    },
    contentContainer: {
        padding: 12,
    },
    furnitureName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: "#fff"
    },
    furniturePrice: {
        fontSize: 18,
        fontWeight: '600',
        color: "#fff"

    },
    buttonFill: {
        backgroundColor: colors.primary,
        paddingHorizontal: 16,
        paddingVertical: 12,
        // marginHorizontal: "auto",
        alignSelf: "center",
        borderRadius: 55,
        textAlign: "center",
    },
    buttonText: {
        fontSize: 14
    }
});

export default FurnitureCard;