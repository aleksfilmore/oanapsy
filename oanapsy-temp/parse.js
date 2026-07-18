const fs = require('fs');
const content = fs.readFileSync('C:/Users/iamal/.gemini/antigravity/brain/93699ee9-52a1-4673-a638-c3706e8f0f24/.system_generated/steps/13/content.md', 'utf8');

const articles = [];
const articleRegex = /<a class=\"sl-card sl-card--md\" href=\"(.*?)\">[\s\S]*?<h3 class=\"sl-card__title\">(.*?)<\/h3>[\s\S]*?<p class=\"sl-card__excerpt\">(.*?)<\/p>/g;

let match;
while ((match = articleRegex.exec(content)) !== null) {
  articles.push({
    url: match[1],
    title: match[2].replace(/&#8222;/g, '„').replace(/&#8220;/g, '”').replace(/&#8211;/g, '-').replace(/&#8217;/g, '\''),
    excerpt: match[3].replace(/&#8230;/g, '...').trim()
  });
}
console.log(JSON.stringify(articles, null, 2));
