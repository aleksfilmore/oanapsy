// Instagram API Integration pentru automatizarea postărilor
// @psihoterapeut.oanatenea

/**
 * Configurare Instagram Basic Display API
 * 
 * PAȘI PENTRU IMPLEMENTARE:
 * 1. Creează o aplicație Facebook/Instagram pe https://developers.facebook.com/
 * 2. Configurează Instagram Basic Display API
 * 3. Obține Access Token pentru contul @psihoterapeut.oanatenea
 * 4. Înlocuiește YOUR_ACCESS_TOKEN cu token-ul real
 */

// Configurări API
const INSTAGRAM_CONFIG = {
  baseURL: 'https://graph.instagram.com',
  accessToken: process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN || 'YOUR_ACCESS_TOKEN',
  userId: 'me', // sau ID-ul specific al contului
  fields: 'id,caption,media_type,media_url,permalink,timestamp,like_count'
};

/**
 * Funcție pentru preluarea postărilor de Instagram
 * @param {number} limit - Numărul de postări de preluat (default: 6)
 * @returns {Promise<Array>} - Array cu postările Instagram
 */
export const fetchInstagramPosts = async (limit = 6) => {
  try {
    const url = `${INSTAGRAM_CONFIG.baseURL}/${INSTAGRAM_CONFIG.userId}/media?fields=${INSTAGRAM_CONFIG.fields}&limit=${limit}&access_token=${INSTAGRAM_CONFIG.accessToken}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Instagram API Error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    throw error;
  }
};

/**
 * Funcție pentru formatarea postărilor Instagram cu gradiente alternate
 * @param {Array} rawPosts - Postările raw de la Instagram API
 * @returns {Array} - Postările formatate cu gradiente
 */
export const formatInstagramPosts = (rawPosts) => {
  return rawPosts.map((post, index) => ({
    id: post.id,
    caption: post.caption || '',
    type: post.media_type?.toLowerCase() || 'text',
    backgroundColor: index % 2 === 0 
      ? 'bg-gradient-to-br from-purple-600 via-pink-600 to-red-500' // Pink gradient pentru pozițiile pare
      : 'bg-gradient-to-br from-gray-900 via-gray-800 to-black',     // Black gradient pentru pozițiile impare
    textColor: 'text-white',
    permalink: post.permalink,
    timestamp: post.timestamp,
    likes: post.like_count?.toString() || '0',
    mediaUrl: post.media_url,
    postId: post.id
  }));
};

/**
 * Funcție pentru webhook-ul Instagram (pentru actualizări în timp real)
 * @param {Object} webhookData - Datele de la Instagram webhook
 */
export const handleInstagramWebhook = (webhookData) => {
  // Implementează logica pentru actualizări automate
  console.log('Instagram webhook received:', webhookData);
  
  // Trigger refresh pentru componenta InstagramFeedNew
  window.dispatchEvent(new CustomEvent('instagramUpdate', {
    detail: webhookData
  }));
};

/**
 * Funcție pentru verificarea validității access token-ului
 * @returns {Promise<boolean>} - True dacă token-ul este valid
 */
export const validateAccessToken = async () => {
  try {
    const url = `${INSTAGRAM_CONFIG.baseURL}/${INSTAGRAM_CONFIG.userId}?fields=id,username&access_token=${INSTAGRAM_CONFIG.accessToken}`;
    const response = await fetch(url);
    return response.ok;
  } catch (error) {
    console.error('Token validation failed:', error);
    return false;
  }
};

/**
 * Funcție pentru refresh automat al access token-ului
 * @returns {Promise<string>} - Noul access token
 */
export const refreshAccessToken = async () => {
  try {
    const url = `${INSTAGRAM_CONFIG.baseURL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${INSTAGRAM_CONFIG.accessToken}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Token refresh failed:', error);
    throw error;
  }
};

// Postări de fallback pentru când API-ul nu este disponibil
export const fallbackPosts = [
  {
    id: 'fallback-1',
    caption: '🌱 Psihoterapia nu este doar despre vorbire, ci despre înțelegere și vindecare.\n\nFiecare pas mic contează în călătoria către un eu mai autentic.\n\n#psihoterapie #mentalhealth #growth #vindecarea',
    type: 'text',
    backgroundColor: 'bg-gradient-to-br from-purple-600 via-pink-600 to-red-500',
    textColor: 'text-white',
    mediaUrl: '',
    permalink: 'https://www.instagram.com/psihoterapeut.oanatenea/p/DX8pEI0sZ5J/',
    timestamp: '2026-07-18T04:14:03.627Z',
    likes: '200',
    postId: 'fallback-1'
  },
  {
    id: 'fallback-2',
    caption: '💛 Când ne permitem să simțim, ne permitem să vindecăm.\n\nEmoțiile sunt ghiduri, nu dușmani. Ele ne ajută să înțelegem ce avem nevoie pentru a ne simți în siguranță și iubiți.\n\n#emotii #vindecarea #selfcompassion',
    type: 'text',
    backgroundColor: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
    textColor: 'text-white',
    mediaUrl: '',
    permalink: 'https://www.instagram.com/psihoterapeut.oanatenea/p/DXwLw6tjN_5/',
    timestamp: '2026-07-18T04:14:03.630Z',
    likes: '185',
    postId: 'fallback-2'
  },
  {
    id: 'fallback-3',
    caption: '✨ Fiecare pas mic către îngrijirea de sine contează.\n\nAi grija de tine cu aceeași compasiune cu care ai avea grija de un prieten drag.\n\n#selfcare #wellbeing #mindfulness #compasiune',
    type: 'text',
    backgroundColor: 'bg-gradient-to-br from-blue-600 via-teal-500 to-emerald-400',
    textColor: 'text-white',
    mediaUrl: '',
    permalink: 'https://www.instagram.com/psihoterapeut.oanatenea/p/DSCMTY1jCHa/',
    timestamp: '2026-07-18T04:14:03.633Z',
    likes: '170',
    postId: 'fallback-3'
  },
  {
    id: 'fallback-4',
    caption: '🌸 Anxietatea ne spune că ne pasă.\n\nÎnvață să asculți mesajul fără să îți pierzi echilibrul. Anxietatea poate fi transformată în înțelepciune.\n\n#anxietate #echilibru #mentalhealth',
    type: 'text',
    backgroundColor: 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-500',
    textColor: 'text-white',
    mediaUrl: '',
    permalink: 'https://www.instagram.com/psihoterapeut.oanatenea/p/DR4gKyJjPmi/',
    timestamp: '2026-07-18T04:14:03.635Z',
    likes: '155',
    postId: 'fallback-4'
  },
  {
    id: 'fallback-5',
    caption: '🧠 Relațiile sănătoase încep cu relația pe care o avem cu noi înșine.\n\nInvestește în propria ta înțelegere. Când te cunoști pe tine, poți fi autentic cu alții.\n\n#relatii #autointelegere #growth',
    type: 'text',
    backgroundColor: 'bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700',
    textColor: 'text-white',
    mediaUrl: '',
    permalink: 'https://www.instagram.com/psihoterapeut.oanatenea/p/DR37C-MjKRr/',
    timestamp: '2026-07-18T04:14:03.637Z',
    likes: '140',
    postId: 'fallback-5'
  }
];

const instagramAPI = {
  fetchInstagramPosts,
  formatInstagramPosts,
  handleInstagramWebhook,
  validateAccessToken,
  refreshAccessToken,
  fallbackPosts
};

export default instagramAPI;
