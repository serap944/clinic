document.addEventListener("DOMContentLoaded", () => {

  // BANNER RESİMLERİ
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

  // Banner arkaplan ve içerik geçişi
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

  // Banner ilk resim
  banner.style.backgroundImage = `url('${resimler[0]}')`;

  // MENÜ TOGGLE
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menucubugu ul');

  if(menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      const ikon = menuToggle.querySelector('i');
      if(ikon){
        ikon.classList.toggle('fa-bars');
        ikon.classList.toggle('fa-times');
      }
    });
  }

  // ACCORDION
  const accordionOgeler = document.querySelectorAll('.accordion-item');

  accordionOgeler.forEach((item) => {
    const baslik = item.querySelector('.accordion-baslik');

    if(baslik){
      baslik.addEventListener('click', () => {
        if(item.classList.contains('accordion-acik')){
          item.classList.remove('accordion-acik');
        } else {
          accordionOgeler.forEach(i => i.classList.remove('accordion-acik'));
          item.classList.add('accordion-acik');
        }
      });
    }
  });

});
