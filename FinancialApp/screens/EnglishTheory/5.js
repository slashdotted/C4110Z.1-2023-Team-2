import {
  Text,
  Image,
  View,
  SafeAreaView,
  Button,
  ScrollView,
  Alert,
} from "react-native";

import Styles from "../../assets/styles/Theory";

export default function Theory({ navigation }) {
  return (
    <SafeAreaView style={Styles.Layout}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={Styles.boldText}>THEORY PART FIVE</Text>
          <Image
            source={require("../../assets/theoryPart.jpg")}
            style={Styles.GroupPhoto}
          />
        </View>
        <View style={Styles.Separator}>
          <Text style={Styles.Paragraph}>Compound Return</Text>
          <View>
            <Text style={Styles.TextParagraph}>
              Compound return refers to the return earned on an investment over
              a period of time, taking into account the reinvestment of any
              interest, dividends, or other earnings. In other words, the
              compound return is the growth rate of an investment that includes
              both the principal and any interest or dividends earned on that
              principal. Compound return is important to consider when
              evaluating the performance of an investment, as it reflects the
              overall growth of the investment over time, rather than just its
              initial value. It can also be used to compare the performance of
              different investments with varying rates of return and compounding
              frequencies.
            </Text>
            <Text style={Styles.UnderParagraph}>Example:</Text>
            <Text style={Styles.TextParagraph}>
              Let's say you invest $10,000 in a stock that has an annual return
              of 8% for 5 years. The compound return can be calculated as
              follows:
            </Text>
            <Text style={Styles.NumberParagraph}>
              Year 1: $10,000 x (1 + 0.08) = $10,800
            </Text>
            <Text style={Styles.NumberParagraph}>
              Year 2: $10,800 x (1 + 0.08) = $11,664
            </Text>
            <Text style={Styles.NumberParagraph}>
              Year 3: $11,664 x (1 + 0.08) = $12,597.12
            </Text>
            <Text style={Styles.NumberParagraph}>
              Year 4: $12,597.12 x (1 + 0.08) = $13,601.15
            </Text>
            <Text style={Styles.NumberParagraph}>
              Year 5: $13,601.15 x (1 + 0.08) = $14,678.60
            </Text>
            <Text style={Styles.TextParagraph}>
              The total value of the investment after 5 years is $14,678.60. To
              calculate the compound return, we can use the following formula:
            </Text>
            <Text style={Styles.NumberParagraph}>
              Compound Return = (Final Value / Initial Value)^(1 / Number of
              Years) - 1
            </Text>
            <Text style={Styles.TextParagraph}>
              In this case, the initial value is $10,000, the final value is
              $14,678.60, and the number of years is 5. Plugging these values
              into the formula, we get:
            </Text>
            <Text style={Styles.NumberParagraph}>
              Compound Return = ($14,678.60 / $10,000)^(1 / 5) - 1 = 0.126 =
              12.6%
            </Text>
            <Text style={Styles.TextParagraph}>
              Therefore, the compound return for this investment over 5 years is
              12.6%. This means that the investment grew by an average of 12.6%
              per year over the 5-year period, without considering any dividends
              or other earnings.
            </Text>
            <Text style={Styles.TextParagraph}>
              If you press the button below you will be able to calculate
              compound interest:
            </Text>
          </View>

          <Button
            title="compound interest calculator"
            x
            onPress={() =>
              Alert.alert("Send to compound interest calculator page")
            }
          />
        </View>

        <Button title="QUIZ" onPress={() => navigation.navigate("Quiz")} />
      </ScrollView>
    </SafeAreaView>
  );
}
