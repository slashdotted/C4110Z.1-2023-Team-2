import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Styles from "../../assets/styles/Quiz";

const questions = [
  {
    id: 1,
    question: "Che cosa non è un tipo di investimento?",
    answers: ["Azioni", "Immobili", "Obbligazioni", "Contanti"],
    correctAnswer: "Contanti",
  },
  {
    id: 2,
    question: "Chi può acquistare un'azione per voi?",
    answers: [
      "Banche",
      "Società di intermediazione",
      "Commercialisti",
      "Avvocati",
    ],
    correctAnswer: "Società di intermediazione",
  },
  {
    id: 3,
    question: "Qual'è l'investimento più comune?",
    answers: [
      "Beni immobili (una casa)",
      "Le azioni",
      "Obbligazioni",
      "Etf / Fondi comuni di investimento",
    ],
    correctAnswer: "Beni immobili (una casa)",
  },
  {
    id: 4,
    question: "Cosa succede quando un portafoglio è ben diversificato?",
    answers: [
      "Profitto massimo più basso",
      "Aumentare il profitto massimo",
      "Rischio inferiore",
      "Aumento del rischio",
    ],
    correctAnswer: "Rischio inferiore",
  },
  {
    id: 5,
    question: "Quale investimento non ha un rapporto di spesa?",
    answers: [
      "ETF",
      "Fondi comuni di investimento",
      "Le azioni",
      "Nessuna delle precedenti",
    ],
    correctAnswer: "Le azioni",
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
