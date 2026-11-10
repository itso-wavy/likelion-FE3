export interface LoginProps {
  userId: string;
  pw: string;
}

export interface Researcher {
  pin: string;
  organization: string;
  password: string;
  phoneNumber: string; // 정규표현식 생략
  name: string;
}

export type AddResearcherProps = Omit<Researcher, 'pin' | 'password'>;

export type ResetResearchersPasswordProps = Pick<
  Researcher,
  'pin' | 'password'
>;

export type DeleteResearcherProps = Pick<Researcher, 'pin'>;
