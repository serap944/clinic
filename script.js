  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menucubugu ul');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  window.addEventListener('load', () => {
    banner.style.backgroundImage = `url('${resimler[0]}')`;
  });


  const resimler = [
    'images/sacekim (2).jpg',
    'images/sacekim1.jpg',
    'images/sacekim3.jpg',
    'images/kas.jpg'
  ];

  const yazilar = [
    'Saç ekimi ile ilgili detaylı bilgi almak için bizimle iletişime geçin. Saçınız artık sizin için bir sorun olmaktan çıksın.',
    'Profesyonel saç ekimi hizmetlerimizle doğal ve kalıcı sonuçlar elde edin.',
    'Saç dökülmesine son! Uzman ekibimizle sağlıklı saçlara kavuşun.',
    'En yeni tekniklerle saç ekiminde mükemmel sonuçlar.'
  ];

  const basliklar = [
    'Saç Ekimi',
    'Profesyonel Hizmet',
    'Saç Dökülmesine Son',
    'Modern Teknikler'
  ];

  let index = 0;
  const banner = document.querySelector('.banner');
  const bannerYazi = banner.querySelector('p');
  const bannerBaslik = banner.querySelector('h1');

  function resimGecis() {
    banner.classList.add('fade-out');
    setTimeout(() => {
      index = (index + 1) % resimler.length;
      banner.style.backgroundImage = `url('${resimler[index]}')`;
      bannerYazi.textContent = yazilar[index];
      bannerBaslik.textContent = basliklar[index];
      banner.classList.remove('fade-out');
    }, 700);
  }

  setInterval(resimGecis, 5000);


  
// Accordion elementlerini seç
const accordionOgeler = document.querySelectorAll('.accordion-item');

accordionOgeler.forEach((item) => {
    const baslik = item.querySelector('.accordion-baslik');
    
    // Başlığa tıklandığında çalışacak fonksiyon
    baslik.addEventListener('click', () => {
        // Eğer zaten açıksa kapat
        if(item.classList.contains('accordion-acik')){
            item.classList.remove('accordion-acik');
        } else {
            // Bütün açıkları kapat
            accordionOgeler.forEach(i => i.classList.remove('accordion-acik'));
            // Tıklananı aç
            item.classList.add('accordion-acik');
        }
    });
});
