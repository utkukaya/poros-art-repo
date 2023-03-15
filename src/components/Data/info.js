export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

const convertDate = (date) => {
    date = date.split("-");
    var newDate = new Date(date[2], date[1] - 1, date[0]);
    return newDate.getTime();
}

export const teamMemberTolga = () => {
    return (
        <div style={{ fontFamily: "Inter-Thick" }}>
            <li>1995 yılında doğdu.</li>
            <li>Eskişehir Osmangazi Üniversitesi Siyaset Bilimi ve Kamu Yönetimi Bölümü 2018 yılı, Antalya
                Devlet Konservatuvarı Tiyatro Anasanat Dalı Oyunculuk Bölümü 2022 yılı mezunudur.</li>
            <li>Şu an Antalya Büyükşehir Belediyesi Şehir Tiyatroları’nda oyuncu olarak görev yapmaktadır.</li>
            <li>Poros Art’tın Sanat Yönetmenliği görevini üstlenmektedir.</li>
            <br />
            <span style={{ fontFamily: "Inter-Bold" }}>Yer Aldığı Projeler:
                <br />
            </span>
            <br />
            <li>Sen De Gitme Triyandafilis /Yönetmen : Emre Basalak / Eskişehir Büyükşehir Belediyesi Şehir
                Tiyatroları (2018)</li>
            <li>Açık Denizde / Yönetmen: Ozan Şahin/ Kocaeli Büyükşehir Belediyesi Şehir Tiyatroları (2019)</li>
            <li>Küçük Prens’in Yolculuğu / Yazan- Yöneten: Tolga Avcu (2020)</li>
            <li>Savaş Baba / Yönetmen: Murat Çağlar/ Antalya Devlet Konservatuvarı (2022)</li>
            <li>Okyanusta Bir Su Damlası Gibi/ Yönetmen: Jacques Matthiessen / Antalya Şehir Tiyatroları</li>
            <li>Tiyatro Makinesi/ Yönetmen: Ali Eyidoğan/ Antalya Şehir Tiyatroları (2023)</li>
            <li>Otofaji/ Yazan-Yöneten: Tolga Avcu/ Poros Art Tiyatro ( 2023)</li>
            <li>Polisler/ Yönetmen: Murat Karasu/ Antalya Şehir Tiyatroları ( 2023)</li>
            <br />
            <span style={{ fontFamily: "Inter-Bold" }}>Katıldığı Atölyeler:
                <br />
            </span>
            <br />
            <li>Tiyatro Atölyesi: EBBŞT Gençlik Sahnesi Projesi** (2017)</li>
            <li>Oyunculuk Teknikleri: Hasan Şahintürk (2018)</li>
            <li>Ses, Nefes Tekniği: Atilla Gündoğdu (2019)</li>
            <li>Doğaçlama Atölyesi: Burak Tamdoğan (2020)</li>
            <li>Audition Atölyesi: Deniz Erdem (2021)</li>
            <li>Oyunculuk Yaklaşımları: Ali Poyrazoğlu (2022)</li>
            <p>** Gençlik Sahnesi Projesi: Oyunculuk-Diksiyon- Hareket/ Dans- Dramaturgi alanında, Emre
                BASALAK’ın koordinatörlüğünde Pınar Bekaroğlu, Sibel ARICAN, Özlem BAYKARA, Özlem
                BOYACI tarafından yürütülen, dokuz ay süren yerel bir projedir.</p>
        </div>
    )
}

