import colors from '@/assets/colors'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
const Topbar = () => {
    return (
        <View style={styles.topbar}>
            <Text style={styles.topbarTitle}>
                Welcome to <Text style={{ color: colors.primary }}>FurnishMart</Text>
            </Text>
            <TouchableOpacity activeOpacity={0.8}>
                <FontAwesome name="user-circle-o" size={32} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default Topbar


const styles = StyleSheet.create({
    topbar: {
        width: "100%",
        backgroundColor: colors.border,
        paddingHorizontal: 24,
        paddingVertical: 32,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    topbarTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    },
})