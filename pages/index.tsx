import { Projects } from "../components/Projects/Projects";
import { Project } from "../types/projects";
import { querySanityCms } from "../utils/querySanityCms";

interface Props {
  projects: Project[];
}

export default function Home({ projects }: Props) {
  return <Projects projects={projects} />;
}

const query = `
		query {
			allProject {
        _id,
				name,
				technologies,
				startDate,
				endDate, 
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

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const { allProject } = await querySanityCms(query);

  // Pass data to the page via props
  return { props: { projects: allProject } };
}
