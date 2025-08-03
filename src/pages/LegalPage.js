import React from 'react';

const LegalPage = () => {
    return (
        <div className="animate-fade-in bg-cream dark:bg-deep-earth py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal-text dark:text-cream-text">Politică de Confidențialitate & GDPR</h1>
                        <p className="mt-4 text-lg text-charcoal-text/80 dark:text-cream-text/80">
                            Protecția datelor dumneavoastră personale este o prioritate pentru mine.
                        </p>
                    </div>

                    <div className="bg-ivory dark:bg-charcoal-text rounded-xl p-8 md:p-12 shadow-lg space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-terracotta mb-4">1. Responsabilul cu protecția datelor</h2>
                            <p className="text-charcoal-text/90 dark:text-cream-text/90 leading-relaxed">
                                Oana Tenea, psihoterapeut autorizat, cu sediul în București, România, este responsabilul pentru prelucrarea datelor dumneavoastră personale în conformitate cu Regulamentul General privind Protecția Datelor (GDPR).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-terracotta mb-4">2. Datele colectate</h2>
                            <p className="text-charcoal-text/90 dark:text-cream-text/90 leading-relaxed mb-4">
                                În cadrul serviciilor de psihoterapie, pot fi colectate următoarele categorii de date:
                            </p>
                            <ul className="list-disc list-inside text-charcoal-text/90 dark:text-cream-text/90 space-y-2">
                                <li>Date de identificare (nume, prenume, vârstă)</li>
                                <li>Date de contact (telefon, email, adresă)</li>
                                <li>Informații medicale și psihologice relevante pentru terapie</li>
                                <li>Notițe din ședințele terapeutice</li>
                                <li>Date de facturare și plată</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-terracotta mb-4">3. Scopul prelucrării</h2>
                            <p className="text-charcoal-text/90 dark:text-cream-text/90 leading-relaxed mb-4">
                                Datele dumneavoastră sunt prelucrate pentru:
                            </p>
                            <ul className="list-disc list-inside text-charcoal-text/90 dark:text-cream-text/90 space-y-2">
                                <li>Furnizarea serviciilor de psihoterapie</li>
                                <li>Programarea și gestionarea ședințelor</li>
                                <li>Comunicarea cu dumneavoastră</li>
                                <li>Îndeplinirea obligațiilor legale și profesionale</li>
                                <li>Facturarea serviciilor</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-terracotta mb-4">4. Temei legal</h2>
                            <p className="text-charcoal-text/90 dark:text-cream-text/90 leading-relaxed">
                                Prelucrarea datelor se bazează pe consimțământul dumneavoastră explicit și pe necesitatea îndeplinirii contractului de servicii terapeutice. De asemenea, prelucrarea poate fi necesară pentru respectarea obligațiilor legale ale profesiei de psihoterapeut.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-terracotta mb-4">5. Confidențialitatea</h2>
                            <p className="text-charcoal-text/90 dark:text-cream-text/90 leading-relaxed">
                                Toate informațiile partajate în cadrul relației terapeutice sunt strict confidențiale. Datele nu vor fi dezvăluite terților, cu excepția situațiilor în care legea impune acest lucru sau când există un risc iminent pentru siguranța dumneavoastră sau a altora.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-terracotta mb-4">6. Drepturile dumneavoastră</h2>
                            <p className="text-charcoal-text/90 dark:text-cream-text/90 leading-relaxed mb-4">
                                Conform GDPR, aveți următoarele drepturi:
                            </p>
                            <ul className="list-disc list-inside text-charcoal-text/90 dark:text-cream-text/90 space-y-2">
                                <li>Dreptul de acces la datele personale</li>
                                <li>Dreptul la rectificarea datelor inexacte</li>
                                <li>Dreptul la ștergerea datelor în anumite condiții</li>
                                <li>Dreptul la restricționarea prelucrării</li>
                                <li>Dreptul la portabilitatea datelor</li>
                                <li>Dreptul la opoziție</li>
                                <li>Dreptul de a vă plânge la autoritatea de supraveghere</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-terracotta mb-4">7. Păstrarea datelor</h2>
                            <p className="text-charcoal-text/90 dark:text-cream-text/90 leading-relaxed">
                                Datele vor fi păstrate pentru perioada necesară îndeplinirii scopurilor pentru care au fost colectate și în conformitate cu obligațiile legale din domeniul psihologiei clinice. În general, dosarele terapeutice se păstrează timp de 5 ani de la încheierea terapiei.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-terracotta mb-4">8. Securitatea datelor</h2>
                            <p className="text-charcoal-text/90 dark:text-cream-text/90 leading-relaxed">
                                Sunt implementate măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră împotriva accesului neautorizat, modificării, dezvăluirii sau distrugerii.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-terracotta mb-4">9. Contact</h2>
                            <p className="text-charcoal-text/90 dark:text-cream-text/90 leading-relaxed">
                                Pentru orice întrebări referitoare la prelucrarea datelor dumneavoastră personale sau pentru exercitarea drepturilor GDPR, mă puteți contacta la: contact@oanatenea.ro sau +40 123 456 789.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-terracotta mb-4">10. Modificări</h2>
                            <p className="text-charcoal-text/90 dark:text-cream-text/90 leading-relaxed">
                                Această politică de confidențialitate poate fi actualizată periodic pentru a reflecta modificările în practici sau în cerințele legale. Data ultimei actualizări: {new Date().toLocaleDateString('ro-RO')}.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
