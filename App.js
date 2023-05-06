import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './src/pages/Home';
import ProductsPage from './src/pages/Products';

//https://example.com/

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/products', element: <ProductsPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
