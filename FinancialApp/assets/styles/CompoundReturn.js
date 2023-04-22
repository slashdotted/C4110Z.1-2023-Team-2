import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  Container: {
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
  },

  MainText: {
    color: "#00CCCC",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 60,
    textDecorationLine: "underline",
  },

  textInput: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#00CCCC",
  },

  showResult: {
    fontSize: 18,
    color: "white",
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#00CCCC",
    backgroundColor: "#00CCCC",
  },
});
