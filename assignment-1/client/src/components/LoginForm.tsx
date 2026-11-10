import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { login } from '../apis';
import { LoginProps } from '../types';

interface LoginFormProps {
  saveAuthInfo: (userId: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ saveAuthInfo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { userId: '', pw: '' } });

  const navigate = useNavigate();
  const onSubmit = async (loginInput: LoginProps) => {
    // TODO: 필요시 추가적인 loginInput 밸리데이션
    try {
      const res = await login(loginInput);

      alert(res.data.Msg);
      saveAuthInfo(loginInput.userId);

      navigate('/researcher');
    } catch (err) {
      alert('로그인 실패. 정보를 확인해주세요.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
        <div>
          <div className='input input-bordered flex items-center gap-2 rounded-md'>
            <label htmlFor='userId' className='mr-2 text-accent'>
              ID
            </label>
            <input
              type='text'
              id='userId'
              className='bg-primary-content'
              {...register('userId', { required: true })}
            />
          </div>
          {errors.userId && (
            <p className='text-xs ml-0.5 mt-1.5 mb-1.5 text-red-500'>
              *id 입력이 필요합니다.
            </p>
          )}
        </div>
        <div>
          <div className='input input-bordered flex items-center gap-2 rounded-md'>
            <label htmlFor='pw' className='mr-1 text-accent'>
              PW
            </label>
            <input
              type='password'
              id='pw'
              {...register('pw', { required: true })}
            />
          </div>
          {errors.userId && (
            <p className='text-xs ml-0.5 mt-1.5 mb-1.5 text-red-500'>
              *pw 입력이 필요합니다.
            </p>
          )}
        </div>
        <button className='mt-2 btn bg-base-100 border-base-content rounded-sm'>
          로그인
        </button>
      </form>
    </>
  );
};

export default LoginForm;
