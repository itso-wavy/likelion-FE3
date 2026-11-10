import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

// isLoggedIn 여부에 따라 보호된 라우트로의 라우팅 여부를 결정한다.
const ProtectedLayout: React.FC = () => {
  const { auth } = useAuth();

  return !auth.isLoggedIn ? (
    <>
      <p>로그인이 필요한 서비스입니다.</p>
      <Link to='/login'>로그인 하러 가기</Link>
    </>
  ) : (
    <Outlet />
  );
};

export default ProtectedLayout;
