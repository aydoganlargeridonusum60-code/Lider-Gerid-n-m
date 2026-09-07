/** 
 * Lider Hurda - Bölgesel SEO Veri Bankası (81 İl + Sanayi Bölgeleri + Özel İlçeler)
 * Google Dominasyon Motoru v2.0 - Tüm İller ve Özel İletişim Hatları
 */
const REGIONS_DATA = {
    // MARMARA & EGE
    "istanbul": {
        title: "İstanbul Hurda Alımı | 15 Dakikada Adresten Nakit Alım | Lider Hurda",
        h1: "İstanbul Hurda Alımı ve Geri Dönüşüm Terminali",
        meta: "İstanbul genelinde (Anadolu ve Avrupa yakası, 39 ilçe) en yüksek borsa fiyatlarıyla hurda alımı yapıyoruz. Kapınızdan nakit ödeme ile bakır, demir, sarı alıyoruz.",
        content: "İstanbul'un tüm ilçelerinde, sanayi sitelerinde ve kentsel dönüşüm alanlarında Lider Hurda güvencesiyle 7/24 hizmetinizdeyiz. Profesyonel araç filomuz ve hassas dijital tartımımızla en yüksek fiyattan adresten alım yapıyoruz.",
        whatsapp: "Merhaba, İstanbul bölgesinden hurda satmak istiyorum."
    },
    "arnavutkoy": {
        title: "Arnavutköy Hurdacı | Lisanslı Hurda Alım Merkezi | Lider Hurda",
        h1: "Arnavutköy Hurda Alım ve Sanayi Geri Dönüşüm Hizmeti",
        meta: "Arnavutköy ve çevresinde fabrika sökümü, kablo, soyma bakır, demir ve alüminyum hurdası alımı. Adresten nakit ödeme.",
        content: "Arnavutköy bölgesindeki tüm şantiye, fabrika ve konutlardan değerli metal hurdalarınızı anında nakit ödemeyle topluyoruz.",
        whatsapp: "Merhaba, Arnavutköy bölgesinden hurda satışı için ulaşmaktayım."
    },
    "basaksehir": {
        title: "Başakşehir Hurdacı | İkitelli Sanayi Hurda Alımı",
        h1: "Başakşehir & İkitelli OSB Hurda Alım Terminali",
        meta: "Başakşehir ve İkitelli OSB genelinde tonajlı bakır, demir, sarı, kablo ve alüminyum hurda alımı. Güncel borsa garantisi.",
        content: "Başakşehir sanayi siteleri ve kentsel dönüşüm alanlarında en yüksek fiyattan maden alımı yapıyoruz.",
        whatsapp: "Merhaba, Başakşehir bölgesinden hurda satışı yapmak istiyorum."
    },
    "tuzla": {
        title: "Tuzla Hurdacı | Tersane & Sanayi Hurda Alımı",
        h1: "Tuzla Tersaneler Bölgesi ve OSB Hurda Alım Merkezi",
        meta: "Tuzla tersaneler, KOSB ve Orhanlı bölgesinde paslanmaz nikel, bakır, bronz ve ağır demir hurdası alımı. Adresten nakit ödeme.",
        content: "Tuzla denizcilik ve imalat sanayi atıklarınızı yüksek kantar güvencesi ve borsa fiyatlarıyla anında alıyoruz.",
        whatsapp: "Merhaba, Tuzla bölgesinden hurda satmak istiyorum."
    },
    "gebze": {
        title: "Gebze Hurdacı | GOSB & İmalat Sanayi Hurda Alımı",
        h1: "Gebze & GOSB Fabrika Hurda Alım Çözümleri",
        meta: "Gebze OSB, Çayırova ve Dilovası bölgelerinde fabrika sökümü, talaş, kablo ve sac demir alımı. Kurumsal geri dönüşüm.",
        content: "Gebze Organize Sanayi Bölgesi ve sanayi sitelerinde 7/24 tonajlı hurda alım hizmeti sunuyoruz.",
        whatsapp: "Merhaba, Gebze bölgesinden fabrika/şantiye hurdası teklifi almak istiyorum."
    },
    "umraniye": {
        title: "Ümraniye Hurdacı | Dudullu OSB & DES Hurda Alımı",
        h1: "Ümraniye & Dudullu OSB Hurda Alım Terminali",
        meta: "Ümraniye, Dudullu OSB, İMES ve DES sanayi sitelerinde yerinde nakit ödemeli hurda bakır, kablo, alüminyum ve demir alımı.",
        content: "Ümraniye genelinde kentsel dönüşüm ve sanayi hurdalarınızı 15 dakikada kapınızdan alıyoruz.",
        whatsapp: "Merhaba, Ümraniye bölgesinden hurda satmak istiyorum."
    },
    "pendik": {
        title: "Pendik Hurdacı | Sanayi & Adresten Hurda Alımı",
        h1: "Pendik Hurda Alım ve Geri Dönüşüm Merkezi",
        meta: "Pendik, Kurtköy ve Velibaba sanayi bölgelerinde yüksek fiyat garantili bakır, sarı, demir ve alüminyum alımı.",
        content: "Pendik ilçesindeki şantiye ve evsel metal atıklarınızı anında nakit ödemeyle teslim alıyoruz.",
        whatsapp: "Merhaba, Pendik bölgesinden hurda satışı için bilgi almak istiyorum."
    },
    "bagcilar": {
        title: "Bağcılar Hurdacı | Oto Sanayi & Evsel Hurda Alımı",
        h1: "Bağcılar & İSTOÇ Bölgesi Hurda Alım Hizmeti",
        meta: "Bağcılar, İSTOÇ ve Yüzyıl bölgesinde bakır kablo, radyatör, sarı ve demir hurdası alımı. Adresten nakit ödeme.",
        content: "Bağcılar ilçesinde mobil ekiplerimizle kapınızdan 15 dakikada nakit ödemeli hurda alımı yapıyoruz.",
        whatsapp: "Merhaba, Bağcılar bölgesinden hurda satmak istiyorum."
    },
    "esenyurt": {
        title: "Esenyurt Hurdacı | Sanayi & Şantiye Hurda Alımı",
        h1: "Esenyurt Sanayi Bölgesi Hurda Alım Terminali",
        meta: "Esenyurt, Haramidere ve Akçaburgaz sanayi alanlarında yüksek tonajlı bakır, demir, paslanmaz ve alüminyum hurdası alımı.",
        content: "Esenyurt sanayi tesisleri ve şantiyelerinde hızlı nakliye ve yüksek fiyat garantisi sağlıyoruz.",
        whatsapp: "Merhaba, Esenyurt bölgesinden hurda satışı yapmak istiyorum."
    },
    "kocaeli": {
        title: "Kocaeli Hurdacı | İzmit & Dilovası Fabrika Hurda Alımı",
        h1: "Kocaeli Sanayi & İmalat Hurda Geri Dönüşüm Terminali",
        meta: "Kocaeli genelinde İzmit, Dilovası, Körfez ve Gölcük sanayi alanlarında tonajlı sac demir, bakır, nikel ve paslanmaz alımı.",
        content: "Türkiye sanayisinin kalbi Kocaeli'de fabrika atıkları ve ağır sanayi hurdalarını lisanslı tesisimizle ekonomiye kazandırıyoruz.",
        whatsapp: "Merhaba, Kocaeli bölgesinden hurda satışı için iletişime geçiyorum."
    },
    "bursa": {
        title: "Bursa Hurdacı | Otomotiv & Tekstil Hurda Alımı",
        h1: "Bursa Nilüfer, Yıldırım ve OSB Hurda Geri Dönüşüm",
        meta: "Bursa genelinde Nilüfer OSB, NOSAB ve İnegöl sanayi bölgelerinde otomotiv ve tekstil metal atıkları alımı. Nakit ödeme.",
        content: "Bursa sanayi tesislerine özel konteyner hizmeti ve yerinde el spektrometresi ile hassas maden analizi sunuyoruz.",
        whatsapp: "Merhaba, Bursa bölgesinden hurda satmak istiyorum."
    },
    "tekirdag": {
        title: "Tekirdağ Hurdacı | Çorlu & Ergene Fabrika Hurda Alımı",
        h1: "Tekirdağ, Çorlu ve Ergene OSB Hurda Alım Terminali",
        meta: "Tekirdağ genelinde Çorlu, Ergene ve Velimeşe sanayi bölgelerinde krom, paslanmaz, bakır ve profil demir alımı.",
        content: "Trakya sanayi kuşağında kurumsal tesislerin hurda atıklarını yüksek tonaj fiyatlarıyla değerlendiriyoruz.",
        whatsapp: "Merhaba, Tekirdağ/Çorlu bölgesinden hurda satışı için teklif istiyorum."
    },
    "sakarya": {
        title: "Sakarya Hurdacı | Adapazarı & Hendek OSB Hurda Alımı",
        h1: "Sakarya & Adapazarı Sanayi Hurda Alım Merkezi",
        meta: "Sakarya genelinde Adapazarı, Hendek OSB ve Arifiye otomotiv/inşaat hurdası alımı. Adresten nakit ödeme.",
        content: "Sakarya bölgesinde fabrika sökümü ve ağır demir hurdalarınızı en iyi fiyatla yerinden alıyoruz.",
        whatsapp: "Merhaba, Sakarya bölgesinden hurda teklifi almak istiyorum."
    },
    "yalova": {
        title: "Yalova Hurdacı | Tersane & Sanayi Hurda Alımı",
        h1: "Yalova & Altınova Tersaneler Bölgesi Hurda Alımı",
        meta: "Yalova merkez ve Altınova tersane bölgesinde gemi söküm, bakır, pirinç ve paslanmaz demir alımı.",
        content: "Yalova genelinde denizcilik ve inşaat hurdalarını yüksek kantar güveniyle anında alıyoruz.",
        whatsapp: "Merhaba, Yalova bölgesinden hurda satışı yapmak istiyorum."
    },
    "edirne": {
        title: "Edirne Hurdacı | Yerinde Nakit Hurda Alım Merkezi",
        h1: "Edirne Geneli Hurda Bakır, Demir ve Kablo Alımı",
        meta: "Edirne merkez ve ilçelerinde evsel, tarımsal ve sanayi metal atıklarınızı yüksek fiyattan nakit ödemeyle alıyoruz.",
        content: "Edirne ve Trakya genelinde kapınızdan 15 dakikada hurda alım hizmeti veriyoruz.",
        whatsapp: "Merhaba, Edirne bölgesinden hurda satmak istiyorum."
    },
    "kirklareli": {
        title: "Kırklareli Hurdacı | Lüleburgaz Sanayi Hurda Alımı",
        h1: "Kırklareli & Lüleburgaz OSB Hurda Alım Terminali",
        meta: "Kırklareli, Lüleburgaz ve Babaeski sanayi tesislerinden tonajlı maden, bakır ve demir hurdası alımı.",
        content: "Kırklareli sanayisinde üretim atıklarınızı en güncel borsa rakamlarıyla nakde çeviriyoruz.",
        whatsapp: "Merhaba, Kırklareli/Lüleburgaz bölgesinden hurda teklifi almak istiyorum."
    },
    "canakkale": {
        title: "Çanakkale Hurdacı | Biga & Gelibolu Hurda Alımı",
        h1: "Çanakkale & Biga Sanayi Hurda Alım Merkezi",
        meta: "Çanakkale genelinde Biga, Çan ve Gelibolu bölgelerinde ağır demir, bakır, çinko ve kablo hurdası alımı.",
        content: "Çanakkale ilçelerinde tarım, inşaat ve sanayi atık madenlerinizi kapınızda nakit ödüyoruz.",
        whatsapp: "Merhaba, Çanakkale bölgesinden hurda satmak istiyorum."
    },
    "balikesir": {
        title: "Balıkesir Hurdacı | Bandırma & Edremit Hurda Alımı",
        h1: "Balıkesir & Bandırma Sanayi Hurda Geri Dönüşüm",
        meta: "Balıkesir merkez, Bandırma liman bölgesi ve Edremit Körfezi'nde bakır, sarı, alüminyum ve demir alımı.",
        content: "Balıkesir genelinde geniş lojistik ağımızla hurda metallerinizi yüksek değerden nakit alıyoruz.",
        whatsapp: "Merhaba, Balıkesir bölgesinden hurda satışı yapmak istiyorum."
    },
    "izmir": {
        title: "İzmir Hurdacı | Aliağa, Çiğli & Bornova Hurda Alımı",
        h1: "İzmir Genelinde Profesyonel Hurda ve Gemi Söküm Terminali",
        meta: "İzmir ve Ege bölgesinde Aliağa, Çiğli OSB, Bornova ve Pınarbaşı'nda endüstriyel hurda alımı.",
        content: "Ege'nin sanayi lokomotifi İzmir'de gemi söküm, fabrika atığı ve ağır maden hurdalarını en iyi fiyattan alıyoruz.",
        whatsapp: "Merhaba, İzmir bölgesinden hurda teklifi istiyoruz."
    },
    "aliaga": {
        title: "Aliağa Hurdacı | Gemi Söküm & Demir Çelik Hurda Alımı",
        h1: "Aliağa Gemi Söküm ve Ağır Sanayi Hurda Terminali",
        meta: "Aliağa gemi söküm tesisleri ve demir-çelik sanayisinde tonajlı sac, pik demir, nikel ve bakır hurdası alımı.",
        content: "Aliağa liman ve sanayi bölgesinde uluslararası standartlarda hurda ekspertizi ve alımı sunuyoruz.",
        whatsapp: "Merhaba, Aliağa bölgesinden tonajlı hurda teklifi almak istiyorum."
    },
    "bornova": {
        title: "Bornova Hurdacı | Sanayi Sitesi Hurda Alımı",
        h1: "Bornova & 1. Sanayi Bölgesi Hurda Alım Merkezi",
        meta: "Bornova, Pınarbaşı ve Otogar çevresindeki oto sanayi ve imalathanelerden bakır, sarı, kablo ve demir alımı.",
        content: "Bornova ilçesinde sanayi esnafına ve şantiyelere anında nakit ödemeli hurda hizmeti sağlıyoruz.",
        whatsapp: "Merhaba, Bornova bölgesinden hurda satmak istiyorum."
    },
    "manisa": {
        title: "Manisa Hurdacı | Manisa OSB Fabrika Hurda Alımı",
        h1: "Manisa OSB Beyaz Eşya & Metal Hurda Terminali",
        meta: "Manisa Organize Sanayi Bölgesi ve ilçelerinde alüminyum, paslanmaz, bakır ve sac demir hurdası alımı.",
        content: "Manisa OSB ve çevresindeki büyük imalat tesislerine kurumsal hurda geri dönüşüm çözümleri sağlıyoruz.",
        whatsapp: "Merhaba, Manisa OSB fabrikamız için hurda teklifi almak istiyoruz."
    },
    "aydin": {
        title: "Aydın Hurdacı | Nazilli & Söke Hurda Alımı",
        h1: "Aydın Geneli Tarım ve Sanayi Hurda Alım Merkezi",
        meta: "Aydın merkez, Nazilli, Söke ve Kuşadası bölgelerinde bakır, sarı, kablo, alüminyum ve demir hurdası alımı.",
        content: "Aydın ili genelinde yerinde tartım ve anında nakit ödeme garantisiyle hizmet veriyoruz.",
        whatsapp: "Merhaba, Aydın bölgesinden hurda satışı yapmak istiyorum."
    },
    "denizli": {
        title: "Denizli Hurdacı | Tekstil & Bakır Sanayi Hurda Alımı",
        h1: "Denizli OSB & Kablo Metal Hurda Geri Dönüşüm",
        meta: "Denizli genelinde kablo imalat artıkları, soyma bakır, pirinç sarı ve profil alüminyum alımı. Nakit ödeme.",
        content: "Denizli sanayisi ve kablo kenti niteliğine uygun yüksek saflıkta bakır ve maden alım hizmeti sunuyoruz.",
        whatsapp: "Merhaba, Denizli bölgesinden kablo/bakır hurdası satmak istiyorum."
    },
    "mugla": {
        title: "Muğla Hurdacı | Bodrum, Fethiye & Marmaris Hurda Alımı",
        h1: "Muğla & Bodrum Turizm Tesisleri Hurda Alım Terminali",
        meta: "Muğla, Bodrum, Fethiye ve Marmaris otel yenileme, şantiye ve evsel metal hurdaları alımı. Nakit ödeme.",
        content: "Muğla ve tatil beldelerinde otel sökümü, klima, bakır boru ve alüminyum hurdalarını adresten alıyoruz.",
        whatsapp: "Merhaba, Muğla bölgesinden hurda teklifi almak istiyorum."
    },

    // İÇ ANADOLU & AKDENİZ
    "ankara": {
        title: "Ankara Hurdacı | OSTİM & İvedik Hurda Alımı | Lider Hurda",
        h1: "Ankara OSTİM & İvedik Sanayi Hurda Alım Terminali",
        meta: "Ankara genelinde OSTİM, İvedik OSB, Sincan ve İskitler sanayi alanlarında anlık borsa fiyatıyla hurda alımı.",
        content: "Başkent Ankara'da savunma sanayi, otomotiv ve inşaat hurdalarınızı profesyonel ekibimizle, borsa değerinin üzerinde alıyoruz.",
        whatsapp: "Merhaba, Ankara OSTİM/İvedik bölgesinden hurda satmak istiyorum."
    },
    "ostim": {
        title: "OSTİM Hurdacı | Ankara Sanayi Hurda Alım Merkezi",
        h1: "OSTİM OSB Metal & İmalat Hurda Terminali",
        meta: "OSTİM Organize Sanayi Bölgesi'nde torna talaşı, çubuk sarı, bakır, DKP demir ve nikel alımı. Nakit ödeme.",
        content: "OSTİM esnafına ve imalatçılarına yerinde spektrometre analizi ve anında ödeme güvencesi sunuyoruz.",
        whatsapp: "Merhaba, OSTİM sanayi sitemizden hurda satışı yapmak istiyoruz."
    },
    "ivedik": {
        title: "İvedik OSB Hurdacı | Ankara Hurda Alımı",
        h1: "İvedik Organize Sanayi Hurda Geri Dönüşüm",
        meta: "İvedik OSB genelinde ağır sanayi demiri, alüminyum profil, kablo ve sarı hurda alımı. Güncel borsa fiyatı.",
        content: "İvedik OSB'deki tüm fabrikalara periyodik hurda toplama ve yüksek tonaj nakliye imkanı sağlıyoruz.",
        whatsapp: "Merhaba, İvedik OSB bölgesinden hurda teklifi almak istiyorum."
    },
    "eskisehir": {
        title: "Eskişehir Hurdacı | OSB Fabrika Hurda Alımı",
        h1: "Eskişehir Sanayi & Raylı Sistemler Hurda Terminali",
        meta: "Eskişehir OSB, Tepebaşı ve Odunpazarı bölgelerinde demir, bakır, krom ve makine hurdası alımı. Nakit ödeme.",
        content: "Eskişehir sanayi altyapısına özel yüksek tonajlı lojistik ve hassas kantar ile hizmet sunuyoruz.",
        whatsapp: "Merhaba, Eskişehir bölgesinden hurda satmak istiyorum."
    },
    "kayseri": {
        title: "Kayseri Hurdacı | Mobilya & Metal Sanayi Hurda Alımı",
        h1: "Kayseri OSB & Mimarsinan Hurda Alım Merkezi",
        meta: "Kayseri OSB, Mimarsinan ve Melikgazi sanayi alanlarında sac demir, profil alüminyum, bakır ve kablo alımı.",
        content: "Kayseri sanayisinin güçlü imalat altyapısından çıkan hurda metalleri en yüksek borsa değeriyle nakde çeviriyoruz.",
        whatsapp: "Merhaba, Kayseri bölgesinden hurda teklifi almak istiyorum."
    },
    "konya": {
        title: "Konya Hurdacı | Karatay & Büsan OSB Hurda Alımı",
        h1: "Konya Sanayi Siteleri & Karatay Hurda Terminali",
        meta: "Konya Karatay, Büsan OSB ve 1. Organize Sanayi bölgesinde döküm demir, bakır, sarı ve akü hurdası alımı.",
        content: "Konya motor ve makine sanayisi atıklarını lisanslı tesislerimizde en yüksek değerle geri dönüştürüyoruz.",
        whatsapp: "Merhaba, Konya sanayisinden hurda satışı yapmak istiyorum."
    },
    "sivas": {
        title: "Sivas Hurdacı | 1. OSB & Demiryolu Hurda Alımı",
        h1: "Sivas Sanayi & Ağır Metal Hurda Alım Merkezi",
        meta: "Sivas merkez ve OSB bölgesinde demir çelik, imalat artıkları, bakır ve kablo hurdası alımı. Adresten ödeme.",
        content: "Sivas genelinde inşaat ve ağır sanayi metallerinizi kapınızda nakit ödeyerek alıyoruz.",
        whatsapp: "Merhaba, Sivas bölgesinden hurda teklifi almak istiyorum."
    },
    "aksaray": {
        title: "Aksaray Hurdacı | OSB Fabrika Hurda Alımı",
        h1: "Aksaray Organize Sanayi Hurda Geri Dönüşüm",
        meta: "Aksaray OSB ve sanayi alanlarında otomotiv yan sanayi atıkları, bakır, alüminyum ve demir alımı.",
        content: "Aksaray sanayisindeki tesislerinize kurumsal konteyner ve periyodik hurda toplama hizmeti veriyoruz.",
        whatsapp: "Merhaba, Aksaray bölgesinden hurda satmak istiyorum."
    },
    "cankiri": {
        title: "Çankırı Hurdacı | OSB Metal Hurda Alımı",
        h1: "Çankırı Geneli Hurda Bakır ve Demir Alım Merkezi",
        meta: "Çankırı merkez ve Yakınkent OSB'de lastik/metal sanayi atıkları, ağır demir ve bakır hurdası alımı.",
        content: "Çankırı genelinde adresten 15 dakikada nakit ödemeli hurda alımı gerçekleştiriyoruz.",
        whatsapp: "Merhaba, Çankırı bölgesinden hurda satışı için ulaşıyorum."
    },
    "kirsehir": {
        title: "Kırşehir Hurdacı | Sanayi Hurda Alım Hizmeti",
        h1: "Kırşehir OSB & Şantiye Hurda Alım Terminali",
        meta: "Kırşehir merkez ve OSB alanlarında inşaat demiri, bakır kablo, sarı pirinç ve alüminyum alımı.",
        content: "Kırşehir genelinde tüm metal atıklarınızı şeffaf kantar onayıyla en yüksek fiyattan alıyoruz.",
        whatsapp: "Merhaba, Kırşehir bölgesinden hurda teklifi istiyoruz."
    },
    "kirikkale": {
        title: "Kırıkkale Hurdacı | Makine & Kimya Hurda Alımı",
        h1: "Kırıkkale Ağır Sanayi & Metal Hurda Terminali",
        meta: "Kırıkkale merkez ve Yahşihan bölgesinde ağır demir, pirinç sarı, mühimmat/silah sanayi atığı ve bakır alımı.",
        content: "Kırıkkale metalürji ve ağır sanayi birikimine uygun yüksek borsa fiyatlarıyla hizmet veriyoruz.",
        whatsapp: "Merhaba, Kırıkkale bölgesinden hurda satmak istiyorum."
    },
    "nevsehir": {
        title: "Nevşehir Hurdacı | Kapadokya & Sanayi Hurda Alımı",
        h1: "Nevşehir Geneli Hurda Bakır, Alüminyum ve Demir",
        meta: "Nevşehir merkez ve Ürgüp/Avanos bölgesinde otel sökümü, bakır boru, kablo ve inşaat hurdası alımı.",
        content: "Nevşehir ve turizm/sanayi alanlarında yerinde tartım ile nakit ödemeli geri dönüşüm sağlıyoruz.",
        whatsapp: "Merhaba, Nevşehir bölgesinden hurda satmak istiyorum."
    },
    "nigde": {
        title: "Niğde Hurdacı | Bor OSB Hurda Alımı",
        h1: "Niğde & Bor OSB Sanayi Hurda Alım Merkezi",
        meta: "Niğde merkez ve Bor OSB alanlarında tarım makineleri, inşaat demiri, bakır ve kablo alımı.",
        content: "Niğde ilinde her türlü maden ve sanayi hurdanızı en yüksek değerden kapınızda alıyoruz.",
        whatsapp: "Merhaba, Niğde bölgesinden hurda teklifi almak istiyorum."
    },
    "yozgat": {
        title: "Yozgat Hurdacı | OSB Sanayi Hurda Alımı",
        h1: "Yozgat Geneli Hurda Bakır, Kablo ve Demir",
        meta: "Yozgat merkez ve Sorgun OSB alanlarında inşaat demiri, soyma bakır, sarı ve alüminyum hurdası alımı.",
        content: "Yozgat genelinde hızlı araç ağımızla hurda metallerinizi yerinden nakit ödemeyle teslim alıyoruz.",
        whatsapp: "Merhaba, Yozgat bölgesinden hurda satışı yapmak istiyorum."
    },
    "antalya": {
        title: "Antalya Hurdacı | Otel Sökümü & OSB Hurda Alımı",
        h1: "Antalya Oteller Bölgesi & OSB Hurda Terminali",
        meta: "Antalya OSB, Kepez, Muratpaşa ve Alanya otel yenileme, bakır klima borusu, alüminyum profil ve krom alımı.",
        content: "Antalya turizm tesislerinin sezon sonu söküm hurdalarını ve sanayi metallerini yüksek fiyattan alıyoruz.",
        whatsapp: "Merhaba, Antalya bölgesinden otel/şantiye hurdası teklifi almak istiyorum."
    },
    "mersin": {
        title: "Mersin Hurdacı | Liman & Serbest Bölge Hurda Alımı",
        h1: "Mersin Limanı & Akdeniz OSB Hurda Alım Merkezi",
        meta: "Mersin Limanı, Tarsus ve Serbest Bölge'de konteyner hurdası, gemi parçaları, bakır ve paslanmaz alımı.",
        content: "Mersin lojistik ve sanayi merkezinde uluslararası standartlarda hurda alım hizmeti veriyoruz.",
        whatsapp: "Merhaba, Mersin bölgesinden liman/fabrika hurdası satmak istiyorum."
    },
    "adana": {
        title: "Adana Hurdacı | Hacı Sabancı OSB Hurda Alımı",
        h1: "Adana Hacı Sabancı OSB & Metal Hurda Terminali",
        meta: "Adana OSB, Seyhan ve Yüreğir sanayi alanlarında ağır demir, bakır, alüminyum petek ve kablo alımı.",
        content: "Çukurova'nın sanayi başkenti Adana'da fabrika hurdalarınızı anında nakit ödemeyle alıyoruz.",
        whatsapp: "Merhaba, Adana bölgesinden hurda teklifi almak istiyorum."
    },
    "hatay": {
        title: "Hatay Hurdacı | İskenderun Demir Çelik Hurda Alımı",
        h1: "Hatay & İskenderun Demir Çelik Hurda Terminali",
        meta: "İskenderun, Antakya ve Payas demir-çelik sanayi bölgesinde döküm demir, tufal, ağır sac ve bakır alımı.",
        content: "Hatay ve İskenderun sanayi hattında yüksek tonajlı ağır metal hurdalarını en iyi fiyatla alıyoruz.",
        whatsapp: "Merhaba, Hatay/İskenderun bölgesinden tonajlı demir hurdası teklifi istiyoruz."
    },
    "isparta": {
        title: "Isparta Hurdacı | Sanayi Hurda Alım Merkezi",
        h1: "Isparta Geneli Hurda Bakır, Alüminyum ve Demir",
        meta: "Isparta merkez ve Süleyman Demirel OSB alanında alüminyum profil, bakır kablo ve demir hurdası alımı.",
        content: "Isparta ilinde kapınızdan 15 dakikada nakit ödemeli profesyonel hurda alım hizmeti sunuyoruz.",
        whatsapp: "Merhaba, Isparta bölgesinden hurda satmak istiyorum."
    },
    "burdur": {
        title: "Burdur Hurdacı | Mermer & Sanayi Hurda Alımı",
        h1: "Burdur OSB & Makine Sanayi Hurda Terminali",
        meta: "Burdur merkez ve Bucak OSB alanında mermer makinesi hurdaları, bakır, sarı ve demir alımı.",
        content: "Burdur sanayisinde atık metallerinizi anında nakit ödemeyle geri dönüşüme kazandırıyoruz.",
        whatsapp: "Merhaba, Burdur bölgesinden hurda satışı yapmak istiyorum."
    },
    "kahramanmaras": {
        title: "Kahramanmaraş Hurdacı | Tekstil OSB Hurda Alımı",
        h1: "Kahramanmaraş OSB & Metal Hurda Alım Merkezi",
        meta: "Kahramanmaraş OSB, Türkoğlu ve Elbistan sanayi tesislerinden tekstil makinesi, krom, bakır ve demir alımı.",
        content: "Kahramanmaraş sanayisinde fabrika sökümü ve tonajlı metal hurdalarınızı yerinde alıyoruz.",
        whatsapp: "Merhaba, Kahramanmaraş bölgesinden hurda teklifi almak istiyorum."
    },

    // KARADENİZ & ANADOLU GENEL
    "samsun": {
        title: "Samsun Hurdacı | Bakır & Sanayi Hurda Alımı | Lider Hurda",
        h1: "Samsun OSB & Bakır İşletmeleri Hurda Terminali",
        meta: "Samsun OSB, Tekkeköy ve İlkadım sanayi sitelerinde soyma bakır, pirinç sarı, alüminyum ve ağır demir alımı.",
        content: "Karadeniz'in sanayi kapısı Samsun'da bakır ve metal atıklarınızı anında nakde çeviriyoruz.",
        whatsapp: "Merhaba, Samsun bölgesinden hurda satmak istiyorum."
    },
    "trabzon": {
        title: "Trabzon Hurdacı | Arsin OSB Hurda Alımı",
        h1: "Trabzon & Arsin OSB Hurda Alım Terminali",
        meta: "Trabzon merkez, Arsin OSB ve Akçaabat bölgesinde inşaat demiri, bakır kablo ve alüminyum alımı.",
        content: "Trabzon genelinde şantiye ve sanayi atığı hurdalarınızı en yüksek fiyattan nakit alıyoruz.",
        whatsapp: "Merhaba, Trabzon bölgesinden hurda teklifi almak istiyorum."
    },
    "ordu": {
        title: "Ordu Hurdacı | OSB Sanayi Hurda Alımı",
        h1: "Ordu Geneli Hurda Bakır, Alüminyum ve Demir",
        meta: "Ordu merkez, Ünye ve Fatsa sanayi bölgelerinde metal bakır, alüminyum ve inşaat demiri alımı.",
        content: "Ordu ili genelinde mobil araçlarımızla adresten nakit ödemeli hurda alımı sağlıyoruz.",
        whatsapp: "Merhaba, Ordu bölgesinden hurda satışı yapmak istiyorum."
    },
    "giresun": {
        title: "Giresun Hurdacı | Bulancak OSB Hurda Alımı",
        h1: "Giresun & Bulancak OSB Hurda Alım Merkezi",
        meta: "Giresun merkez, Bulancak OSB ve Görele'de bakır, sarı, alüminyum ve ağır demir hurdası alımı.",
        content: "Giresun genelinde tüm metal atıklarınızı kapınızda hassas kantarla ölçüp ödüyoruz.",
        whatsapp: "Merhaba, Giresun bölgesinden hurda teklifi almak istiyorum."
    },
    "rize": {
        title: "Rize Hurdacı | Çay Fabrikaları & Sanayi Hurda Alımı",
        h1: "Rize Geneli Metal & Sanayi Hurda Terminali",
        meta: "Rize merkez, Çayeli ve Ardeşen tesislerinden krom paslanmaz, bakır, alüminyum ve demir alımı.",
        content: "Rize ve çevresindeki tesislerin söküm ve imalat hurdalarını en iyi fiyattan alıyoruz.",
        whatsapp: "Merhaba, Rize bölgesinden hurda satmak istiyorum."
    },
    "amasya": {
        title: "Amasya Hurdacı | Merzifon OSB Hurda Alımı",
        h1: "Amasya & Merzifon OSB Hurda Alım Terminali",
        meta: "Amasya merkez ve Merzifon OSB beyaz eşya yan sanayi atıkları, bakır, demir ve alüminyum alımı.",
        content: "Amasya sanayisinde değerli metal atıklarınızı borsa fiyatıyla anında nakde dönüştürüyoruz.",
        whatsapp: "Merhaba, Amasya/Merzifon bölgesinden hurda satışı için ulaşıyorum."
    },
    "erzurum": {
        title: "Erzurum Hurdacı | 1. OSB Hurda Alım Merkezi",
        h1: "Erzurum Sanayi & Doğu Anadolu Hurda Terminali",
        meta: "Erzurum OSB, Palandöken ve Yakutiye bölgesinde ağır inşaat demiri, bakır kablo ve alüminyum alımı.",
        content: "Doğu Anadolu'nun merkezi Erzurum'da şantiye ve evsel hurdalarınızı kapınızda alıyoruz.",
        whatsapp: "Merhaba, Erzurum bölgesinden hurda teklifi istiyoruz."
    },
    "van": {
        title: "Van Hurdacı | OSB Sanayi Hurda Alımı",
        h1: "Van & OSB Sanayi Hurda Alım Merkezi",
        meta: "Van merkez, Tuşba OSB ve Erciş bölgesinde ağır demir, soyma bakır, sarı ve alüminyum alımı.",
        content: "Van ili genelinde kurumsal nakliye ağımızla hurdalarınızı en yüksek fiyattan nakit alıyoruz.",
        whatsapp: "Merhaba, Van bölgesinden hurda satmak istiyorum."
    },
    "diyarbakir": {
        title: "Diyarbakır Hurdacı | OSB Sanayi Hurda Alımı",
        h1: "Diyarbakır OSB & Kayapınar Hurda Terminali",
        meta: "Diyarbakır OSB, Bağlar ve Kayapınar bölgelerinde inşaat demiri, bakır kablo, trafo ve alüminyum alımı.",
        content: "Diyarbakır genelinde şantiye ve fabrika hurdalarınızı anında nakit ödemeyle teslim alıyoruz.",
        whatsapp: "Merhaba, Diyarbakır bölgesinden hurda teklifi alabilir miyim?"
    },
    "gaziantep": {
        title: "Gaziantep Hurdacı | 1-5 OSB Fabrika Hurda Alımı",
        h1: "Gaziantep Organize Sanayi Hurda Alım Terminali",
        meta: "Gaziantep 1, 2, 3, 4, 5. OSB bölgelerinde tekstil/makine sökümü, lama bakır, krom 304 ve döküm demir alımı.",
        content: "Güneydoğu'nun sanayi devi Gaziantep'te dev fabrika hurdalarını el spektrometresi ile yerinde analiz edip alıyoruz.",
        whatsapp: "Merhaba, Gaziantep OSB fabrikamız için hurda teklifi almak istiyoruz."
    },
    "sanliurfa": {
        title: "Şanlıurfa Hurdacı | 1. & 2. OSB Hurda Alımı",
        h1: "Şanlıurfa OSB Sanayi Hurda Alım Merkezi",
        meta: "Şanlıurfa OSB, Haliliye ve Eyyübiye bölgelerinde tarım makinesi atıkları, bakır kablo, sarı ve demir alımı.",
        content: "Şanlıurfa genelinde tüm maden ve şantiye atıklarınızı kapınızda nakit ödeyerek topluyoruz.",
        whatsapp: "Merhaba, Şanlıurfa bölgesinden hurda satışı yapmak istiyorum."
    },
    "mardin": {
        title: "Mardin Hurdacı | OSB & Kızıltepe Hurda Alımı",
        h1: "Mardin OSB & Kızıltepe Hurda Alım Terminali",
        meta: "Mardin OSB, Kızıltepe ve Artuklu sanayi alanlarında inşaat demiri, bakır kablo ve alüminyum alımı.",
        content: "Mardin genelinde uzman ekiplerimizle yerinde tartım ve anında nakit ödeme sağlıyoruz.",
        whatsapp: "Merhaba, Mardin bölgesinden hurda teklifi almak istiyorum."
    },
    "batman": {
        title: "Batman Hurdacı | OSB & Petrol Sanayi Hurda Alımı",
        h1: "Batman OSB & Ağır Sanayi Hurda Terminali",
        meta: "Batman OSB ve petrol sanayi tesislerinde ağır vana, boru, sac demir, bakır ve kablo hurdası alımı.",
        content: "Batman ilinde endüstriyel ve evsel metal hurdalarınızı borsa gücüyle nakde çeviriyoruz.",
        whatsapp: "Merhaba, Batman bölgesinden hurda satmak istiyorum."
    },
    "siirt": {
        title: "Siirt Hurdacı | OSB Sanayi Hurda Alımı",
        h1: "Siirt Geneli Hurda Bakır, Alüminyum ve Demir",
        meta: "Siirt merkez ve OSB bölgesinde bakır, kablo, alüminyum profil ve inşaat demiri alımı. Nakit ödeme.",
        content: "Siirt genelinde kapınızdan 15 dakikada güvenilir hurda alım hizmeti veriyoruz.",
        whatsapp: "Merhaba, Siirt bölgesinden hurda teklifi almak istiyorum."
    },
    "sirnak": {
        title: "Şırnak Hurdacı | Cizre & Silopi Hurda Alımı",
        h1: "Şırnak, Cizre & Silopi Hurda Alım Merkezi",
        meta: "Şırnak merkez, Cizre ve Silopi sınır hattında ağır demir, bakır, kablo ve alüminyum hurdası alımı.",
        content: "Şırnak ili ve ilçelerinde mobil araç filomuzla yüksek fiyattan nakit ödemeli hurda alıyoruz.",
        whatsapp: "Merhaba, Şırnak/Cizre bölgesinden hurda satışı için ulaşıyorum."
    },

    // Default Şablon (Geri Kalan Tüm İller ve Özel Lokasyonlar İçin)
    "default": {
        title: "[ŞEHİR] Hurda Alımı | Lider Hurda Türkiye Geneli 81 İl",
        h1: "[ŞEHİR] Hurda Alımı ve Güncel Maden Borsası",
        meta: "[ŞEHİR] genelinde en yüksek borsa fiyatlarıyla hurda alımı yapıyoruz. Kapınızdan nakit ödeme ile geri dönüşüm hizmeti sağlıyoruz.",
        content: "[ŞEHİR] bölgesindeki tüm hurdalarınızı Lider Hurda güvencesiyle, profesyonel araçlarımız ve uzman ekibimizle yerinde değerlendiriyoruz. 81 ilde borsa gücümüzü kapınıza getiriyoruz.",
        whatsapp: "Merhaba, [ŞEHİR] bölgesinden hurda satışı için bilgi almak istiyorum."
    }
};

// 81 İlin Tam Listesi (SEO ve Dinamik Tarama İçin)
const ALL_CITIES = [
    "Adana", "Adiyaman", "Afyonkarahisar", "Agri", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin", "Aydin", "Balikesir", "Bartin", "Batman", "Bayburt", "Bilecik", "Bingol", "Bitlis", "Bolu", "Burdur", "Bursa", "Canakkale", "Cankiri", "Corum", "Denizli", "Diyarbakir", "Duzce", "Edirne", "Elazig", "Erzincan", "Erzurum", "Eskisehir", "Gaziantep", "Giresun", "Gumushane", "Hakkari", "Hatay", "Igdir", "Isparta", "Istanbul", "Izmir", "Kahramanmaras", "Karabuk", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kirikkale", "Kirklareli", "Kirsehir", "Kocaeli", "Konya", "Kutahya", "Malatya", "Manisa", "Mardin", "Mersin", "Mugla", "Mus", "Nevsehir", "Nigde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Sanliurfa", "Sirnak", "Tekirdag", "Tokat", "Trabzon", "Tunceli", "Usak", "Van", "Yalova", "Yozgat", "Zonguldak"
];
