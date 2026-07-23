import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SelfAssessmentQuiz = () => {
    const { t } = useTranslation();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const questions = t('quiz.questions', { returnObjects: true });


    const handleAnswerSelect = (score) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = score;
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    const calculateScore = () => {
        return answers.reduce((total, score) => total + score, 0);
    };

    const getResultMessage = (score) => {
        const results = t('quiz.results', { returnObjects: true });
        if (score <= 5) {
            return {
                level: results.minimal.level,
                message: results.minimal.message,
                color: "text-green-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-200"
            };
        } else if (score <= 10) {
            return {
                level: results.mild.level,
                message: results.mild.message,
                color: "text-yellow-600",
                bgColor: "bg-yellow-50",
                borderColor: "border-yellow-200"
            };
        } else if (score <= 15) {
            return {
                level: results.moderate.level,
                message: results.moderate.message,
                color: "text-orange-600",
                bgColor: "bg-orange-50",
                borderColor: "border-orange-200"
            };
        } else {
            return {
                level: results.severe.level,
                message: results.severe.message,
                color: "text-red-600",
                bgColor: "bg-red-50",
                borderColor: "border-red-200"
            };
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setAnswers([]);
        setShowResults(false);
    };

    if (showResults) {
        const score = calculateScore();
        const result = getResultMessage(score);

        return (
            <div className="max-w-2xl mx-auto">
                <div className={`${result.bgColor} ${result.borderColor} border-2 rounded-3xl p-8 text-center`}>
                    <div className="mb-6">
                        <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-3xl">📊</span>
                        </div>
                        <h3 className="text-2xl font-bold text-deep-earth mb-2">{t('quiz.ui.your_results')}</h3>
                        <div className={`${result.color} text-xl font-semibold mb-4`}>
                            {result.level} ({t('quiz.ui.score')}: {score}/15)
                        </div>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        {result.message}
                    </p>

                    <div className="bg-white/50 rounded-2xl p-6 mb-8">
                        <h4 className="font-bold text-deep-earth mb-3">{t('quiz.ui.recommendations')}</h4>
                        <ul className="text-left space-y-2 text-gray-700">
                            <li>{t('quiz.ui.rec1')}</li>
                            <li>{t('quiz.ui.rec2')}</li>
                            <li>{t('quiz.ui.rec3')}</li>
                            <li>{t('quiz.ui.rec4')}</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={resetQuiz}
                            className="px-6 py-3 bg-terracotta text-white font-semibold rounded-xl hover:bg-warm-orange transition-colors duration-300"
                        >
                            {t('quiz.ui.btn_retake')}
                        </button>
                        <a
                            href="/contact"
                            className="px-6 py-3 bg-deep-earth text-white font-semibold rounded-xl hover:bg-charcoal-text transition-colors duration-300"
                        >
                            {t('quiz.ui.btn_consultation')}
                        </a>
                    </div>

                    <p className="text-sm text-gray-600 mt-6">
                        {t('quiz.ui.disclaimer')}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Progress Bar */}
                <div className="bg-gradient-to-r from-terracotta to-warm-orange h-2">
                    <div 
                        className="bg-white h-full transition-all duration-500 ease-out"
                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                </div>

                <div className="p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-terracotta to-warm-orange rounded-full flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">{currentQuestion + 1}</span>
                        </div>
                        <h3 className="text-xl font-bold text-deep-earth mb-2">
                            {t('quiz.ui.question_x_of_y', { current: currentQuestion + 1, total: questions.length })}
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mx-auto"></div>
                    </div>

                    {/* Question */}
                    <div className="mb-8">
                        <h4 className="text-2xl font-semibold text-deep-earth text-center leading-relaxed">
                            {questions[currentQuestion].question}
                        </h4>
                    </div>

                    {/* Answer Options */}
                    <div className="space-y-4">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(option.score)}
                                className="w-full p-4 text-left bg-gray-50 hover:bg-terracotta/10 border-2 border-gray-200 hover:border-terracotta rounded-xl transition-all duration-300 group"
                            >
                                <div className="flex items-center">
                                    <div className="w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-terracotta mr-4 flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-terracotta opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <span className="text-gray-700 group-hover:text-deep-earth font-medium">
                                        {option.text}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500">
                            {t('quiz.ui.answer_honestly')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelfAssessmentQuiz;
