const Artikel = {
  async render() {
      return `
      <div class="main-container">
      <img src="./walpaper.png" alt="Wallpaper Image" class="walpaper">
      <div class="container">
        <div class="image-container slide-left">
          <img src="./image1.png" alt="Wayang Image" class="wayang1">
        </div>
      <div class="wrapper">
          <div class="collapsible">
              <input type="checkbox" id="collapsible-toggle-1" class="collapsible-toggle" />
              <label for="collapsible-toggle-1">Sejarah Wayang</label>
              <div class="collapsible-text">

                  <p>Wayang merupakan pertunjukan wayang kulit klasik Jawa yang diketahui berkembang sejak sebelum abad ke-10. Wayang terkenal dengan pertunjukannya yang rumit dan diatur dan bentuk cerita kuno ini berasal dari pulau Jawa di Indonesia. Istilah pewayangan, berasal dari kata Indonesia untuk "bayangan". Wayang kulit dengan menggunakan figur yang terbuat dari kulit kerbau, dianggap sebagai bentuk wayang tertua yang berdiri sendiri, referensi paling awal untuk wayang jenis itu berasal dari tahun 800-an. Perkembangan seni ini secara luas terjadi selama periode Hindu-Buddha, terutama antara 800 dan 1500. Menurut mitos, seorang pangeran bernama Aji Saka membawa aspek budaya India ke Jawa. Ritual panjang pembukaan pertunjukan wayang untuk merayakan kedatangannya di pulau itu. Yang mana, Aji Saka datang dengan membawa hanacaraka, abjad Jawa Sansekerta, yang kemudian dia bagi menjadi empat, menyebar seperempat ke masing-masing dari empat arah dan dengan demikian mentransmisikan melek huruf dan kemakmuran ke seluruh negeri.</p>
              </div>
          </div>

          <div class="collapsible">
              <input type="checkbox" id="collapsible-toggle-2" class="collapsible-toggle" />
              <label for="collapsible-toggle-2">Asal Usul Wayang</label>
              <div class="collapsible-text">
                
                  <p>Asal usul kata "wayang" berasal dari bahasa Jawa yang berarti bayangan, menggambarkan sifat-sifat manusia seperti marah, dengki, cinta kasih, dan sabar. Sifat tokoh-tokoh wayang mencerminkan kehidupan manusia. Ada juga pendapat yang mengaitkan kata "wayang" dengan frasa "Ma Hyang," yang berarti menuju yang maha tinggi atau Tuhan yang maha kuasa. Meskipun asal usul wayang kulit belum memiliki bukti kongkrit, beberapa pendapat menyatakan bahwa wayang kulit sudah ada sebelum abad pertama Masehi, bertepatan dengan munculnya ajaran Hindu-Buddha di Asia Tenggara. Bertolak dari asal usul sejarah keberadaan kesenian wayang kulit, karya seni wayang kulit merupakan seni dekoratif yang dapat dijadikan sebagai sarana media pendidikan, media informasi, dan juga sebagai media hiburan. Wayang sebagai media pendidikan, karena bila dilihat dari segi isinya banyak memberikan ajaran-ajaran, nasihat-nasihat, maupun contoh budi pekerti kepada manusia. Wayang sebagai media informasi, dapat dipakai untuk memberikan informasi atau dapat dipakai untuk memahami sesuatu tradisi, maupun untuk mengadakan pendekatan kepada masyarakat. Wayang sebagai media hiburan, maksudnya dapat berfungsi sebagai hiburan masyarakat atau dipakai sebagai pertunjukan untuk berbagai macam keperluan sebagai hiburan.</p>
              </div>
          </div>

          <div class="collapsible">
              <input type="checkbox" id="collapsible-toggle-3" class="collapsible-toggle" />
              <label for="collapsible-toggle-3">Jenis-Jenis Wayang</label>
              <div class="collapsible-text">
     
                  <p>1. Wayang Purwa<br/>Ini dianggap sebagai gaya tertua dan gaya wayang paling populer yang banyak digunakan. Pegangan wayang utama yang secara tradisional terbuat dari tanduk kerbau berada di tengah dan memegang seluruh bagian wayang mulai dari kaki, pinggang, dada, hingga kepala dan rambutnya.<br/>2. Wayang Parwa<br/>Wayang parwa adalah wayang dari Bali. Wayang jenis ini biasanya dibawakan dengan menggunakan 'blencong', cahaya tertentu yang berasal dari perunggu yang diisi dengan lilin minyak kelapa.<br/>3. Wayang Betawi<br/>Wayang Betawi adalah gaya tertentu yang populer di kalangan masyarakat dan budaya Betawi. Budaya Betawi berakar di Batavia atau ibu kota Indonesia saat ini Jakarta.<br/>4. Wayang Sasak<br/>Gaya wayang ini berasal dari Nusa Tenggara Barat, di bagian timur Indonesia. Gaya Wayang ini dikembangkan agar portabel bersama dengan alat musik yang disederhanakan.<br/>5. Wayang Kancil<br/>Wayang tidak selalu menampilkan cerita tentang bangsawan dan dewa. Ada juga gaya yang hanya menampilkan cerita yang berhubungan dengan hewan. Yang paling terkenal adalah kancil ini, yang dikenal suka mencuri mentimun.</p>
              </div>
          </div>

          <div class="collapsible">
              <input type="checkbox" id="collapsible-toggle-4" class="collapsible-toggle" />
              <label for="collapsible-toggle-4">Tokoh-tokoh Wayang</label>
              <div class="collapsible-text">
               
                  <p>1. Semar:<br/>Semar adalah tokoh Punakawan yang sangat dihormati dalam dunia wayang. Dia dianggap sebagai jelmaan dewa, sering digambarkan dengan wajah yang sederhana dan berpenampilan humoris. Semar memiliki peran penting sebagai penasihat bijak dan pelindung para Pandawa. Ia dikenal karena kebijaksanaannya, kerendahan hati, dan kemampuan untuk menenangkan situasi yang sulit dengan humornya.<br/>2. Gareng:<br/>Gareng adalah salah satu Punakawan yang setia menemani Semar. Dia memiliki penampilan yang lucu dengan kaki pincang dan mata juling. Gareng dikenal karena kepolosannya dan sering menjadi sumber humor dalam cerita. Meskipun demikian, ia juga bijak dan sering memberikan nasihat penting kepada para pahlawan.<br/>3. Petruk:<br/>Petruk, anak dari Semar, adalah Punakawan lain yang memiliki tubuh tinggi dan hidung panjang. Dia sering bertindak sebagai penghibur dengan lelucon dan tingkah lakunya yang konyol. Petruk juga memiliki sisi bijak dan setia, membantu para Pandawa dalam berbagai situasi.<br/>4. Bagong:<br/>Bagong adalah tokoh Punakawan yang lain, dikenal dengan tubuhnya yang gemuk dan wajah yang lucu. Dia sering memberikan komentar yang jujur dan blak-blakan. Bagong adalah simbol dari keberanian dan ketegasan dalam berbicara.<br/>5. Yudhistira:<br/>Yudhistira adalah anak tertua dari Pandawa Lima, juga dikenal sebagai Puntadewa. Dia adalah raja yang adil dan bijaksana, sering digambarkan dengan sifat sabar, jujur, dan penuh tanggung jawab. Yudhistira adalah simbol kejujuran dan moralitas dalam cerita wayang.</p>
              </div>
          </div>
      </div>
      
      `;
  },

  async afterRender() {
      // Function to be called after render
  }
};

export default Artikel;
