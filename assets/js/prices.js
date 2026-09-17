/**
 * Lider Hurda - Merkezi Fiyat Veri Modülü (Single Source of Truth)
 * Tüm sayfalardaki fiyat tabloları, hesaplayıcılar ve dinamik etiketler bu merkezi veriden beslenir.
 */
const HURDA_PRICES = {
    meta: {
        lastUpdate: "2026-09-16",
        updateTime: "09:30",
        currency: "TL",
        currencySymbol: "₺",
        marketStatus: "Açık (Canlı LME & Serbest Piyasa Endeksli)"
    },
    items: {
        // --- BAKIR GRUBU ---
        "soyma-bakir": {
            id: "soyma-bakir",
            name: "Soyma Bakır Hurdası",
            category: "bakir",
            grade: "%99.9 Elektrolitik Parlak Tel",
            unit: "KG",
            priceMin: 650.00,
            priceMax: 680.00,
            priceTonaj: 685.00,
            change: "+1.2%",
            url: "hurda-bakir.html",
            description: "Kablodan mekanik olarak soyulmuş, yanık ve oksit içermeyen saf parlak bakır teller."
        },
        "lama-bakir": {
            id: "lama-bakir",
            name: "Lama / Bara Bakır Hurdası",
            category: "bakir",
            grade: "Pano ve Trafo İletim Barası",
            unit: "KG",
            priceMin: 630.00,
            priceMax: 665.00,
            priceTonaj: 670.00,
            change: "+0.8%",
            url: "hurda-bakir.html",
            description: "Elektrik panolarından ve trafo merkezlerinden çıkan kalın bara ve plaka formlu saf bakırlar."
        },
        "kirkambar-bakir": {
            id: "kirkambar-bakir",
            name: "Kırkambar Bakır Hurdası",
            category: "bakir",
            grade: "Lehimli Tesisat Borusu, Petek & Karışık",
            unit: "KG",
            priceMin: 580.00,
            priceMax: 620.00,
            priceTonaj: 625.00,
            change: "+0.5%",
            url: "hurda-bakir.html",
            description: "Bina tesisatlarından, kalorifer peteklerinden ve eşanjörlerden çıkan karışık lehimli bakırlar."
        },
        "bakir-talasi": {
            id: "bakir-talasi",
            name: "Bakır Talaşı",
            category: "bakir",
            grade: "CNC ve Torna İşleme Talaşı",
            unit: "KG",
            priceMin: 550.00,
            priceMax: 585.00,
            priceTonaj: 590.00,
            change: "0.0%",
            url: "hurda-bakir.html",
            description: "Talaşlı imalat sanayisinden çıkan temiz, yağ oranı düşük bakır talaşları."
        },

        // --- KABLO GRUBU ---
        "kablo-tek-damar": {
            id: "kablo-tek-damar",
            name: "Tek Damar NYY Enerji Kablosu",
            category: "kablo",
            grade: "%65 - %75 Bakır Verimi",
            unit: "KG",
            priceMin: 440.00,
            priceMax: 480.00,
            priceTonaj: 490.00,
            change: "+1.5%",
            url: "hurda-kablo.html",
            description: "Ağır sanayi, şalt ve yer altı hatlarından sökülen kalın kesitli yüksek verimli kablolar."
        },
        "kablo-antigron": {
            id: "kablo-antigron",
            name: "Antigron (NYM) Tesisat Kablosu",
            category: "kablo",
            grade: "%50 - %60 Bakır Verimi",
            unit: "KG",
            priceMin: 360.00,
            priceMax: 400.00,
            priceTonaj: 410.00,
            change: "+0.6%",
            url: "hurda-kablo.html",
            description: "Bina sıva üstü ve şantiye tesisatlarından çıkan çift kat izolasyonlu kablolar."
        },
        "kablo-ttr": {
            id: "kablo-ttr",
            name: "TTR Esnek Çok Damarlı Kablo",
            category: "kablo",
            grade: "%40 - %50 Bakır Verimi",
            unit: "KG",
            priceMin: 320.00,
            priceMax: 355.00,
            priceTonaj: 365.00,
            change: "+0.4%",
            url: "hurda-kablo.html",
            description: "Seyyar uzatma hatları, makine beslemeleri ve ev aletlerinden çıkan esnek telli kablolar."
        },
        "kablo-karisik": {
            id: "kablo-karisik",
            name: "Karışık Hurda Kablo",
            category: "kablo",
            grade: "%30 - %40 Bakır Verimi",
            unit: "KG",
            priceMin: 280.00,
            priceMax: 320.00,
            priceTonaj: 330.00,
            change: "0.0%",
            url: "hurda-kablo.html",
            description: "Şantiyelerden ve yıkımlardan çıkan ayrıştırılmamış karmaşık kablo demetleri."
        },

        // --- DEMİR & ÇELİK GRUBU ---
        "dkp-demir": {
            id: "dkp-demir",
            name: "DKP Demir Hurdası (1. Grup)",
            category: "demir",
            grade: "Sac, Kesme & İmalat Artığı (0.8mm+)",
            unit: "KG",
            priceMin: 12.50,
            priceMax: 14.20,
            priceTonaj: 14.80,
            change: "+0.3%",
            url: "hurda-demir.html",
            description: "Pres kesim sacları, boru profil uçları ve otomotiv yan sanayi artıklarından oluşan saf demir."
        },
        "ekstra-demir": {
            id: "ekstra-demir",
            name: "Ekstra Hurda Demir",
            category: "demir",
            grade: "Kalın Profil, Lama & Konstrüksiyon",
            unit: "KG",
            priceMin: 11.80,
            priceMax: 13.50,
            priceTonaj: 14.00,
            change: "+0.2%",
            url: "hurda-demir.html",
            description: "Fabrika sökümlerinden ve ağır çelik çatılardan çıkan 4mm üzeri et kalınlığına sahip demirler."
        },
        "insaat-demiri": {
            id: "insaat-demiri",
            name: "Hurda İnşaat Demiri",
            category: "demir",
            grade: "Kentsel Dönüşüm & Şantiye Donatı Demiri",
            unit: "KG",
            priceMin: 11.20,
            priceMax: 12.80,
            priceTonaj: 13.30,
            change: "0.0%",
            url: "hurda-demir.html",
            description: "Yıkım ve kentsel dönüşüm sahalarından çıkan nervürlü ve düz betonarme inşaat demirleri."
        },
        "talas-demir": {
            id: "talas-demir",
            name: "Demir / Çelik Talaşı",
            category: "demir",
            grade: "CNC ve Torna Talaşı",
            unit: "KG",
            priceMin: 8.50,
            priceMax: 10.20,
            priceTonaj: 10.80,
            change: "-0.1%",
            url: "hurda-demir.html",
            description: "Talaşlı imalat sanayisinden preslenmiş veya dökme çelik talaşları."
        },

        // --- ALÜMİNYUM GRUBU ---
        "aluminyum-tel": {
            id: "aluminyum-tel",
            name: "Alüminyum Tel Hurdası",
            category: "aluminyum",
            grade: "%99.5 Saf İletken Tel",
            unit: "KG",
            priceMin: 95.00,
            priceMax: 115.00,
            priceTonaj: 118.00,
            change: "+0.7%",
            url: "hurda-aluminyum.html",
            description: "Enerji nakil hatlarından sökülen çeliksiz, saf iletken alüminyum teller."
        },
        "aluminyum-profil": {
            id: "aluminyum-profil",
            name: "Alüminyum Profil Hurdası",
            category: "aluminyum",
            grade: "Doğrama, İmalat & Boyasız Profil",
            unit: "KG",
            priceMin: 85.00,
            priceMax: 100.00,
            priceTonaj: 104.00,
            change: "+0.5%",
            url: "hurda-aluminyum.html",
            description: "Kapı, pencere, cephe giydirme ve sanayi profil artıklarından oluşan temiz hurda."
        },
        "aluminyum-jant": {
            id: "aluminyum-jant",
            name: "Alüminyum Jant Hurdası",
            category: "aluminyum",
            grade: "Otomotiv Alaşımlı Jant",
            unit: "KG",
            priceMin: 90.00,
            priceMax: 108.00,
            priceTonaj: 112.00,
            change: "+0.4%",
            url: "hurda-aluminyum.html",
            description: "Kurşun ve sübaplarından arındırılmış saf alüminyum alaşımlı oto jantları."
        },

        // --- SARI & BRONZ GRUBU ---
        "sari-musluk": {
            id: "sari-musluk",
            name: "Sarı Hurda (Musluk & Vana)",
            category: "sari",
            grade: "Pirinç Sıhhi Tesisat & Armatür",
            unit: "KG",
            priceMin: 320.00,
            priceMax: 360.00,
            priceTonaj: 370.00,
            change: "+0.9%",
            url: "hurda-sari.html",
            description: "Tesisat yenilemelerinden çıkan pirinç bataryalar, su sayaçları ve vanalar."
        },
        "sari-cubuk-talasi": {
            id: "sari-cubuk-talasi",
            name: "Sarı Çubuk Talaşı (MS-58)",
            category: "sari",
            grade: "Otomat Pirinç Talaşı",
            unit: "KG",
            priceMin: 300.00,
            priceMax: 335.00,
            priceTonaj: 345.00,
            change: "+0.6%",
            url: "hurda-sari.html",
            description: "Otomat torna imalatından çıkan temiz pirinç işleme talaşları."
        },

        // --- PASLANMAZ KROM GRUBU ---
        "krom-304": {
            id: "krom-304",
            name: "Krom 304 Paslanmaz Hurdası",
            category: "krom",
            grade: "18/8 Nikel-Krom Alaşımı",
            unit: "KG",
            priceMin: 55.00,
            priceMax: 68.00,
            priceTonaj: 72.00,
            change: "+0.3%",
            url: "hurda-krom.html",
            description: "Gıda sanayi kazanları, mutfak ekipmanları ve paslanmaz borulardan çıkan standart krom."
        },
        "krom-316": {
            id: "krom-316",
            name: "Krom 316 Paslanmaz Hurdası",
            category: "krom",
            grade: "Molibden Katkılı Asit Dayanımlı",
            unit: "KG",
            priceMin: 85.00,
            priceMax: 105.00,
            priceTonaj: 110.00,
            change: "+0.5%",
            url: "hurda-krom.html",
            description: "Kimya, denizcilik ve ilaç sanayisinden çıkan yüksek korozyon dayanımlı özel paslanmaz."
        }
    },

    // Helper to calculate total price for any item
    calculate: function(itemId, kg) {
        const item = this.items[itemId];
        if (!item) return { error: "Item not found" };
        const minTotal = item.priceMin * kg;
        const maxTotal = item.priceMax * kg;
        const avgTotal = ((item.priceMin + item.priceMax) / 2) * kg;
        return {
            item: item,
            kg: kg,
            minTotal: minTotal,
            maxTotal: maxTotal,
            avgTotal: avgTotal,
            formattedAvg: avgTotal.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " TL"
        };
    },

    // Helper to render centralized pricing rows
    renderTable: function(containerElementId, filterCategory = null) {
        const container = document.getElementById(containerElementId);
        if (!container) return;

        let rowsHtml = "";
        Object.values(this.items).forEach(item => {
            if (filterCategory && item.category !== filterCategory) return;
            rowsHtml += `
                <tr data-category="${item.id}">
                    <td>
                        <a href="${item.url}" style="color: #fff; font-weight: 700; text-decoration: none;">
                            ${item.name}
                        </a>
                        <small style="display:block; color: #9ca3af; font-size: 0.8rem;">${item.grade}</small>
                    </td>
                    <td class="price-val" style="color: #10b981; font-weight: 800; font-size: 1.1rem;">
                        ${item.priceMin.toFixed(2)} - ${item.priceMax.toFixed(2)} TL
                    </td>
                    <td>${item.unit}</td>
                    <td style="color: #34d399; font-weight: 700;">${item.priceTonaj.toFixed(2)} TL</td>
                    <td>
                        <a href="https://wa.me/905364863466?text=${encodeURIComponent('Merhaba, ' + item.name + ' için fiyat teklifi almak istiyorum.')}" class="btn-wa-sm" style="background: #25d366; color: #fff; padding: 6px 12px; border-radius: 6px; font-size: 0.82rem; text-decoration: none; font-weight: 700; display: inline-flex; align-items: center; gap: 5px;">
                            <i class="fab fa-whatsapp"></i> Teklif Al
                        </a>
                    </td>
                </tr>
            `;
        });
        container.innerHTML = rowsHtml;
    }
};

// Auto-bind to window if in browser environment
if (typeof window !== "undefined") {
    window.HURDA_PRICES = HURDA_PRICES;
}
