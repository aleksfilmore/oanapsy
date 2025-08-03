import React, { useState } from 'react';

const SelfAssessmentQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            id: 1,
            question: "În ultima lună, cât de des te-ai simțit copleșit(ă) de îngrijorări?",
            options: [
                { text: "Aproape niciodată", value: 0 },
                { text: "Uneori", value: 1 },
                { text: "Des", value: 2 },
                { text: "Aproape zilnic", value: 3 }
            ]
        },
        {
            id: 2,
            question: "Cât de des ai dificultăți în a adormi sau a rămâne adormit(ă)?",
            options: [
                { text: "Niciodată", value: 0 },
                { text: "Uneori", value: 1 },
                { text: "Frecvent", value: 2 },
                { text: "Aproape în fiecare noapte", value: 3 }
            ]
        },
        {
            id: 3,
            question: "Cât de des te simți trist(ă) sau descurajat(ă)?",
            options: [
                { text: "Foarte rar", value: 0 },
                { text: "Uneori", value: 1 },
                { text: "Des", value: 2 },
                { text: "Majoritatea timpului", value: 3 }
            ]
        },
        {
            id: 4,
            question: "Cât de mult îți afectează stresul activitățile zilnice?",
            options: [
                { text: "Deloc", value: 0 },
                { text: "Puțin", value: 1 },
                { text: "Moderat", value: 2 },
                { text: "Foarte mult", value: 3 }
            ]
        },
        {
            id: 5,
            question: "Cât de des eviti situații sociale din cauza anxietății?",
            options: [
                { text: "Niciodată", value: 0 },
                { text: "Rareori", value: 1 },
                { text: "Uneori", value: 2 },
                { text: "Frecvent", value: 3 }
            ]
        }
    ];

    const handleAnswer = (value) => {
        const newAnswers = [...answers, value];
        setAnswers(newAnswers);

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    const calculateScore = () => {
        return answers.reduce((sum, answer) => sum + answer, 0);
    };

    const getRecommendation = (score) => {
        if (score <= 3) {
            return {
                level: "Stare de bine generală",
                color: "text-green-600",
                message: "Pare că te descurci bine din punct de vedere emoțional. Continuă să ai grijă de tine!",
                suggestion: "Menține rutinele sănătoase și ia în considerare tehnicile de prevenire pentru a rămâne echilibrat(ă)."
            };
        } else if (score <= 7) {
            return {
                level: "Stres moderat",
                color: "text-yellow-600",
                message: "Experimentezi un nivel moderat de stres sau anxietate. Este normal și tratabil.",
                suggestion: "Ar fi benefic să explorezi tehnici de gestionare a stresului sau să vorbești cu un specialist."
            };
        } else if (score <= 11) {
            return {
                level: "Anxietate crescută",
                color: "text-orange-600",
                message: "Pare că treci printr-o perioadă dificilă. Nu ești singur(ă) în această experiență.",
                suggestion: "Recomand să iei în considerare o consultație cu un psihoterapeut pentru suport personalizat."
            };
        } else {
            return {
                level: "Stres semnificativ",
                color: "text-red-600",
                message: "Simptomele pe care le experimentezi pot afecta calitatea vieții tale.",
                suggestion: "Este important să cauți ajutor profesional. O consultație poate face o diferență mare."
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
        const recommendation = getRecommendation(score);

        return (
            <div className="bg-white rounded-xl p-8 shadow-warm max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-terracotta to-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-sage-800 mb-2">Rezultatele tale</h3>
                </div>

                <div className="bg-sage-50 rounded-lg p-6 mb-6">
                    <h4 className={`text-xl font-semibold mb-3 ${recommendation.color}`}>
                        {recommendation.level}
                    </h4>
                    <p className="text-sage-700 mb-4">{recommendation.message}</p>
                    <p className="text-sage-600 text-sm">{recommendation.suggestion}</p>
                </div>

                <div className="text-center space-y-4">
                    <button
                        onClick={resetQuiz}
                        className="px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors mr-4"
                    >
                        Refă testul
                    </button>
                    <a
                        href="/contact"
                        className="px-6 py-3 bg-gradient-to-r from-terracotta to-warm-orange text-white rounded-lg hover:shadow-warm transition-all duration-300 inline-block"
                    >
                        Programează o consultație
                    </a>
                </div>

                <div className="mt-6 text-xs text-sage-500 text-center">
                    * Acest test nu reprezintă un diagnostic medical. Pentru o evaluare completă, consultă un specialist.
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl p-8 shadow-warm max-w-2xl mx-auto">
            <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-sage-600">
                        Întrebarea {currentQuestion + 1} din {questions.length}
                    </span>
                    <div className="flex space-x-1">
                        {questions.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full ${
                                    index <= currentQuestion ? 'bg-terracotta' : 'bg-sage-200'
                                }`}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-full bg-sage-200 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-terracotta to-warm-orange h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold text-sage-800 mb-6">
                    {questions[currentQuestion].question}
                </h3>

                <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(option.value)}
                            className="w-full text-left p-4 bg-sage-50 hover:bg-sage-100 rounded-lg transition-colors border border-transparent hover:border-sage-300"
                        >
                            {option.text}
                        </button>
                    ))}
                </div>
            </div>

            <div className="text-center text-sm text-sage-500">
                Alege răspunsul care te descrie cel mai bine în ultima lună
            </div>
        </div>
    );
};

export default SelfAssessmentQuiz;
