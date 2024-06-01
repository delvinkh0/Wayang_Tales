const Pesan_tiket = {
    async render() {
      return `
      <div class="register-wrapper">
        <div class="Pesan-container">
          <div class="container">
          <img src="./Mask_group2.png" alt="Logo" class="login-logo"></img>
            <form action="#">
            <div class="form-group">
            <input type="text" id="username" name="username" required placeholder="username">
          </div>
          <div class="form-group">
            <input type="date" id="date" name="date" required placeholder="email">
          </div>              
          <button type="submit" class="log">Pesan Sekarang</button>
            </form>
          </div>
        </div>
      </div>
      `;
    },
    async afterRender() {
      // Any post-render actions
    },
  };
  
  export default Pesan_tiket;
  