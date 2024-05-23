import Beranda from '../view/pages/beranda';
import Profile from '../view/pages/profile';
import Register from '../view/pages/register';
import Tentang from '../view/pages/tentang';
import Login from '../view/pages/login';
 
const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/profile': Profile,
  '/tentang': Tentang,
  '/login' : Login,
  '/register' : Register
};
 
export default routes;