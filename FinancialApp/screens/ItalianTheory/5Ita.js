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
          <Text style={Styles.boldText}>TEORIA PARTE CINQUE</Text>
          <Image
            source={require("../../assets/theoryPart.jpg")}
            style={Styles.GroupPhoto}
          />
        </View>
        <View style={Styles.Separator}>
          <Text style={Styles.Paragraph}>Rendimento composto</Text>
          <View>
            <Text style={Styles.TextParagraph}>
              Il rendimento composto si riferisce al rendimento ottenuto da un
              investimento nell'arco di un un periodo di tempo, tenendo conto
              del reinvestimento di interessi, dividendi o altri guadagni. In
              altre parole, il rendimento composto è il tasso di crescita di un
              investimento che comprende sia il capitale che gli interessi o i
              dividendi maturati su tale capitale. capitale. Il rendimento
              composto è importante da considerare quando di un investimento, in
              quanto riflette la crescita complessiva dell'investimento nel
              tempo, piuttosto che la sola crescita complessiva
              dell'investimento nel tempo, piuttosto che il solo valore
              iniziale.Può anche essere utilizzato per confrontare la
              performance di investimenti con tassi di rendimento e frequenze di
              capitalizzazione diversi. frequenze..
            </Text>
            <Text style={Styles.UnderParagraph}>Esempio:</Text>
            <Text style={Styles.TextParagraph}>
              Supponiamo di investire 10.000 dollari in un'azione che ha un
              rendimento annuo dell'8% per 5 anni. Il rendimento composto può
              essere calcolato come come segue:
            </Text>
            <Text style={Styles.NumberParagraph}>
              Anno 1: $10,000 x (1 + 0.08) = $10,800
            </Text>
            <Text style={Styles.NumberParagraph}>
              Anno 2: $10,800 x (1 + 0.08) = $11,664
            </Text>
            <Text style={Styles.NumberParagraph}>
              Anno 3: $11,664 x (1 + 0.08) = $12,597.12
            </Text>
            <Text style={Styles.NumberParagraph}>
              Anno 4: $12,597.12 x (1 + 0.08) = $13,601.15
            </Text>
            <Text style={Styles.NumberParagraph}>
              Anno 5: $13,601.15 x (1 + 0.08) = $14,678.60
            </Text>
            <Text style={Styles.TextParagraph}>
              Il valore totale dell'investimento dopo 5 anni è di 14.678,60
              dollari. Per calcolare il rendimento composto, possiamo utilizzare
              la seguente formula:
            </Text>
            <Text style={Styles.NumberParagraph}>
              Rendimento composto = (Valore finale/Valore iniziale)^(1 / Numero
              di anni)
            </Text>
            <Text style={Styles.TextParagraph}>
              In questo caso, il valore iniziale è di 10.000 dollari, il valore
              finale è di 14.678,60 dollari e il numero di anni è 5. Inserendo
              questi valori nella formula si ottiene:
            </Text>
            <Text style={Styles.NumberParagraph}>
              Rendimento composto = ($14,678.60 / $10,000)^(1 / 5) - 1 = 0.126 =
              12.6%
            </Text>
            <Text style={Styles.TextParagraph}>
              Pertanto, il rendimento composto di questo investimento in 5 anni
              è del 12.6%. Ciò significa che l'investimento è cresciuto in media
              del 12,6% all'anno nel periodo di 5 anni, senza considerare i
              dividendi o altri guadagni.
            </Text>
            <Text style={Styles.TextParagraph}>
              Se si preme il pulsante qui sotto si potrà calcolare l'interesse
              composto:
            </Text>
          </View>

          <Button
            title="Calcolatore rendimento composto"
            x
            onPress={() => navigation.navigate("CompoundReturnIta")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
