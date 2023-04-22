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
          <Text style={Styles.boldText}>THEORY PART THREE</Text>
          <Image
            source={require("../../assets/theoryPart.jpg")}
            style={Styles.GroupPhoto}
          />
        </View>
        <View style={Styles.Separator}>
          <Text style={Styles.Paragraph}>Filing Taxes</Text>
          <View>
            <Text style={Styles.TextParagraph}>
              In the United States, filing taxes can feel like an overly
              complicated and stressful task. The forms and calculations
              involved are overwhelming at first, and the last thing you want is
              to face legal trouble for getting something wrong. Let’s walk
              through five basic lessons to help you get organized and relieve
              stress over filing taxes.
            </Text>

            <Text style={Styles.Paragraph}>Gathering Documents</Text>
            <Text style={Styles.TextParagraph}>
              To begin filing your taxes, it’s important to locate all required
              documents. These include your W2 or 1099, which are reports of
              your income, as well as statements of income from investments,
              interest on a mortgage, or charitable contributions you made. It’s
              also important to consider any major changes that might need to be
              indicated on a form, including if you moved, changed your name, or
              had a major change to your household income. For a full checklist
              of documents you need to find, click here. You should’ve gotten
              these documents throughout the year from your employer, bank,
              credit union, etc. – make sure to keep careful track of documents
              as they arrive, to make it easier on yourself come tax season!
            </Text>

            <Text style={Styles.Paragraph}>Choosing Deduction Type</Text>
            <Text style={Styles.TextParagraph}>
              A deduction refers to any item that you subtract from the total
              amount of income that you’ll have to pay taxes on. For instance,
              if you made $40,000 this year, but deducted $5,000, then only the
              remaining $35,000 will be taxed – which means that you save money!
              You can choose to either use the standard or itemized deduction.
              Standard deduction is a set amount of money that the government
              sets, which you can use to avoid the hassle of itemizing. Itemized
              deduction is where you take the time to find and record every item
              eligible to be deducted. This way is definitely extra work, but it
              can save you more money if the items total up to more than the
              standard deduction amount. You can deduct items like childcare,
              education costs, medical expenses, and charitable donations. Make
              sure you have proof of anything you write off, in the form of
              receipts or statements. Again, try to keep these documents
              organized along the way to avoid extra trouble at tax time.
            </Text>

            <Text style={Styles.Paragraph}>Picking a Filing Status </Text>
            <Text style={Styles.TextParagraph}>
              When filing, it’s important to identify your status, as this
              determines different steps of the filing process and the amount
              that you’ll owe. There are five statuses: single, married filing
              jointly, married filing separately, head of household, and
              qualifying widow(er). You can read full descriptions [here]. The
              tricky part is that sometimes you could qualify for different
              statuses – for instance, maybe you’re a recent widow, and are now
              single. It’s important to decide which status is most beneficial
              for you to save the most money, so make sure to compare the
              numbers for both in this situation.
            </Text>

            <Text style={Styles.Paragraph}>Filing your Taxes </Text>
            <Text style={Styles.TextParagraph}>
              Once you have everything organized, it’s time to file! You can
              file your taxes yourself online or by mail, or you can hire a tax
              pro to help you file. Filing yourself will save you money and can
              be simple if you’re using the standard deduction (see Lesson 2).
              If you want to itemize deductions, or you have a special situation
              (ex: owning your own business with employees), then it may be
              worth paying a professional.
            </Text>

            <Text style={Styles.Paragraph}>Looking Ahead to Next Year </Text>
            <Text style={Styles.TextParagraph}>
              After you file, you’ll either get a refund or a bill. Basically,
              the government will look at how much you’ve been withholding from
              your income all year, and compare it to the information you filed,
              then either pay you back (refund) or charge you extra (bill) if
              the two aren’t matching up. To prepare for next year, you can
              adjust how much you’re withholding from your income based on your
              refund (withhold less) or your bill (withhold more). Also, make
              sure to hang on to any documents you used in filing this year, in
              case you need them next year, or in case you’re asked to prove
              anything from this year!
            </Text>
          </View>
        </View>
        <Button title="QUIZ" onPress={() => navigation.navigate("Quiz")} />
      </ScrollView>
    </SafeAreaView>
  );
}
