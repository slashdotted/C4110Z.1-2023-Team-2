import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Styles from "../../assets/styles/Quiz";

const questions = [
  {
    id: 1,
    question:
      "If you take out a $15,000 loan from a bank with an interest rate of 6%, and a term of 4 years, what is the total simple interest paid on the loan at the end of the term?",
    answers: ["$1,500", "$2,500", "$3,600", "$4,000"],
    correctAnswer: "$3,600",
  },
  {
    id: 2,
    question:
      "If you take out a $15,000 loan from a bank with an interest rate of 6%, and a term of 4 years, what is the total paid to the lender at the end of the term after using a simple interest rate?",
    answers: ["$16,500", "$18,600", "$17,500", "$19,000"],
    correctAnswer: "$18,600",
  },
  {
    id: 3,
    question: "Credit cards are an example of what kind of loan?",
    answers: [
      "Secured, revolving loan",
      "Unsecured, revolving loan",
      "Secured, term loan",
      "Unsecured, term loan",
    ],
    correctAnswer: "Unsecured, revolving loan",
  },
  {
    id: 4,
    question:
      "If you take out a $15,000 loan from a bank with an interest rate of 6%, and a term of 4 years, what is the total compound interest paid on the loan at the end of the term?",
    answers: ["$3,937.15", "$1,576.25", "$4,176.26", "$2,687.32"],
    correctAnswer: "$3,937.15",
  },
  {
    id: 5,
    question:
      "If you take out a $15,000 loan from a bank with an interest rate of 6%, and a term of 4 years, what is the total paid to the lender at the end of the term after using a compound interest rate?",
    answers: ["$16,576.25", "$18.937.15", "$19,176.26", "$17,687.32"],
    correctAnswer: "$18.937.15",
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
