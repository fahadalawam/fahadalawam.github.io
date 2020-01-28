let s = [
    {
        name: 'النبأ',
        id: '078'
    },
    {
        name: 'النازعات',
        id: '079'
    },
    {
        name: 'عبس',
        id: '080'
    },
    {
        name: 'التكوير',
        id: '081'
    },
];

const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url');
console.log(url);


for (let i = 0; i < s.length; i++) {
    let a = document.createElement('a');
    let linkText = document.createTextNode(s[i].name);
    a.appendChild(linkText);
    a.title = s[i].name;



    // a.href = `https://server13.mp3quran.net/maher/00${i}.mp3`;
    a.href = `./player.html?url=${encodeURIComponent(url)}&s=${s[i].id}`;
    document.body.appendChild(a);
}

