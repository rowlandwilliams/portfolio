import { axisBottom } from "d3-axis";
import { brushX } from "d3-brush";
import { scaleTime } from "d3-scale";
import { select } from "d3-selection";
import { useEffect, useState } from "react";
import { useResponsiveGraphDims } from "../../../../hooks/useResponsiveGraphWidth";
import { Project } from "../../../../types/projects";
import { ProjectsTimelineBrush } from "./ProjectsTimelineBrush/ProjectsTimelineBrush";

interface Props {
  data: any;
}

const gray100 = "#f3f4f6";
const padding = 40;
const now = new Date().getTime();
const dayInMs = 86400000;

export const ProjectsTimelineWithBrush = ({ data }: Props) => {
  const [datesDomain, setDatesDomain] = useState([
    new Date("2020-10-01").getTime(),
    now,
  ]);

  const { graphWidth, graphHeight, ref } = useResponsiveGraphDims();

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

  useEffect(() => {
    const xScale = scaleTime().domain(datesDomain).range([0, graphWidth]);

    const xAxis = axisBottom(xScale).ticks(10);

    const brush = brushX()
      .extent([
        [0, 0],
        [graphWidth, 100],
      ])
      .on("brush", (event) => {
        const selection = { event };
        var extent = selection.event.selection;
        if (!extent) return;
        const brushedDatesDomain = extent.map((x: number) =>
          xScale.invert(x).getTime()
        );

        xScale.domain();

        // setDatesDomain(brushedDatesDomain);
        // console.log(brushedDatesDomain.map((date) => new Date(date)));
      });

    select("#x-axis")
      .attr("transform", `translate(0,${graphHeight - padding})`)
      .call(xAxis as any);

    select("#brush")
      .call(brush as any)
      .call(brush.move as any, [
        xScale(datesDomain[0]),
        xScale(datesDomain[1]),
      ]);
  }, [minStartDate, datesDomain, graphHeight, graphWidth]);

  return (
    <>
      <ProjectsTimelineBrush graphWidth={graphWidth} />
      <div ref={ref} className="flex-grow">
        <svg width={graphWidth} height={graphHeight}>
          <rect className="fill-gray-900" width="100%" height="100%" />
          <g
            id={"x-axis"}
            className="font-sans text-gray-600"
            transform={`translate(0, ${graphHeight - padding})`}
          ></g>
        </svg>
      </div>
    </>
  );
};
