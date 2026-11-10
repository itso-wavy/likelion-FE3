import { useForm } from 'react-hook-form';

import { addResearcher } from '../apis';
import { AddResearcherProps } from '../types';

interface ResearcherRegistrationFormProps {
  onRegistrationSuccess: () => Promise<void>;
}

const ResearcherRegistrationForm: React.FC<ResearcherRegistrationFormProps> = ({
  onRegistrationSuccess,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddResearcherProps>({
    defaultValues: {
      name: '',
      phoneNumber: '',
      organization: '',
    },
  });

  const onSubmit = async (researcherInput: AddResearcherProps) => {
    // TODO: 필요시 추가적인 researcherInput 밸리데이션 -> 필요 없음
    try {
      const res = await addResearcher(researcherInput);

      alert(res.data.Msg);
      onRegistrationSuccess();

      reset();
    } catch (err) {
      alert('등록 실패. 정보를 확인해주세요.');
    }
  };

  return (
    <div className='mb-24'>
      <p role='heading'>Researcher 등록</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='m-auto flex flex-col gap-2 max-w-sm'
      >
        <div>
          <div className='input input-bordered flex items-center gap-2 rounded-md'>
            <label
              htmlFor='name'
              className='mr-2 text-gray-400 font-semibold w-1/4'
            >
              이름
            </label>
            <input
              type='text'
              id='name'
              className='w-full'
              {...register('name', { required: true })}
            />
          </div>
          {errors.name && (
            <p className='text-xs ml-0.5 mt-1.5 mb-1.5 text-red-500'>
              *이름 입력이 필요합니다.
            </p>
          )}
        </div>
        <div>
          <div className='input input-bordered flex items-center gap-2 rounded-md'>
            <label
              htmlFor='phoneNumber'
              className='mr-1 text-gray-400 font-semibold w-1/4'
            >
              전화번호
            </label>
            <input
              type='text'
              id='phoneNumber'
              className='w-full'
              {...register('phoneNumber', { required: true })}
            />
          </div>
          {errors.phoneNumber && (
            <p className='text-xs ml-0.5 mt-1.5 mb-1.5 text-red-500'>
              *전화번호 입력이 필요합니다.
            </p>
          )}
        </div>
        <div>
          <div className='input input-bordered flex items-center gap-2 rounded-md'>
            <label
              htmlFor='PW'
              className='mr-1 text-gray-400 font-semibold w-1/4'
            >
              소속기관
            </label>
            <input
              type='text'
              id='organization'
              className='w-full'
              {...register('organization', { required: true })}
            />
          </div>
          {errors.organization && (
            <p className='text-xs ml-0.5 mt-1.5 mb-1.5 text-red-500'>
              *기관 입력이 필요합니다.
            </p>
          )}
        </div>
        <button className='mt-2 btn bg-base-100 border-base-content rounded-sm ml-auto w-36'>
          등록
        </button>
      </form>
    </div>
  );
};

export default ResearcherRegistrationForm;
