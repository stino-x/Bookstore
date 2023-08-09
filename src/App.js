import './App.css';
import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';
import BookLayout from './components/BookLayout';
import Form from './components/Form';
import Books from './components/Books';
import { ContextProvider } from './ContextProvider';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BookLayout />}>
        <Route index element={<Form />} />
        <Route path="quote" element={<Books />} />
      </Route>,
    ),
  );

  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
