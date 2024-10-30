import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/user-profile', element: <UserProfilePage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
