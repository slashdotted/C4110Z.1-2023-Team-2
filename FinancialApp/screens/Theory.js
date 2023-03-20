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

export default function Theory() {
  return (
    <SafeAreaView style={Styles.Layout}>
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
          <Text style={Styles.Paragraph}>What is budgeting?</Text>
          <View>
            <Text style={Styles.TextParagraph}>
              Budgeting is the process of estimating personal expenses and
              income across a future period of time that is then evaluated
              routinely in order to improve spending habits. A budget refers to
              the actual plan a person develops that shows how much money they
              will earn and spend in a specified timeframe. Typically, a budget
              is set up monthly, however, a person may choose any span of time
              that works for them. Budgeting allows a person to realize how they
              are allocating their funds, which, in return, gives them the
              ability to adjust their spending and save money for necessities.
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
              knowing the amount of money earned in the chosen timeframe, a
              person needs to uncover records of past expenses throughout the
              same period. A person should categorize their expenses into fixed
              expenses and variable expenses. Fixed expenses are those that do
              not change between periods of time; Such as, housing rent or
              mortgage, car payments, and insurance payments. Fixed expenses
              often are for necessities and must be paid on time within the
              period. Variable expenses describe those that vary across
              different spans of time; Such as, gas for an automobile,
              utilities, groceries, and entertainment. A person should base
              their variable expenses for a given period on the amount they
              spent on the category for the same period the previous year. This
              information can be found in credit card and bank statements, which
              already itemize the charges. These expenses tend to classify more
              as “wants” and not “needs” and provide a great starting place to
              reduce spending.
            </Text>
            <Text style={Styles.TextParagraph}>
              Once a person gathers their financial information for the
              specified timeframe, they can determine realistic goals and create
              a plan to achieve them. First, a person will analyze the money
              they will earn across the period, as well as how much and in which
              ways they spent their money in the period from the previous year,
              and set certain financial goals to reach at the end of the
              timespan. These goals might include paying credit card debt to a
              certain extent, building up an emergency fund, or saving money
              towards a vacation. A person then develops a plan which places
              specific limits on each category of expense in a way that pursues
              the chosen goals. One popular budgeting technique is to utilize
              the 50/30/20 rule, in which fifty percent of your earnings should
              be allocated to necessities (rent), thirty percent should be
              allocated to your desires (entertainment), and twenty percent
              should be allocated to savings. This plan is referred to as the
              person’s budget.
            </Text>

            <Text style={Styles.Paragraph}>How to use a budget?</Text>
            <Text style={Styles.TextParagraph}>
              Now that the budget is formed, a person must track their spending
              throughout the stretch of time, recording the amount and
              destination of each expense. The person then needs to periodically
              compare their spending records to their budget, ensuring that
              their actions align with their plan. In doing so, it is easy for
              that person to realize if they are straying away from their
              financial goals and adjust their spending accordingly. As
              mentioned before, a person should look to reduce certain variable
              expenses that they notice do not hold precedent over other
              necessities. If a person cannot afford to reduce variable expenses
              further, and they are still not able to meet expected expenses,
              they should consider changing fixed expenses, so as to reduce them
              as well. This can include moving to a more affordable place of
              residence or switching insurance plans.
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
              whether or not that entails adding more financial stability or
              more entertainment for them.
            </Text>
          </View>
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
