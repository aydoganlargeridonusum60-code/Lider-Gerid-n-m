/**
 * Lider Hurda - Merkezi Fiyat Veri Modülü (Single Source of Truth)
 * Tüm sayfalardaki fiyat tabloları, hesaplayıcılar ve dinamik etiketler bu merkezi veriden beslenir.
 */
const HURDA_PRICES = {
    meta: {
        lastUpdate: "2026-10-15",
        updateTime: "18:00",
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
            grade: "%99.9 Elektrolitik Parlak Tel (Millberry)",
            unit: "KG",
            priceMin: 700.00,
            priceMax: 710.00,
            priceTonaj: 715.00,
            change: "+1.2%",
            url: "soyma-bakir.html",
            description: "Kablodan mekanik olarak soyulmuş, oksitsiz ve yanık içermeyen %99.9 saflıkta parlak tel bakır."
        },
        "lama-bakir": {
            id: "lama-bakir",
            name: "Lama / Bara Bakır Hurdası",
            category: "bakir",
            grade: "Pano, Trafo ve Busbar İletim Barası",
            unit: "KG",
            priceMin: 680.00,
            priceMax: 690.00,
            priceTonaj: 695.00,
            change: "+0.8%",
            url: "lama-bakir.html",
            description: "Elektrik panolarından, trafolardan ve busbar sistemlerinden çıkan saf levha ve bara bakırları."
        },
        "kirkambar-bakir": {
            id: "kirkambar-bakir",
            name: "Kırkambar Bakır Hurdası (2. Grup)",
            category: "bakir",
            grade: "Lehimli Tesisat Borusu, Petek & Karışık",
            unit: "KG",
            priceMin: 630.00,
            priceMax: 640.00,
            priceTonaj: 645.00,
            change: "+0.5%",
            url: "kirkambar-bakir.html",
            description: "Lehimli kalorifer ve sıhhi tesisat boruları, eşanjörler, kombi kazanları ve karışık bakırlar."
        },
        "bakir-boru": {
            id: "bakir-boru",
            name: "Çıkma Tesisat & Klima Bakır Borusu",
            category: "bakir",
            grade: "Lehimsiz Temiz VRF, Chiller & Kalorifer Borusu",
            unit: "KG",
            priceMin: 650.00,
            priceMax: 665.00,
            priceTonaj: 670.00,
            change: "+0.7%",
            url: "hurda-bakir.html",
            description: "Klima ve soğutma sistemlerinden sökülen temiz, lehimsiz düz ve kangal bakır borular."
        },
        "bobinaj-bakir": {
            id: "bobinaj-bakir",
            name: "Bobinaj & Trafo Sargı Bakırı",
            category: "bakir",
            grade: "Vernikli Elektrik Motoru & Trafo Teli",
            unit: "KG",
            priceMin: 665.00,
            priceMax: 680.00,
            priceTonaj: 685.00,
            change: "+0.6%",
            url: "motor-bakir-verimi.html",
            description: "Sanayi elektrik motorları, trafolar ve alternatörlerden sökülmüş vernikli emaye bakır sargı telleri."
        },
        "yanik-bakir": {
            id: "yanik-bakir",
            name: "Yanık Bakır Tel Hurdası",
            category: "bakir",
            grade: "Ateş Görmüş / Kararmış İletken Tel",
            unit: "KG",
            priceMin: 625.00,
            priceMax: 635.00,
            priceTonaj: 640.00,
            change: "+0.3%",
            url: "bakir-hurda-fiyatlari-bugun.html",
            description: "İzolasyonu yakılmış, yüzeyinde hafif oksit ve karbonlaşma bulunan iletken teller."
        },
        "bakir-talasi": {
            id: "bakir-talasi",
            name: "Bakır Talaşı Hurdası",
            category: "bakir",
            grade: "CNC, Freze ve Torna İşleme Talaşı",
            unit: "KG",
            priceMin: 610.00,
            priceMax: 620.00,
            priceTonaj: 625.00,
            change: "0.0%",
            url: "hurda-bakir.html",
            description: "Talaşlı imalat sanayisinden çıkan temiz, yağ oranı düşük saf kızıl bakır talaşları."
        },
        "bakir-radyator": {
            id: "bakir-radyator",
            name: "Bakır Radyatör & Eşanjör Hurdası",
            category: "bakir",
            grade: "Klima, Jeneratör & Sanayi Eşanjör Peteği",
            unit: "KG",
            priceMin: 600.00,
            priceMax: 615.00,
            priceTonaj: 620.00,
            change: "+0.4%",
            url: "hurda-bakir.html",
            description: "Klima santralleri, jeneratör soğutucuları ve araç soğutma radyatörlerinden çıkan bakır petekler."
        },
        "bakir-kulce": {
            id: "bakir-kulce",
            name: "Külçe & Plaka Döküm Bakırı",
            category: "bakir",
            grade: "%99.5+ Rafine Döküm Blok",
            unit: "KG",
            priceMin: 685.00,
            priceMax: 698.00,
            priceTonaj: 702.00,
            change: "+0.6%",
            url: "hurda-bakir.html",
            description: "Dökümhaneler için hazırlanmış saf külçe veya anot plaka formundaki fırınlık bakırlar."
        },

        // --- KABLO GRUBU ---
        "kablo-tek-damar": {
            id: "kablo-tek-damar",
            name: "Tek Damar NYY Enerji Kablosu",
            category: "kablo",
            grade: "%65 - %75 Bakır Verimi (Kalın Kesit)",
            unit: "KG",
            priceMin: 480.00,
            priceMax: 520.00,
            priceTonaj: 530.00,
            change: "+1.5%",
            url: "kablo-hurdasi.html",
            description: "Ağır sanayi, şalt ve yer altı hatlarından sökülen 16mm² - 300mm² arası kalın kesitli yüksek verimli kablolar."
        },
        "kablo-marin": {
            id: "kablo-marin",
            name: "Marin & Gemi Tipi Kablo Hurdası",
            category: "kablo",
            grade: "%48 - %62 Bakır Verimi (Halojensiz)",
            unit: "KG",
            priceMin: 390.00,
            priceMax: 450.00,
            priceTonaj: 460.00,
            change: "+0.7%",
            url: "hurda-kablo.html",
            description: "Tersane, yat ve gemi sökümlerinden çıkan kalaylı bakır iletkenli, yangına dayanıklı özel marin kablolar."
        },
        "kablo-antigron": {
            id: "kablo-antigron",
            name: "Antigron (NYM) Tesisat Kablosu",
            category: "kablo",
            grade: "%50 - %60 Bakır Verimi",
            unit: "KG",
            priceMin: 400.00,
            priceMax: 440.00,
            priceTonaj: 450.00,
            change: "+0.6%",
            url: "kablo-hurdasi.html",
            description: "Bina sıva üstü tesisatları ve mekanik taahhüt projelerinden çıkan çift kat yalıtımlı bakır kablolar."
        },
        "kablo-zirhli": {
            id: "kablo-zirhli",
            name: "Çelik Zırhlı Yeraltı Kablosu (NYFGbY)",
            category: "kablo",
            grade: "%45 - %58 Bakır Verimi (Zırh Fireli)",
            unit: "KG",
            priceMin: 380.00,
            priceMax: 430.00,
            priceTonaj: 440.00,
            change: "+0.8%",
            url: "kablo-hurdasi.html",
            description: "Maden ocakları, rafineri ve sanayi tesislerinden çıkan galvaniz çelik tel/şerit zırhlı enerji kabloları."
        },
        "kablo-hffr": {
            id: "kablo-hffr",
            name: "Halojensiz Alev İletmeyen Kablo (N2XH)",
            category: "kablo",
            grade: "%45 - %55 Bakır Verimi",
            unit: "KG",
            priceMin: 370.00,
            priceMax: 415.00,
            priceTonaj: 425.00,
            change: "+0.5%",
            url: "hurda-kablo.html",
            description: "AVM, hastane, metro ve kamu yapılarında kullanılan toksik gaz salmayan HFFR yalıtımlı enerji kabloları."
        },
        "kablo-ttr": {
            id: "kablo-ttr",
            name: "TTR Esnek Çok Damarlı Kablo",
            category: "kablo",
            grade: "%40 - %50 Bakır Verimi",
            unit: "KG",
            priceMin: 360.00,
            priceMax: 395.00,
            priceTonaj: 405.00,
            change: "+0.4%",
            url: "kablo-hurdasi.html",
            description: "Seyyar uzatma hatları, makine beslemeleri ve aydınlatma linye hatlarından çıkan esnek telli kablolar."
        },
        "kablo-fare-yemez": {
            id: "kablo-fare-yemez",
            name: "Fare Yemez & Koruyucu Kılıflı Kablo",
            category: "kablo",
            grade: "%35 - %45 Bakır Verimi",
            unit: "KG",
            priceMin: 330.00,
            priceMax: 375.00,
            priceTonaj: 385.00,
            change: "+0.4%",
            url: "kablo-hurdasi-nasil-siniflandirilir.html",
            description: "Kemirgen korumalı çelik örgülü veya çift kat sert polietilen dış kılıflı telekom ve şantiye kabloları."
        },
        "kablo-karisik": {
            id: "kablo-karisik",
            name: "Karışık Hurda Kablo",
            category: "kablo",
            grade: "%30 - %40 Bakır Verimi",
            unit: "KG",
            priceMin: 320.00,
            priceMax: 360.00,
            priceTonaj: 370.00,
            change: "0.0%",
            url: "hurda-kablo.html",
            description: "Şantiyelerden ve yıkımlardan çıkan ayrıştırılmamış karmaşık kablo demetleri."
        },
        "kablo": {
            id: "kablo",
            name: "Karışık Hurda Kablo",
            category: "kablo",
            grade: "%30 - %40 Bakır Verimi",
            unit: "KG",
            priceMin: 320.00,
            priceMax: 360.00,
            priceTonaj: 370.00,
            change: "0.0%",
            url: "hurda-kablo.html",
            description: "Şantiyelerden ve yıkımlardan çıkan karmaşık karışık kablo demetleri."
        },
        "kablo-data": {
            id: "kablo-data",
            name: "Data, Cat5/Cat6 & Telekom Kablosu",
            category: "kablo",
            grade: "%25 - %35 Bakır Verimi (Zayıf Akım)",
            unit: "KG",
            priceMin: 180.00,
            priceMax: 225.00,
            priceTonaj: 235.00,
            change: "+0.2%",
            url: "kablo-hurdasi.html",
            description: "Sunucu odaları, veri merkezleri ve bina otomasyon sistemlerinden sökülen zayıf akım data kabloları."
        },
        "kablo-aluminyum": {
            id: "kablo-aluminyum",
            name: "Alüminyum İletkenli Enerji Kablosu",
            category: "kablo",
            grade: "%40 - %50 Alüminyum Verimi",
            unit: "KG",
            priceMin: 105.00,
            priceMax: 135.00,
            priceTonaj: 140.00,
            change: "+0.5%",
            url: "hurda-kablo.html",
            description: "Enerji nakil hatları ve yer altı dağıtımında kullanılan alüminyum iletkenli NAYY / XLPE kablolar."
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
            description: "İmalat sanayisinden çıkan temiz, preslenmiş veya dökme çelik işleme talaşları."
        },

        // --- ALÜMİNYUM GRUBU ---
        "aluminyum-profil": {
            id: "aluminyum-profil",
            name: "Profil Alüminyum Hurdası",
            category: "aluminyum",
            grade: "Doğrama, İmalat Çıkması & Boyasız",
            unit: "KG",
            priceMin: 135.00,
            priceMax: 148.00,
            priceTonaj: 153.00,
            change: "+0.6%",
            url: "hurda-aluminyum.html",
            description: "Kapı, pencere, cephe giydirme ve sanayi profillerinden çıkan temiz ekstrüzyon alüminyum."
        },
        "aluminyum-jant": {
            id: "aluminyum-jant",
            name: "Alüminyum Oto Jantı",
            category: "aluminyum",
            grade: "Kurşunsuz & Sibopsuz Temiz Jant",
            unit: "KG",
            priceMin: 150.00,
            priceMax: 165.00,
            priceTonaj: 170.00,
            change: "+0.8%",
            url: "jant-aluminyum.html",
            description: "Otomotiv servislerinden ve çıkmacılardan toplanan saf alaşımlı çelik jant hurdaları."
        },
        "aluminyum-tel": {
            id: "aluminyum-tel",
            name: "Alüminyum Tel Hurdası",
            category: "aluminyum",
            grade: "Enerji Nakil Hattı İletken Teli",
            unit: "KG",
            priceMin: 145.00,
            priceMax: 158.00,
            priceTonaj: 162.00,
            change: "+0.5%",
            url: "aluminyum-tel.html",
            description: "Yüksek gerilim enerji iletim hatlarından sökülmüş çeliksiz saf alüminyum örgülü teller."
        },
        "aluminyum-kutu": {
            id: "aluminyum-kutu",
            name: "Kutu Alüminyum Hurdası",
            category: "aluminyum",
            grade: "Preslenmiş İçecek Kutuları (UBC)",
            unit: "KG",
            priceMin: 105.00,
            priceMax: 118.00,
            priceTonaj: 122.00,
            change: "+0.3%",
            url: "aluminyum-kutu.html",
            description: "Otel, restoran ve geri dönüşüm merkezlerinden toplanan presli meşrubat kutuları."
        },

        // --- SARI (PİRİNÇ) GRUBU ---
        "sari-arais": {
            id: "sari-arais",
            name: "Sarı Araiş (MS-58 Çubuk)",
            category: "sari",
            grade: "Talaşsız Temiz Parça Pirinç",
            unit: "KG",
            priceMin: 325.00,
            priceMax: 350.00,
            priceTonaj: 358.00,
            change: "+0.9%",
            url: "hurda-sari.html",
            description: "Talaşlı imalat artığı pres parça, çubuk ucu ve saf sarı mamulleri."
        },
        "sari-musluk": {
            id: "sari-musluk",
            name: "Musluk, Vana & Su Saati Hurdası",
            category: "sari",
            grade: "Kromsuz / Kaplamasız Tesisat Pirinci",
            unit: "KG",
            priceMin: 300.00,
            priceMax: 325.00,
            priceTonaj: 332.00,
            change: "+0.4%",
            url: "hurda-sari.html",
            description: "Sıhhi tesisat yenilemelerinden çıkan sarı bataryalar, vana gövdeleri ve pirinç rekorlar."
        },

        // --- PASLANMAZ KROM GRUBU ---
        "krom-304": {
            id: "krom-304",
            name: "Krom 304 Paslanmaz Hurdası",
            category: "krom",
            grade: "%18 Krom / %8 Nikel Alaşımı",
            unit: "KG",
            priceMin: 68.00,
            priceMax: 78.00,
            priceTonaj: 82.00,
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

    // Get all items in a category
    getItemsByCategory: function(category) {
        return Object.values(this.items).filter(item => item.category === category);
    },

    // Copper specific helper
    getCopperItems: function() {
        return this.getItemsByCategory("bakir");
    },

    // Cable specific helper
    getCableItems: function() {
        return this.getItemsByCategory("kablo");
    },

    // Dedicated cable yield calculator
    calculateCableYield: function(kabloId, kg, customYieldRatio = null) {
        const item = this.items[kabloId];
        if (!item) return { error: "Kablo türü bulunamadı" };

        let yieldRatio = customYieldRatio;
        if (!yieldRatio) {
            // Estimate default yield from grade text
            if (kabloId === "kablo-tek-damar") yieldRatio = 0.70;
            else if (kabloId === "kablo-marin") yieldRatio = 0.55;
            else if (kabloId === "kablo-antigron") yieldRatio = 0.55;
            else if (kabloId === "kablo-zirhli") yieldRatio = 0.50;
            else if (kabloId === "kablo-hffr") yieldRatio = 0.50;
            else if (kabloId === "kablo-ttr") yieldRatio = 0.45;
            else if (kabloId === "kablo-fare-yemez") yieldRatio = 0.40;
            else if (kabloId === "kablo-data") yieldRatio = 0.30;
            else if (kabloId === "kablo-aluminyum") yieldRatio = 0.45;
            else yieldRatio = 0.35;
        }

        const netCopperKg = kg * yieldRatio;
        const totalMin = item.priceMin * kg;
        const totalMax = item.priceMax * kg;
        const totalAvg = ((item.priceMin + item.priceMax) / 2) * kg;

        return {
            item: item,
            grossKg: kg,
            yieldRatio: yieldRatio,
            yieldPercent: Math.round(yieldRatio * 100) + "%",
            netCopperKg: netCopperKg.toFixed(1),
            totalMin: totalMin,
            totalMax: totalMax,
            totalAvg: totalAvg,
            formattedAvg: totalAvg.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " TL"
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
