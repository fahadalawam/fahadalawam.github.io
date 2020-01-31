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
    {
        name: 'الانفطار',
        id: '082'
    },
    {
        name: 'المطففين',
        id: '083'
    },
    {
        name: 'الانشقاق',
        id: '084'
    },
    {
        name: 'البروج',
        id: '085'
    },
    {
        name: 'الطارق',
        id: '086'
    },
    {
        name: 'الأعلى',
        id: '087'
    },
    {
        name: 'الغاشية',
        id: '088'
    },
    {
        name: 'الفجر',
        id: '089'
    },
    {
        name: 'البلد',
        id: '090'
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
    a.href = `./player.php?url=${encodeURIComponent(url)}&s=${s[i].id}`;
    document.body.appendChild(a);
}

