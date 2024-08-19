import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Vote from './pages/Vote';
import NotFound from './pages/NotFound';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/Dashboard/',
        element: <Dashboard />
      }, {
        path: '/Dashboard/:id',
        element: <Vote />
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);









