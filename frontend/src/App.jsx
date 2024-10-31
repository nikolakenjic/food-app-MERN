import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';
import RootLayout from './layouts/RootLayout';
import AuthProviderWithNavigate from './auth/authProviderWithNavigate';

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

  return (
    <AuthProviderWithNavigate>
      <RouterProvider router={router} />;
    </AuthProviderWithNavigate>
  );
}

export default App;
