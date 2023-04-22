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
          <Text style={Styles.boldText}>TEORIA PARTE QUATTRO</Text>
          <Image
            source={require("../../assets/theoryPart.jpg")}
            style={Styles.GroupPhoto}
          />
        </View>
        <View style={Styles.Separator}>
          <Text style={Styles.Paragraph}>Che cos'è un prestito?</Text>
          <View>
            <Text style={Styles.TextParagraph}>
              Il prestito è una forma di aiuto finanziario in cui una parte
              prende in prestito denaro da un'altra parte in cambio della
              restituzione di una somma di valore. da un'altra parte in cambio
              della restituzione della somma di valore più gli interessi.
              L'interesse è un costo per il prestito di denaro, generalmente una
              percentuale dell'importo preso in prestito. In alcuni casi, il
              prestito può richiedere una garanzia collaterale per assicurare il
              rimborso del prestito. La garanzia è un bene di valore del
              mutuatario che viene dato in pegno a garanzia del prestito.
              garanzia per il prestito. I prestiti vengono utilizzati per
              fornire al mutuatario denaro necessario per investimenti,
              ristrutturazioni, acquisti di proprietà acquisto di immobili,
              iniziative imprenditoriali e altro ancora, e allo stesso tempo
              sono un mezzo per che il mutuante può guadagnare.
            </Text>

            <Text style={Styles.Paragraph}>Componenti di un prestito</Text>
            <Text style={Styles.TextParagraph}>
              Le componenti di un prestito determinano l'entità del prestito e
              la velocità con cui il mutuatario può ripagarlo. quanto
              velocemente il mutuatario può ripagarlo. Le componenti di un
              prestito sono il capitale, la durata del prestito, il tasso di
              interesse e le rate del prestito. Il capitale è l'importo
              originale del denaro preso in prestito. La durata del prestito è
              il periodo di tempo concordato per il mutuatario per rimborsare il
              prestito. Il tasso di interesse è il tasso di crescita
              dell'importo dovuto. di denaro dovuto aumenta, i tassi di
              interesse sono di solito espressi in in termini di tassi
              percentuali annui. I pagamenti del prestito sono la somma di
              denaro di denaro che deve essere pagato ogni volta che viene
              concordato. L'importo del prestito l'importo della rata del
              prestito è determinato dal capitale, dalla durata del prestito e
              dal tasso d'interesse. tasso di interesse. L'equazione per
              determinare i pagamenti mensili del mutuo è 𝑀𝐿𝑃 = 𝑃[ 𝑟(1+𝑟)𝑛 ]
              dove MLP è la rata mensile del mutuo, P è il valore del capitale
              del mutuo, r è il valore del capitale del mutuo. valore del
              capitale del prestito, r è il tasso d'interesse mensile (1+𝑟)𝑛-1
              in termini decimali, e n è il numero di pagamenti nel corso della
              durata del durata del prestito.
            </Text>

            <Text style={Styles.Paragraph}>Tipi di prestiti</Text>
            <Text style={Styles.TextParagraph}>
              I prestiti possono assumere diverse forme. Possono variare in
              diversi modi tra cui la durata, gli interessi, le garanzie e
              l'importo. I principali tipi di di prestiti: garantiti o non
              garantiti, rotativi o a termine.
            </Text>

            <Text style={Styles.Paragraph}>
              Prestiti garantiti e non garantiti:
            </Text>
            <Text style={Styles.TextParagraph}>
              I prestiti garantiti sono sostenuti da una qualche forma di
              garanzia per assicurare il pagamento del prestito. Se il prestito
              non viene pagato entro un certo periodo di tempo concordato o se
              gli interessi raggiungono un certo valore, la garanzia periodo di
              tempo concordato o gli interessi raggiungono un certo valore, il
              creditore può il mutuante può essere autorizzato a sequestrare, o
              prendere, la garanzia offerta dal dal mutuatario. Queste
              condizioni sono tipicamente espresse nel contratto firmato al
              momento dell'approvazione del prestito. Esempi di prestiti
              garantiti sono i mutui ipotecari e i prestiti per l'acquisto di
              autovetture. In questi esempi, la garanzia reale è il bene per il
              quale è stato contratto il prestito, come ad esempio la casa è
              casa, ad esempio, è una garanzia per un'ipoteca. I prestiti non
              garantiti non sono coperti da alcuna garanzia. I tassi di
              interesse dei prestiti non garantiti sono di solito molto molto
              più alti rispetto a quelli dei prestiti garantiti. Esempi di
              prestiti non garantiti sono le carte di credito e i prestiti di
              firma.
            </Text>

            <Text style={Styles.Paragraph}>
              Prestiti revolving e prestiti a termine:{" "}
            </Text>
            <Text style={Styles.TextParagraph}>
              I prestiti rotativi sono linee di credito che rimangono aperte
              anche se pagamenti. Il mutuatario può continuare a prendere in
              prestito sempre di più da questi prestiti anche se ne paga una
              parte o la totalità. Gli interessi sono generalmente pagati
              mensilmente su questi prestiti. Esempi di prestiti rotativi sono
              le carte di credito e i mutui ipotecari. Prestiti a termine
              vengono rimborsati in parti uguali ogni mese per un periodo di
              tempo prestabilito. I prestiti a termine offrono spesso tassi di
              interesse più bassi rispetto ai prestiti rotativi. Esempi di
              prestiti a termine sono i prestiti auto e i prestiti di firma.
            </Text>

            <Text style={Styles.Paragraph}>Come ottenere un prestito </Text>
            <Text style={Styles.TextParagraph}>
              Il prestatore più grande e più conosciuto è la banca, ma esistono
              anche altre forme di di finanziatori. Per avere diritto a un
              prestito, il mutuatario deve per ottenere un prestito, il
              mutuatario deve avere la capacità finanziaria di ripagare il
              prestito al al prestatore. Ci sono diversi fattori che gli
              istituti di credito prendono in considerazione quando per decidere
              se concedere un prestito. Si tratta del reddito del mutuatario,
              del reddito, il punteggio di credito e il rapporto debito/reddito.
              Gli istituti di credito possono una certa soglia di reddito o
              diversi anni di occupazione stabile per garantire un prestito. di
              occupazione stabile per garantire un prestito. I punteggi di
              credito sono una rappresentazione numerica numerici che
              rappresentano l'idoneità al credito di una persona in base al suo
              storia di prestiti e rimborsi. Il rapporto debito/reddito indica
              la di debito che il mutuatario ha attualmente e la sua capacità di
              ripagare il debito. di ripagare il proprio debito. Per essere un
              candidato forte per un prestito è è importante dimostrare la
              propria responsabilità nei confronti del debito. Il pagamento
              puntuale di prestiti e carte di credito con tempestività, il
              mutuatario potrà ottenere tassi di interesse più bassi. tassi di
              interesse più bassi. È ancora possibile ottenere un prestito con
              molti debiti o con un basso punteggio di credito. debito o con un
              cattivo punteggio di credito, ma il prestito avrà probabilmente un
              un tasso di interesse più alto.
            </Text>
          </View>
        </View>
        <Button title="QUIZ" onPress={() => navigation.navigate("Quiz")} />
      </ScrollView>
    </SafeAreaView>
  );
}
