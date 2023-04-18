import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  Layout: {
    flex: 0.1,
    height: "50%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
    alignItems: "center",
  },

  Text: {
    marginTop: 6,
    top: "50%",
    fontSize: 24,
    backgroundColor: "#00CCCC",
    color: "white",
    fontStyle: "italic",
  },

  Tittle: {
    fontWeight: "bold",
    color: "blue",
    fontSize: 30,
    textDecorationLine: "underline",
    textAlign: "center",
    backgroundColor: "red",
  },
});
