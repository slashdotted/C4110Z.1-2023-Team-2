import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  Layout: {
    flex: 1,
    height: "50%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
    alignItems: "center",
  },

  Text: {
    top: "50%",
    fontSize: 28,
  },
});
