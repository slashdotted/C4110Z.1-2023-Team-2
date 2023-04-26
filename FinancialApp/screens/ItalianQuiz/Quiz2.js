import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Styles from "../../assets/styles/Quiz";

const questions = [
  {
    id: 1,
    question:
      "Un individuo dovrebbe basare il proprio budget sul proprio reddito netto?",
    answers: ["Vero", "Falso"],
    correctAnswer: "Vero",
  },
  {
    id: 2,
    question: "Un esempio di spesa fissa è?",
    answers: [
      "Spesa per la benzina",
      "I generi alimentari",
      "Mutuo",
      "Biglietti per i concerti",
    ],
    correctAnswer: "Mutuo",
  },
  {
    id: 3,
    question:
      "Qual è la prima categoria di spese che una persona dovrebbe iniziare a ridurre se ha sforato il budget?",
    answers: ["Variabile", "Fisso", "Costose", "Nessuna delle precedenti"],
    correctAnswer: "Variabile",
  },
  {
    id: 4,
    question:
      "Secondo la regola 50/30/20, una persona dovrebbe destinare il 30% dei propri guadagni ai beni di prima necessità?",
    answers: ["Vero", "Falso"],
    correctAnswer: "False",
  },
  {
    id: 5,
    question:
      "Quale linea d'azione dovrebbe seguire un individuo che non può ridurre ulteriormente le spese variabili, ma che è ancora fuori budget?",
    answers: [
      "Modificare le spese fisse",
      "Eliminare completamente le spese variabili",
      "Non preoccuparsi, il budget si prenderà cura di se stesso",
      "Aumentare le entrate",
    ],
    correctAnswer: "Modificare le spese fisse",
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
