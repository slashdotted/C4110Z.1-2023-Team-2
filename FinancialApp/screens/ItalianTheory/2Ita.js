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
          <Text style={Styles.boldText}>TEORIA PARTE DUE</Text>
          <Image
            source={require("../../assets/theoryPart.jpg")}
            style={Styles.GroupPhoto}
          />
        </View>
        <Text style={Styles.Paragraph}>Che cos'è il budgeting?</Text>
        <View>
          <Text style={Styles.TextParagraph}>
            Il budgeting è il processo di stima delle spese e delle entrate
            personali in un periodo di tempo futuro, che viene poi valutato
            periodicamente per per migliorare le abitudini di spesa. Un budget
            si riferisce al piano effettivo una persona che mostra quanto denaro
            guadagnerà e spenderà in un determinato periodo di tempo. in un
            determinato periodo di tempo. In genere, un budget viene impostato
            mensilmente, Tuttavia, una persona può scegliere qualsiasi periodo
            di tempo che vada bene per lei. Il budgeting permette di rendersi
            conto di come si stanno allocando i fondi. fondi, il che, in cambio,
            dà la possibilità di modificare le spese spese e di risparmiare per
            i beni di prima necessità.
          </Text>

          <Text style={Styles.Paragraph}>Come impostare un budget?</Text>
          <Text style={Styles.TextParagraph}>
            Il primo passo da compiere per la creazione di un budget è il
            calcolare le entrate nette per il periodo di tempo prescelto.
            scelto. Il reddito netto è il totale dei salari e degli stipendi di
            una persona meno eventuali deduzioni. Le detrazioni più comuni sono
            le tasse, i piani piani pensionistici e l'assicurazione sanitaria. È
            fondamentale che una persona basi il proprio bilancio in base al
            proprio reddito netto piuttosto che al reddito totale, al fine di
            evitare di per evitare di spendere troppo perché si crede di avere
            più soldi, che in realtà sono di avere più soldi, che in realtà sono
            persi a causa delle detrazioni. Dopo conoscere la quantità di denaro
            guadagnato nell'arco di tempo scelto, una persona una persona deve
            scoprire i registri delle spese passate durante lo stesso periodo.
            Le spese devono essere suddivise in spese fisse e spese variabili.
            spese fisse e spese variabili. Le spese fisse sono quelle che non
            come, ad esempio, l'affitto della casa o il mutuo, le rate dell'auto
            e le rate dell'assicurazione. Le spese fisse spesso sono necessità e
            devono essere pagate puntualmente entro il periodo. Le spese
            variabili Le spese variabili sono quelle che variano in diversi
            periodi di tempo; Ad esempio, la benzina per l'automobile, le
            utenze, i generi alimentari e l'intrattenimento. intrattenimento.
            Una persona dovrebbe basare le proprie spese variabili per un un
            determinato periodo di tempo sull'importo speso per la categoria
            nello stesso periodo dell'anno precedente. periodo dell'anno
            precedente. Queste informazioni possono essere reperite negli
            estratti conto carta di credito e negli estratti conto bancari, che
            contengono già il dettaglio delle spese. Queste spese tendono a
            classificarsi più come "desideri" e non come "bisogni" e
            rappresentano un ottimo punto di partenza per e rappresentano un
            ottimo punto di partenza per ridurre le spese.
          </Text>
          <Text style={Styles.TextParagraph}>
            Una volta raccolte le informazioni finanziarie per un determinato
            periodo di tempo, si possono tempo, può determinare obiettivi
            realistici e creare un piano per raggiungerli. raggiungerli. In
            primo luogo, una persona analizzerà il denaro che guadagnerà nel
            periodo, nonché quanto e in che modo si è speso il denaro nel
            periodo dell'anno precedente. denaro nel periodo dell'anno
            precedente, e stabilisce alcuni obiettivi finanziari da raggiungere
            alla fine del periodo. Questi obiettivi potrebbero includere
            l'estinzione del debito della carta di credito, la costituzione di
            un fondo di emergenza o il un fondo di emergenza o risparmiare per
            una vacanza. Una persona un piano che pone limiti specifici a ogni
            categoria di spesa in modo da perseguire l'obiettivo di spesa in
            modo da perseguire gli obiettivi scelti. Una tecnica di budgeting
            tecnica di budgeting è quella di utilizzare la regola del 50/30/20,
            secondo la quale il cinquanta per cento dei guadagni il cinquanta
            per cento dei vostri guadagni dovrebbe essere destinato alle
            necessità (affitto), il trenta per cento dovrebbe essere destinato
            ai propri desideri (intrattenimento) e il 20% dovrebbe essere
            destinato ai risparmi. Questo piano è Questo piano viene definito
            "budget personale".
          </Text>

          <Text style={Styles.Paragraph}>Come si usa un budget?</Text>
          <Text style={Styles.TextParagraph}>
            Ora che il budget è stato formato, una persona deve tenere traccia
            delle proprie spese per tutto il periodo, registrando l'importo e la
            destinazione di ogni spesa. di ogni spesa. La persona deve poi
            confrontare periodicamente i dati di spesa periodicamente le proprie
            spese con il budget, assicurandosi che le proprie azioni siano in
            linea con il piano. con il proprio piano. Così facendo, è facile
            rendersi conto se ci si sta allontanando dai propri obiettivi
            finanziari. se si sta allontanando dai propri obiettivi finanziari e
            aggiustare le spese di conseguenza. le spese di conseguenza. Come
            già detto, una persona dovrebbe ridurre alcune spese variabili che
            si notano non che non hanno la precedenza su altre necessità. Se una
            persona non può permettersi di ridurre ulteriormente le spese
            variabili e non si è ancora in grado di spese previste, dovrebbe
            considerare di modificare le spese fisse, in modo da ridurle spese
            fisse, in modo da ridurre anche quelle. Questo può includere il
            trasferimento in un residenza più conveniente o cambiare piano
            assicurativo.
          </Text>

          <Text style={Styles.Paragraph}>Lo scopo del budgeting </Text>
          <Text style={Styles.TextParagraph}>
            Il budgeting permette a una persona di riconoscere e modificare
            facilmente le proprie abitudini di spesa. abitudini di spesa, che a
            loro volta le porteranno a sviluppare un modo più efficace per
            raggiungere i propri obiettivi finanziari e pagare le spese.
            L'utilizzo di un budget aiuterà una persona a possedere denaro per
            le necessità e a risparmiare denaro che si pensava di non poter
            risparmiare. Con il tempo, questi risparmi cresceranno e
            permetteranno alle persone di raggiungere obiettivi finanziari che
            che, in ultima analisi, daranno loro maggiore soddisfazione nella
            vita, che si tratti di una maggiore stabilità finanziaria o di un
            maggiore divertimento. divertimento.
          </Text>
        </View>

        <Button title="QUIZ" onPress={() => navigation.navigate("Quiz")} />
      </ScrollView>
    </SafeAreaView>
  );
}
