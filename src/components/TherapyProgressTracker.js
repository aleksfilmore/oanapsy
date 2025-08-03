import React, { useState, useEffect } from 'react';

const TherapyProgressTracker = () => {
    const [progressData, setProgressData] = useState([]);
    const [selectedMetric, setSelectedMetric] = useState('mood');
    const [showAddEntry, setShowAddEntry] = useState(false);
    const [newEntry, setNewEntry] = useState({
        date: new Date().toISOString().split('T')[0],
        mood: 5,
        anxiety: 3,
        energy: 5,
        sleep: 7,
        social: 5,
        notes: ''
    });

    // Initialize with some sample data
    useEffect(() => {
        const sampleData = [
            {
                date: '2024-01-15',
                mood: 6,
                anxiety: 4,
                energy: 5,
                sleep: 6,
                social: 4,
                notes: 'Prima ședință - m-am simțit nervos dar optimist'
            },
            {
                date: '2024-01-22',
                mood: 7,
                anxiety: 3,
                energy: 6,
                sleep: 7,
                social: 5,
                notes: 'Am început să înțeleg mai bine trigger-urile mele'
            },
            {
                date: '2024-01-29',
                mood: 8,
                anxiety: 2,
                energy: 7,
                sleep: 8,
                social: 6,
                notes: 'Exercițiile de respirație mă ajută foarte mult'
            },
            {
                date: '2024-02-05',
                mood: 7,
                anxiety: 2,
                energy: 8,
                sleep: 7,
                social: 7,
                notes: 'Am avut o conversație dificilă, dar am gestionat-o bine'
            }
        ];
        setProgressData(sampleData);
    }, []);

    const metrics = {
        mood: { label: 'Starea de spirit', color: 'bg-terracotta', icon: '😊' },
        anxiety: { label: 'Nivel anxietate', color: 'bg-warm-orange', icon: '😰', inverse: true },
        energy: { label: 'Nivel energie', color: 'bg-golden-honey', icon: '⚡' },
        sleep: { label: 'Calitatea somnului', color: 'bg-sage', icon: '😴' },
        social: { label: 'Interacțiuni sociale', color: 'bg-soft-coral', icon: '👥' }
    };

    const handleAddEntry = (e) => {
        e.preventDefault();
        const entry = {
            ...newEntry,
            mood: parseInt(newEntry.mood),
            anxiety: parseInt(newEntry.anxiety),
            energy: parseInt(newEntry.energy),
            sleep: parseInt(newEntry.sleep),
            social: parseInt(newEntry.social)
        };
        setProgressData([...progressData, entry]);
        setNewEntry({
            date: new Date().toISOString().split('T')[0],
            mood: 5,
            anxiety: 3,
            energy: 5,
            sleep: 7,
            social: 5,
            notes: ''
        });
        setShowAddEntry(false);
    };

    const getProgressTrend = (metric) => {
        if (progressData.length < 2) return 'stable';
        const recent = progressData.slice(-3);
        const first = recent[0][metric];
        const last = recent[recent.length - 1][metric];
        
        if (metric === 'anxiety') {
            // For anxiety, lower is better
            if (last < first) return 'improving';
            if (last > first) return 'declining';
        } else {
            // For other metrics, higher is better
            if (last > first) return 'improving';
            if (last < first) return 'declining';
        }
        return 'stable';
    };

    const getTrendIcon = (trend) => {
        switch (trend) {
            case 'improving': return '📈';
            case 'declining': return '📉';
            default: return '➡️';
        }
    };

    const getTrendColor = (trend) => {
        switch (trend) {
            case 'improving': return 'text-green-600';
            case 'declining': return 'text-red-500';
            default: return 'text-sage-600';
        }
    };

    const getAverageScore = (metric) => {
        if (progressData.length === 0) return 0;
        const sum = progressData.reduce((acc, entry) => acc + entry[metric], 0);
        return (sum / progressData.length).toFixed(1);
    };

    const renderProgressChart = () => {
        const maxValue = 10;
        const chartHeight = 200;
        
        return (
            <div className="bg-white rounded-xl p-6 shadow-warm">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-sage-800">
                        Progresul în timp - {metrics[selectedMetric].label}
                    </h3>
                    <div className="flex space-x-2">
                        {Object.entries(metrics).map(([key, metric]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedMetric(key)}
                                className={`px-3 py-1 rounded-full text-sm transition-all ${
                                    selectedMetric === key
                                        ? `${metric.color} text-white`
                                        : 'bg-sage-100 text-sage-600 hover:bg-sage-200'
                                }`}
                            >
                                {metric.icon} {metric.label}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className="relative" style={{ height: chartHeight }}>
                    <svg width="100%" height={chartHeight} className="overflow-visible">
                        {/* Grid lines */}
                        {[0, 2, 4, 6, 8, 10].map(value => (
                            <g key={value}>
                                <line
                                    x1="0"
                                    y1={chartHeight - (value / maxValue) * chartHeight}
                                    x2="100%"
                                    y2={chartHeight - (value / maxValue) * chartHeight}
                                    stroke="#e5e7eb"
                                    strokeWidth="1"
                                />
                                <text
                                    x="-10"
                                    y={chartHeight - (value / maxValue) * chartHeight + 4}
                                    className="text-xs text-sage-500"
                                    textAnchor="end"
                                >
                                    {value}
                                </text>
                            </g>
                        ))}
                        
                        {/* Data line */}
                        {progressData.length > 1 && (
                            <polyline
                                points={progressData.map((entry, index) => {
                                    const x = (index / (progressData.length - 1)) * 100;
                                    const y = chartHeight - (entry[selectedMetric] / maxValue) * chartHeight;
                                    return `${x}%,${y}`;
                                }).join(' ')}
                                fill="none"
                                stroke="#d2691e"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        )}
                        
                        {/* Data points */}
                        {progressData.map((entry, index) => {
                            const x = (index / Math.max(progressData.length - 1, 1)) * 100;
                            const y = chartHeight - (entry[selectedMetric] / maxValue) * chartHeight;
                            return (
                                <g key={index}>
                                    <circle
                                        cx={`${x}%`}
                                        cy={y}
                                        r="6"
                                        fill="#d2691e"
                                        stroke="white"
                                        strokeWidth="2"
                                        className="hover:r-8 transition-all cursor-pointer"
                                    />
                                    <text
                                        x={`${x}%`}
                                        y={chartHeight + 20}
                                        className="text-xs text-sage-600"
                                        textAnchor="middle"
                                    >
                                        {new Date(entry.date).toLocaleDateString('ro-RO', { 
                                            month: 'short', 
                                            day: 'numeric' 
                                        })}
                                    </text>
                                </g>
                            );
                        })}
                    </svg>
                </div>
            </div>
        );
    };

    return (
        <section className="py-20 bg-gradient-to-br from-sage-50 to-golden-honey/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">
                        Urmărește-ți progresul
                    </h2>
                    <p className="text-xl text-sage-600 max-w-2xl mx-auto">
                        Un instrument pentru a-ți monitoriza evoluția emoțională pe parcursul terapiei
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Progress Overview Cards */}
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                        {Object.entries(metrics).map(([key, metric]) => {
                            const trend = getProgressTrend(key);
                            const average = getAverageScore(key);
                            
                            return (
                                <div key={key} className="bg-white rounded-xl p-6 shadow-warm text-center">
                                    <div className="text-2xl mb-2">{metric.icon}</div>
                                    <h3 className="font-semibold text-sage-800 mb-2 text-sm">
                                        {metric.label}
                                    </h3>
                                    <div className="text-2xl font-bold text-terracotta mb-1">
                                        {average}/10
                                    </div>
                                    <div className={`text-sm flex items-center justify-center ${getTrendColor(trend)}`}>
                                        <span className="mr-1">{getTrendIcon(trend)}</span>
                                        <span className="capitalize">{trend === 'improving' ? 'Îmbunătățire' : trend === 'declining' ? 'Scădere' : 'Stabil'}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Progress Chart */}
                    {renderProgressChart()}

                    {/* Recent Entries */}
                    <div className="mt-8 bg-white rounded-xl p-6 shadow-warm">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-sage-800">Înregistrări recente</h3>
                            <button
                                onClick={() => setShowAddEntry(true)}
                                className="bg-terracotta text-white px-4 py-2 rounded-lg hover:bg-terracotta/90 transition-colors"
                            >
                                ➕ Adaugă înregistrare
                            </button>
                        </div>

                        <div className="space-y-4">
                            {progressData.slice(-3).reverse().map((entry, index) => (
                                <div key={index} className="border border-sage-200 rounded-lg p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="font-semibold text-sage-800">
                                            {new Date(entry.date).toLocaleDateString('ro-RO', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </div>
                                        <div className="flex space-x-4 text-sm">
                                            {Object.entries(metrics).map(([key, metric]) => (
                                                <span key={key} className="flex items-center space-x-1">
                                                    <span>{metric.icon}</span>
                                                    <span className="font-medium">{entry[key]}/10</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    {entry.notes && (
                                        <p className="text-sage-600 italic">"{entry.notes}"</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Add Entry Modal */}
                    {showAddEntry && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                            <div className="bg-white rounded-xl p-8 max-w-md w-full max-h-screen overflow-y-auto">
                                <h3 className="text-xl font-bold text-sage-800 mb-6">Adaugă o nouă înregistrare</h3>
                                
                                <form onSubmit={handleAddEntry} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-sage-700 mb-1">
                                            Data
                                        </label>
                                        <input
                                            type="date"
                                            value={newEntry.date}
                                            onChange={(e) => setNewEntry({...newEntry, date: e.target.value})}
                                            className="w-full px-3 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta"
                                        />
                                    </div>

                                    {Object.entries(metrics).map(([key, metric]) => (
                                        <div key={key}>
                                            <label className="block text-sm font-medium text-sage-700 mb-1">
                                                {metric.icon} {metric.label} (1-10)
                                            </label>
                                            <input
                                                type="range"
                                                min="1"
                                                max="10"
                                                value={newEntry[key]}
                                                onChange={(e) => setNewEntry({...newEntry, [key]: e.target.value})}
                                                className="w-full"
                                            />
                                            <div className="text-center text-sm text-sage-600 mt-1">
                                                {newEntry[key]}/10
                                            </div>
                                        </div>
                                    ))}

                                    <div>
                                        <label className="block text-sm font-medium text-sage-700 mb-1">
                                            Notițe (opțional)
                                        </label>
                                        <textarea
                                            value={newEntry.notes}
                                            onChange={(e) => setNewEntry({...newEntry, notes: e.target.value})}
                                            placeholder="Cum te-ai simțit astăzi? Ce ai învățat?"
                                            rows="3"
                                            className="w-full px-3 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta"
                                        />
                                    </div>

                                    <div className="flex space-x-4 pt-4">
                                        <button
                                            type="submit"
                                            className="flex-1 bg-terracotta text-white py-2 px-4 rounded-lg hover:bg-terracotta/90 transition-colors"
                                        >
                                            Salvează
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowAddEntry(false)}
                                            className="flex-1 bg-sage-100 text-sage-700 py-2 px-4 rounded-lg hover:bg-sage-200 transition-colors"
                                        >
                                            Anulează
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Insights */}
                    <div className="mt-8 bg-gradient-to-r from-terracotta/10 to-warm-orange/10 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-sage-800 mb-4">💡 Insight-uri personalizate</h3>
                        <div className="space-y-2 text-sage-700">
                            {getProgressTrend('mood') === 'improving' && (
                                <p>✨ Starea ta de spirit s-a îmbunătățit constant - continuă ce faci!</p>
                            )}
                            {getProgressTrend('anxiety') === 'improving' && (
                                <p>🌟 Nivelul de anxietate a scăzut - tehnicile pe care le practici funcționează.</p>
                            )}
                            {getAverageScore('sleep') < 5 && (
                                <p>😴 Calitatea somnului pare să fie o provocare - să discutăm strategii de îmbunătățire.</p>
                            )}
                            {getAverageScore('social') > 7 && (
                                <p>👥 Interacțiunile sociale merg foarte bine - o mare realizare!</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TherapyProgressTracker;
