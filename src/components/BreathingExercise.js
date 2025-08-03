import React, { useState, useEffect, useCallback, useMemo } from 'react';

const BreathingExercise = () => {
    const [isActive, setIsActive] = useState(false);
    const [phase, setPhase] = useState('inhale'); // 'inhale', 'hold', 'exhale', 'pause'
    const [timeLeft, setTimeLeft] = useState(4);
    const [cycle, setCycle] = useState(0);

    const phases = useMemo(() => ({
        inhale: { duration: 4, next: 'hold', text: 'Inspiră' },
        hold: { duration: 4, next: 'exhale', text: 'Ține' },
        exhale: { duration: 4, next: 'pause', text: 'Expiră' },
        pause: { duration: 4, next: 'inhale', text: 'Pauză' }
    }), []);

    const handlePhaseTransition = useCallback(() => {
        const currentPhase = phases[phase];
        const nextPhase = currentPhase.next;
        
        setPhase(nextPhase);
        setTimeLeft(phases[nextPhase].duration);
        
        if (nextPhase === 'inhale') {
            setCycle(prevCycle => prevCycle + 1);
        }
    }, [phase, phases]);

    useEffect(() => {
        let interval = null;
        
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
        } else if (isActive && timeLeft === 0) {
            handlePhaseTransition();
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive, timeLeft, handlePhaseTransition]);

    const startExercise = () => {
        setIsActive(true);
        setPhase('inhale');
        setTimeLeft(4);
        setCycle(0);
    };

    const stopExercise = () => {
        setIsActive(false);
        setPhase('inhale');
        setTimeLeft(4);
        setCycle(0);
    };

    const getCircleSize = () => {
        switch (phase) {
            case 'inhale':
                return 'w-32 h-32';
            case 'hold':
                return 'w-32 h-32';
            case 'exhale':
                return 'w-20 h-20';
            case 'pause':
                return 'w-20 h-20';
            default:
                return 'w-24 h-24';
        }
    };

    return (
        <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-sage/20 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-20 h-20 bg-sage rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-terracotta rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-warm-orange rounded-full"></div>
            </div>
            
            <div className="text-center relative z-10">
                <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-sage to-terracotta rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-deep-earth mb-2">
                        Exercițiu de Respirație
                    </h3>
                    <p className="text-warm-gray text-sm">
                        Tehnica respirației pătrate pentru reducerea anxietății
                    </p>
                </div>
                
                <div className="flex justify-center items-center mb-8">
                    <div className="relative">
                        {/* Outer breathing ring */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-sage/30 to-terracotta/30 transition-all duration-1000 ease-in-out rounded-full ${isActive ? 'animate-pulse' : ''}`}></div>
                        
                        {/* Main breathing circle */}
                        <div 
                            className={`bg-gradient-to-br from-sage to-emerald-600 transition-all duration-1000 ease-in-out rounded-full flex items-center justify-center shadow-lg ${getCircleSize()}`}
                        >
                            <div className="text-center">
                                <div className="text-white font-bold text-base mb-1">
                                    {isActive ? phases[phase].text : 'Gata să începi?'}
                                </div>
                                {isActive && (
                                    <div className="text-white text-3xl font-bold animate-pulse">
                                        {timeLeft}
                                    </div>
                                )}
                                {!isActive && (
                                    <div className="text-white text-sm opacity-90">
                                        Apasă pentru a începe
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {isActive && (
                    <div className="mb-6 p-4 bg-sage/10 rounded-xl">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-deep-earth">Progres:</span>
                            <span className="text-lg font-bold text-sage">{cycle}/5 cicluri</span>
                        </div>
                        <div className="w-full bg-sage/20 rounded-full h-2 mt-2">
                            <div 
                                className="bg-gradient-to-r from-sage to-emerald-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${(cycle / 5) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                )}

                <div className="space-y-3">
                    {!isActive ? (
                        <button
                            onClick={startExercise}
                            className="w-full px-6 py-4 bg-gradient-to-r from-terracotta to-warm-orange text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
                        >
                            <span className="flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10v4a4 4 0 008 0v-4" />
                                </svg>
                                Începe Exercițiul
                            </span>
                        </button>
                    ) : (
                        <button
                            onClick={stopExercise}
                            className="w-full px-6 py-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                        >
                            <span className="flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10h6v4H9z" />
                                </svg>
                                Oprește
                            </span>
                        </button>
                    )}
                </div>

                <div className="mt-6 text-xs text-warm-gray bg-soft-yellow/30 rounded-lg p-3">
                    <p className="font-medium">💡 Cum funcționează:</p>
                    <p className="mt-1">Urmează cercul și respiră în ritmul indicat pentru a-ți calma mintea și a reduce stresul.</p>
                </div>
            </div>
        </div>
    );
};

export default BreathingExercise;
