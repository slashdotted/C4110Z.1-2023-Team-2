import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  Layout: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
    alignItems: "center",
  },

  Logo: {
    backgroundColor: "red",
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});