export const teamMemberDuygu = () => {
    return (
        <div style={{ fontFamily: "Inter-Thick" }}>

            <li>Duygu Yakasız</li>
            <li>1991 yılında doğdu.</li>
            <li>Konya Selçuk Üniversitesi, Dilek Sabancı Konservatuvarı Sahne Sanatları Tiyatro Programı
                Oyunculuk Bölümü’nden 2021 yılında mezun oldu. Poros Art oluşumunun “Otofaji” adlı ilk
                oyununda Yönetmen Yardımcılığını üstlendi.</li>
            <li>Poros Art’ın Koordinatörlüğü’nü yürütmektedir.</li>
            <br />

            <span style={{ fontFamily: "Inter-Bold" }}>Yer Aldığı Projeler:
                <br />
            </span>
            <br />
            <li>Antigone (Gençlik Sahnesi Projesi, 11. Eskişehir Uluslararası Çocuk ve Gençlik Tiyatroları
                Festivali, 2016)</li>
            <li>Kafesten Bir Kuş Uçtu ( Konya SÜ Dilek Sabancı Devlet Konservatuvarı, 2019)</li>
            <br />

            <span style={{ fontFamily: "Inter-Bold" }}>Katıldığı Atölyeler:
                <br />
            </span>
            <br />

            <li>“Temel Oyunculuk”, Nadir Sarıbacak (Kumbaracı50 / 2015)</li>
            <br />
            <span style={{ fontFamily: "Inter-Bold" }}>Tiyatro Atölyesi:
                <br />
            </span>
            <br />
            <li>EBBŞT Gençlik Sahnesi Projesi** (2017)</li>
            <li>“Oyunculukta Stilizasyon”, Fatma Kandemir Şahin ,2018</li>
            <li>“Oyuncunun Nefes ve Ses Kullanımı”, Pınar Arık Ateş 2018</li>
            <li>“Oyunculuk Biçemleri ve Eylem İlişkisi” , Selçuk Göldere, 2019</li>
            <p>** Gençlik Sahnesi Projesi: Oyunculuk-Diksiyon- Hareket/ Dans- Dramaturgi alanında, Emre
                BASALAK koordinatörlüğünde Pınar Bekaroğlu, Sibel ARICAN, Özlem BAYKARA, Özlem BOYACI
                tarafından yürütülen, dokuz ay süren yerel bir projedir.</p>
        </div>
    )
}



export const teamMemberMelis = () => {
    return (
        <div style={{ fontFamily: "Inter-Thick" }}>
            < li > 2001 yılında doğdu..</li >
            <li>Akdeniz Üniversitesi Antalya Devlet Konservatuvarı Sahne Sanatları Bölümü Tiyatro Anasanat Dalı
                Oyunculuk Bölümü öğrencisidir.</li>
            <li>İngilizce ve Sırpça bilmektedir.</li>
            <br />
            <span style={{ fontFamily: "Inter-Bold" }}>Katıldığı Atölyeler:
                <br />
            </span>
            <br />
            <li>Sanford Meisner Tekniği Atölyesi - Behzad Fathi</li>
        </div>
    )
}

export const teamMemberYagmur = () => {
    return (
        <div style={{ fontFamily: "Inter-Thick" }}>
            <li>2004 yılında doğdu.</li>
            <li>Özel Moda Mimar Sinan Güzel Sanatlar Lisesi-Tiyatro bölümünden mezun oldu. (2018-2022)</li>
            <li>Şu an Akdeniz Üniversitesi Antalya Devlet Konservatuvarı Sahne Sanatları Tiyatro Anasanat Dalı
                Oyunculuk Bölümü öğrencisidir.</li>
            <li>Poros Art oluşumunun “Otofaji” adlı ilk oyununda Hareket Düzeni görevini üstlendi.</li>
            <br />
            <span style={{ fontFamily: "Inter-Bold" }}>Katıldığı Atölyeler:
                <br />
            </span>
            <br />
            <li>Fiziksel tiyatro atölyesi (Jacques Lecoq)-Ömer Cem Çoltu (2019)</li>
            <li>Meisner tekniği-Ömer Cem Çoltu (2021)</li>
            <li>Çağdaş dans tekniği dersi-Özge Midilli (2022)</li>
            <li>Hoek kolektif ile anda doğaçlama pratikleri-Victoria Kenett/Dünya Narlı/Theo Marion-Wuillemin/
                <li>Elise Ludinard (2022)</li>
                <li>Somatik farkındalık ve çağdaş dans tekniği-Aslı Öztürk (2022)</li>
                <li></li>Kontak doğaçlama jam-Dilek Üstünalan/Yağmur Kutlar (2023)</li>

        </div>
    )
}

export const teamMemberYalgın = () => {
    return (
        <div style={{ fontFamily: "Inter-Thick" }}>
            <li>2004 yılında doğdu.</li>
            <li>Akdeniz Üniversitesi Antalya Devlet Konservatuvarı Sahne Sanatları Bölümü Tiyatro Anasanat Dalı
                Oyunculuk bölümü öğrencisidir.</li>
            <li>Poros Art oluşumunun “Otofaji” adlı ilk oyununda Reji Asistanlığı görevini üstlendi.</li>
        </div>
    )
}




