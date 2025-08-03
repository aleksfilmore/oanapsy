import React from 'react';
import SEO from '../components/SEO';

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO 
        title="Politică de Confidențialitate și GDPR - Oana Tenea Psihoterapeut"
        description="Politica de confidențialitate și protecția datelor personale în conformitate cu GDPR pentru serviciile de psihoterapie oferite de Oana Tenea."
      />
      
      <div className="animate-fade-in bg-gradient-to-br from-soft-yellow to-golden-honey/20 py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Politică de Confidențialitate & GDPR
            </h1>
            <p className="text-xl text-sage-600 leading-relaxed mb-8">
              Protecția datelor personale și confidențialitatea sunt priorități în practica mea de psihoterapie
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-terracotta to-warm-orange mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl shadow-warm p-8 md:p-12 border border-sage-100">
            
            {/* Introducere */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                Introducere
              </h2>
              <div className="prose prose-lg max-w-none text-sage-700 leading-relaxed">
                <p className="mb-4">
                  Această Politică de Confidențialitate explică modul în care <strong>Oana Tenea</strong>, psihoterapeut autorizat, 
                  colectează, utilizează, stochează și protejează informațiile dumneavoastră personale în cadrul serviciilor de psihoterapie oferite.
                </p>
                <p className="mb-4">
                  Respectul pentru confidențialitatea și protecția datelor personale reprezintă fundația practicii mele profesionale, 
                  în conformitate cu <strong>GDPR</strong> (Regulamentul General privind Protecția Datelor) și legislația română în vigoare.
                </p>
                <div className="bg-sage-50 border-l-4 border-terracotta p-4 rounded-r-lg">
                  <p className="text-sm font-medium text-sage-800 mb-2">📅 Data ultimei actualizări: Ianuarie 2025</p>
                  <p className="text-sm text-sage-600">Această politică se aplică tuturor serviciilor oferite prin intermediul site-ului web și consultațiilor de psihoterapie.</p>
                </div>
              </div>
            </section>

            {/* Date colectate */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                Ce Date Personale Colectez
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sage-50 p-6 rounded-xl border border-sage-100">
                  <h3 className="text-lg font-semibold text-sage-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Date de Identificare
                  </h3>
                  <ul className="text-sage-700 space-y-2">
                    <li>• Nume și prenume</li>
                    <li>• Vârsta și data nașterii</li>
                    <li>• Adresa de email</li>
                    <li>• Numărul de telefon</li>
                    <li>• Adresa de domiciliu (dacă relevant)</li>
                  </ul>
                </div>
                
                <div className="bg-terracotta/5 p-6 rounded-xl border border-terracotta/20">
                  <h3 className="text-lg font-semibold text-sage-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Date Clinice
                  </h3>
                  <ul className="text-sage-700 space-y-2">
                    <li>• Informații despre starea psihică</li>
                    <li>• Istoricul medical relevant</li>
                    <li>• Notițe din sesiunile de terapie</li>
                    <li>• Obiective terapeutice</li>
                    <li>• Progresul în terapie</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Scopul procesării */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                Scopul Procesării Datelor
              </h2>
              <div className="space-y-4">
                <div className="bg-white border border-sage-200 p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-sage-800 mb-3">🎯 Furnizarea Serviciilor de Psihoterapie</h3>
                  <p className="text-sage-600">Datele sunt utilizate pentru planificarea, desfășurarea și monitorizarea progresului în procesul terapeutic.</p>
                </div>
                
                <div className="bg-white border border-sage-200 p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-sage-800 mb-3">📞 Comunicarea cu Clienții</h3>
                  <p className="text-sage-600">Pentru programarea sesiunilor, confirmări, reschedulări și comunicări importante legate de terapie.</p>
                </div>
                
                <div className="bg-white border border-sage-200 p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-sage-800 mb-3">⚖️ Respectarea Obligațiilor Legale</h3>
                  <p className="text-sage-600">Conformarea cu reglementările profesionale și legale aplicabile profesiei de psihoterapeut.</p>
                </div>
              </div>
            </section>

            {/* Baza legală */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                Baza Legală pentru Procesare
              </h2>
              <div className="bg-gradient-to-r from-sage-50 to-terracotta/5 p-6 rounded-xl border border-sage-200">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-terracotta rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage-800">Consimțământul Explicat</h3>
                      <p className="text-sage-600 text-sm">Dumneavoastră acordați consimțământul explicit pentru procesarea datelor în scopuri terapeutice.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-terracotta rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage-800">Executarea Contractului</h3>
                      <p className="text-sage-600 text-sm">Procesarea este necesară pentru îndeplinirea contractului de servicii de psihoterapie.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-terracotta rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage-800">Obligații Legale</h3>
                      <p className="text-sage-600 text-sm">Respectarea reglementărilor profesionale și a obligațiilor legale specifice profesiei.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Securitatea datelor */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                Securitatea și Protecția Datelor
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-sage-50 rounded-xl border border-sage-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-sage-800 mb-2">Criptare SSL</h3>
                  <p className="text-sm text-sage-600">Toate comunicările sunt protejate prin criptare SSL de nivel enterprise.</p>
                </div>
                
                <div className="text-center p-6 bg-terracotta/5 rounded-xl border border-terracotta/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-sage-800 mb-2">Stocare Securizată</h3>
                  <p className="text-sm text-sage-600">Datele sunt stocate în servere securizate cu acces restrictionat și backup regulat.</p>
                </div>
                
                <div className="text-center p-6 bg-sage-50 rounded-xl border border-sage-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-sage-800 mb-2">Acces Controlat</h3>
                  <p className="text-sm text-sage-600">Doar personalul autorizat are acces la datele dumneavoastră, pe baza principiului "need-to-know".</p>
                </div>
              </div>
            </section>

            {/* Drepturile GDPR */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                Drepturile Dumneavoastră GDPR
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Dreptul de Acces",
                    description: "Puteți solicita o copie a tuturor datelor personale pe care le dețin despre dumneavoastră.",
                    icon: "👁️"
                  },
                  {
                    title: "Dreptul de Rectificare",
                    description: "Puteți cere corectarea datelor inexacte sau completarea datelor incomplete.",
                    icon: "✏️"
                  },
                  {
                    title: "Dreptul la Ștergere",
                    description: "În anumite condiții, puteți solicita ștergerea datelor personale (cu respectarea obligațiilor legale de păstrare).",
                    icon: "🗑️"
                  },
                  {
                    title: "Dreptul la Portabilitate",
                    description: "Puteți solicita transferul datelor către un alt furnizor de servicii în format structurat.",
                    icon: "📤"
                  },
                  {
                    title: "Dreptul de Opoziție",
                    description: "Puteți vă opune procesării datelor în anumite circumstanțe specifice.",
                    icon: "🛑"
                  },
                  {
                    title: "Dreptul de Restricționare",
                    description: "Puteți solicita limitarea procesării datelor în anumite situații.",
                    icon: "⏸️"
                  }
                ].map((right, index) => (
                  <div key={index} className="bg-white border border-sage-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <span className="text-2xl mr-4">{right.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-sage-800 mb-2">{right.title}</h3>
                        <p className="text-sage-600">{right.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Perioada de păstrare */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">7</span>
                </div>
                Perioada de Păstrare a Datelor
              </h2>
              <div className="bg-gradient-to-r from-sage-50 to-terracotta/5 p-6 rounded-xl border border-sage-200">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-terracotta mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold text-sage-800">Dosare active: </span>
                    <span className="text-sage-600 ml-2">Pe durata relației terapeutice</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-terracotta mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold text-sage-800">Dosare arhivate: </span>
                    <span className="text-sage-600 ml-2">5 ani după încheierea terapiei (conform legii)</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-terracotta mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold text-sage-800">Date de contact: </span>
                    <span className="text-sage-600 ml-2">Până la retragerea consimțământului</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact și reclamații */}
            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-warm-orange rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">8</span>
                </div>
                Contact și Exercitarea Drepturilor
              </h2>
              <div className="bg-gradient-to-r from-terracotta/5 to-warm-orange/5 p-8 rounded-xl border border-terracotta/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-sage-800 mb-4">📧 Contact pentru GDPR</h3>
                    <div className="space-y-2 text-sage-700">
                      <p><strong>Email:</strong> psihoterapeut@oanatenea.ro</p>
                      <p><strong>Adresa:</strong> Calea Dorobanti 116-122, Sector 1, București</p>
                      <p><strong>Timp de răspuns:</strong> Maxim 30 de zile calendaristice</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-sage-800 mb-4">⚖️ Autoritatea de Supraveghere</h3>
                    <div className="space-y-2 text-sage-700">
                      <p><strong>ANSPDCP</strong> (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal)</p>
                      <p><strong>Website:</strong> dataprotection.ro</p>
                      <p>Puteți depune o plângere dacă considerați că drepturile dumneavoastră nu sunt respectate.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer note */}
            <div className="bg-sage-50 border border-sage-200 p-6 rounded-xl text-center">
              <p className="text-sm text-sage-600 mb-2">
                <strong>Confidențialitatea și siguranța dumneavoastră sunt prioritatea mea.</strong>
              </p>
              <p className="text-xs text-sage-500">
                Această politică poate fi actualizată periodic. Vă voi informa despre orice modificări importante prin email sau prin publicarea unei notificări pe site.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
