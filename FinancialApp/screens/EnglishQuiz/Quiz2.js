import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Styles from "../../assets/styles/Quiz";

const questions = [
  {
    id: 1,
    question: 'Chi ha scritto il romanzo "Il nome della rosa"?',
    answers: ["cuai García Márquez", "Umberto Eco", "Italo Calvino"],
    correctAnswer: "Umberto Eco",
  },
  {
    id: 2,
    question: 'Chi ha scritto il romanzo "Il nome della rosa"?',
    answers: ["Gabriel García Márquez", "Umberto Eco", "Italo Calvino"],
    correctAnswer: "Umberto Eco",
  },
  {
    id: 3,
    question: "Qual è la più grande isola del Mediterraneo?",
    answers: ["Sicilia", "Cipro", "Sardegna"],
    correctAnswer: "Sicilia",
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
      <Text style={Styles.title}>Question {currentQuestion + 1}:</Text>
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
