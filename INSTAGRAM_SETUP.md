# Instagram Feed Integration - Ghid de Implementare

## 📋 Cerințe pentru @psihoterapeut.oanatenea

Acest ghid te va ajuta să configurezi feed-ul Instagram automat pentru website-ul Oanei, cu actualizare automată și gradient-uri alternate (pink și black).

## 🚀 Funcționalități Implementate

✅ **Linkuri Corecte**: Toate card-urile duc către contul real @psihoterapeut.oanatenea  
✅ **Gradiente Automate**: Alternează automat între pink și black gradient  
✅ **Auto-refresh**: Verifică postări noi la fiecare 5 minute  
✅ **Fallback System**: Dacă API-ul nu funcționează, folosește postări demo  
✅ **Responsive Design**: Perfect pentru mobil și desktop  

## 🛠️ Configurare Instagram API

### Pasul 1: Creează o Aplicație Facebook/Instagram

1. Mergi la [Facebook Developers](https://developers.facebook.com/)
2. Creează o nouă aplicație de tip "Consumer"
3. Adaugă produsul "Instagram Basic Display"

### Pasul 2: Configurează Instagram Basic Display

1. În dashboard-ul aplicației, mergi la **Instagram Basic Display > Basic Display**
2. Adaugă un **Instagram Test User**: contul @psihoterapeut.oanatenea
3. Notează **Instagram App ID** și **Instagram App Secret**

### Pasul 3: Generează Access Token

```bash
# 1. Obține Authorization Code
https://api.instagram.com/oauth/authorize
  ?client_id={your-instagram-app-id}
  &redirect_uri={your-redirect-uri}
  &scope=user_profile,user_media
  &response_type=code

# 2. Schimbă Authorization Code cu Access Token
curl -X POST https://api.instagram.com/oauth/access_token \
  -F client_id={your-instagram-app-id} \
  -F client_secret={your-instagram-app-secret} \
  -F grant_type=authorization_code \
  -F redirect_uri={your-redirect-uri} \
  -F code={authorization-code-from-step-1}
```

### Pasul 4: Configurează Environment Variables

1. Copiază `.env.example` ca `.env`
2. Completează cu access token-ul obținut:

```env
REACT_APP_INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token_here
REACT_APP_INSTAGRAM_REFRESH_INTERVAL=300000
REACT_APP_ENVIRONMENT=production
```

### Pasul 5: Activează API-ul Real

În `src/components/InstagramFeedNew.js`, decomentează linia:

```javascript
// Uncomment pentru API real Instagram
const rawPosts = await instagramAPI.fetchInstagramPosts(6);
processedPosts = instagramAPI.formatInstagramPosts(rawPosts);
```

## 📱 Sistem de Gradiente Automate

Sistemul alternează automat culorile pentru fiecare post nou:

- **Pozițiile pare** (0, 2, 4...): Pink gradient (`purple-600 → pink-600 → red-500`)
- **Pozițiile impare** (1, 3, 5...): Black gradient (`gray-900 → gray-800 → black`)

## 🔄 Actualizare Automată

Website-ul va verifica automat postări noi în următoarele moduri:

1. **Auto-refresh**: La fiecare 5 minute
2. **Webhook Instagram**: Update-uri în timp real (opțional)
3. **Manual refresh**: Utilizatorii pot reîncărca pagina

## 📂 Structura Fișierelor

```
src/
├── components/
│   └── InstagramFeedNew.js      # Componenta principală
├── utils/
│   └── instagramAPI.js          # Logica API Instagram
└── .env.example                 # Template pentru configurare
```

## 🔧 Debugging și Troubleshooting

### Problema: "Instagram API indisponibil"

1. Verifică access token-ul în `.env`
2. Testează token-ul:

   ```javascript
   await instagramAPI.validateAccessToken()
   ```

### Problema: "Gradientele nu se alternează corect"

Sistemul folosește index-ul postării pentru a determina gradientul. Pentru postări noi, gradientul se va calcula automat pe baza poziției în feed.

### Problema: "Linkurile nu duc unde trebuie"

Toate linkurile sunt setate să ducă la `https://instagram.com/psihoterapeut.oanatenea`. Pentru linkuri către postări specifice, API-ul va popula automat câmpul `permalink`.

## ⚡ Optimizări pentru Performanță

- **Lazy Loading**: Card-urile se încarcă progresiv
- **Cache**: Postările sunt cache-uite local
- **Fallback**: Postări demo dacă API-ul nu răspunde
- **Minimal API Calls**: Verifică doar când este necesar

## 🎨 Customizare Gradiente

Pentru a modifica culorile gradientelor, editează în `instagramAPI.js`:

```javascript
// Pink gradient
'bg-gradient-to-br from-purple-600 via-pink-600 to-red-500'

// Black gradient  
'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
```

## 📞 Contact pentru Suport

Dacă întâmpini probleme cu implementarea:

1. Verifică console-ul browser-ului pentru erori
2. Testează access token-ul Instagram
3. Asigură-te că contul @psihoterapeut.oanatenea este configurat corect

---

**Nota**: Pentru testare, website-ul va funcționa cu postări demo chiar și fără configurarea API-ului. Gradientele alternate și linkurile corecte funcționează din start! 🚀
