import React, { useState } from 'react';

const SelfAssessmentQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useSta                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={resetQuiz}
                        className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                        Refă testul
                    </button>
                    <a
                        href="/contact"
                        className="px-8 py-3 bg-gradient-to-r from-terracotta to-warm-orange text-white rounded-lg hover:shadow-lg transition-all duration-300 inline-block text-center font-medium transform hover:scale-105"
                    >
                        Programează o consultație
                    </a>
                </div>

                <div className="mt-8 bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="text-sm text-gray-600 text-center flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <span>Acest test nu reprezintă un diagnostic medical. Pentru o evaluare completă, consultă un specialist.</span>
                    </div>
                </div>[answers, setAnswers] = useState([]);
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
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border border-gray-200">
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-terracotta to-warm-orange rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-deep-earth mb-2">Rezultatele tale</h3>
                </div>

                <div className="bg-white rounded-xl p-8 mb-8 shadow-md border-l-4 border-terracotta">
                    <h4 className={`text-2xl font-bold mb-4 ${recommendation.color}`}>
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
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border border-gray-200">
            <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-medium text-terracotta bg-terracotta/10 px-4 py-2 rounded-full">
                        Întrebarea {currentQuestion + 1} din {questions.length}
                    </span>
                    <div className="flex space-x-2">
                        {questions.map((_, index) => (
                            <div
                                key={index}
                                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                    index <= currentQuestion 
                                        ? 'bg-gradient-to-r from-terracotta to-warm-orange shadow-md scale-110' 
                                        : 'bg-gray-200'
                                }`}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                    <div
                        className="bg-gradient-to-r from-terracotta to-warm-orange h-3 rounded-full transition-all duration-500 ease-in-out shadow-sm"
                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                </div>
            </div>

            <div className="mb-10">
                <h3 className="text-2xl font-bold text-deep-earth mb-8 leading-relaxed">
                    {questions[currentQuestion].question}
                </h3>

                <div className="space-y-4">
                    {questions[currentQuestion].options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(option.value)}
                            className="w-full text-left p-6 bg-white hover:bg-terracotta/5 rounded-xl transition-all duration-300 border-2 border-gray-200 hover:border-terracotta hover:shadow-lg transform hover:scale-[1.02] group"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-deep-earth font-medium text-lg group-hover:text-terracotta transition-colors duration-200">
                                    {option.text}
                                </span>
                                <div className="w-6 h-6 border-2 border-gray-300 rounded-full group-hover:border-terracotta transition-all duration-200 flex items-center justify-center">
                                    <div className="w-3 h-3 bg-gradient-to-r from-terracotta to-warm-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                    <svg className="w-4 h-4 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-600 font-medium">
                        Alege răspunsul care te descrie cel mai bine în ultima lună
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SelfAssessmentQuiz;
