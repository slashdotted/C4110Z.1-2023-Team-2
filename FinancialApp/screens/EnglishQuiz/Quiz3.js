import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Styles from "../../assets/styles/Quiz";

const questions = [
  {
    id: 1,
    question:
      "Which of the following changes requires a form to be filed with your tax return?",
    answers: [
      "Changed your name",
      "Moved residence",
      "Major change in income",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    id: 2,
    question:
      "For a simple, hassle-free tax filing experience, I’m better off choosing:",
    answers: ["Standard deduction", "Itemized deduction"],
    correctAnswer: "Standard deduction",
  },
  {
    id: 3,
    question:
      "If I’ve saved bills and receipts throughout the year, and I want to work to save as much money as possible, I’m better off choosing:  ",
    answers: ["Standard deduction", "Itemized deduction"],
    correctAnswer: "Itemized deduction",
  },
  {
    id: 4,
    question: "What should I do if I qualify for multiple filing statuses?",
    answers: [
      "Pick whichever one is less complicated on the forms",
      "Calculate your deduction for each status and choose the lowest one",
    ],
    correctAnswer:
      "Calculate your deduction for each status and choose the lowest one",
  },
  {
    id: 5,
    question:
      "If I received a bill from the government after my taxes have been filed, what should I do for next year?",
    answers: [
      "Withhold less from my income",
      "Withhold more from my income",
      "Continue to withhold the same amount",
    ],
    correctAnswer: "Withhold more from my income",
  },
  {
    id: 6,
    question:
      "If I received a refund from the government after my taxes have been filed, what should I do for next year?",
    answers: [
      "Withhold less from my income",
      "Withhold more from my income",
      "Continue to withhold the same amount",
    ],
    correctAnswer: "Withhold less from my income",
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
        <Text style={Styles.title}>You scored: {score} points</Text>
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
