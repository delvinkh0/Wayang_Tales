//routes.js
import Beranda from '../view/pages/beranda';
import Login from '../view/pages/login';
import Register from '../view/pages/register';
import Tentang from '../view/pages/tentang';
 
const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/login': Login,
  '/tentang': Tentang,
  '/register' : Register
};
 
export default routes;