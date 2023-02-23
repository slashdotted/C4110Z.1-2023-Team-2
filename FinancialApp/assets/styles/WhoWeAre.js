import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  AdroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
    alignItems: "center",
    top: "10%",
  },

  GroupPhoto: {
    width: 300,
    height: 200,
    borderRadius: 6,
  },

  SinglePhoto: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
});
