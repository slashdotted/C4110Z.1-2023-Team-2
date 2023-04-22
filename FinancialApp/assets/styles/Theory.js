import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  Layout: {
    flex: 1,
    height: "50%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
    alignItems: "center",
  },

  text: {
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  boldText: {
    fontWeight: "bold",
    color: "#00CCCC",
    fontSize: 18,
    textDecorationLine: "underline",
  },

  button: {
    color: "",
  },

  separatorTextTheory: {
    marginTop: 10,
    textAlign: "center",
    color: "#00CCCC",
    fontSize: 20,
    textDecorationLine: "underline",
  },

  GroupPhoto: {
    marginTop: 2,
    width: 150,
    height: 130,
    borderRadius: 20,
    marginBottom: 2,
    marginTop: 8,
  },

  Paragraph: {
    fontWeight: "bold",
    color: "#009999",
    fontSize: 18,
    marginTop: 10,
  },

  TextParagraph: {
    fontWeight: "300",
    color: "#006650",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  UnderParagraph: {
    fontWeight: "bold",
    color: "#00CCCC",
    fontSize: 16,
  },

  NumberParagraph: {
    fontWeight: "300",
    color: "#0099CC",
    fontSize: 14,
    marginTop: 4,
    marginLeft: 20,
    marginRight: 90,
    textAlign: "left",
    textDecorationLine: "underline",
    fontStyle: "italic",
    lineHeight: 20,
  },

  Separator: {
    borderBottomWidth: 4,
    borderColor: "#00CCCC",
  },
});
