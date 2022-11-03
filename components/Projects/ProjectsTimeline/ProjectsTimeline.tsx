import { gql, useQuery } from "urql";
import { ProjectsTimelineWithBrush } from "./ProjectsTimelineWithBrush/ProjectsTimelineTimeline";

const gray100 = "#f3f4f6";

const padding = 40;

const dayInMs = 86400000;

const timeOptions = [
  { label: "6M", nDays: 182.5 },
  { label: "1Y", nDays: 365 },
  { label: "All", nDays: null },
];

const query = gql`
  query {
    allProject(sort: { complete: ASC, endDate: DESC }) {
      _id
      name
      color
      technologies
      complete
      startDate
      endDate
      logo {
        asset {
          url
        }
      }
      slug {
        current
      }
    }
  }
`;

export const ProjectsTimeline = () => {
  const [result] = useQuery({ query });

  const { data, fetching, error } = result;

  if (fetching) return <div>loadin</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <section className="flex flex-col flex-grow h-full space-y-2">
      <ProjectsTimelineWithBrush data={data} />
    </section>
  );
};
