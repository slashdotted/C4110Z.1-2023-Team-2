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
          <Text style={Styles.boldText}>THEORY PART FOUR</Text>
          <Image
            source={require("../../assets/theoryPart.jpg")}
            style={Styles.GroupPhoto}
          />
        </View>
        <View style={Styles.Separator}>
          <Text style={Styles.Paragraph}>What is a loan?</Text>
          <View>
            <Text style={Styles.TextParagraph}>
              A loan is a form of financial aid in which one party borrows money
              from another party in exchange for the repayment of the sum value
              plus added interest. Interest is a charge for borrowing money,
              generally a percentage of the amount borrowed. In some cases, the
              money lender may require collateral to ensure repayment of a loan.
              Collateral is a valuable asset of the borrower that they pledge as
              security for the loan. Loans are used to provide the borrower with
              the money they need for investments, renovations, property
              purchases, business ventures, and more while being a means for
              which the lender can make some money.
            </Text>

            <Text style={Styles.Paragraph}>Components of a Loan</Text>
            <Text style={Styles.TextParagraph}>
              The components of a loan determine the size of the loan and how
              quickly the borrower can pay it off. The components of a loan are
              principal, loan term, interest rate, and loan payments. The
              principal is the original amount of money that is borrowed. The
              loan term is the amount of time agreed upon for the borrower to
              repay the loan. The interest rate is the rate at which the amount
              of money owed increases, Interest rates are usually expressed in
              terms of annual percentage rates. Loan payments are the amount of
              money that must be paid every agreed upon period. The loan payment
              amount is determined from the principal, loan term, and interest
              rate. The equation to determine monthly loan payments is 𝑀𝐿𝑃 = 𝑃[
              𝑟(1+𝑟)𝑛 ] where MLP is the monthly loan payment, P is the
              principal value of the loan, r is the monthly (1+𝑟)𝑛−1 interest
              rate in decimal terms, and n is the number of payments over loan’s
              term.
            </Text>

            <Text style={Styles.Paragraph}>Types of Loans</Text>
            <Text style={Styles.TextParagraph}>
              Loans can come in many forms. They can vary in a number of ways
              including length, interest, collateral, and amount. The main types
              of loans are secured vs. unsecured and revolving vs. term loan.
            </Text>

            <Text style={Styles.Paragraph}>Secured vs. Unsecured Loans:</Text>
            <Text style={Styles.TextParagraph}>
              Secured loans are backed by some form of collateral to ensure
              payment of the loan. If the loan is not paid within a certain time
              period agreed upon or the interest reaches a certain value, the
              lender may be eligible to seize, or take, the collateral offered
              by the borrower. These terms are typically expressed in the
              contract signed upon loan approval. Examples of secured loans
              include mortgages and car loans. In these examples, the collateral
              is the asset in which the loan is taken out, such as the home is
              collateral for a mortgage. Unsecured loans are not backed by any
              collateral. The interest rates of unsecured loans are usually much
              higher than the interest rates for secured loans. Examples of
              unsecured loans included credit cards and signature loans.
            </Text>

            <Text style={Styles.Paragraph}>Revolving vs. Term Loans: </Text>
            <Text style={Styles.TextParagraph}>
              Revolving loans are lines of credit that remain open even as
              payments are paid on it. The borrower can continue to borrow more
              and more from these loans even if they pay some or all of it back.
              Interest is typically paid monthly on these loans. Examples of
              revolving loans are credit cards and home equity loans. Term loans
              are paid off in equal parts monthly over a set period of time.
              Term loans often offer lower interest rates than revolving loans.
              Examples of term loans include car loans and signature loans.
            </Text>

            <Text style={Styles.Paragraph}>How to Get a Loan </Text>
            <Text style={Styles.TextParagraph}>
              The biggest and most well-known lender is a bank, but other forms
              of lenders exist. In order to qualify for a loan, the borrower
              needs to that they have the financial ability to repay the loan to
              the lender. There are several factors that lenders look at when
              deciding if they should provide a loan. They are the borrower’s
              income, credit score, and debt-to-income ratio. Lenders may
              require a certain income threshold or several years of stable
              employment to ensure a loan. Credit scores are numerical
              representation of a person’s worthiness of credit based on their
              history of borrowing and repayment. Debt-to-income ratio shows the
              amount of debt the borrower currently has and their ability to pay
              off their debt. To make yourself a strong candidate for a loan, it
              is important to show debt responsibility. Paying off loans and
              credit cards promptly will make the borrower eligible for lower
              interest rates. It is still possible to get a loan with a lot of
              debt or poor credit scores, but the loan will likely come with a
              higher interest rate.
            </Text>
          </View>
        </View>
        <Button title="QUIZ" onPress={() => navigation.navigate("Quiz")} />
      </ScrollView>
    </SafeAreaView>
  );
}
