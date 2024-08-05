import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />
  },
  {
    path: '/SobreNosotros',
    element: <SobreNosotros />,
  }, {
    path: 'Contacto',
    element: <Contacto />
  },
  {
    path: '*',
    element: <Page404 />
  },
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
