import { donatcup, miniworld, table, burger, chicken, cow, dioramahelp, gedhang, gedung, home, karakter3, karakter4, karakter5, karakter7, pesawat, room, ruko3, ruko31, ruko, rumahseni, taxi, theembosser, workbench, kamar, logo, cocard1, cocard2, cocard3, brosur, ganci,lanyard1, labyard2, nota, sertifikat, sticker, totebag1, totebag2, twibon1, twibon2, twibon3, twibon4, zoomBg, logo1, logo2, logo3, logo4, mcCard1, mcCard2, saba, media, logoWhite, gambarSatu, gambarDua, gambarTiga, gambarEmpat, gambarLima, gambarEnam, gambarTujuh, gambarDelapan, gambarSembilan, gambarSepuluh, gambarSebelas, gambarDuaBelas, gambarTigaBelas } from "../assets";

    const textHome =
    { 
        title: "About",
        text: "Prawara Art Studio merupakan perusahaan berbentuk Art Studio yang bergerak dalam bidang design grafis. Perusahaan kami mengunggulkan hasil karya berupa design grafis 3D dengan  Artstyle Low Poly unik dan menarik. Perkembangan jasa desain grafis yang pesat saat ini tidak lepas dari banyaknya permintaan  masyarakat akan jasa desain maupun produk desain. Prawara hadir sebagai solusi untuk memenuhi permintaan masyarakat akan jasa maupun produk desain tersebut. Kami hadir dengan memberikan jasa desain khususnya 3D dari desainer dengan skill desain yang mumpuni dan memiliki keunggulan dibanding yang lain. Daya kreativitas, intuisi, imajinasi desainer yang kami miliki menghasilkan maha karya yang luar biasa. Terbukti dari tingkat kepuasan customer terhadap jasa kami selama ini. Kami memiliki berbagai keunggulan dan keunikan dibanding dengan perusahaan-perusahaan desain lainnya.",
        imageUrl: logo,
    }
    
    const textStudio =
    { 
        title: "Visi dan Misi",
        text: `Prawara Art Studio memiliki visi yaitu terwujudnya perusahaan yang terus berkembang dan dapat bersaing dalam lingkup global serta dipercaya sebagai solusi terbaik bagi masyarakat di bidang desain grafis. Visi tersebut hadir untuk memotivasi kami agar selalu memberikan yang terbaik dan terus berkembang. Untuk mewujudkan visi tersebut, kami memiliki misi atau upaya sebagai berikut.`,
        list: ["1. Meningkatkan kompetensi di bidang desain dan management perusahaan", "2. Meningkatkan strategi pemasaran agar jasa kami semakin diminati masyarakat", "3. Meningkatkan networking dan menjalin  kerjasama dengan berbagai pihak seperti komunitas desainer", "4. Memberikan hasil pelayanan terbaik berupa karya yang berkualitas, inovatif, dan menarik/", "5. Menyediakan ide-ide desain kreatif yang terus berkembang mengikuti tren dengan diiringi diferensiasi karya", "6. Memberikan customer experience dengan cara memberikan pelayanan yang menyenangkan, pengerjaan yang cepat, memuaskan, dan memberikan layanan konsultasi desain kepada customer"],
        imageUrl: logo,
    }

    const services = [
        {
            title: "Recent Work",
            text: "Our Works",
            imageUrl: "src/assets/Karya/3D/Kamar.png",
            link: "/works/all"
        },
        {
            title: "About Us",
            text: "Our Studio",
            imageUrl: "src/assets/Karya/3D/Room.png",
            link: "/studio"
        },
    ]

    const imgPartnerUrl = [
        logoWhite,
        media,
        saba
    ]

    const cardStudioContent = [
        {
            title: "3D DESIGN",
            text: "Kami menyediakan layanan jasa design 3D dengan visual dan warna yang menarik serta artstyle lowpoly kami yang unik",
            list: ["Character", "Interior design", "3D logo", "3D model", "Instagram Feed"],
            imageUrl: kamar,
        },
        {
            title: "2D DESIGN",
            text: "Kami menyediakan layanan jasa design 2D dengan cakupan design yang luas sesuai kebutuhan customer. Tentunya dengan style design yang unik dan menarik",
            list: ["Logo", "Poster", "Banner", "Illustrasion", "Certificate", "Twibbon"],
            imageUrl: mcCard2,
        },
    ]

    const cardWorksAll = [
        {
            title: "Miniworld",
            imageUrl: miniworld,
        },
        {
            title: "Donat Cup",
            imageUrl: donatcup,
        },
        {
            title: "Table",
            imageUrl: table,
        },
    ]

    const cardWorks2d = [
        {
            title: "CO Card 1",
            imageUrl: cocard1,
        },
        {
            title: "CO Card 2",
            imageUrl: cocard2,
        },
        {
            title: "CO Card 3",
            imageUrl: cocard3,
        },
        {
            title: "Brosur",
            imageUrl: brosur,
        },
        {
            title: "Ganci",
            imageUrl: ganci,
        },
        {
            title: "Lanyard 1",
            imageUrl: lanyard1,
        },
        {
            title: "Lanyard 2",
            imageUrl: labyard2,
        },
        {
            title: "Nota",
            imageUrl: nota,
        },
        {
            title: "Sertifikat",
            imageUrl: sertifikat,
        },
        {
            title: "Sticker",
            imageUrl: sticker,
        },
        {
            title: "Totebag 1",
            imageUrl: totebag1,
        },
        {
            title: "Totebag 2",
            imageUrl: totebag2,
        },
        {
            title: "Twibon 1",
            imageUrl: twibon1,
        },
        {
            title: "Twibon 2",
            imageUrl: twibon2,
        },
        {
            title: "Twibon 3",
            imageUrl: twibon3,
        },
        {
            title: "Twibon 4",
            imageUrl: twibon4,
        },
        {
            title: "Zoom Background",
            imageUrl: zoomBg,
        },
        {
            title: "Logo 1",
            imageUrl: logo1,
        },
        {
            title: "Logo 2",
            imageUrl: logo2,
        },
        {
            title: "Logo 3",
            imageUrl: logo3,
        },
        {
            title: "Logo 4",
            imageUrl: logo4,
        },
        {
            title: "MC Card 1",
            imageUrl: mcCard1,
        },
        {
            title: "MC Card 2",
            imageUrl: mcCard2,
        }
    ]

    
    const cardWorks3d = [
        {
            title: "Miniworld",
            imageUrl: miniworld,
        },
        {
            title: "Donat Cup",
            imageUrl: donatcup,
        },
        {
            title: "Table",
            imageUrl: table,
        },
        {
            title: "Room",
            imageUrl: room,
        },
        {
            title: "Kamar",
            imageUrl: kamar,
        },
        {
            title: "Karakter 3",
            imageUrl: karakter3,
        },
        {
            title: "Karqakter 4",
            imageUrl: karakter4,
        },
        {
            title: "Karakter 5",
            imageUrl: karakter5,
        },
        {
            title: "Karakter 7",
            imageUrl: karakter7,
        },
        {
            title: "Rumah Seni",
            imageUrl: rumahseni,
        },
        {
            title: "Chicken",
            imageUrl: chicken,
        },
        {
            title: "Cow",
            imageUrl: cow,
        },
        {
            title: "Diorama Help",
            imageUrl: dioramahelp,
        },
        {
            title: "Burger",
            imageUrl: burger,
        },
        {
            title: "Home",
            imageUrl: home,
        },
        {
            title: "Gedhang",
            imageUrl: gedhang,
        },
        {
            title: "Gedung",
            imageUrl: gedung,
        },
        {
            title: "Pesawat",
            imageUrl: pesawat,
        },
        {
            title: "Taxi",
            imageUrl: taxi,
        },
        {
            title: "Workbench",
            imageUrl: workbench,
        },
        {
            title: "The Embosser",
            imageUrl: theembosser,
        },
        {
            title: "Ruko",
            imageUrl: ruko,
        },
    ]

    const cardWorksGambar = [
        {
            title: "Gambar Satu",
            imageUrl: gambarSatu,
        },
        {
            title: "Gambar Dua",
            imageUrl: gambarDua,
        },
        {
            title: "Gambar Tiga",
            imageUrl: gambarTiga,
        },
        {
            title: "Gambar Empat",
            imageUrl: gambarEmpat,
        },
        {
            title: "Gambar Lima",
            imageUrl: gambarLima,
        },
        {
            title: "Gambar Enam",
            imageUrl: gambarEnam,
        },
        {
            title: "Gambar Tujuh",
            imageUrl: gambarTujuh,
        },
        {
            title: "Gambar Delapan",
            imageUrl: gambarDelapan,
        },
        {
            title: "Gambar Sembilan",
            imageUrl: gambarSembilan,
        },
        {
            title: "Gambar Sepuluh",
            imageUrl: gambarSepuluh,
        },
        {
            title: "Gambar Sebelas",
            imageUrl: gambarSebelas,
        },
        {
            title: "Gambar Dua Belas",
            imageUrl: gambarDuaBelas,
        },
        {
            title: "Gambar Tiga Belas",
            imageUrl: gambarTigaBelas,
        }
    ]

    const images = [
        room, miniworld, rumahseni, donatcup, gedhang, gedung, home, karakter3, karakter4, karakter5, karakter7, pesawat, ruko, ruko3, ruko31,
    ]

    const imageUrlCarouselHome = [
        room,
        workbench,
        kamar,
        donatcup
    ]

    const imageUrlCarouselStudio = [
        rumahseni,
        gedhang,
        burger,
        cow
    ]

export { textHome, services, imgPartnerUrl, cardStudioContent, cardWorksAll, cardWorks2d, cardWorks3d, cardWorksGambar, images, textStudio, imageUrlCarouselHome, imageUrlCarouselStudio};