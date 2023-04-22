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
    marginTop: 10,
    top: "50%",
    fontSize: 24,
    color: "#00CCCC",
    fontStyle: "italic",
  },

  button: {
    backgroundColor: "#00CCCC",
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
