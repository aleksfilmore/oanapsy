// Fisier: src/seo/blogMigration.js
// Plan de migrare pentru blogul existent cu mapare URL-uri

export const existingBlogPosts = [
  {
    id: 1,
    oldUrl: 'https://oanatenea.ro/cum-le-vorbim-copiilor-despre-mos-craciun-sau-mos-nicolae/',
    newSlug: 'cum-le-vorbim-copiilor-despre-mos-craciun-sau-mos-nicolae',
    title: 'Cum le vorbim copiilor despre Moș Crăciun sau Moș Nicolae?',
    publishDate: '2020-12-05',
    category: 'Parenting',
    tags: ['Parenting', 'Copii', 'Sărbători'],
    metaDescription: 'Dacă sărbătoriți Crăciunul, este important să luați în considerare cu atenție ceea ce le spunem copiilor despre Moș Crăciun.',
    readingTime: 8,
    status: 'published',
    image: '/santa.jpg',
    imageAlt: 'Copil cu Moș Crăciun - discuții despre sărbători'
  },
  {
    id: 2,
    oldUrl: 'https://oanatenea.ro/cum-poate-un-tata-narcisist-sa-si-raneasca-fiul-sau-fiica/',
    newSlug: 'cum-poate-un-tata-narcisist-sa-si-raneasca-fiul-sau-fiica',
    title: 'Cum poate un tată narcisist să-și rănească fiul sau fiica',
    publishDate: '2020-05-18',
    category: 'Relații Familiale',
    tags: ['Narcisism', 'Familie', 'Traumă'],
    metaDescription: 'Uneori, este greu de spus dacă o persoană este narcisistă sau are doar respect de sine. Narcisismul nu se referă la un nivel mare de încredere în sine.',
    readingTime: 12,
    status: 'published',
    image: '/narcissistic-father.jpg',
    imageAlt: 'Relația tată-copil - efectele narcisismului în familie'
  },
  {
    id: 3,
    oldUrl: 'https://oanatenea.ro/binge-eating-o-tulburare-de-alimentatie-ca-si-raspuns-la-trauma/',
    newSlug: 'binge-eating-tulburare-alimentatie-raspuns-trauma',
    title: 'Binge Eating – o tulburare de alimentație ca și răspuns la traumă',
    publishDate: '2020-05-13',
    category: 'Tulburări Alimentare',
    tags: ['Binge Eating', 'Traumă', 'Tulburări Alimentare'],
    metaDescription: 'Studiile au arătat că pacienții care au suferit un eveniment traumatizant au avut mai multe șanse să se implice în comportamente autodistructive.',
    readingTime: 10,
    status: 'published',
    image: '/bingeatingdisorder-300x279-1.jpg',
    imageAlt: 'Tulburări de alimentație - binge eating și trauma'
  },
  {
    id: 4,
    oldUrl: 'https://oanatenea.ro/copilul-reactioneaza-la-modul-in-care-te-comporti-ca-parinte/',
    newSlug: 'copilul-reactioneaza-la-modul-in-care-te-comporti-ca-parinte',
    title: 'Copilul reacționează la modul în care te comporți ca părinte!',
    publishDate: '2020-02-06',
    category: 'Parenting',
    tags: ['Parenting', 'Educație', 'Comportament'],
    metaDescription: 'Trebuie să interpretezi comportamentul copilului ca pe o reacție la propriul tău comportament.',
    readingTime: 7,
    status: 'published',
    image: '/Screenshot-2020-02-06-at-14.08.49.png',
    imageAlt: 'Relația părinte-copil - comportament și reacții'
  },
  {
    id: 5,
    oldUrl: 'https://oanatenea.ro/bullying-fenomenul-problema/',
    newSlug: 'bullying-fenomen-problema',
    title: 'Bullying – fenomen problemă!',
    publishDate: '2020-02-06',
    category: 'Bullying',
    tags: ['Bullying', 'Școală', 'Agresiune'],
    metaDescription: 'Bullyingul este o experiență care produce incredibil de multă suferință! Bullyingul reprezintă o formă de abuz emoțional și fizic.',
    readingTime: 6,
    status: 'published',
    image: '/OanaTenea.png',
    imageAlt: 'Bullying în școli - fenomen și soluții'
  },
  {
    id: 6,
    oldUrl: 'https://oanatenea.ro/invatatorul-mentorul-elevului/',
    newSlug: 'invatatorul-mentorul-elevului',
    title: 'Învățătorul, mentorul elevului?',
    publishDate: '2020-02-05',
    category: 'Educație',
    tags: ['Educație', 'Școală', 'Relația Profesor-Elev'],
    metaDescription: 'Despre importanța pregătirii profesorilor din școlile noastre din punct de vedere psihologic.',
    readingTime: 8,
    status: 'published',
    image: '/OanaTenea.png',
    imageAlt: 'Rolul profesorului ca mentor - educație și psihologie'
  },
  {
    id: 7,
    oldUrl: 'https://oanatenea.ro/psihoterapia-necesita-timp-si-efort/',
    newSlug: 'psihoterapia-necesita-timp-si-efort',
    title: 'Psihoterapia necesită timp și efort!',
    publishDate: '2020-02-05',
    category: 'Psihoterapie',
    tags: ['Psihoterapie', 'Timp', 'Proces Terapeutic'],
    metaDescription: 'Un demers terapeutic se bazează în mare parte pe voința proprie. Terapia durează aproximativ șase luni pentru îmbunătățire.',
    readingTime: 5,
    status: 'published',
    image: '/3DX_2399web.jpg',
    imageAlt: 'Psihoterapie - timpul și efortul necesar pentru vindecaare'
  },
  {
    id: 8,
    oldUrl: 'https://oanatenea.ro/de-ce-femeile-cuminti-sunt-atrase-de-baietii-rai/',
    newSlug: 'de-ce-femeile-cuminti-sunt-atrase-de-baietii-rai',
    title: 'De ce femeile "cuminți" sunt atrase de băieții "răi"?',
    publishDate: '2020-02-05',
    category: 'Relații',
    tags: ['Relații', 'Psihologie', 'Atracție'],
    metaDescription: 'Atributul de "rău" implică ceva tabu, ceva ceea ce nu ai voie să faci în mod normal. Acest atribut pare destul de atractiv pentru unele femei.',
    readingTime: 9,
    status: 'published',
    image: '/OanaTenea.png',
    imageAlt: 'Psihologia relațiilor - atracția și dinamica cuplurilor'
  }
];

