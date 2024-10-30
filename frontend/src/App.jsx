import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';
import RootLayout from './layouts/RootLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        { path: '/user-profile', element: <UserProfilePage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
