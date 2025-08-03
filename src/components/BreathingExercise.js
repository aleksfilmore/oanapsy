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
        <div className="bg-ivory dark:bg-charcoal-text rounded-xl p-8 max-w-md mx-auto shadow-lg">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-charcoal-text dark:text-cream-text mb-4">
                    Exercițiu de Respirație
                </h3>
                <p className="text-charcoal-text/80 dark:text-cream-text/80 mb-6">
                    Tehnica respirației pătrate pentru reducerea anxietății
                </p>
                
                <div className="flex justify-center items-center mb-6">
                    <div 
                        className={`bg-sage transition-all duration-1000 ease-in-out rounded-full flex items-center justify-center ${getCircleSize()}`}
                    >
                        <div className="text-center">
                            <div className="text-white font-bold text-lg">
                                {isActive ? phases[phase].text : 'Gata să începi?'}
                            </div>
                            {isActive && (
                                <div className="text-white text-2xl font-bold">
                                    {timeLeft}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {isActive && (
                    <div className="mb-4 text-charcoal-text dark:text-cream-text">
                        <p>Ciclu: {cycle}/5</p>
                    </div>
                )}

                <div className="space-y-3">
                    {!isActive ? (
                        <button
                            onClick={startExercise}
                            className="w-full px-6 py-3 bg-terracotta text-white font-semibold rounded-lg hover:bg-terracotta/90 transition-colors"
                        >
                            Începe Exercițiul
                        </button>
                    ) : (
                        <button
                            onClick={stopExercise}
                            className="w-full px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
                        >
                            Oprește
                        </button>
                    )}
                </div>

                <div className="mt-4 text-sm text-charcoal-text/70 dark:text-cream-text/70">
                    <p>Urmează cercul și respiră în ritmul indicat</p>
                </div>
            </div>
        </div>
    );
};

export default BreathingExercise;
