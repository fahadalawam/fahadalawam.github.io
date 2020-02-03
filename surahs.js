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
    {
        name: 'الشمس',
        id: '091'
    },
    {
        name: 'الليل',
        id: '092'
    },
    {
        name: 'الضحى',
        id: '093'
    },
    {
        name: 'الشرح',
        id: '094'
    },
    {
        name: 'التين',
        id: '095'
    },
    {
        name: 'العلق',
        id: '096'
    },
    {
        name: 'القدر',
        id: '097'
    },
    {
        name: 'البينة',
        id: '098'
    },
    {
        name: 'الزلزلة',
        id: '099'
    },
    {
        name: 'العاديات',
        id: '100'
    },
    {
        name: 'القارعة',
        id: '101'
    },
    {
        name: 'التكاثر',
        id: '102'
    },
    {
        name: 'العصر',
        id: '103'
    },
    {
        name: 'الهمزة',
        id: '104'
    },
    {
        name: 'الفيل',
        id: '105'
    },
    {
        name: 'قريش',
        id: '106'
    },
    {
        name: 'الماعون',
        id: '107'
    },
    {
        name: 'الكوثر',
        id: '108'
    },
    {
        name: 'الكافرون',
        id: '109'
    },
    {
        name: 'النصر',
        id: '110'
    },
    {
        name: 'المسد',
        id: '111'
    },
    {
        name: 'الإخلاص',
        id: '112'
    },
    {
        name: 'الفلق',
        id: '113'
    },
    {
        name: 'الناس',
        id: '114'
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

