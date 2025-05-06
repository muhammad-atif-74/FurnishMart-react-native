import { StyleSheet } from "react-native";
import colors from "./colors";

export const commonStyles = StyleSheet.create({
    buttonFill: {
        backgroundColor: colors.primary,
        paddingHorizontal: 30,
        paddingVertical: 12,
        width: "80%",
        // marginHorizontal: "auto",
        alignSelf: "center",
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
        // marginHorizontal: "auto",
        alignSelf: "center",
        borderRadius: 18,
        textAlign: "center",
        marginBottom: 14
    },
    buttonText: {
        textAlign: "center",
        fontSize: 16
    },
})