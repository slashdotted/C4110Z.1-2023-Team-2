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
          <Text style={Styles.Paragraph}>Compilazione delle tasse</Text>
          <View>
            <Text style={Styles.TextParagraph}>
              Negli Stati Uniti, la dichiarazione dei redditi può sembrare un
              compito eccessivamente complicato e stressante. I moduli e i
              calcoli da fare sono all'inizio schiaccianti e l'ultima cosa che
              si vuole è andare incontro a problemi legali per aver sbagliato
              qualcosa. Vediamo cinque lezioni di base per aiutarvi a
              organizzarvi e ad alleviare lo stress da dichiarazione dei
              redditi.
            </Text>

            <Text style={Styles.Paragraph}>Raccolta di documenti</Text>
            <Text style={Styles.TextParagraph}>
              Per iniziare a compilare le imposte, è importante reperire tutti i
              documenti necessari. Tra questi, i documenti W2 o 1099, che sono i
              resoconti del vostro reddito, nonché le dichiarazioni dei redditi
              derivanti da investimenti, interessi su un mutuo o contributi di
              beneficenza. È inoltre importante considerare qualsiasi
              cambiamento importante che potrebbe dover essere indicato sul
              modulo, come ad esempio un trasferimento, un cambio di nome o una
              modifica importante del reddito familiare. Dovreste aver ricevuto
              questi documenti durante l'anno dal vostro datore di lavoro, dalla
              banca, dall'istituto di credito, ecc. - assicuratevi di tenere
              traccia dei documenti man mano che arrivano, per facilitarvi il
              compito al momento delle tasse!
            </Text>

            <Text style={Styles.Paragraph}>Scelta del tipo di detrazione</Text>
            <Text style={Styles.TextParagraph}>
              Per deduzione si intende qualsiasi voce che viene sottratta
              dall'importo totale del reddito su cui si dovranno pagare le
              tasse. Ad esempio, se quest'anno avete guadagnato 40.000 dollari,
              ma ne avete dedotti 5.000, solo i restanti 35.000 saranno tassati,
              il che significa che risparmierete denaro! Potete scegliere se
              utilizzare la deduzione standard o quella per voci. La deduzione
              standard è una somma di denaro stabilita dal governo, che può
              essere utilizzata per evitare la seccatura della voce. La
              deduzione per voci è quella in cui ci si prende il tempo di
              trovare e registrare ogni voce ammissibile alla deduzione. Questo
              metodo comporta sicuramente un lavoro supplementare, ma può farvi
              risparmiare di più se il totale delle voci è superiore all'importo
              della detrazione standard. È possibile detrarre voci come
              l'assistenza all'infanzia, le spese scolastiche, le spese mediche
              e le donazioni di beneficenza. Assicuratevi di avere le prove di
              tutto ciò che avete detratto, sotto forma di ricevute o estratti
              conto. Anche in questo caso, cercate di organizzare questi
              documenti per evitare ulteriori problemi al momento delle tasse.
            </Text>

            <Text style={Styles.Paragraph}>
              Scelta dello stato di deposito{" "}
            </Text>
            <Text style={Styles.TextParagraph}>
              Al momento della presentazione della domanda, è importante
              identificare il proprio status, in quanto determina le diverse
              fasi del processo di presentazione della domanda e l'importo che
              si dovrà pagare. Esistono cinque status: celibe/nubile,
              coniugato/a, coniugato/a separatamente, capofamiglia e vedova/o
              qualificata/o. Potete leggere le descrizioni complete [qui]. La
              parte difficile è che a volte ci si può qualificare per diversi
              status, ad esempio se si è vedovi da poco e ora si è single. È
              importante decidere quale sia lo status più vantaggioso per voi
              per risparmiare il massimo, quindi assicuratevi di confrontare i
              numeri per entrambi in questa situazione.
            </Text>

            <Text style={Styles.Paragraph}>Compilazione delle imposte </Text>
            <Text style={Styles.TextParagraph}>
              Una volta organizzato tutto, è il momento di archiviare! Potete
              presentare la dichiarazione dei redditi da soli, online o per
              posta, oppure affidarvi a un professionista delle imposte. La
              compilazione da soli consente di risparmiare denaro e può essere
              semplice se si utilizza la deduzione standard (vedi Lezione 2). Se
              desiderate fare una deduzione per quote o se avete una situazione
              particolare (ad esempio, se avete un'attività in proprio con dei
              dipendenti), può valere la pena di rivolgersi a un professionista.
            </Text>

            <Text style={Styles.Paragraph}>Guardando al prossimo anno </Text>
            <Text style={Styles.TextParagraph}>
              Dopo aver presentato la domanda, riceverete un rimborso o una
              fattura. In pratica, il governo esaminerà quanto avete trattenuto
              dal vostro reddito per tutto l'anno e lo confronterà con le
              informazioni che avete presentato, quindi vi rimborserà (rimborso)
              o vi addebiterà un costo aggiuntivo (fattura) se le due cose non
              corrispondono. Per prepararsi all'anno prossimo, è possibile
              modificare l'importo della trattenuta sul reddito in base al
              rimborso (trattenere meno) o alla fattura (trattenere di più).
              Inoltre, assicuratevi di conservare tutti i documenti utilizzati
              per la dichiarazione di quest'anno, nel caso in cui vi servano
              l'anno prossimo o nel caso in cui vi venga chiesto di dimostrare
              qualcosa di quest'anno! Buona fortuna e buona archiviazione!
            </Text>
          </View>
        </View>
        <Button title="QUIZ" onPress={() => navigation.navigate("Quiz3")} />
      </ScrollView>
    </SafeAreaView>
  );
}
