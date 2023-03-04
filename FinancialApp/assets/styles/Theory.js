import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  text: {
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  boldText: {
    fontWeight: "bold",
    color: "blue",
    fontSize: 18,
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
    color: "blue",
    fontSize: 18,
    marginTop: 10,
  },

  TextParagraph: {
    fontWeight: "300",
    color: "darkblue",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  UnderParagraph: {
    fontWeight: "bold",
    color: "blue",
    fontSize: 16,
  },

  NumberParagraph: {
    fontWeight: "300",
    color: "darkblue",
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
    borderColor: "blue",
  },
});
