import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Styles from "../../assets/styles/Quiz";

const questions = [
  {
    id: 1,
    question: "An individual should base their budget off their net income. ",
    answers: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 2,
    question: "One example of a fixed expense is: ",
    answers: ["Gas expenses", "Groceries", "Mortgage", "Concert tickets"],
    correctAnswer: "Mortgage",
  },
  {
    id: 3,
    question:
      "What is the first category of expenses a person should start reducing if they are over budget?",
    answers: ["Variable", "Fixed", "Pricey", "None of the above"],
    correctAnswer: "Variable",
  },
  {
    id: 4,
    question:
      "According to the 50/30/20 rule, an individual should allocate 30% of their earnings to necessities.",
    answers: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 5,
    question:
      "What course of action should an individual take if they cannot reduce their variable expenses any further, yet they are still over budget?",
    answers: [
      "Alter fixed expenses",
      "Completely get rid of variable expenses",
      "Do not worry about it, the budget will take care of itself",
      "Increase your income",
    ],
    correctAnswer: "Alter fixed expenses",
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