export const teamMemberEda = () => {
    return (
        <div style={{ fontFamily: "Inter-Thick" }}>
            < li > 1997 yılında doğdu.</li >
            <li>Eskişehir Teknik Üniversitesi Hava Trafik Kontrol Bölümünden
                2020 yılında mezun oldu. Hacettepe Üniversitesi Ankara Devlet
                Konservatuvarı Tiyatro Bölümü üçüncü sınıf öğrencisidir.</li>
            <li>Poros Art oluşumunun “Tiri İle Nesi” adlı çocuk oyununda
                oynamaktadır.</li>
            <br />
            <span style={{ fontFamily: "Inter-Bold" }}>Yer Aldığı Projeler:
                <br />
            </span>
            <br />
            <li>Fahrenheit 451(Tatbikat Sahnesi, 2022 - halen).</li>
            <li>Cehennem(Tatbikat Sahnesi, 2022 - halen)</li>
            <li>Sen De Gitme Triyandafilis(Eskişehir Büyükşehir Belediyesi
                Şehir Tiyatroları Gençlik Sahnesi, 2019)</li>

            <li>İki Efendinin Uşağı(DEPO Eskişehir 2017)</li>
            <li>Yeşil Papağan(Özdüşüm Oyuncu Atölyesi, 2016)</li>
            <br />
            <span style={{ fontFamily: "Inter-Bold" }}>Katıldığı Atölyeler:
                <br />
            </span>
            <br />
            <li>Oyunculukta “Laban” Eforları ve Kompozisyon, Onur Orkut,
                H.Ü.Ankara Devlet Konservatuvarı Tiyatro ASD Seminerleri
                (2022)</li>
            <li>Seslendirme ve Dublaj Atölyesi, Ekrem Tamer, H.Ü.Ankara
                Devlet Konservatuvarı Tiyatro ASD Seminerleri(2022)</li>
            <li>Augusto Boal Atölyesi, Yasemin Eti, H.Ü.Ankara Devlet
                Konservatuvarı Tiyatro ASD Seminerleri 2022</li>
            <li>Kamera Önü Oyunculuk Atölyesi, Can Kılcıoğlu, CRAFT 2022</li>
            <li>Tiyatro Atölyesi: EBBŞT Gençlik Sahnesi Projesi ** (2017)</li>
            <p>** Gençlik Sahnesi Projesi: Oyunculuk-Diksiyon- Hareket/ Dans- Dramaturgi alanında, Emre
                BASALAK koordinatörlüğünde Pınar Bekaroğlu, Sibel ARICAN, Özlem Baykara, Özlem Boyacı
                tarafından yürütülen dokuz ay süren yerel bir projedir.</p>
        </div>
    )
}

