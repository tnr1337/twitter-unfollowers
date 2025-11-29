// Türkçe arayüz kullandığını varsayarak "Seni takip ediyor" yazısını arayacağız.
// Eğer İngilizce kullanıyorsan bu kısmı "Follows you" olarak değiştirmelisin.
const FOLLOWER_BADGE_TEXT = "Seni takip ediyor"; 

let filterActive = false;

// Sayfa değişimlerini ve element yüklenmelerini izleyen fonksiyon
const observer = new MutationObserver(() => {
    // URL kontrolü: Sadece 'following' sayfasındaysak çalış
    if (!window.location.href.includes('/following')) return;

    // Tab listesini bul (Takipçiler, Takip Ediliyor vb. yazan yer)
    const tabList = document.querySelector('[role="tablist"]');
    
    // Eğer tab listesi varsa ve bizim butonumuz henüz yoksa ekle
    if (tabList && !document.getElementById('btn-show-unfollowers')) {
        injectButton(tabList);
    }

    // Eğer filtre aktifse, yeni yüklenen (scroll yaptıkça gelen) kişileri de filtrele
    if (filterActive) {
        filterNonFollowers();
    }
});

// İzleyiciyi başlat
observer.observe(document.body, { childList: true, subtree: true });

function injectButton(tabList) {
    // Mevcut bir tab'ın stilini kopyalamak için sonuncuyu alalım
    const originalTab = tabList.lastElementChild;
    if (!originalTab) return;

    // Yeni butonumuzu oluşturalım
    const newTab = originalTab.cloneNode(true);
    newTab.id = 'btn-show-unfollowers';
    
    // İçindeki yazıyı bulup değiştirelim
    const textSpan = newTab.querySelector('span');
    if (textSpan) {
        textSpan.innerText = "Seni Takip Etmeyenler";
        textSpan.style.color = "red"; // Dikkat çekmesi için kırmızı yapalım
    }

    // Tıklama olayını ekle
    newTab.onclick = (e) => {
        e.preventDefault();
        filterActive = !filterActive; // Aç/Kapa yap

        if (filterActive) {
            textSpan.innerText = "Tümünü Göster";
            textSpan.style.color = "black";
            filterNonFollowers();
        } else {
            textSpan.innerText = "Seni Takip Etmeyenler";
            textSpan.style.color = "red";
            showAll();
        }
    };

    // Butonu listeye ekle
    tabList.appendChild(newTab);
}

function filterNonFollowers() {
    // Ekrandaki tüm kullanıcı kartlarını (UserCell) bul
    const userCells = document.querySelectorAll('[data-testid="UserCell"]');

    userCells.forEach(cell => {
        // Kartın içindeki metinlerde "Seni takip ediyor" yazısı var mı?
        const textContent = cell.innerText;
        
        if (textContent.includes(FOLLOWER_BADGE_TEXT)) {
            // Seni takip ediyorsa GİZLE (Çünkü biz etmeyenleri arıyoruz)
            cell.parentElement.style.display = 'none';
        } else {
            // Seni takip etmiyorsa GÖSTER
            cell.parentElement.style.display = 'block';
            cell.style.border = "2px solid red"; // İstersen etrafını kırmızı çizebilirsin
        }
    });
}

function showAll() {
    // Her şeyi eski haline getir
    const userCells = document.querySelectorAll('[data-testid="UserCell"]');
    userCells.forEach(cell => {
        cell.parentElement.style.display = 'block';
        cell.style.border = "none";
    });
}