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
              Prima di capire come investire o in cosa investire, è necessario
              comprendere cosa sia l'investimento. Esistono innumerevoli modi
              diversi di investire, il che può spesso generare confusione nei
              nuovi investitori. Alcuni degli investimenti più comuni sono le
              azioni, le obbligazioni, gli ETF/fondi comuni e gli immobili.
              Questi sono gli investimenti più comuni perché sono facilmente
              accessibili a una persona comune e tendono ad aumentare di valore
              nel tempo. Tuttavia, non è sempre così: a volte gli investimenti
              possono diminuire di valore. La possibilità che un investimento
              diminuisca nel tempo anziché aumentare si chiama livello di
              rischio. In generale, più alto è il potenziale di guadagno di un
              investitore, più alto è il livello di rischio. In generale,
              l'investimento è l'atto di acquistare qualcosa con la speranza che
              aumenti di valore in futuro.
            </Text>

            <Text style={Styles.Paragraph}>
              Investire nel mercato azionario
            </Text>
            <Text style={Styles.TextParagraph}>
              Quando la maggior parte delle persone è interessata a diventare un
              investitore, pensa all'acquisto di azioni. Il mercato azionario è
              diventato sinonimo stesso di investimento. Ma cosa sono realmente
              le azioni? Un'azione è una piccola frazione di una società che un
              individuo è in grado di acquistare. Gli investitori acquistano le
              azioni con la speranza che la società cresca nel tempo, facendo
              aumentare il prezzo del titolo. La quantità di azioni di una
              società che aumenta di anno in anno è considerata il suo
              rendimento medio annuo. In genere, più alto è il rendimento medio
              annuo di un'azione, più alto è anche il livello di rischio.
              Diventare un investitore nel mercato azionario è molto semplice.
              Esistono molte società, chiamate società di intermediazione, che
              permettono ai loro clienti di investire denaro nel mercato
              azionario. Alcune delle società più popolari sono Charles Schwab,
              Fidelity Investments, TD Ameritrade e molte altre. Queste società
              offrono vantaggi diversi e possono applicare commissioni diverse
              per i loro servizi, ma tutte permettono ai loro utenti di essere
              investitori nel mercato azionario.
            </Text>

            <Text style={Styles.Paragraph}>
              Investire nel settore immobiliare
            </Text>
            <Text style={Styles.TextParagraph}>
              Sebbene il mercato azionario sia generalmente associato agli
              investimenti, non è la forma più comune di questi ultimi. Molti
              americani potrebbero già essere investitori senza nemmeno
              rendersene conto. Infatti, la forma più comune di investimento
              negli Stati Uniti è il possesso di una casa. La proprietà di una
              casa è il modo in cui la maggior parte degli americani è in grado
              di costruire la propria ricchezza quando invecchia. Essere
              proprietari di una casa funziona così bene per accrescere la
              ricchezza perché le persone tendono ad acquistare una casa e a non
              venderla per molti anni. In questo modo il valore della casa può
              crescere in modo sostanziale in quel lasso di tempo. Questo tipo
              di investimento si chiama investimento immobiliare. L'investimento
              immobiliare è semplicemente l'atto di possedere una proprietà. Per
              un americano tipico si tratta di possedere la propria casa, ma
              esistono molti tipi diversi di investimenti immobiliari. Le
              società sono specializzate in diversi tipi di immobili, come
              quelli residenziali, commerciali e industriali. Gli immobili
              residenziali si riferiscono alle aree in cui le persone vivono,
              quelli commerciali a quelle in cui operano le imprese e quelli
              industriali a quelle in cui si svolgono le attività produttive.
              Sebbene non sia realistico per una persona media possedere
              direttamente i propri investimenti, oltre alla propria casa, è
              possibile investire in azioni di società che possiedono immobili.
            </Text>

            <Text style={Styles.Paragraph}>
              Diversificare gli investimenti{" "}
            </Text>
            <Text style={Styles.TextParagraph}>
              Per avere successo, ogni investitore deve utilizzare strategie per
              gestire il proprio livello di rischio. Ci sono molti modi in cui
              gli investitori possono farlo, ma il metodo fondamentale è la
              diversificazione del portafoglio. Un portafoglio è l'insieme di
              diversi investimenti di un investitore. Questo comprende azioni,
              obbligazioni, immobili e qualsiasi altro investimento.
              Diversificando il portafoglio, ci si assicura di non avere un
              rischio eccessivo in un'unica area. Distribuendo il rischio in
              molti investimenti diversi, il livello di rischio complessivo del
              vostro portafoglio diminuisce. La diversificazione degli
              investimenti è talmente fondamentale per avere successo negli
              investimenti che gli hedge fund, che sono società di investimento,
              devono il loro nome alla "copertura della scommessa". I
              professionisti degli investimenti raccomandano numerosi metodi di
              diversificazione. Non esiste una soluzione unica per tutti, il
              modo in cui il portafoglio viene diversificato dipende da fattori
              quali l'età, il reddito e gli obiettivi finanziari.
            </Text>

            <Text style={Styles.Paragraph}>Fondi comuni e ETF </Text>
            <Text style={Styles.TextParagraph}>
              Diversificare il proprio portafoglio può essere un compito
              scoraggiante. I fondi comuni di investimento e gli Exchange Traded
              Funds (ETF) sono un modo in cui gli investitori possono
              semplificare la diversificazione. Quando si acquista una singola
              azione, si acquisisce una partecipazione in una singola società.
              Per partecipazione ad una società si intende il possesso di una o
              più azioni di una società. In un fondo comune di investimento o in
              un ETF, gli investitori acquisiscono una quantità minore di azioni
              di molte società diverse. Ciò è interessante per gli investitori
              perché, acquistando una sola azione di un fondo comune o di un
              ETF, hanno già diversificato il loro portafoglio in centinaia o
              addirittura migliaia di società diverse. L'aspetto negativo
              dell'acquisto di un fondo comune o di un ETF è che la società che
              lo gestisce addebiterà un coefficiente di spesa. Il rapporto di
              spesa è una piccola commissione che una società addebita per
              gestire un fondo comune o un ETF. I fondi comuni di investimento e
              gli ETF sono quasi identici. L'unica distinzione è rappresentata
              dalle regole per l'acquisto e la vendita. È possibile acquistare
              fondi comuni di investimento ed ETF presso quasi tutte le società
              di intermediazione.
            </Text>
            <Button title="QUIZ" onPress={() => navigation.navigate("Quiz1")} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
