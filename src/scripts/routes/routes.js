import Beranda from '../view/pages/beranda';
import Profile from '../view/pages/profile';
import Register from '../view/pages/register';
import Tentang from '../view/pages/tentang';
import Login from '../view/pages/login';
import Pesan_tiket from '../view/pages/pesan_tiket';
import Pembayaran from '../view/pages/pembayaran';

const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/profile': Profile,
  '/tentang': Tentang,
  '/login' : Login,
  '/register' : Register,
  '/pesan_tiket' : Pesan_tiket,
  '/pembayaran' : Pembayaran

};
 
export default routes;