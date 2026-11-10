import { Suspense, useState, useCallback } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AxiosResponse } from 'axios';

import ResearcherRegistrationForm from '../components/ResearcherRegistrationForm';
import ResearchersTable from '../components/ResearchersTable';

import { getResearchers } from '../apis';
import { Researcher } from '../types';

const ResearcherPage: React.FC = () => {
  const response = useLoaderData() as AxiosResponse<{
    researcher: Researcher[];
  }>;
  const [researchers, setResearchers] = useState<Researcher[]>(
    response.data.researcher
  );

  const updateResearchers = useCallback<() => Promise<void>>(async () => {
    // ResearcherRegistrationForm, ResearchersTable 리렌더링 방지용 메모이제이션
    try {
      const newResponse = await getResearchers();

      setResearchers(newResponse.data.researcher);
    } catch (error) {
      console.error('목록 업데이트에 실패했습니다.', error);
    }
  }, []);

  return (
    <div className='min-h-screen py-12 mx-auto max-w-7xl'>
      <ResearcherRegistrationForm onRegistrationSuccess={updateResearchers} />
      <Suspense
        fallback={
          <object
            className='animate-spin'
            type='image/svg+xml'
            data='/public/loader.svg'
          />
        }
      >
        <ResearchersTable
          researchers={researchers}
          onDataChange={updateResearchers}
        />
      </Suspense>
    </div>
  );
};

export default ResearcherPage;
