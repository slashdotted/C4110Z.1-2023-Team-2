import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Styles from "../../assets/styles/Quiz";

const questions = [
  {
    id: 1,
    question:
      "Quali dei seguenti cambiamenti richiede che venga compilato un modulo da allegare alla tua dichiarazione dei redditi?",
    answers: [
      "Hai cambiato il tuo nome",
      "Ti sei trasferito di residenza",
      "Hai avuto una variazione significativa del reddito",
      "Tutte le precedenti",
    ],
    correctAnswer: "Tutte le precedenti",
  },
  {
    id: 2,
    question:
      "Per un'esperienza di dichiarazione dei redditi semplice e senza problemi, è meglio scegliere:",
    answers: ["La detrazione standard", "La detrazione dettagliata"],
    correctAnswer: "La detrazione standard",
  },
  {
    id: 3,
    question:
      "Se ho conservato bollette e ricevute durante l'anno e voglio risparmiare il più possibile, è meglio scegliere:",
    answers: ["La detrazione standard", "La detrazione dettagliata"],
    correctAnswer: "La detrazione dettagliata",
  },
  {
    id: 4,
    question:
      "Cosa dovrei fare se posso qualificarmi per più di uno stato fiscale?",
    answers: [
      "Scegli quello meno complicato nei moduli",
      "Calcola la tua detrazione per ogni stato e scegli la più bassa",
    ],
    correctAnswer:
      "Calcola la tua detrazione per ogni stato e scegli la più bassa",
  },
  {
    id: 5,
    question:
      "Se ho ricevuto una fattura dal governo dopo aver presentato la mia dichiarazione dei redditi, cosa dovrei fare per l'anno prossimo?",
    answers: [
      "Trattenere meno dal mio reddito",
      "Trattenere di più dal mio reddito",
      "Continuare a trattenere lo stesso importo",
    ],
    correctAnswer: "Trattenere di più dal mio reddito",
  },
  {
    id: 6,
    question:
      "Se ho ricevuto un rimborso dal governo dopo aver presentato la mia dichiarazione dei redditi, cosa dovrei fare per l'anno prossimo?",
    answers: [
      "Trattenere meno dal mio reddito",
      "Trattenere di più dal mio reddito",
      "Continuare a trattenere lo stesso importo",
    ],
    correctAnswer: "Trattenere meno dal mio reddito",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <View style={Styles.container}>
        <Text style={Styles.title}>Hai totalizzato: {score} punti</Text>
      </View>
    );
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Domanda {currentQuestion + 1}:</Text>
      <Text style={Styles.question}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].answers.map((answer, index) => (
        <TouchableOpacity
          style={Styles.answer}
          key={index}
          onPress={() => handleAnswer(answer)}
        >
          <Text>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Quiz;
