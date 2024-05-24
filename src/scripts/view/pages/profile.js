const Register = {
  async render() {
    return `
    <div class="login-wrapper">
      <img src="./Mask-group.png" alt="Logo" class="login-logo"></img>
      <div class="login-container">
        <div class="login-form">
          <h2 class="log">Masuk</h2>
          <form action="/login" method="POST">
            <div class="form-group">
              <input type="email" id="email" name="email" required placeholder="email">
            </div>
            <div class="form-group">
              <input type="password" id="password" name="password" required placeholder="password">
            </div>
            <button type="submit">Masuk</button>
          </form>
          <div class="register-link">
            <p>Belum punya akun? <a href="#/register">DAFTAR DISINI</a></p>
          </div>
        </div>
      </div>
    </div>
    `;
  },
 
  async afterRender() {
    // Hide the header and footer
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
  },
};

export default Register;
