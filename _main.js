let r = [
    {
        name: 'ماهر المعيقلي',
        url: 'https://www.mp3quran.net/includes/downloadmp3.php?media=https://server13.mp3quran.net/maher/'
    },
    {
        name: 'مشاري العفاسي',
        url: 'https://www.mp3quran.net/includes/downloadmp3.php?media=https://server8.mp3quran.net/afs/'
    },
    {
        name: 'محمود خليل الحصري',
        url: 'https://www.mp3quran.net/includes/downloadmp3.php?media=https://server13.mp3quran.net/husr/'
    },
];

for (let i = 0; i < r.length; i++) {
    let a = document.createElement('a');
    let linkText = document.createTextNode(r[i].name);
    a.appendChild(linkText);
    a.title = r[i].name;



    // a.href = `https://server13.mp3quran.net/maher/00${i}.mp3`;
    a.href = `./surahs.html?url=${encodeURIComponent(r[i].url)}`;
    document.body.appendChild(a);
}

