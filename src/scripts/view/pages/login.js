const Login = {
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
    const loginContainer = document.querySelector('.login-container');
    const loginBackground = document.querySelector('.login-background');
    loginContainer.addEventListener('DOMContentLoaded', () => {
      loginBackground.style.opacity = 0.5; 
    });
  }
};

export default Login;
