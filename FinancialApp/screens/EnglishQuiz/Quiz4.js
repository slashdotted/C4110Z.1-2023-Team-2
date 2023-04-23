import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const questions = [
  {
    id: 1,
    question: "4 Qual è l'animale nazionale dell'Australia?",
    answers: ["Koala", "Canguro", "Wombat"],
    correctAnswer: "Canguro",
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
      <View style={styles.container}>
        <Text style={styles.title}>Hai totalizzato: {score} punti</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Domanda {currentQuestion + 1}</Text>
      <Text style={styles.question}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].answers.map((answer, index) => (
        <TouchableOpacity
          style={styles.answer}
          key={index}
          onPress={() => handleAnswer(answer)}
        >
          <Text>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    marginBottom: 20,
  },
  answer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default Quiz;
