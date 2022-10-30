export interface Project {
  startDate: string;
  endDate: string;
  name: string;
  technologies: string[];
  logo: {
    asset: {
      url: string;
    };
  };
}
