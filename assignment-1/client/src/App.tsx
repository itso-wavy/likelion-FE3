import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout, ProtectedLayout } from './layout';
import { LoginPage, ResearcherPage } from './pages';
import { getResearchers } from './apis';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <p>404 Not Found</p>,
  },
  { path: 'login', element: <LoginPage /> },
  {
    // Researcher 페이지를 포함, 다른 페이지도 보호할 수 있도록 레이아웃화
    element: <ProtectedLayout />,
    children: [
      {
        path: 'researcher',
        element: <ResearcherPage />,
        loader: async () => await getResearchers(), // 페이지 초기 로딩시 데이터 불러오기
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
