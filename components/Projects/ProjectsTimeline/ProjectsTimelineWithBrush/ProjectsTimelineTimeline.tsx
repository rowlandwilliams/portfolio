import { axisBottom } from "d3-axis";
import { brushX } from "d3-brush";
import { scaleTime } from "d3-scale";
import { select } from "d3-selection";
import { useEffect } from "react";
import { useResponsiveGraphWidth } from "../../../../hooks/useResponsiveGraphWidth";
import { Project } from "../../../../types/projects";
import { ProjectsTimelineBrush } from "./ProjectsTimelineBrush/ProjectsTimelineBrush";

interface Props {
  data: any;
}

const gray100 = "#f3f4f6";
const padding = 40;
const now = new Date().getTime();

export const ProjectsTimelineWithBrush = ({ data }: Props) => {
  const { graphWidth, graphHeight, ref } = useResponsiveGraphWidth();

  const brush = brushX().extent([
    [0, 0],
    [graphWidth, 100],
  ]);

  const { allProject: projects } = data;

  const projectsWithPresent = projects.map((project: Project) => ({
    ...project,
    startDate: new Date(project.startDate),
    endDate: project.complete ? new Date(project.endDate) : now,
  }));

  const startDates = projectsWithPresent.map(
    (project: Project) => new Date(project.startDate)
  );
  const minStartDate = Math.min(...startDates);
  const xScale = scaleTime().domain([minStartDate, now]).range([0, graphWidth]);
  const xAxis = axisBottom(xScale).ticks(10);

  useEffect(() => {
    select("#brush")
      .call(brush as any)
      .call(brush.move as any, [xScale(minStartDate), xScale(now)]);
  }, [brush, minStartDate, xScale]);

  return (
    <>
      <ProjectsTimelineBrush graphWidth={graphWidth} />
      <div ref={ref} className="flex-grow">
        <svg width={graphWidth} height={graphHeight}>
          <rect className="fill-gray-900" width="100%" height="100%" />
          <g
            id={"x-axis"}
            className="font-sans text-gray-600"
            ref={(node) =>
              select<SVGSVGElement, null>(node as SVGSVGElement)
                .call(xAxis)
                .call((g) =>
                  g.selectAll(".domain, .tick > line").attr("stroke", gray100)
                )
            }
            transform={`translate(0, ${graphHeight - padding})`}
          ></g>
        </svg>
      </div>
    </>
  );
};
