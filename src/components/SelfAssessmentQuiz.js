import React, { useState } from 'react';

const SelfAssessmentQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            id: 1,
            question: "Cât de des te simți îngrijorat(ă) sau anxios(ă)?",
            options: [
                { text: "Niciodată sau foarte rar", score: 0 },
                { text: "Câteva zile pe lună", score: 1 },
                { text: "Câteva zile pe săptămână", score: 2 },
                { text: "Aproape zilnic", score: 3 }
            ]
        },
        {
            id: 2,
            question: "Cât de dificil îți este să te relaxezi?",
            options: [
                { text: "Pentru deloc dificil", score: 0 },
                { text: "Puțin dificil", score: 1 },
                { text: "Destul de dificil", score: 2 },
                { text: "Foarte dificil", score: 3 }
            ]
        },
        {
            id: 3,
            question: "Cât de des îți faci griji excessive despre diferite lucruri?",
            options: [
                { text: "Niciodată", score: 0 },
                { text: "Câteodată", score: 1 },
                { text: "Destul de des", score: 2 },
                { text: "Foarte des", score: 3 }
            ]
        },
        {
            id: 4,
            question: "Cât de des te simți nelinștit(ă), ca și cum nu poți sta pe loc?",
            options: [
                { text: "Niciodată", score: 0 },
                { text: "Câteodată", score: 1 },
                { text: "Destul de des", score: 2 },
                { text: "Aproape mereu", score: 3 }
            ]
        },
        {
            id: 5,
            question: "Cât de des îți este greu să te concentrezi din cauza grijilor?",
            options: [
                { text: "Niciodată", score: 0 },
                { text: "Câteodată", score: 1 },
                { text: "Destul de des", score: 2 },
                { text: "Foarte des", score: 3 }
            ]
        }
    ];

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
        if (score <= 5) {
            return {
                level: "Anxietate minimă",
                message: "Nivelul tău de anxietate pare să fie în limitele normale. Continuă să îți îngrijești sănătatea mentală prin practici de self-care.",
                color: "text-green-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-200"
            };
        } else if (score <= 10) {
            return {
                level: "Anxietate ușoară",
                message: "Experimentezi un nivel ușor de anxietate. Ar putea fi util să înveți tehnici de relaxare și să discuți cu un specialist.",
                color: "text-yellow-600",
                bgColor: "bg-yellow-50",
                borderColor: "border-yellow-200"
            };
        } else if (score <= 15) {
            return {
                level: "Anxietate moderată",
                message: "Nivelul tău de anxietate este moderat. Te încurajez să cauți sprijin profesional pentru a învăța strategii de gestionare eficiente.",
                color: "text-orange-600",
                bgColor: "bg-orange-50",
                borderColor: "border-orange-200"
            };
        } else {
            return {
                level: "Anxietate severă",
                message: "Rezultatele indică un nivel ridicat de anxietate. Este important să contactezi un specialist în sănătate mentală pentru evaluare și tratament.",
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
                        <h3 className="text-2xl font-bold text-deep-earth mb-2">Rezultatele tale</h3>
                        <div className={`${result.color} text-xl font-semibold mb-4`}>
                            {result.level} (Scor: {score}/15)
                        </div>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        {result.message}
                    </p>

                    <div className="bg-white/50 rounded-2xl p-6 mb-8">
                        <h4 className="font-bold text-deep-earth mb-3">💡 Recomandări generale:</h4>
                        <ul className="text-left space-y-2 text-gray-700">
                            <li>• Practică exerciții de respirație și relaxare</li>
                            <li>• Menține un stil de viață sănătos (exerciții, somn, alimentație)</li>
                            <li>• Vorbește cu apropiații despre cum te simți</li>
                            <li>• Consideră consultarea unui psihoterapeut</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={resetQuiz}
                            className="px-6 py-3 bg-terracotta text-white font-semibold rounded-xl hover:bg-warm-orange transition-colors duration-300"
                        >
                            Refă testul
                        </button>
                        <a
                            href="/contact"
                            className="px-6 py-3 bg-deep-earth text-white font-semibold rounded-xl hover:bg-charcoal-text transition-colors duration-300"
                        >
                            Programează o consultație
                        </a>
                    </div>

                    <p className="text-sm text-gray-600 mt-6">
                        *Acest test este doar orientativ și nu înlocuiește o evaluare profesională.
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
                            Întrebarea {currentQuestion + 1} din {questions.length}
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
                            Răspunde sincer pentru rezultate mai precise
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelfAssessmentQuiz;
