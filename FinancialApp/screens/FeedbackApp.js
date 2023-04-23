import React, { useState } from "react";
import { View, Text, TextInput, Button, SafeAreaView } from "react-native";
import Styles from "../assets/styles/FeedbackApp";

const CompoundReturnCalculationScreen = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [timePeriods, setTimePeriods] = useState("");
  const [compoundFrequency, setCompoundFrequency] = useState("");
  const [result, setResult] = useState("");

  const calculateCompoundReturn = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100;
    const n = parseFloat(compoundFrequency);
    const t = parseFloat(timePeriods);
    const compoundReturn = p * Math.pow(1 + r / n, n * t) - p;
    setResult(compoundReturn.toFixed(2));
  };

  return (
    <SafeAreaView>
      <View style={Styles.Container}>
        <View style={{ alignItems: "center" }}>
          <Text style={Styles.MainText}>Leave your feedback here</Text>
        </View>
        <TextInput
          style={Styles.textInput}
          placeholder="What is your name?"
          keyboardType="twitter"
          clearButtonMode="always"
        />
        <TextInput
          style={Styles.textInput}
          placeholder="What is your last name?"
          keyboardType="twitter"
        />
        <TextInput
          style={Styles.textInput}
          placeholder="What is your email?"
          keyboardType="email-address"
          clearButtonMode="always"
        />

        <TextInput
          style={Styles.textInput}
          placeholder="What is your phone number?"
          keyboardType="phone-pad"
          clearButtonMode="always"
        />

        <TextInput
          style={Styles.textInput}
          placeholder="Improvements and/or Feedback"
          keyboardType="default"
          clearButtonMode="always"
          maxLength={40}
          multiline={true}
        />
        <Button title="Send Here" onPress={calculateCompoundReturn} />
        {result ? (
          <Text style={Styles.showResult}>
            Thank you very much for the feedback!
          </Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default CompoundReturnCalculationScreen;
