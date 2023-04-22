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
          <Text style={Styles.boldText}>TEORIA PARTE UNO</Text>
          <Image
            source={require("../../assets/theoryPart.jpg")}
            style={Styles.GroupPhoto}
          />
        </View>
        <View style={Styles.Separator}>
          <Text style={Styles.Paragraph}>Che cos'è vuol dire investire?</Text>
          <View>
            <Text style={Styles.TextParagraph}>
              Prima di capire come investire, o in cosa investire, dobbiamo
              prima di capire cosa sia l'investimento. Esistono innumerevoli
              modi diversi di investire, il che spesso può generare confusione
              per i nuovi investitori. Alcuni degli investimenti più comuni sono
              le azioni, obbligazioni, ETF/fondi comuni e immobili. Questi sono
              gli investimenti più investimenti più comuni perché sono
              facilmente accessibili a una persona persone comuni e tendono ad
              aumentare di valore nel tempo. Tuttavia, non è sempre così, a
              volte gli investimenti possono diminuire di valore. valore. La
              possibilità che un investimento diminuisca nel tempo piuttosto che
              aumento si chiama livello di rischio. In generale, quanto più alto
              è il potenziale di guadagno per l'investitore, più alto è il
              livello di rischio. investimento, più alto è il livello di
              rischio. In generale, l'investimento è l'atto di acquistare
              qualcosa con la speranza che aumenti di valore in futuro. valore
              in futuro.
            </Text>

            <Text style={Styles.Paragraph}>
              Investire nel mercato azionario
            </Text>
            <Text style={Styles.TextParagraph}>
              Quando la maggior parte delle persone è interessata a diventare un
              investitore, pensa di pensa all'acquisto di azioni. Il mercato
              azionario è diventato sinonimo di investimento. Ma cosa sono
              realmente le azioni? Un'azione di un un'azione è una piccola
              frazione di un'azienda che un individuo è in grado di acquistare.
              acquistare. Gli investitori acquistano le azioni con la speranza
              che la che l'azienda cresca nel tempo, facendo aumentare il prezzo
              del titolo aumento del prezzo delle azioni. L'importo dell'aumento
              di un'azione di una società anno per anno è considerato il suo
              rendimento medio annuo. In genere, più alto è il rendimento medio
              annuo di un'azione, più alto è anche il livello di rischio. anche
              il livello di rischio. Diventare un investitore nel mercato
              azionario è molto semplice. Esistono società di intermediazione
              che consentono ai loro clienti di investire clienti di investire
              denaro nel mercato azionario. Alcune delle società più società più
              famose sono Charles Schwab, Fidelity Investments, TD Ameritrade e
              molte altre. Queste società offrono diversi e possono addebitare
              commissioni diverse per i loro servizi, ma tutte tutti permettono
              ai loro utenti di essere investitori nel mercato azionario.
            </Text>

            <Text style={Styles.Paragraph}>
              Investire nel settore immobiliare
            </Text>
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

            <Text style={Styles.Paragraph}>
              Diversificare gli investimenti{" "}
            </Text>
            <Text style={Styles.TextParagraph}>
              Sebbene il mercato azionario sia generalmente associato agli
              investimenti, non è non è la forma più comune di investimento.
              Molti americani potrebbero già essere investitori senza nemmeno
              rendersene conto. Questo perché la forma di investimento più più
              comune negli Stati Uniti è il possesso di una casa. La proprietà
              di una casa è il modo in cui la maggior parte degli americani è in
              grado di costruire il proprio patrimonio invecchiare. Essere
              proprietari di una casa funziona così bene per accrescere la
              ricchezza perché si tende a comprare una casa e a non venderla per
              molti anni. In questo modo il valore della casa cresce in modo
              sostanziale in quel periodo di tempo. tempo. Questo tipo di
              investimento si chiama investimento immobiliare. L'investimento
              immobiliare è semplicemente l'atto di possedere una proprietà. Per
              un americano, si tratta semplicemente di possedere la propria
              casa, ma esistono diversi tipi di esistono molti tipi diversi di
              investimenti immobiliari. Le società specializzate in molti tipi
              diversi di immobili, quali residenziale, commerciale e
              industriale. Gli immobili residenziali residenziale si riferisce
              alle aree in cui le persone vivono, quello commerciale alle aree
              in cui commerciali e industriali, dove si svolgono le attività
              produttive. Anche se non è realistico per una persona media
              possedere direttamente i propri investimenti, oltre alla propria
              casa. investimenti direttamente, oltre alla propria abitazione,
              può investire in le azioni di società che possiedono immobili.
            </Text>

            <Text style={Styles.Paragraph}>Fondi comuni e ETF </Text>
            <Text style={Styles.TextParagraph}>
              Diversificare il proprio portafoglio può essere un compito
              scoraggiante. I fondi comuni di investimento e gli Exchange Traded
              Funds(ETF) sono un modo in cui gli investitori possono rendere
              diversificazione. Quando si acquista una singola azione, si
              acquisisce acquistando azioni di una sola società. La
              partecipazione in una società si riferisce al possesso di una o
              più azioni di una società. In un fondo comune fondo comune di
              investimento o ETF, gli investitori acquisiscono una quantità
              minore di azioni di molte società diverse. Questo aspetto è
              interessante per gli investitori perché acquistando una sola
              azione di un fondo comune o di un ETF, hanno già diversificato il
              loro portafoglio in centinaia o diversificare il proprio
              portafoglio in centinaia o addirittura migliaia di società
              diverse. Il lato negativo dell'acquisto di un fondo comune o ETF è
              che la società che lo gestisce addebiterà un un rapporto di spesa.
              Il coefficiente di spesa è una piccola commissione che una società
              società per la gestione di un fondo comune o di un ETF. I fondi
              comuni di investimento e gli ETF sono quasi identici. L'unica
              distinzione è rappresentata dalle regole regole su quando possono
              essere acquistati o venduti. È possibile acquistare fondi comuni
              di investimento e ETF da quasi tutte le società di
              intermediazione.
            </Text>
            <Button title="QUIZ" onPress={() => navigation.navigate("Quiz")} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
