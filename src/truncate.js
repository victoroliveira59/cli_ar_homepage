const fs = require('fs');
const content = fs.readFileSync(r'C:\git\cli_ar_homepage\src\app\pages\home\home.component.css', 'utf8');
const lines = content.split('\n');
console.log('Total lines before: ' + lines.length);
const kept = lines.slice(0, 423);
fs.writeFileSync(r'C:\git\cli_ar_homepage\src\app\pages\home\home.component.css', kept.join('\n'), 'utf8');
console.log('Done. File now has ' + kept.length + ' lines.');
