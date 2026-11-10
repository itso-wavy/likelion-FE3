import { useNavigate } from 'react-router-dom';

import LoginForm from '../components/LoginForm';

import { useAuth } from '../hooks/useAuth';
import { logout } from '../apis';

const Login: React.FC = () => {
  const { auth, saveAuthInfo, deleteAuthInfo } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      if (auth.userId) {
        await logout(auth.userId);
        alert('로그아웃 되었습니다.');
        deleteAuthInfo();
      }
    } catch (err) {
      console.error('ERROR', err);
    }
  };

  return (
    <div className='min-h-screen grid place-content-center'>
      {!auth.isLoggedIn ? (
        <>
          <h1 role='heading'>관리자 로그인</h1>
          <LoginForm saveAuthInfo={saveAuthInfo} />
        </>
      ) : (
        <>
          <p className='text-center text-gray-400 font-semibold mb-5'>
            이미 로그인되어 있습니다.
          </p>
          <div className='grid gap-1 grid-cols-2'>
            <button onClick={() => navigate('/researcher')} className='btn'>
              관리자 페이지로 이동
            </button>
            <button onClick={handleLogout} className='btn'>
              로그아웃
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