// Maparea URL-urilor vechi către noile slug-uri pentru redirects
export const urlRedirectMap = {
  '/cum-le-vorbim-copiilor-despre-mos-craciun-sau-mos-nicolae/': '/blog/cum-le-vorbim-copiilor-despre-mos-craciun-sau-mos-nicolae',
  '/cum-poate-un-tata-narcisist-sa-si-raneasca-fiul-sau-fiica/': '/blog/cum-poate-un-tata-narcisist-sa-si-raneasca-fiul-sau-fiica',
  '/binge-eating-o-tulburare-de-alimentatie-ca-si-raspuns-la-trauma/': '/blog/binge-eating-tulburare-alimentatie-raspuns-trauma',
  '/copilul-reactioneaza-la-modul-in-care-te-comporti-ca-parinte/': '/blog/copilul-reactioneaza-la-modul-in-care-te-comporti-ca-parinte',
  '/bullying-fenomenul-problema/': '/blog/bullying-fenomen-problema',
  '/invatatorul-mentorul-elevului/': '/blog/invatatorul-mentorul-elevului',
  '/psihoterapia-necesita-timp-si-efort/': '/blog/psihoterapia-necesita-timp-si-efort',
  '/de-ce-femeile-cuminti-sunt-atrase-de-baietii-rai/': '/blog/de-ce-femeile-cuminti-sunt-atrase-de-baietii-rai'
};

// Schema pentru blogul migrat cu toate meta tag-urile SEO
export const seoSchema = {
  siteName: 'Oana Tenea - Psihoterapeut',
  siteUrl: 'https://oanatenea.ro',
  author: 'Oana Tenea',
  social: {
    instagram: '@psihoterapeut.oanatenea'
  },
  contact: {
    address: 'CALEA DOROBANTI 116-122, SECTOR 1 - BUCURESTI',
    email: 'psihoterapeut@oanatenea.ro',
    phone: null // Adaugă numărul de telefon dacă este disponibil
  },
  defaultImage: '/og-image.jpg'
};
