import './App.css';
import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Page1 />} />
        <Route path="quote" element={<Quote />} />
        <Route path="calculator" element={<Calculatorchildcomp />} />
      </Route>,
    ),
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
