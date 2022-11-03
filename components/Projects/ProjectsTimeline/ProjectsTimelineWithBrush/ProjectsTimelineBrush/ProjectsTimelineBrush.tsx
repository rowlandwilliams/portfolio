interface Props {
  graphWidth: number;
}

export const ProjectsTimelineBrush = ({ graphWidth }: Props) => {
  return (
    <svg width={graphWidth} height={100}>
      <g id="brush"></g>
    </svg>
  );
};
