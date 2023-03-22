import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  Layout: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
    alignItems: "center",
  },

  Question: {
    flex: 0.2,
    top: "5%",
  },

  Answer: {
    flex: 0.2,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    height: 15,
  },

  boldText: {
    fontWeight: "bold",
    color: "#009999",
    fontSize: 28,
    textDecorationLine: "underline",
  },
});
