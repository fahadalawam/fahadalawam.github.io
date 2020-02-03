let r = [
    {
        name: 'ماهر المعيقلي',
        url: './maher/'
    },
    {
        name: 'مشاري العفاسي',
        url: './afs/'
    },
    {
        name: 'محمود خليل الحصري',
        url: './husr/'
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

