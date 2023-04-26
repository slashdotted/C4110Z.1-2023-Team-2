import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Styles from "../../assets/styles/Quiz";

const questions = [
  {
    id: 1,
    question: "What is not a type of investment?",
    answers: ["Stocks", "Real Estate", "Bonds", "Cash"],
    correctAnswer: "Cash",
  },
  {
    id: 2,
    question: "Who can purchase a stock for you?",
    answers: ["Banks", "Brokerage Companies", "Accountants", "Lawyers"],
    correctAnswer: "Brokerage Companies",
  },
  {
    id: 3,
    question: "What is the most common investment?",
    answers: ["Real Estate (a home)", "Stocks", "Bonds", "ETFs / Mutual Funds"],
    correctAnswer: "Real Estate (a home)",
  },
  {
    id: 4,
    question: "What happens when a portfolio becomes diversified?",
    answers: [
      "Lower maximum profit",
      "Increase maximum profit",
      "Lower risk",
      "Increase risk",
    ],
    correctAnswer: "Lower risk",
  },
  {
    id: 5,
    question: "Which investment does not have an expense ratio?",
    answers: ["ETFs", "Stocks", "Mutual Funds", "None of the above"],
    correctAnswer: "Stocks",
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
        <Text style={Styles.title}>Your scored: {score} points</Text>
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
