import React from 'react';

const AboutPage = () => {
    return (
        <div className="animate-fade-in bg-ivory dark:bg-charcoal-text py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-charcoal-text dark:text-cream-text">Eu sunt Oana</h1>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                    <div className="w-full md:w-1/3">
                        <img 
                            src="https://oanatenea.ro/wp-content/uploads/2020/07/3DX_2399web.jpg" 
                            alt="Oana Tenea, psihoterapeut" 
                            className="rounded-xl shadow-lg w-full"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x500/4A4642/FBF9F4?text=Oana+Tenea'; }}
                        />
                    </div>
                    <div className="w-full md:w-2/3 text-charcoal-text/90 dark:text-cream-text/90 text-lg leading-relaxed">
                        <h2 className="text-3xl font-semibold text-charcoal-text dark:text-cream-text mb-4">Bine ai venit,</h2>
                        <p className="font-medium text-terracotta mb-6">Sunt psihoterapeut de formare cognitiv–comportamentală, psihoterapeut de formare în terapia centrată pe scheme cognitive, psihoterapeut de cuplu (familie) și membru al Colegiului Psihologilor din România.</p>
                        
                        <p className="mb-4">
                           Dar nu în ultimul rând, sunt soție, mamă și prietenă. Dorința de a relaționa cu o gamă largă de oameni, din diferite medii multiculturale, m-a îndreptat către alegerea acestei profesii. Curiozitatea, prin natura mea, mă sprijină ca un tovarăș în calea cunoașterii de sine și a celor din jurul meu.
                        </p>
                        <p className="mb-4">
                           Pornind de la misterele cunoașterii psihicului uman și a emoțiilor ce țin de fiecare trăire a noastră, am descoperit, printr-un lung proces, o cale care mi-a îmbogățit viața și relațiile în același timp.
                        </p>
                        
                        <h3 className="text-2xl font-semibold text-charcoal-text dark:text-cream-text mt-8 mb-4">Abordarea Mea Terapeutică</h3>
                        <p className="mb-4">
                            Folosesc o abordare integrativă, cu o bază solidă în terapia cognitiv-comportamentală (CBT), completată de tehnici din terapia centrată pe compasiune și mindfulness. Aceasta înseamnă că vom lucra împreună, în mod colaborativ, pentru a identifica tiparele de gândire și comportament care îți provoacă suferință și le vom înlocui cu altele noi, mai sănătoase și mai adaptative.
                        </p>
                        <p>
                            Pun un accent deosebit pe relația terapeutică, considerând-o fundamentul oricărui proces de schimbare reușit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
