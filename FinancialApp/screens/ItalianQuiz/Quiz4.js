import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Styles from "../../assets/styles/Quiz";

const questions = [
  {
    id: 1,
    question:
      "Se prendi in prestito $15.000 da una banca con un tasso di interesse del 6% e un termine di 4 anni, qual è l'interesse semplice totale pagato sul prestito alla fine del termine?",
    answers: ["$1,500", "$2,500", "$3,600", "$4,000"],
    correctAnswer: "$3,600",
  },
  {
    id: 2,
    question:
      "Se prendi in prestito $15.000 da una banca con un tasso di interesse del 6% e un termine di 4 anni, qual è il totale pagato al prestatore alla fine del termine utilizzando un tasso di interesse semplice?",
    answers: ["$16,500", "$18,600", "$17,500", "19,000"],
    correctAnswer: "$18,600",
  },
  {
    id: 3,
    question: "Le carte di credito sono un esempio di quale tipo di prestito?",
    answers: [
      "Prestito garantito, a rotazione.",
      "Prestito non garantito, a rotazione.",
      "Prestito garantito, a termine.",
      "Prestito non garantito, a termine.",
    ],
    correctAnswer: "Prestito non garantito, a rotazione.",
  },
  {
    id: 4,
    question:
      "Se prendi in prestito $15.000 da una banca con un tasso di interesse del 6% e un termine di 4 anni, qual è l'interesse composto totale pagato sul prestito alla fine del termine?",
    answers: ["$3.937,15", "$1.576,25", "$4.176,26", "$2.687,32"],
    correctAnswer: "$3.937,15",
  },
  {
    id: 5,
    question:
      "Se prendi in prestito $15.000 da una banca con un tasso di interesse del 6% e un termine di 4 anni, qual è il totale pagato al prestatore alla fine del termine utilizzando un tasso di interesse composto?",
    answers: ["$16.576,25", "$18.937,15", "$19.176,26", "$17.687,32"],
    correctAnswer: "$18.937,15",
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