export const teamMemberSeyithan = () => {
    return (
        <div style={{ fontFamily: "Inter-Thick" }}>
            < li >1992 yılında doğdu.
            </li >
            <li>Anadolu Üniversitesi Devlet Konservatuvarı Sahne Sanatları Bölümü Tiyatro Anasanat Dalı
                Oyunculuk Bölümü öğrencisidir.,</li>
            <li>Poros Art oluşumunun “Tiri İle Nesi” adlı çocuk oyununda
                oynamaktadır.</li>
            <br />
            <span style={{ fontFamily: "Inter-Bold" }}>Yer Aldığı Projeler:
                <br />
            </span>
            <br />
            <li>Sen de Gitme Triyandafilis(Gençlik Sahnesi Projesi, 12. Eskişehir Uluslararası Çocuk ve Gençlik
                Tiyatroları Festivali, 2018)</li>
            <li>Dogville(Gençlik Sahnesi Projesi, 13. Eskişehir Uluslararası Çocuk ve Gençlik Tiyatroları Festivali,
                2019)</li>
            <li>Beşinci Frank(Anadolu Üniversitesi Devlet Konservatuvarı)</li>
            <li>Tanrıyı Gören Köpek(Anadolu Üniversitesi Devlet Konservatuvarı)</li>
            <br />
            <span style={{ fontFamily: "Inter-Bold" }}>Katıldığı Atölyeler:
                <br />
            </span>
            <br />
            <li>Tiyatro Atölyesi: EBBŞT Gençlik Sahnesi Projesi ** (2017)</li>
            <li>Eskişehir Odunpazarı Belediyesi Belediye Konservatuvarı(2014 - 2016)</li>
            <li>Adana Büyükşehir Belediyesi Şehir Tiyatroları Tiyatro Kursiyerliği(2008 - 2010)</li>
            <li>Cihangir Atölye Sahnesi Kamera Oyunculuğu Atölyesi – Arzu Gamze Kılınç(2020 - 2021)</li>
            <li>Zerrin Yanıkkaya: Hikaye Anlatıcılığının Geleneksel Kaynakları ve Meddah(2018)</li>
            <li>Şule Ateş: Hareketten Metne Metinden Harekete / Atölye(2018)</li>
            <li>Pınar Akkuzu: Maske Oyunculuğu / Atölye(2018)</li>
            <li>Elif Ongan Tekçe: Devinim Oyunculuk Atölyesi(2017)</li>
            <li>Savvas Stroumpos: Method of Theodoros Terzopoulos(2019)</li>
            <li>Zwaantie de Vries: The Roy Hart Method on Movement and Voice(2019)</li>
            <li>Salih Usta - Didem Kiriş - Çağıl Kaya: Fiziksel Anlatım ve Yaratıcı Süreç(2019)</li>
            <li>Grzegorz Bral: The Acting Coordinaton Method(2019)</li>
            <li>Bedirhan Dehmen: Dans / Tiyatro Kesişiminde Beden ve Hareket(2019)</li>
            <li>Güray Dinçol: Şiirsel Komedi - Bir Clown Araştırması(2020)</li>
            <li>Süleyman Karaahmet: Sinema ve Televizyon Oyunculuğu(2021)</li>

            <p>** Gençlik Sahnesi Projesi: Oyunculuk - Diksiyon - Hareket / Dans - Dramaturgi alanında, Emre
                BASALAK koordinatörlüğünde Pınar Bekaroğlu, Sibel ARICAN, Özlem Baykara, Özlem Boyacı
                tarafından yürütülen dokuz ay süren yerel bir projedir.</p>
        </div>
    )
}


export const aboutUsDescription = () => {
    return (
        <p style={{ color: "black", fontWeight: "500", fontFamily: "Inter-Thick", fontSize: "1.1rem", lineHeight: 1.8 }}>
            <span style={{ fontFamily: "Inter-Bold" }}>Hakkımızda</span><br /><br />
            Poros Art 2022 yılında Antalya’da kurulan bağımsız kültür, sanat oluşumudur.
            <br /><br />

            Tiyatro ve Performans sanatında “yol yaratır” mottosu ile ilerleyen, yerel ve uluslararası
            işbirlikçileriyle birlikte disiplinlerarası metodolojileri kullanarak tiyatro ve performans yapımları ile
            atölye çalışmaları sunmaktadır.<br /><br />

            {/* Tiyatro ve performans sanatında, yol yaratır mottosu ile ilerleyen Poros Art;
            atölye çalışmalarında disiplinlerarası metodolojileri kullanarak sanat icra
            etmeyi hedeflemektedir.<br /><br /> */}
        </p>
    )
}


export const atölyeDescription = () => {
    return (
        <p style={{ color: "black", fontWeight: "500", fontFamily: "Inter-Thick", fontSize: "1.1rem", lineHeight: 1.8 }}>
            <span style={{ fontFamily: "Inter-Bold" }}>Poros Art Atölye</span><br /><br />
            Sahne sanatları eğitiminde nefes ve beden çalışmaları zihinsel ve fiziksel denge açısından önemli
            bir yere sahiptir. Tai Chi ve Qigong kişinin kendi bedeniyle daha da bütünleşmesini sağlayacak bir
            çalışma disiplini oluşturur.            <br /><br />

            Zihin, nefes ve hareket kullanımının bilinçli sentezlenmesi, beyin korteksinde üretilen bir dizi doğru
            itki ile oyuncunun performansını doğrudan etkilemektedir.Gösterge bilimsel olarak irdelenen
            sahne düşünceleri alt üst etmeye çalışan yöntemleri araştırır..<br /><br />

            Tai Chi ve Qigong çalışmalarının bu yapıda uyandırdığı reformları birlikte öğrenmek için Erdoğan
            Kaplan ile 10 Mart’ta İpekten Sahne‘de atölye çalışması gerçekleştireceğiz.<br /><br />
        </p>
    )
}





