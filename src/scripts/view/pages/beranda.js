//beranda
const Beranda = {
  async render() {
    return `
      <div class="main-container">
        <img src="./walpaper.png" alt="Wallpaper Image" class="walpaper">
        <div class="container">
          <div class="image-container slide-left">
            <img src="./image1.png" alt="Wayang Image" class="wayang1">
          </div>
          <div class="text-container">
            <h1 class="tema">Wayang-Tales
              <span>Dari Indonesia Untuk Dunia</span>
            </h1>
            <br>
            <p>Wayang kulit semula berkembang di lingkungan istana
              <span>Jadi kesenian rakyat dan menyebar ke tempat - tempat jauh</span>
            </p>
            <br>
            <p class="judul">Kesenian</p>
            <p>Tagar: Jawa, Kesenian, Bali, Indonesia</p>
          </div>
          <div class="image-container slide-right">
            <img src="./image2.png" alt="Wayang Image" class="wayang2">
          </div>
        </div>
        <div class="sejarah">
          <h2 class="tema1">Sejarah Wayang</h2>
          <p class="judul1">Sejarah tentang wayang budaya indonesia</p>
        </div>
        <div class="card-container">
          <div class="card">
            <img src="./wayang1.png" alt="Card Image 1" class="card-image">
            <h6>Perkembangan Wayang</h6>
            <p class="subtitle">Wayang kulit mulai populer di Jawa, terbuat dari kulit kerbau atau kambing yang diukir halus dan 
            pertunjukan menggunakan layar dan lampu minyak untuk menciptakan bayangan.</p>
          </div>
          <div class="card">
            <img src="./wayang2.png" alt="Card Image 2" class="card-image">
            <h6>Upacara Wayang</h6>
            <p class="subtitle">Upacara wayang kulit juga sering kali terkait dengan berbagai upacara adat dan ritual,
             seperti upacara kelahiran, pernikahan, dan kematian. </p>
          </div>
          <div class="card">
            <img src="./wayang3.png" alt="Card Image 3" class="card-image">
            <h6>Asal Usul Wayang</h6>
            <p class="subtitle">Wayang memiliki sejarah yang panjang dan kaya,
             yang diyakini telah ada sejak lebih dari seribu tahun yang lalu</p>
          </div>
          <div class="card">
            <img src="./wayang4.png" alt="Card Image 4" class="card-image">
            <h6>Jenis -  Jenis Wayang</h6>
            <p class="subtitle">Banyak berbagai jenis wayang antara lain : Wayang Kulit, Wayang Golek , Wayang Orang, Wayang Klitik dan sebagainnya.</p>
          </div>
        </div>
        
        <div class="container1">
          <div class="text-container1">
            <p>Wayang adalah seni pertunjukan boneka tradisional dari Indonesia yang telah ada selama
             berabad-abad dan mencakup berbagai bentuk, seperti wayang kulit, wayang golek, wayang klitik,
              dan lain-lain. Kata "wayang" sendiri berasal dari kata Jawa "wewayangan," yang berarti bayangan,
               karena dalam beberapa jenis wayang seperti wayang kulit, bayangan boneka yang diproyeksikan ke 
               layar adalah bagian utama dari pertunjukan
            </p>
            <p>Istilah “wayang” sendiri berasal dari kata “ma Hyang”, yang berarti menuju spiritualitas Sang Kuasa. Tapi ada juga yang mengatakan “wayang”
             berasal dari  teknik pertunjukan yang mengandalkan bayangan (bayang/wayang) di layar.
            </p>
            <p>Wayang kulit berasal dari dearah Jawa, dengan sejarah yang sangat panjang.
             Catatan tertua tentang wayang kulit atau wayang purwa tersua dalam Prasasti Kuti bertarikh 840 M dari Joho, Sidoarjo, Jawa Timur. Prasasti ini menyebut kata haringgit atau dalang. 
             “Haringgit adalah bentuk halus dari kata ringgit. Kata ini sampai sekarang masih ada dalam bahasa Jawa, yang berarti wayang,” catat Timbul Haryono, guru besar arkeologi Universitas Gadjah Mada, dalam “Masyarakat Jawa Kuna dan Lingkungannya
             Pada Masa Borobudur” termuat di 100 Tahun Pasca Pemugaran Candi Borobudur</p>
          </div>
          <div class="image-container1 slide-left">
            <img src="./image3.png" alt="Wayang Image" class="wayang3">
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const elementsToAnimate = document.querySelectorAll('.slide-left, .slide-right');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('slide-left')) {
            entry.target.classList.add('slide-in-left');
          } else if (entry.target.classList.contains('slide-right')) {
            entry.target.classList.add('slide-in-right');
          }
        }
      });
    });

    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  },
};

export default Beranda;
