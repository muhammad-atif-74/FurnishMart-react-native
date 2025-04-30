import colors from "@/assets/colors";
import { router } from "expo-router";
import { Button, Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import furnishMart from '../assets/images/furnishMart.png'

const { width } = Dimensions.get('window');
export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"} backgroundColor={colors.background} />
      <View style={styles.content}>
        <Image source={furnishMart} style={{ width: 150, height: 150, resizeMode: 'contain', marginHorizontal: "auto" }} />
        <Text className="" style={{ color: "white", fontSize: 24, textAlign: "center", marginBottom: 32, fontWeight: "bold" }}>WELCOME TO FURNISH MART</Text>
        <TouchableOpacity style={styles.buttonFill} >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/home')}>
          <TouchableOpacity style={styles.buttonOutline} >
            <Text style={[styles.buttonText, { color: colors.primary }]}>Guest</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <Text style={[styles.orText, { marginTop: 24 }]}>OR</Text>
        <Text style={{ textAlign: "center", color: colors.primary, marginTop: 24 }}>Create your account</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background
  },
  content: {
    width: width * 0.8, // 80% of screen width in pixels
    // backgroundColor: 'grey',
  },
  buttonFill: {
    backgroundColor: colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 12,
    width: "80%",
    marginHorizontal: "auto",
    borderRadius: 18,
    textAlign: "center",
    marginBottom: 14
  },
  buttonOutline: {
    backgroundColor: "transparent",
    borderColor: colors.primary,
    borderWidth: 2,
    paddingHorizontal: 30,
    paddingVertical: 12,
    width: "80%",
    marginHorizontal: "auto",
    borderRadius: 18,
    textAlign: "center",
    marginBottom: 14
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16
  },
  orText: {
    textAlign: "center",
    color: "white"
  }
})