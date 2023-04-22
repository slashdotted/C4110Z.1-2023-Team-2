import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  Container: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#00CCCC",
  },

  GroupPhoto: {
    marginTop: 28,
    width: 185,
    height: 140,
    borderRadius: 6,
    marginBottom: 2,
  },

  visualStudio: {
    marginTop: 28,
    width: 220,
    height: 120,
    borderRadius: 6,
    marginBottom: 2,
  },

  boldText: {
    fontWeight: "bold",
    color: "#00CCCC",
    fontSize: 22,
    textDecorationLine: "underline",
  },
});
