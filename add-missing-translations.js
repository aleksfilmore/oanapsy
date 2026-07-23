const fs = require('fs');
const path = require('path');

const roPath = path.join(__dirname, 'src/locales/ro/translation.json');
const enPath = path.join(__dirname, 'src/locales/en/translation.json');

const ro = JSON.parse(fs.readFileSync(roPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// Add Footer missing keys
ro.footer = {
  ...ro.footer,
  description: "Fiecare călătorie spre vindecare începe cu un prim pas. Sunt aici să te însoțesc cu empatie, profesionalism și respect în procesul tău de transformare și regăsire a echilibrului interior.",
  address: "Calea Dorobanți 116-122, Sector 1, București",
  home: "Acasă",
  about: "Despre Mine",
  resources: "Resurse",
  blog: "Blog",
};

en.footer = {
  ...en.footer,
  description: "Every healing journey begins with a first step. I am here to accompany you with empathy, professionalism, and respect in your process of transformation and finding inner balance.",
  address: "Calea Dorobanti 116-122, Sector 1, Bucharest",
  home: "Home",
  about: "About Me",
  resources: "Resources",
  blog: "Blog",
};

// Add BreathingExercise keys
ro.breathing = {
  title: "Tehnica Respirației Pătrate",
  subtitle: "Pentru reducerea anxietății și relaxare profundă",
  inhale: "Inspiră",
  hold: "Ține",
  exhale: "Expiră",
  pause: "Pauză",
  start: "Începe exercițiul",
  stop: "Oprește exercițiul",
  clickHere: "Apasă aici",
  howItWorks: "Cum funcționează:",
  instructions: "Apasă pătratul pentru a începe. Urmează instrucțiunile și respiră în ritmul indicat pentru a-ți calma mintea."
};

en.breathing = {
  title: "Box Breathing Technique",
  subtitle: "For anxiety reduction and deep relaxation",
  inhale: "Inhale",
  hold: "Hold",
  exhale: "Exhale",
  pause: "Pause",
  start: "Start exercise",
  stop: "Stop exercise",
  clickHere: "Click here",
  howItWorks: "How it works:",
  instructions: "Click the square to begin. Follow the instructions and breathe at the indicated rhythm to calm your mind."
};

// Add Testimonials keys
ro.testimonials = {
  title: "Ce spun persoanele cu care lucrez",
  subtitle: "Fiecare poveste de vindecare și transformare este unică și prețioasă",
  t1_name: "Maria T.",
  t1_location: "București",
  t1_text: "După doar câteva ședințe cu Oana, am început să înțeleg și să gestionez mult mai bine anxietatea mea. Abordarea ei caldă și profesională m-a ajutat să îmi recapăt încrederea în mine.",
  t1_type: "Anxietate",
  t1_time: "3 luni de terapie",
  
  t2_name: "Alexandru și Cristina",
  t2_location: "Online",
  t2_text: "Terapia de cuplu cu Oana ne-a salvat relația. Ne-a învățat să comunicăm mai bine și să ne înțelegem nevoile reciproce. Suntem recunoscători pentru transformarea pe care am trăit-o.",
  t2_type: "Terapie de cuplu",
  t2_time: "6 luni de terapie",

  t3_name: "Andrei M.",
  t3_location: "București",
  t3_text: "Oana m-a ajutat să trec prin una dintre cele mai dificile perioade din viața mea. Prin terapie am învățat să îmi procesez emoțiile și să dezvolt strategii sănătoase de coping.",
  t3_type: "Depresie",
  t3_time: "8 luni de terapie"
};

en.testimonials = {
  title: "What the people I work with say",
  subtitle: "Every story of healing and transformation is unique and precious",
  t1_name: "Maria T.",
  t1_location: "Bucharest",
  t1_text: "After just a few sessions with Oana, I started to understand and manage my anxiety much better. Her warm and professional approach helped me regain my self-confidence.",
  t1_type: "Anxiety",
  t1_time: "3 months of therapy",
  
  t2_name: "Alexandru and Cristina",
  t2_location: "Online",
  t2_text: "Couples therapy with Oana saved our relationship. She taught us to communicate better and understand each other's mutual needs. We are grateful for the transformation we experienced.",
  t2_type: "Couples therapy",
  t2_time: "6 months of therapy",

  t3_name: "Andrei M.",
  t3_location: "Bucharest",
  t3_text: "Oana helped me get through one of the most difficult periods of my life. Through therapy, I learned to process my emotions and develop healthy coping strategies.",
  t3_type: "Depression",
  t3_time: "8 months of therapy"
};

fs.writeFileSync(roPath, JSON.stringify(ro, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));

console.log("Translations updated successfully.");
