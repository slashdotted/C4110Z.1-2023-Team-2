import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  Layout: {
    flex: 0.1,
    height: "50%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
    alignItems: "center",
  },

  Tittle: {
    fontWeight: "bold",
    color: "blue",
    fontSize: 20,
    textDecorationLine: "underline",
    textAlign: "center",
    backgroundColor: "00CCCC",
    marginBottom: 20,
  },

  Container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginBottom: 10,
  },

  GroupPhoto: {
    width: 100,
    height: 100,
    marginBottom: 2,
  },
});
