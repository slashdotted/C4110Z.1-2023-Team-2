import React, { useState } from "react";
import { View, Text, TextInput, Button, SafeAreaView } from "react-native";
import Styles from "../assets/styles/CompoundReturn";

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
        <Text style={Styles.MainText}>Calcolatore del rendimento composto</Text>
        <TextInput
          style={Styles.textInput}
          placeholder="Capitale iniziale investito (€)"
          onChangeText={(value) => setPrincipal(value)}
          keyboardType="numeric"
        />
        <TextInput
          style={Styles.textInput}
          placeholder="Tasso di interesse (%)"
          onChangeText={(value) => setInterestRate(value)}
          keyboardType="numeric"
        />
        <TextInput
          style={Styles.textInput}
          placeholder="Periodo investimento (anni)"
          onChangeText={(value) => setTimePeriods(value)}
          keyboardType="numeric"
        />
        <TextInput
          style={Styles.textInput}
          placeholder="Frequenza re-investimento (di solito un anno)"
          onChangeText={(value) => setCompoundFrequency(value)}
          keyboardType="numeric"
        />
        <Button title="Calcola qui" onPress={calculateCompoundReturn} />
        {result ? (
          <Text style={Styles.showResult}>
            Rendimento composto (profit): {result} $
          </Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default CompoundReturnCalculationScreen;
