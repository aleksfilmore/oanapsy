import React, { useState, useMemo } from 'react';

const InteractiveFAQ = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [openItems, setOpenItems] = useState(new Set());

    const faqData = useMemo(() => [
        {
            id: 1,
            category: 'terapie',
            question: "Ce este psihoterapia și cum poate să mă ajute?",
            answer: "Psihoterapia este un proces colaborativ între terapeut și client, care vizează îmbunătățirea bunăstării emoționale și mentale. Prin diverse tehnici și abordări, terapia te poate ajuta să înțelegi mai bine emoțiile, să dezvolți strategii de coping sănătoase și să creezi schimbări pozitive în viața ta. Este un spațiu sigur unde poți explora gândurile și sentimentele fără judecată."
        },
        {
            id: 2,
            category: 'programare',
            question: "Cum pot programa o ședință?",
            answer: "Poți programa o ședință prin mai multe modalități: sună-mă direct la numărul de telefon afișat pe site, trimite-mi un email prin formularul de contact, sau folosește sistemul de programare online. De obicei răspund în maxim 24 de ore pentru a confirma programarea și a discuta detaliile ședinței."
        },
        {
            id: 3,
            category: 'online',
            question: "Cum funcționează ședințele online?",
            answer: "Ședințele online se desfășoară prin platforme sigure de videoconferință (Zoom, Google Meet sau WhatsApp Video). Îți voi trimite link-ul cu câteva ore înainte de ședință. Asigură-te că ai o conexiune stabilă la internet și un spațiu privat unde să nu fii întrerupt. Eficiența terapiei online este comparabilă cu cea față în față."
        },
        {
            id: 4,
            category: 'costuri',
            question: "Cum pot afla informații despre tarife?",
            answer: "Pentru informații detaliate despre tarife și opțiuni de plată, te rog să mă contactezi direct prin email sau telefon. Voi fi bucuroasă să discutăm despre aspectele financiare în cadrul unei conversații personalizate, ținând cont de nevoile tale specifice."
        },
        {
            id: 5,
            category: 'confidentialitate',
            question: "Cât de confidențiale sunt informațiile pe care le împărtășesc?",
            answer: "Confidențialitatea este fundamentală în terapie. Tot ce discutăm rămâne strict confidențial, conform codului deontologic și legilor în vigoare. Singurele excepții ar fi situațiile în care există risc imediat pentru siguranța ta sau a altcuiva, sau când legea impune raportarea (ex: abuzul asupra minorilor)."
        },
        {
            id: 6,
            category: 'durata',
            question: "Cât durează procesul terapeutic?",
            answer: "Durata terapiei variază în funcție de nevoile individuale, obiectivele terapeutice și complexitatea problemelor abordate. Unele persoane observă îmbunătățiri după câteva ședințe, în timp ce altele beneficiază de un proces mai lung. De obicei, evaluez progresul după 6-8 ședințe și discutăm împreună despre continuarea terapiei."
        },
        {
            id: 7,
            category: 'terapie',
            question: "Ce tip de abordare terapeutică folosești?",
            answer: "Folosesc o abordare integrativă, adaptată nevoilor fiecărei persoane. Principalele metode pe care le aplicăm includ Terapia Cognitiv-Comportamentală (TCC), tehnici de mindfulness, terapia bazată pe emoții și elemente de terapie sistemică pentru cupluri și familii. Abordarea se personalizează în funcție de situația ta specifică."
        },
        {
            id: 8,
            category: 'prima-sedinta',
            question: "La ce să mă aștept la prima ședință?",
            answer: "Prima ședință este dedicată cunoașterii și evaluării. Vei putea să îmi povestești despre motivul pentru care ai venit la terapie, istoricul problemelor pe care le înfrunți și obiectivele tale. Îți voi explica cum funcționează procesul terapeutic și vom discuta despre confidențialitate. Este normal să te simți puțin nervos - voi crea un ambiente cald și lipsit de judecăți."
        },
        {
            id: 9,
            category: 'urgente',
            question: "Ce fac dacă am o criză în afara programului?",
            answer: "Pentru situații de urgență, te rog să contactezi serviciile de urgență (112) sau Telefonul de Ajutor Emoțional (0800.808.080 - gratuit, 24/7). Poți să îmi scrii un mesaj și îți voi răspunde cât mai curând posibil, dar pentru crize acute este important să apelezi la serviciile specializate de urgență."
        },
        {
            id: 10,
            category: 'cuplu',
            question: "Cum știu dacă am nevoie de terapie de cuplu?",
            answer: "Terapia de cuplu poate fi benefică atunci când există probleme de comunicare recurente, conflicte nerezolvate, crize de încredere, intimitate redusă sau când simțiți că vă îndepărtați unul de celălalt. Nu este necesar să așteptați până când problemele devin foarte grave - terapia preventivă poate consolida relația și poate preveni escaladarea conflictelor."
        },
        {
            id: 11,
            category: 'anulare',
            question: "Care este politica de anulare a ședințelor?",
            answer: "Te rog să anulezi sau să reprogramezi ședințele cu cel puțin 24 de ore înainte. Anulările făcute cu mai puțin de 24 de ore notificare vor fi taxate 50% din valoarea ședinței, exceptând situațiile de urgență medicală. Această politică mă ajută să îmi gestionez timpul și să ofer slot-uri disponibile altor persoane."
        },
        {
            id: 12,
            category: 'rezultate',
            question: "Cum voi ști că terapia funcționează?",
            answer: "Progresul în terapie poate fi observat prin mai multe semne: îmbunătățirea stării de spirit, dezvoltarea unor strategii mai bune de gestionare a stresului, relații mai sănătoase, creșterea încrederii în sine și o mai bună înțelegere de sine. Evaluăm progresul periodic și ajustăm abordarea dacă este necesar. Unele schimbări sunt imediate, altele se dezvoltă gradual."
        }
    ], []);

    const categories = [
        { id: 'all', name: 'Toate', icon: '🌟' },
        { id: 'terapie', name: 'Despre terapie', icon: '💭' },
        { id: 'programare', name: 'Programări', icon: '📅' },
        { id: 'online', name: 'Ședințe online', icon: '💻' },
        { id: 'costuri', name: 'Costuri', icon: '💰' },
        { id: 'confidentialitate', name: 'Confidențialitate', icon: '🔒' },
        { id: 'cuplu', name: 'Terapie cuplu', icon: '💕' }
    ];

    const filteredFAQs = useMemo(() => {
        return faqData.filter(item => {
            const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                item.answer.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory, faqData]);

    const toggleItem = (id) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    const expandAll = () => {
        setOpenItems(new Set(filteredFAQs.map(item => item.id)));
    };

    const collapseAll = () => {
        setOpenItems(new Set());
    };

    return (
        <section className="py-20 bg-gradient-to-br from-sage-50 to-soft-yellow/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">
                        Întrebări frecvente
                    </h2>
                    <p className="text-xl text-sage-600 max-w-2xl mx-auto">
                        Răspunsuri la cele mai comune întrebări despre terapie și serviciile mele
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Search and filters */}
                    <div className="mb-8 space-y-4">
                        {/* Search bar */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Caută în întrebările frecvente..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="block w-full pl-10 pr-3 py-3 border border-sage-200 rounded-xl leading-5 bg-white placeholder-sage-400 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta"
                            />
                        </div>

                        {/* Category filters */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                        selectedCategory === category.id
                                            ? 'bg-terracotta text-white shadow-md'
                                            : 'bg-white text-sage-600 hover:bg-sage-50 border border-sage-200'
                                    }`}
                                >
                                    <span className="mr-1">{category.icon}</span>
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        {/* Expand/Collapse controls */}
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-sage-600">
                                {filteredFAQs.length} {filteredFAQs.length === 1 ? 'întrebare găsită' : 'întrebări găsite'}
                            </span>
                            <div className="space-x-2">
                                <button
                                    onClick={expandAll}
                                    className="text-terracotta hover:text-terracotta/80 font-medium"
                                >
                                    Extinde toate
                                </button>
                                <span className="text-sage-300">•</span>
                                <button
                                    onClick={collapseAll}
                                    className="text-terracotta hover:text-terracotta/80 font-medium"
                                >
                                    Închide toate
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {filteredFAQs.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="text-sage-400 text-lg mb-2">🤔</div>
                                <p className="text-sage-500">Nu am găsit întrebări care să corespundă căutării tale.</p>
                                <button
                                    onClick={() => {
                                        setSearchTerm('');
                                        setSelectedCategory('all');
                                    }}
                                    className="mt-4 text-terracotta hover:text-terracotta/80 font-medium"
                                >
                                    Resetează filtrele
                                </button>
                            </div>
                        ) : (
                            filteredFAQs.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-xl shadow-sm border border-sage-100 overflow-hidden transition-all hover:shadow-md"
                                >
                                    <button
                                        onClick={() => toggleItem(item.id)}
                                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-sage-50 transition-colors"
                                    >
                                        <h3 className="font-semibold text-sage-800 text-lg pr-4">
                                            {item.question}
                                        </h3>
                                        <div className="flex-shrink-0">
                                            <svg
                                                className={`w-5 h-5 text-sage-400 transition-transform ${
                                                    openItems.has(item.id) ? 'rotate-180' : ''
                                                }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                    {openItems.has(item.id) && (
                                        <div className="px-6 pb-4">
                                            <div className="pt-2 border-t border-sage-100">
                                                <p className="text-sage-600 leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-warm">
                        <h3 className="text-xl font-semibold text-sage-800 mb-3">
                            Nu ai găsit răspunsul la întrebarea ta?
                        </h3>
                        <p className="text-sage-600 mb-6">
                            Contactează-mă direct și îți voi răspunde personal în cel mai scurt timp.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:psihoterapeut@oanatenea.ro"
                                className="bg-terracotta text-white px-6 py-3 rounded-xl font-medium hover:bg-terracotta/90 transition-colors"
                            >
                                📧 Trimite un email
                            </a>
                            <a
                                href="/contact"
                                className="bg-sage-100 text-sage-700 px-6 py-3 rounded-xl font-medium hover:bg-sage-200 transition-colors"
                            >
                                📞 Vezi toate modalitățile de contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveFAQ;