export const info = {
    firstName: "Tolga",
    lastName: "Smith",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "kurucusuyum.",
    gradient: "white",
    // gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Systems Engineer at Google"
        },
        {
            emoji: "📧",
            text: "tolga@gmail.com"
        }
    ],
    socials: [
        {
            name: "instagram",
            link: "https://instagram.com/porosarttiyatro?igshid=NTdlMDg3MTY=",
            className: "fa fa-instagram"
        },
        {
            name: "twitter",
            link: "https://twitter.com/PorosArt",
            className: "fa fa-twitter"
        },
        {
            name: "spotify",
            link: "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO",
            className: "fa fa-spotify"
        },
        {
            name: "youtube",
            link: "https://www.youtube.com/watch?v=zXiCbLSz4P0",
            className: "fa fa-youtube"
        },
        {
            name: "whatsapp",
            link: "https://wa.me/+905435632919",
            className: "fa fa-whatsapp"
        }
    ],
    bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
    {
        proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
        exposedTo: ['nodejs', 'python', 'adobe illustrator']
    },
    team: [
        {
            firstName: "Tolga Avcu",
            image: "images/tolgaAvcu.jpeg",
            memberInfo: teamMemberTolga()
        },
        {
            firstName: "Duygu Yakasız",
            image: "images/userImage.png",
            memberInfo: teamMemberDuygu()
        },
        {
            firstName: "Yağmur Sultan Bilgin",
            image: "images/userImage.png",
            memberInfo: teamMemberYagmur()
        },
        {
            firstName: "Melis Lara Seçkin",
            image: "images/melisLaraSeckin.png",
            memberInfo: teamMemberMelis()
        },
        {
            firstName: "Yalgın Ballıkaya",
            image: "images/userImage.png",
            memberInfo: teamMemberYalgın()
        },
        {
            firstName: "Eda Eğilmez",
            image: "images/edaEgilmez.png",
            memberInfo: teamMemberEda()
        },

        {
            firstName: "Seyithan Tokkarabudak",
            image: "images/seyithanTokkarabudak.png",
            memberInfo: teamMemberSeyithan()
        }
    ],
    eventList: [
        {
            name: "Otofaji",
            date: convertDate("18-03-2023"),
            allDay: true
            // extra: {
            //     icon: "M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09           4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z",
            //     text: "7 People",
            // },
        },
        {
            name: "Otofaji",
            date: convertDate("29-03-2023"),
            allDay: true
        },
        {
            name: "Tai Chi ve Qigong Atölyesi",
            date: convertDate("10-03-2023"),
            allDay: true,
        },
        // {
        //     name: "Otofaji",
        //     date: convertDate("28-02-2023"),
        //     allDay: true,
        // }
    ],
    eventInfos: [
        {
            id: "1832023",
            name: "Otofaji",
            location: "İpekten Sahne",
            time: "20.00",
            biletixLink: "https://www.biletix.com/etkinlik/2CB16/TURKIYE/tr",
        },
        {

            id: "2932023",
            name: "Otofaji",
            location: "Antalya Şehir Tiyatroları",
            time: "20.00",
            biletixLink: "https://www.biletix.com/etkinlik/2CB16/TURKIYE/tr",
        },
        {
            id: "1032023",
            name: "Tai Chi ve Qigong Atölyesi",
            location: "İpekten Sahne",
            time: "19.00",
            biletixLink: "https://www.biletix.com/etkinlik/2CB16/TURKIYE/tr",
        },
        // {
        //     id: "2822023",
        //     location: "İpekten Sahne",
        //     time: "18.00",
        //     biletixLink: "https://www.biletix.com/etkinlik/2CB16/TURKIYE/tr",
        // }
    ],
    aboutUsDescription: aboutUsDescription(),
    atölyeDescription: atölyeDescription(),
}