const fs = require('fs');

const steps = ['181', '199', '200', '201', '202'];
const posts = [];

for (let i = 0; i < steps.length; i++) {
  const file = 'C:/Users/iamal/.gemini/antigravity/brain/93699ee9-52a1-4673-a638-c3706e8f0f24/.system_generated/steps/' + steps[i] + '/content.md';
  if (!fs.existsSync(file)) continue;
  
  const html = fs.readFileSync(file, 'utf8');
  
  const titleMatch = html.match(/<meta property="og:title" content="(.*?)"/);
  const descMatch = html.match(/<meta property="og:description" content="(.*?)"/);
  const imgMatch = html.match(/<meta property="og:image" content="(.*?)"/);
  const urlMatch = html.match(/<meta property="og:url" content="(.*?)"/);
  
  let title = titleMatch ? titleMatch[1] : '';
  let desc = descMatch ? descMatch[1] : '';
  let img = imgMatch ? imgMatch[1] : '';
  let url = urlMatch ? urlMatch[1] : '';
  
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
  caption = caption.replace(/&#x2728;/gi, '✨').replace(/&#x1f90c;/gi, '🤌').replace(/&#x1f4ab;/gi, '💫').replace(/&#x1f331;/gi, '🌱');

  let bgColors = [
    'bg-gradient-to-br from-purple-600 via-pink-600 to-red-500',
    'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
    'bg-gradient-to-br from-blue-600 via-teal-500 to-emerald-400',
    'bg-gradient-to-br from-orange-500 via-red-500 to-pink-500',
    'bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700'
  ];

  posts.push({
    id: 'fallback-' + (i+1),
    caption: caption,
    type: 'image',
    backgroundColor: bgColors[i % bgColors.length],
    textColor: 'text-white',
    mediaUrl: img.replace(/&amp;/g, '&'),
    permalink: url,
    timestamp: new Date().toISOString(),
    likes: (200 - i * 15).toString(),
    postId: 'fallback-' + (i+1)
  });
}

let fallbackCode = 'export const fallbackPosts = [\n';
posts.forEach((p, index) => {
  fallbackCode += `  {
    id: '${p.id}',
    caption: \`${p.caption}\`,
    type: '${p.type}',
    backgroundColor: '${p.backgroundColor}',
    textColor: '${p.textColor}',
    mediaUrl: '${p.mediaUrl}',
    permalink: '${p.permalink}',
    timestamp: '${p.timestamp}',
    likes: '${p.likes}',
    postId: '${p.postId}'
  }${index === posts.length - 1 ? '' : ','}\n`;
});
fallbackCode += '];\n';

fs.writeFileSync('c:/Dev/oanapsy/ig_posts.js', fallbackCode);
console.log('Saved to ig_posts.js');
