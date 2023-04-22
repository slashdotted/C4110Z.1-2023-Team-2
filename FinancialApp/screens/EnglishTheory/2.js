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
          <Text style={Styles.boldText}>THEORY PART TWO</Text>
          <Image
            source={require("../../assets/theoryPart.jpg")}
            style={Styles.GroupPhoto}
          />
        </View>
        <Text style={Styles.Paragraph}>What is budgeting?</Text>
        <View>
          <Text style={Styles.TextParagraph}>
            Budgeting is the process of estimating personal expenses and income
            across a future period of time that is then evaluated routinely in
            order to improve spending habits. A budget refers to the actual plan
            a person develops that shows how much money they will earn and spend
            in a specified timeframe. Typically, a budget is set up monthly,
            however, a person may choose any span of time that works for them.
            Budgeting allows a person to realize how they are allocating their
            funds, which, in return, gives them the ability to adjust their
            spending and save money for necessities.
          </Text>

          <Text style={Styles.Paragraph}>How to set up a budget?</Text>
          <Text style={Styles.TextParagraph}>
            The first step a person must take when creating a budget is
            calculating the net income for the specified period of time they
            chose. Net income is a person’s total wages/salary minus any
            deductions. Common deductions include various taxes, retirement
            plans, and health insurance. It is crucial for a person to base a
            budget off of their net income rather than their total income in
            order to avoid overspending because said person believes they have
            more money, which in reality is actually lost to deductions. After
            knowing the amount of money earned in the chosen timeframe, a person
            needs to uncover records of past expenses throughout the same
            period. A person should categorize their expenses into fixed
            expenses and variable expenses. Fixed expenses are those that do not
            change between periods of time; Such as, housing rent or mortgage,
            car payments, and insurance payments. Fixed expenses often are for
            necessities and must be paid on time within the period. Variable
            expenses describe those that vary across different spans of time;
            Such as, gas for an automobile, utilities, groceries, and
            entertainment. A person should base their variable expenses for a
            given period on the amount they spent on the category for the same
            period the previous year. This information can be found in credit
            card and bank statements, which already itemize the charges. These
            expenses tend to classify more as “wants” and not “needs” and
            provide a great starting place to reduce spending.
          </Text>
          <Text style={Styles.TextParagraph}>
            Once a person gathers their financial information for the specified
            timeframe, they can determine realistic goals and create a plan to
            achieve them. First, a person will analyze the money they will earn
            across the period, as well as how much and in which ways they spent
            their money in the period from the previous year, and set certain
            financial goals to reach at the end of the timespan. These goals
            might include paying credit card debt to a certain extent, building
            up an emergency fund, or saving money towards a vacation. A person
            then develops a plan which places specific limits on each category
            of expense in a way that pursues the chosen goals. One popular
            budgeting technique is to utilize the 50/30/20 rule, in which fifty
            percent of your earnings should be allocated to necessities (rent),
            thirty percent should be allocated to your desires (entertainment),
            and twenty percent should be allocated to savings. This plan is
            referred to as the person’s budget.
          </Text>

          <Text style={Styles.Paragraph}>How to use a budget?</Text>
          <Text style={Styles.TextParagraph}>
            Now that the budget is formed, a person must track their spending
            throughout the stretch of time, recording the amount and destination
            of each expense. The person then needs to periodically compare their
            spending records to their budget, ensuring that their actions align
            with their plan. In doing so, it is easy for that person to realize
            if they are straying away from their financial goals and adjust
            their spending accordingly. As mentioned before, a person should
            look to reduce certain variable expenses that they notice do not
            hold precedent over other necessities. If a person cannot afford to
            reduce variable expenses further, and they are still not able to
            meet expected expenses, they should consider changing fixed
            expenses, so as to reduce them as well. This can include moving to a
            more affordable place of residence or switching insurance plans.
          </Text>

          <Text style={Styles.Paragraph}>The purpose of budgeting </Text>
          <Text style={Styles.TextParagraph}>
            Budgeting allows a person to easily recognize and modify their
            spending habits, which in turn, will lead them to develop a more
            effective way to reach their financial goals and pay off expenses.
            Using a budget will help a person to possess money for necessities
            and save money that they thought they could not. Over time, these
            savings will grow and will allow people to reach financial goals
            that will ultimately bring them more satisfaction in their lives,
            whether or not that entails adding more financial stability or more
            entertainment for them.
          </Text>
        </View>

        <Button title="QUIZ" onPress={() => navigation.navigate("Quiz")} />
      </ScrollView>
    </SafeAreaView>
  );
}
