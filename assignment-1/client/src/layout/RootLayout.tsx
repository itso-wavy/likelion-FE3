import { Link, useLocation } from 'react-router-dom';

// Root 페이지 설명은 없으므로 login 페이지로 강제 이동한다.
const RootLayout: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && (
        <div className='hero bg-base-200 min-h-screen'>
          <div className='hero-content flex gap-9 flex-col'>
            <h1 className='text-5xl overflow-hidden max-w-md'>
              <img
                src='/public/AI_concept_w1600-800x650.jpg'
                alt='TURINGBIO co.'
                className='mask mask-squircle'
              />
            </h1>
            <Link
              to='/login'
              className='btn bg-base-100 border-base-content rounded-sm'
            >
              로그인 하러 가기
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default RootLayout;
