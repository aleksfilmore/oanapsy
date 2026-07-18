const fs = require('fs');

const links = [
  'https://www.instagram.com/psihoterapeut.oanatenea/p/DX8pEI0sZ5J/',
  'https://www.instagram.com/psihoterapeut.oanatenea/p/DXwLw6tjN_5/',
  'https://www.instagram.com/psihoterapeut.oanatenea/p/DSCMTY1jCHa/',
  'https://www.instagram.com/psihoterapeut.oanatenea/p/DR4gKyJjPmi/',
  'https://www.instagram.com/psihoterapeut.oanatenea/p/DR37C-MjKRr/'
];

async function fetchIg() {
  const posts = [];
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    console.log('Fetching', link);
    try {
      const res = await fetch(link, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' }
      });
      const html = await res.text();
      
      const titleMatch = html.match(/<meta property="og:title" content="(.*?)"/);
      const descMatch = html.match(/<meta property="og:description" content="(.*?)"/);
      const imgMatch = html.match(/<meta property="og:image" content="(.*?)"/);
      
      let title = titleMatch ? titleMatch[1] : '';
      let desc = descMatch ? descMatch[1] : '';
      let img = imgMatch ? imgMatch[1] : '';
      
      let caption = title; 
      if (desc && desc.includes(': &quot;')) {
        caption = desc.substring(desc.indexOf(': &quot;') + 8);
        if (caption.endsWith('&quot;. ')) caption = caption.substring(0, caption.length - 8);
        if (caption.endsWith('&quot;')) caption = caption.substring(0, caption.length - 6);
      } else if (title && title.includes(': &quot;')) {
        caption = title.substring(title.indexOf(': &quot;') + 8);
        if (caption.endsWith('&quot;')) caption = caption.substring(0, caption.length - 6);
      } else if (desc && desc.includes(': "')) {
        caption = desc.substring(desc.indexOf(': "') + 3);
        if (caption.endsWith('". ')) caption = caption.substring(0, caption.length - 3);
        if (caption.endsWith('"')) caption = caption.substring(0, caption.length - 1);
      }
      
      // decode HTML entities
      caption = caption.replace(/&#xee;/gi, 'î').replace(/&#x103;/gi, 'ă').replace(/&#x21b;/gi, 'ț').replace(/&#xe2;/gi, 'â').replace(/&#x219;/gi, 'ș').replace(/&#x201e;/gi, '„').replace(/&#x201d;/gi, '”').replace(/&#x1f90d;/gi, '🤍').replace(/&quot;/gi, '"').replace(/&#x2764;/gi, '❤').replace(/&#xfe0f;/gi, '').replace(/&#x1f4a5;/gi, '💥').replace(/&#x2022;/gi, '•').replace(/&#x2019;/gi, '’').replace(/&#x1f5a4;/gi, '🖤');

      posts.push({
        id: 'ig-' + i,
        caption: caption,
        type: 'image',
        mediaUrl: img.replace(/&amp;/g, '&'),
        permalink: link,
        timestamp: new Date().toISOString(),
        likes: (200 - i * 15).toString(), // mock likes
        postId: 'ig-' + i
      });
    } catch(e) {
      console.log('Error', link, e);
    }
  }
  
  fs.writeFileSync('c:/Dev/oanapsy/ig_posts.json', JSON.stringify(posts, null, 2));
  console.log('Saved to ig_posts.json');
}
fetchIg();
