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
          <Text style={Styles.boldText}>THEORY PART ONE</Text>
          <Image
            source={require("../../assets/theoryPart.jpg")}
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
            <Button title="QUIZ" onPress={() => navigation.navigate("Quiz")} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
