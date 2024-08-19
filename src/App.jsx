import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Inicio from './Componentes/Inicio/Inicio';
import Contacto from './Componentes/Contacto/Contacto';
import QuienesSomos from './Componentes/QuienesSomos/QuienesSomos';
import Servicios from './Componentes/Servicios/Servicios';
import ComoTrabajamos from './Componentes/ComoTrabajamos/ComoTrabajamos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />
  },
  {
    path: '/quienesSomos',
    element: <QuienesSomos />,
  }, {
    path: '/servicios',
    element: <Servicios />
  },
  {
    path: '/contacto',
    element: <Contacto />
  },
  {
    path: '/comoTrabajamos',
    element: <ComoTrabajamos />
  },
  // {
  //   path: '*',
  //   element: <Page404 />
  // },
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
