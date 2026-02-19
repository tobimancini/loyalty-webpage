import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Inicio from './Componentes/Inicio/Inicio';
import Contacto from './Componentes/Contacto/Contacto';
import QuienesSomos from './Componentes/QuienesSomos/QuienesSomos';
import Servicios from './Componentes/Servicios/Servicios';
import ComoTrabajamos from './Componentes/ComoTrabajamos/ComoTrabajamos';
import ScrollToTop from './Componentes/UI/ScrollToTop';
import Navbar from './Componentes/Navbar/Navbar';
import Footer from './Componentes/Footer/Footer';

const Layout = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Inicio /> },
      { path: '/quienesSomos', element: <QuienesSomos /> },
      { path: '/servicios', element: <Servicios /> },
      { path: '/contacto', element: <Contacto /> },
      { path: '/comoTrabajamos', element: <ComoTrabajamos /> },
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
