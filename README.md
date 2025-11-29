# 🕵️‍♂️ X (Twitter) Takip Etmeyenleri Göster (Chrome Eklentisi)

Bu proje, Twitter (X) üzerinde **takip ettikleriniz (following)** listesinde gezinirken, sizi geri takip etmeyen kullanıcıları tespit etmenizi ve listelemenizi sağlayan basit bir Chrome eklentisidir.

Twitter API'si kullanmaz, tamamen tarayıcı üzerindeki DOM (Sayfa Yapısı) manipülasyonu ile çalışır. Bu sayede herhangi bir API limiti veya ücretlendirme ile karşılaşmazsınız.

## ✨ Özellikler

* **Entegre Buton:** "Takip edilenler" sayfasında sekmelerin yanına "Seni Takip Etmeyenler" butonu ekler.
* **Anlık Filtreleme:** Butona basıldığında sizi takip edenleri gizler, sadece etmeyenleri gösterir.
* **Sonsuz Kaydırma Desteği:** Siz sayfayı aşağı kaydırdıkça yüklenen yeni kişileri otomatik olarak tarar ve filtreye dahil eder.
* **Görsel İşaretleme:** Sizi takip etmeyen profilleri kırmızı çerçeve içine alır (opsiyonel).
* **Güvenli:** Şifrenizi veya kişisel verilerinizi kaydetmez, sadece sayfadaki metni okur.

## 🚀 Kurulum

Bu eklenti henüz Chrome Web Mağazası'nda yayınlanmadığı için "Geliştirici Modu" ile yüklenmelidir.

1.  Bu projeyi bilgisayarınıza indirin (veya `git clone` yapın).
2.  Google Chrome tarayıcısını açın ve adres çubuğuna `chrome://extensions/` yazın.
3.  Sağ üst köşedeki **Geliştirici Modu (Developer Mode)** anahtarını açın.
4.  Sol üstte beliren **Paketlenmemiş öğe yükle (Load unpacked)** butonuna tıklayın.
5.  İndirdiğiniz proje klasörünü seçin.

## 📖 Kullanım

1.  Twitter'da (X) kendi profilinize gidin.
2.  **Takip Edilenler (Following)** sekmesine tıklayın (`https://x.com/kullaniciadi/following`).
3.  Sekmelerin olduğu satırda **"Seni Takip Etmeyenler"** (veya kırmızı bir yazı) göreceksiniz.
4.  Butona tıklayın.
    * ✅ **Filtre Aktif:** Sizi takip edenler gizlenir, sadece etmeyenler kalır.
    * ❌ **Filtre Pasif:** (Tekrar tıklarsanız) Liste normale döner.

## ⚠️ Önemli Ayarlar (Dil Desteği)

Eklenti, kullanıcının sizi takip edip etmediğini anlamak için profil kartındaki **"Seni takip ediyor"** (veya İngilizce **"Follows you"**) yazısını arar.

Varsayılan olarak **Türkçe** Twitter arayüzüne göre ayarlanmıştır. Eğer Twitter'ı **İngilizce** veya başka bir dilde kullanıyorsanız `content.js` dosyasını düzenlemeniz gerekir:

`content.js` dosyasını açın ve şu satırı bulun:

// Türkçe için:
// const FOLLOWER_BADGE_TEXT = "Seni takip ediyor";

// İngilizce için bu şekilde değiştirin:
// const FOLLOWER_BADGE_TEXT = "Follows you";

## 🛠️ Kullanılan Teknolojiler

  * JavaScript (ES6+)
  * Chrome Extension Manifest V3
  * MutationObserver API (Dinamik içerik takibi için)

## 🤝 Katkıda Bulunma

Hatalar bulursanız veya özellik eklemek isterseniz, lütfen bir "Issue" açın veya "Pull Request" gönderin.

## 📄 Lisans

Bu proje [MIT](https://www.google.com/search?q=LICENSE) lisansı altında lisanslanmıştır.
