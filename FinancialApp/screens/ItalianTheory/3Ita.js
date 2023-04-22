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
          <Text style={Styles.boldText}>TEORIA PARTE TRE</Text>
          <Image
            source={require("../../assets/theoryPart.jpg")}
            style={Styles.GroupPhoto}
          />
        </View>
        <View style={Styles.Separator}>
          <Text style={Styles.Paragraph}>Archiviazione delle imposte</Text>
          <View>
            <Text style={Styles.TextParagraph}>
              Negli Stati Uniti, la compilazione delle tasse può sembrare un
              compito eccessivamente complicato e stressante. I moduli e i
              calcoli sono sono all'inizio schiaccianti, e l'ultima cosa che si
              desidera è l'ultima cosa che si vuole è andare incontro a problemi
              legali per aver sbagliato qualcosa. Vediamo cinque lezioni di base
              per aiutarvi a organizzarvi e ad alleviare lo stress stress da
              dichiarazione dei redditi.
            </Text>

            <Text style={Styles.Paragraph}>Raccolta di documenti</Text>
            <Text style={Styles.TextParagraph}>
              Per iniziare la compilazione delle imposte, è importante reperire
              tutti i documenti necessari. documenti richiesti. Tra questi vi
              sono i documenti W2 o 1099, che sono i resoconti del vostro
              reddito. reddito, nonché i rendiconti delle entrate derivanti da
              investimenti, interessi su mutui o contributi di beneficenza,
              interessi su un mutuo o contributi di beneficenza. È è importante
              considerare anche eventuali cambiamenti importanti che potrebbero
              dover essere indicare su un modulo, ad esempio in caso di
              trasferimento, cambio di nome o se il reddito familiare è cambiato
              in modo significativo. Per una lista di controllo completa dei
              documenti da reperire, cliccate qui. Dovreste aver ricevuto questi
              documenti nel corso dell'anno dal datore di lavoro, dalla banca,
              dall'istituto di credito, ecc, banca, istituto di credito, ecc. -
              Assicuratevi di tenere traccia dei documenti man mano che
              arrivano, per facilitarvi il compito al momento delle tasse!
            </Text>

            <Text style={Styles.Paragraph}>Scelta del tipo di detrazione</Text>
            <Text style={Styles.TextParagraph}>
              Per deduzione si intende qualsiasi voce che si sottrae
              dall'importo totale del reddito su cui si dovranno pagare le
              tasse. totale del reddito su cui si dovranno pagare le tasse. Per
              esempio, se quest'anno avete guadagnato 40.000 dollari, ma ne
              avete dedotti 5.000, solo i restanti 35.000 dollari saranno
              tassati. restanti 35.000 dollari saranno tassati, il che significa
              che risparmierete denaro! Si può scegliere di utilizzare la
              detrazione standard o quella individuale. La deduzione standard è
              un importo fisso che il governo che il governo stabilisce e che
              può essere utilizzata per evitare la seccatura della voce. La
              deduzione detrazione per voci è quella in cui ci si prende il
              tempo di trovare e registrare ogni voce ogni voce che può essere
              detratta. Questo metodo comporta sicuramente un lavoro
              supplementare, ma può farvi risparmiare di più se il totale degli
              articoli è superiore all'importo della detrazione standard. È
              possibile detrarre voci come l'assistenza all'infanzia, spese
              scolastiche, spese mediche e donazioni di beneficenza.
              Assicuratevi di di tutto ciò che viene detratto, sotto forma di
              ricevute o estratti conto. ricevute o estratti conto. Anche in
              questo caso, cercate di organizzare questi documenti organizzati
              lungo il percorso per evitare ulteriori problemi al momento delle
              imposte.
            </Text>

            <Text style={Styles.Paragraph}>
              Scelta dello stato di deposito{" "}
            </Text>
            <Text style={Styles.TextParagraph}>
              Al momento della presentazione della domanda, è importante
              identificare il proprio status, in quanto questo determina le
              diverse fasi del processo di presentazione della domanda e
              l'importo che si dovrà pagare. Esistono cinque status: celibe,
              coniugato in regime di congiuntamente, coniugato in regime di
              separazione, capofamiglia e vedova qualificata. vedova qualificata
              (er). Potete leggere le descrizioni complete [qui]. La La parte
              difficile è che a volte ci si può qualificare per diversi status.
              per esempio, se siete vedovi da poco e ora siete single. single. È
              importante decidere quale sia lo status più vantaggioso per per
              risparmiare il più possibile, quindi assicuratevi di confrontare
              le cifre numeri per entrambi in questa situazione.
            </Text>

            <Text style={Styles.Paragraph}>Compilazione delle imposte </Text>
            <Text style={Styles.TextParagraph}>
              Una volta che tutto è organizzato, è il momento di archiviare! È
              possibile presentare le vostre tasse da soli, online o per posta,
              oppure potete affidarvi a un professionista che vi aiuti.
              professionista che vi aiuti. La compilazione da soli permette di
              risparmiare denaro e può essere semplice se si utilizza la
              deduzione standard (vedi Lezione 2). Se desiderate una detrazione
              individuale o se avete una situazione particolare (ad esempio, se
              avete un'attività in proprio). (ad esempio, se si ha un'attività
              in proprio con dipendenti), può essere utile rivolgersi a un
              professionista. un professionista.
            </Text>

            <Text style={Styles.Paragraph}>Guardando al prossimo anno </Text>
            <Text style={Styles.TextParagraph}>
              Dopo aver presentato la domanda, riceverete un rimborso o una
              fattura. In pratica, il governo esaminerà quanto avete trattenuto
              dal vostro reddito per tutto l'anno e lo confronterà con le
              informazioni che avete presentato dal vostro reddito per tutto
              l'anno e lo confronta con le informazioni che avete presentato,
              quindi vi rimborserà (rimborso) o vi addebiterà un costo
              aggiuntivo (fattura) se le due cose non corrispondono. se le due
              cose non corrispondono. Per prepararsi al prossimo anno, è
              possibile modificare l'importo della trattenuta sul reddito in
              base al rimborso (trattenere di meno) o alla rimborso (trattenere
              meno) o sulla fattura (trattenere di più). Inoltre, assicuratevi
              di di conservare tutti i documenti utilizzati per la dichiarazione
              di quest'anno, nel caso in cui l'anno prossimo o nel caso in cui
              vi venga chiesto di dimostrare qualcosa di quest'anno! di
              dimostrare qualcosa di quest'anno!
            </Text>
          </View>
        </View>
        <Button title="QUIZ" onPress={() => navigation.navigate("Quiz")} />
      </ScrollView>
    </SafeAreaView>
  );
}
