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
            personali per un periodo di tempo futuro, che viene poi valutato
            periodicamente per migliorare le abitudini di spesa. Un budget si
            riferisce al piano effettivo che una persona sviluppa per mostrare
            quanto denaro guadagnerà e spenderà in un determinato periodo di
            tempo. In genere, un budget viene stabilito mensilmente, ma una
            persona può scegliere qualsiasi arco di tempo che vada bene per lei.
            Il budgeting consente di rendersi conto di come si stanno allocando
            i propri fondi e, di conseguenza, di modificare le proprie spese e
            di risparmiare per le necessità.
          </Text>

          <Text style={Styles.Paragraph}>Come impostare un budget?</Text>
          <Text style={Styles.TextParagraph}>
            Il primo passo da compiere per creare un budget è calcolare il
            reddito netto per il periodo di tempo prescelto. Il reddito netto è
            il totale del salario/ stipendio di una persona meno le eventuali
            detrazioni. Le detrazioni più comuni includono le varie tasse, i
            piani pensionistici e l'assicurazione sanitaria. È fondamentale che
            una persona basi il proprio bilancio sul reddito netto piuttosto che
            sul reddito totale, per evitare di spendere troppo perché crede di
            avere più soldi, che in realtà sono persi a causa delle detrazioni.
            Dopo aver conosciuto la somma di denaro guadagnata nell'arco di
            tempo prescelto, è necessario scoprire i registri delle spese
            passate nello stesso periodo. Le spese devono essere suddivise in
            spese fisse e spese variabili. Le spese fisse sono quelle che non
            cambiano da un periodo all'altro, come ad esempio l'affitto o il
            mutuo della casa, le rate dell'auto e quelle dell'assicurazione. Le
            spese fisse spesso riguardano beni di prima necessità e devono
            essere pagate puntualmente nel periodo. Le spese variabili
            descrivono quelle che variano in diversi periodi di tempo, come ad
            esempio la benzina per l'automobile, le utenze, i generi alimentari
            e l'intrattenimento. Una persona dovrebbe basare le proprie spese
            variabili per un determinato periodo sull'importo speso per la
            categoria nello stesso periodo dell'anno precedente. Queste
            informazioni possono essere reperite negli estratti conto delle
            carte di credito e delle banche, che riportano già il dettaglio
            delle spese. Queste spese tendono a essere classificate più come
            "desideri" che come "necessità" e rappresentano un ottimo punto di
            partenza per ridurre le spese. Una volta raccolte le informazioni
            finanziarie per un determinato periodo di tempo, è possibile
            determinare obiettivi realistici e creare un piano per raggiungerli.
            In primo luogo, una persona analizza il denaro che guadagnerà nel
            periodo, nonché quanto e in che modo ha speso il denaro nel periodo
            dell'anno precedente, e stabilisce determinati obiettivi finanziari
            da raggiungere alla fine del periodo. Questi obiettivi possono
            includere il pagamento del debito della carta di credito, la
            costituzione di un fondo di emergenza o il risparmio per una
            vacanza. Si sviluppa quindi un piano che pone limiti specifici a
            ogni categoria di spesa in modo da perseguire gli obiettivi scelti.
            Una tecnica di budgeting molto diffusa è quella di utilizzare la
            regola del 50/30/20, secondo la quale il 50% dei guadagni dovrebbe
            essere destinato alle necessità (affitto), il 30% ai desideri
            (divertimento) e il 20% ai risparmi. Questo piano viene definito
            budget personale.
          </Text>

          <Text style={Styles.Paragraph}>Come si usa un budget?</Text>
          <Text style={Styles.TextParagraph}>
            Una volta formato il budget, la persona deve tenere traccia delle
            proprie spese per tutto il periodo di tempo, registrando l'importo e
            la destinazione di ogni spesa. La persona deve poi confrontare
            periodicamente i dati di spesa con il budget, assicurandosi che le
            sue azioni siano in linea con il piano. In questo modo, è facile
            rendersi conto se ci si sta allontanando dai propri obiettivi
            finanziari e regolare le spese di conseguenza. Come accennato in
            precedenza, una persona dovrebbe cercare di ridurre alcune spese
            variabili che notano non avere la precedenza su altre necessità. Se
            una persona non può permettersi di ridurre ulteriormente le spese
            variabili e non è ancora in grado di far fronte alle spese previste,
            dovrebbe prendere in considerazione la possibilità di modificare le
            spese fisse, in modo da ridurre anche quelle. Ciò può includere il
            trasferimento in un luogo di residenza più conveniente o il cambio
            di piano assicurativo.
          </Text>

          <Text style={Styles.Paragraph}>Lo scopo del budgeting </Text>
          <Text style={Styles.TextParagraph}>
            Il budgeting permette di riconoscere e modificare facilmente le
            proprie abitudini di spesa, che a loro volta porteranno a sviluppare
            un modo più efficace per raggiungere i propri obiettivi finanziari e
            pagare le spese. L'utilizzo di un budget aiuterà una persona a
            possedere denaro per le necessità e a risparmiare denaro che pensava
            di non poterlo fare. Con il tempo, questi risparmi cresceranno e
            permetteranno alle persone di raggiungere obiettivi finanziari che,
            in ultima analisi, daranno loro maggiore soddisfazione nella loro
            vita, sia che ciò comporti o meno una maggiore stabilità finanziaria
            o un maggiore divertimento.
          </Text>
        </View>

        <Button title="QUIZ" onPress={() => navigation.navigate("Quiz2")} />
      </ScrollView>
    </SafeAreaView>
  );
}
