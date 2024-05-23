import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parsaer';
import routes from '../routes/routes';
 
class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
 
    this._initialAppShell();
  }
 
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
 
    // kita bisa menginisiasikan komponen lain bila ada
  }
 
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const header = document.getElementById('header');
    const footer = document.getElementById('footer');

    // Pastikan elemen header dan footer ada sebelum mengakses classList
    if (header && footer) {
      if (url === '/login') {
        header.classList.add('hidden');
        footer.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
        footer.classList.remove('hidden');
      }
    }
  }

}
 
export default App;