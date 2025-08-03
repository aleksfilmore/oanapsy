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

    const getSquareSize = () => {
        switch (phase) {
            case 'inhale':
                return 'w-36 h-36';
            case 'hold':
                return 'w-36 h-36';
            case 'exhale':
                return 'w-24 h-24';
            case 'pause':
                return 'w-24 h-24';
            default:
                return 'w-28 h-28';
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
                    <div className="w-16 h-16 bg-gradient-to-br from-sage to-terracotta rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-deep-earth mb-2">
                        Tehnica Respirației Pătrate
                    </h3>
                    <p className="text-warm-gray text-sm">
                        Pentru reducerea anxietății și relaxare profundă
                    </p>
                </div>
                
                <div className="flex justify-center items-center mb-8">
                    <div className="relative">
                        {/* Outer breathing ring - square */}
                        <div className={`absolute -inset-4 bg-gradient-to-r from-sage/20 to-terracotta/20 transition-all duration-1000 ease-in-out rounded-3xl ${isActive ? 'animate-pulse' : ''}`}></div>
                        
                        {/* Main breathing square - clickable */}
                        <button 
                            onClick={!isActive ? startExercise : stopExercise}
                            className={`bg-gradient-to-br from-sage to-emerald-600 transition-all duration-1000 ease-in-out rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95 cursor-pointer ${getSquareSize()}`}
                        >
                            <div className="text-center px-4 py-2">
                                <div className="text-white font-bold text-lg mb-2">
                                    {isActive ? phases[phase].text : 'Începe exercițiul'}
                                </div>
                                {isActive && (
                                    <div className="text-white text-4xl font-bold animate-pulse mb-1">
                                        {timeLeft}
                                    </div>
                                )}
                                {!isActive && (
                                    <div className="text-white text-sm opacity-90 leading-relaxed">
                                        Apasă aici ↑
                                    </div>
                                )}
                            </div>
                        </button>
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

                {/* Instructions - updated */}
                <div className="text-center">
                    {!isActive ? (
                        <div className="text-sm text-warm-gray bg-soft-yellow/20 rounded-lg p-3">
                            <p className="font-medium">💡 Cum funcționează:</p>
                            <p className="mt-1">Apasă pătratul pentru a începe. Urmează instrucțiunile și respiră în ritmul indicat pentru a-ți calma mintea.</p>
                        </div>
                    ) : (
                        <div className="text-sm text-warm-gray bg-sage/10 rounded-lg p-3">
                            <p className="font-medium">🧘‍♀️ În desfășurare:</p>
                            <p className="mt-1">Urmează pătratul și respiră în ritmul indicat. Apasă din nou pentru a opri.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BreathingExercise;
