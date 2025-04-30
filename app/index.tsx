import colors from "@/assets/colors";
import { router } from "expo-router";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"} backgroundColor={colors.background}/>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Text style={{color: "white"}}>LOGIN</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background
  }
})