import Beranda from '../view/pages/beranda';
import Profile from '../view/pages/profile';
import Tentang from '../view/pages/tentang';
 
const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/profile': Profile,
  '/tentang': Tentang,
};
 
export default routes;