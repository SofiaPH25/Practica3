
export enum SectionId {
  Home = 'home',
  Services = 'services',
  SelfAssessment = 'selfAssessment',
  Contact = 'contact',
}

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}
