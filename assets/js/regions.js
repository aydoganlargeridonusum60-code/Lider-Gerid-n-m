/** 
 * Lider Hurda - Bölgesel SEO Veri Bankası (81 İl + Sanayi Bölgeleri)
 * Google Dominasyon Motoru v1.0
 */
const REGIONS_DATA = {
    "istanbul": {
        title: "İstanbul Hurda Alımı | Güncel Fiyatlar & Adresten Alım",
        h1: "İstanbul Hurda Alımı ve Geri Dönüşüm Terminali",
        meta: "İstanbul genelinde (Marmara, Anadolu, İkitelli...) en yüksek borsa fiyatlarıyla hurda alımı yapıyoruz. Kapınızdan nakit ödeme ile bakır, demir, sarı alıyoruz.",
        content: "İstanbul'un her ilçesinde, sanayi bölgelerinde ve şantiye alanlarında Lider Hurda güvencesiyle hizmetinizdeyiz. Profesyonel araç filomuz ve anlık borsa takibimizle en doğru ekspertizi sunuyoruz.",
        whatsapp: "Merhaba, İstanbul bölgesinden hurda satmak istiyorum."
    },
    "gebze-organize-sanayi": {
        title: "Gebze Organize Sanayi Hurdacı | OSB Hurda Alımı v1",
        h1: "Gebze Organize Sanayi Bölgesi (GOSB) Fabrika Hurda Alım Çözümleri",
        meta: "Gebze OSB ve Dilovası bölgesindeki fabrikalarınıza profesyonel hurda toplama çözümleri sunuyoruz. Kurumsal lisanslı hizmet, yüksek tonajlı alım.",
        content: "Gebze Organize Sanayi Bölgesi'ndeki (GOSB) endüstriyel tesislerinize, talaş, metal artıkları ve makine hurdaları için 7/24 hizmet vermekteyiz. Fabrika söküm ve tehlikesiz atık yönetimi konularında uzman ekibimizle çözüm ortağınızız.",
        whatsapp: "Merhaba, Gebze OSB bölgesindeki fabrikamız için hurda danışmanlığı istiyoruz."
    },
    "ankara": {
        title: "Ankara Hurda Fiyatları | OSTİM & İvedik Hurda Alımı",
        h1: "Ankara (OSTİM, İvedik) Hurda Alımı ve Güncel Maden Borsası",
        meta: "Ankara genelinde OSTİM ve İvedik sanayi bölgeleri başta olmak üzere 0.5 saniyede güncellenen fiyatlarla hurda alımı yapıyoruz.",
        content: "Başkent Ankara'da savunma sanayi, otomotiv ve inşaat hurdalarınızı profesyonel ekibimizle, borsa değerinin üzerinde alıyoruz. OSTİM merkezli lojistik ağımızla en hızlı hizmeti sağlıyoruz.",
        whatsapp: "Merhaba, Ankara OSTİM bölgesinden hurda satışı için ulaşıyorum."
    },
    "izmir": {
        title: "İzmir Hurda Borsası | Aliağa & Çiğli Fabrika Alımları",
        h1: "İzmir Genelinde Profesyonel Hurda Alımı ve Aliağa Metal Geri Dönüşüm",
        meta: "İzmir ve Ege bölgesinde Aliağa, Çiğli ve Kemalpaşa bölgelerinde endüstriyel hurda alımı yapıyoruz. Nakit ödeme, anında nakliye.",
        content: "Ege'nin sanayi lokomotifi İzmir'de, gemi söküm, fabrika artıkları ve kurumsal metal hurdalarınızı Lider Hurda standartlarında, şeffaf kantar onayı ile alıyoruz.",
        whatsapp: "Merhaba, İzmir bölgesinden hurda satışı için teklif bekliyoruz."
    },
    "bursa": {
        title: "Bursa Hurdacı | Otomotiv & Tekstil Hurda Alımı",
        h1: "Bursa Nilüfer, Yıldırım ve Organize Sanayi Hurda Geri Dönüşüm",
        meta: "Bursa genelinde otomotiv ve tekstil sanayi hurdalarınızı profesyonel ekipmanlarla alıyoruz. Güncel borsa fiyatlarıyla nakit ödeme.",
        content: "Yeşil Bursa'da sanayi tesislerinize özel konteyner hizmeti ve periyodik hurda toplama çözümleri sunuyoruz. Metalurjik analiz makinemizle hurdalarınızın kimyasal saflığını yerinde ölçüyoruz.",
        whatsapp: "Merhaba, Bursa bölgesindeki tesisimizden hurda sevkiyatı yapmak istiyoruz."
    },
    // Diğer 76 il ve kritik bölgeler buraya eklenecek (Default şablon ile)
    "default": {
        title: "[ŞEHİR] Hurda Alımı | Lider Hurda Türkiye Geneli",
        h1: "[ŞEHİR] Hurda Alımı ve Güncel Maden Borsası",
        meta: "[ŞEHİR] genelinde en yüksek borsa fiyatlarıyla hurda alımı yapıyoruz. Kapınızdan nakit ödeme ile geri dönüşüm hizmeti sağlıyoruz.",
        content: "[ŞEHİR] bölgesindeki tüm hurdalarınızı Lider Hurda güvencesiyle, profesyonel araçlarımız ve uzman ekibimizle yerinde değerlendiriyoruz. 81 ilde borsa gücümüzü kapınıza getiriyoruz.",
        whatsapp: "Merhaba, [ŞEHİR] bölgesinden hurda satışı için bilgi almak istiyorum."
    }
};

// 81 ilin listesi (SEO Linkleri için)
const ALL_CITIES = [
    "Adana", "Adiyaman", "Afyonkarahisar", "Agri", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin", "Aydin", "Balikesir", "Bartin", "Batman", "Bayburt", "Bilecik", "Bingol", "Bitlis", "Bolu", "Burdur", "Bursa", "Canakkale", "Cankiri", "Corum", "Denizli", "Diyarbakir", "Duzce", "Edirne", "Elazig", "Erzincan", "Erzurum", "Eskisehir", "Gaziantep", "Giresun", "Gumushane", "Hakkari", "Hatay", "Igdir", "Isparta", "Istanbul", "Izmir", "Kahramanmaras", "Karabuk", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kirikkale", "Kirklareli", "Kirsehir", "Kocaeli", "Konya", "Kutahya", "Malatya", "Manisa", "Mardin", "Mersin", "Mugla", "Mus", "Nevsehir", "Nigde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Sanliurfa", "Sirnak", "Tekirdag", "Tokat", "Trabzon", "Tunceli", "Usak", "Van", "Yalova", "Yozgat", "Zonguldak"
];
