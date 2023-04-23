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
              restituzione della somma più gli interessi. L'interesse è un costo
              per il prestito di denaro, generalmente una percentuale
              dell'importo preso in prestito. In alcuni casi, il prestatore di
              denaro può richiedere una garanzia collaterale per assicurare il
              rimborso del prestito. La garanzia è un bene di valore del
              mutuatario che viene dato in pegno per il prestito. I prestiti
              vengono utilizzati per fornire al mutuatario il denaro di cui ha
              bisogno per investimenti, ristrutturazioni, acquisti di immobili,
              iniziative commerciali e altro ancora, e al tempo stesso sono un
              mezzo per far guadagnare il mutuante.
            </Text>

            <Text style={Styles.Paragraph}>Componenti di un prestito</Text>
            <Text style={Styles.TextParagraph}>
              Le componenti di un prestito determinano l'entità del prestito e
              la velocità con cui il mutuatario può estinguerlo. Le componenti
              di un prestito sono il capitale, la durata del prestito, il tasso
              di interesse e i pagamenti del prestito. Il capitale è l'importo
              originale del denaro preso in prestito. La durata del prestito è
              il periodo di tempo concordato per il rimborso del prestito. Il
              tasso di interesse è il tasso di crescita dell'importo dovuto. I
              tassi di interesse sono solitamente espressi in termini di tassi
              percentuali annui. Le rate del prestito sono la somma di denaro
              che deve essere pagata ogni volta che viene concordato un periodo
              di tempo. L'importo del pagamento del prestito è determinato dal
              capitale, dalla durata del prestito e dal tasso di interesse.
              L'equazione per determinare i pagamenti mensili del mutuo è 𝑀𝐿𝑃 =
              𝑃[ 𝑟(1+𝑟)𝑛 ] dove MLP è la rata mensile del prestito, P è il
              valore del capitale del prestito, r è il tasso di (1+𝑟)𝑛-1
              interesse mensile in termini decimali e n è il numero di pagamenti
              nel corso della durata del prestito.
            </Text>
            <Text style={Styles.Paragraph}>Tipi di prestiti</Text>
            <Text style={Styles.TextParagraph}>
              I prestiti possono assumere diverse forme. Possono variare in
              diversi modi, tra cui la durata, gli interessi, le garanzie e
              l'importo. I principali tipi di prestiti sono garantiti o non
              garantiti e rotativi o a termine.
            </Text>
            <Text style={Styles.Paragraph}>
              Prestiti garantiti e non garantiti:
            </Text>
            <Text style={Styles.TextParagraph}>
              I prestiti garantiti sono sostenuti da una qualche forma di
              garanzia per assicurare il pagamento del prestito. Se il prestito
              non viene pagato entro un certo periodo di tempo concordato o se
              gli interessi raggiungono un certo valore, il mutuante può essere
              autorizzato a sequestrare, o prendere, la garanzia offerta dal
              mutuatario. Queste condizioni sono tipicamente espresse nel
              contratto firmato al momento dell'approvazione del prestito.
              Esempi di prestiti garantiti sono i mutui e i prestiti auto. In
              questi esempi, la garanzia è il bene per il quale è stato
              contratto il prestito, ad esempio la casa è una garanzia per un
              mutuo. I prestiti non garantiti non sono assistiti da alcuna
              garanzia. I tassi di interesse dei prestiti non garantiti sono
              solitamente molto più alti di quelli dei prestiti garantiti.
              Esempi di prestiti non garantiti sono le carte di credito e i
              prestiti di firma.
            </Text>
            <Text style={Styles.Paragraph}>
              Prestiti revolving e prestiti a termine:{" "}
            </Text>
            <Text style={Styles.TextParagraph}>
              I prestiti rotativi sono linee di credito che rimangono aperte
              anche quando vengono pagati i pagamenti. Il mutuatario può
              continuare a prendere in prestito sempre di più da questi prestiti
              anche se ne paga una parte o la totalità. In genere gli interessi
              vengono pagati mensilmente su questi prestiti. Esempi di prestiti
              rotativi sono le carte di credito e i mutui ipotecari. I prestiti
              a termine vengono rimborsati in parti uguali ogni mese per un
              periodo di tempo prestabilito. I prestiti a termine offrono spesso
              tassi di interesse più bassi rispetto ai prestiti rotativi. Esempi
              di prestiti a termine sono i prestiti auto e i prestiti di firma
            </Text>
            <Text style={Styles.Paragraph}>Come ottenere un prestito </Text>
            <Text style={Styles.TextParagraph}>
              L'istituto di credito più grande e conosciuto è la banca, ma
              esistono anche altre forme di prestito. Per qualificarsi per un
              prestito, il mutuatario deve avere la capacità finanziaria di
              rimborsare il prestito al finanziatore. Ci sono diversi fattori
              che gli istituti di credito prendono in considerazione per
              decidere se concedere un prestito. Si tratta del reddito, del
              punteggio di credito e del rapporto debito/reddito del mutuatario.
              Gli istituti di credito possono richiedere una certa soglia di
              reddito o diversi anni di occupazione stabile per garantire un
              prestito. I punteggi di credito sono una rappresentazione numerica
              del valore del credito di una persona in base alla sua storia di
              prestiti e rimborsi. Il rapporto debito/reddito indica l'ammontare
              del debito che il mutuatario ha attualmente e la sua capacità di
              ripagarlo. Per essere un candidato forte per un prestito, è
              importante dimostrare la propria responsabilità nei confronti del
              debito. Il pagamento puntuale di prestiti e carte di credito
              consente di ottenere tassi di interesse più bassi. È ancora
              possibile ottenere un prestito con molti debiti o un punteggio di
              credito scarso, ma il prestito sarà probabilmente caratterizzato
              da un tasso di interesse più elevato.
            </Text>
          </View>
        </View>
        <Button title="QUIZ" onPress={() => navigation.navigate("Quiz4")} />
      </ScrollView>
    </SafeAreaView>
  );
}
