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
    color: "#00CCCC",
    fontSize: 28,
    textDecorationLine: "underline",
  },

  container: {
    marginTop: 70,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#00CCCC",
    textDecorationLine: "underline",
  },
  question: {
    fontSize: 17,
    marginBottom: 20,
  },
  answer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#00CCCC",
  },
});
