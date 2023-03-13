import {
  Text,
  Image,
  View,
  SafeAreaView,
  Button,
  ScrollView,
  Alert,
} from "react-native";

import Styles from "../assets/styles/Theory";
import { NavigationContainer } from "@react-navigation/native";

export default function Quiz() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={Styles.boldText}>THEORY</Text>
          <Image
            source={require("../assets/theoryPart.jpg")}
            style={Styles.GroupPhoto}
          />
        </View>
        <View style={Styles.Separator}>
          <Text style={Styles.Paragraph}>What is investing?</Text>
          <View>
            <Text style={Styles.TextParagraph}>
              Before we can understand how to invest, or what to invest in, we
              first must understand what investing is. There are countless
              different ways to invest, which can often lead to confusion for
              new investors. Some of the most common investments are stocks,
              bonds, ETFs/ mutual funds, and real estate. These are the most
              common investments because they are easily accessible to an
              average person and tend to increase in value over time. However,
              this may not always be the case, sometimes investments may drop in
              value. The chance of an investment dropping over time rather than
              increasing is called the risk level. In general, the higher the
              potential there is for an investor to earn money from an
              investment, the higher the risk level is. In general, investing is
              the act of buying something with the hope that will increase in
              value in the future.
            </Text>

            <Text style={Styles.Paragraph}>Investing in the stock market</Text>
            <Text style={Styles.TextParagraph}>
              When most people are interested in becoming an investor, they
              think of buying stocks. The stock market has become synonymous
              with investing itself. But what really are stocks? A share of a
              stock is a small fraction of a company that an individual is able
              to purchase. Investors purchase stocks with the hope that the
              company will grow over time, causing the price of the stock to
              increase. The amount a share of a company increases year over year
              is considered its average annual return. Typically, the higher the
              average annual return of a stock, the higher the risk level is
              too. Becoming an investor in the stock market is very easy. There
              are many companies, called brokerage firms, that allow their
              clients to invest money in the stock market. Some of the most
              popular companies are Charles Schwab, Fidelity Investments, TD
              Ameritrade, and many others. These companies offer different
              benefits and may charge different fees for their services, but all
              allow their users to be stock market investors.
            </Text>

            <Text style={Styles.Paragraph}>Investing in real estate</Text>
            <Text style={Styles.TextParagraph}>
              While the stock market is generally associated with investing, it
              is not the most common form of it. Many Americans may already be
              investors without even realizing it. This is because the most
              common form of investing in the United States is owning a home.
              Owning a home is how most Americans are able to build their wealth
              as they age. Being a homeowner works so well at growing wealth
              because people tend to buy a home and not sell it for many years.
              This allows the value of the home to grow substantially in that
              time. This type of investing is called real estate investing. Real
              estate investing is simply the act of owning property. For a
              typical American, this would just be owning their home, but there
              are many different types of real estate investing. Companies
              specialize in many different types of real estate such as
              residential, commercial, and industrial. Residential real estate
              refers to areas where people live,  commercial is where businesses
              operate, and industrial is where manufacturing takes place. While
              it is not realistic for an average person to own any of their
              investments directly, besides their own home, they can invest in
              the stocks of companies that own real estate.
            </Text>

            <Text style={Styles.Paragraph}>Diversifying your investments </Text>
            <Text style={Styles.TextParagraph}>
              In order for any investor to become successful they must use
              strategies to manage their risk level. There are many ways
              investors are able to do this, but the most fundamental method is
              portfolio diversification. A portfolio is an investor's collection
              of different investments. This includes stock, bonds, realestate,
              and any other investments. By diversifying your portfolio, you are
              making sure that you don't have too much risk in one particular
              area. By spreading out your risk in many different investments,
              the overall risk level of your portfolio decreases. Diversifying
              investments is so fundamental to being successful in investing
              that hedge funds, which are investing companies, get their name
              from ”hedging their bet”. There are many methods of
              diversification that investing professionals recommend. There is
              not a one size fits all solution for everyone, the way your
              portfolio is diversified depends on factors such as age, income,
              and financial goals. 
            </Text>

            <Text style={Styles.Paragraph}>Mutual Funds and ETFs </Text>
            <Text style={Styles.TextParagraph}>
              Diversifying your portfolio can be a daunting task. Mutual funds
              and Exchange Traded Funds(ETFs) are a way that investors can make
              diversification easy. When you buy an individual stock you are
              gaining equity in just a single company. Equity in a company
              refers to owning a share or more of a company's stock. In a mutual
              fund or ETF, the investors gain a smaller amount of equity in many
              different companies. This is appealing to investors because just
              by purchasing a single share of a mutual fund or ETF, they have
              already diversified their portfolio into hundreds or even
              thousands of different companies. The downside to purchasing a
              mutual fund or ETF is that the company that manages it will charge
              an expense ratio. An expense ratio is a small fee that a company
              charges to manage a mutual fund or ETF. Mutual funds and ETFs are
              nearly identical. The only distinction between them is the rules
              of when they can be bought or sold. You can purchase mutual funds
              and ETFs from nearly any brokerage firm.
            </Text>
          </View>
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
              Alert.alert("MANDARE ALLA PAGINA DEL COMPOUND RETURN")
            }
          />
        </View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
}
