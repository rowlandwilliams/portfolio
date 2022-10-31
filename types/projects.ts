export interface Project {
  _id: string;
  startDate: string;
  endDate: string;
  name: string;
  summary: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  technologies: string[];
  logo: {
    asset: {
      url: string;
    };
  };
  slug: { current: string };
}
