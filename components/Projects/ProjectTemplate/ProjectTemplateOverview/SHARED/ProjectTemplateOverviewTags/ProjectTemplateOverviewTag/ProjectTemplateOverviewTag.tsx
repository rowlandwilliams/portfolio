import classNames from "classnames";

interface Props {
  text: string | null;
  borderColorClass: string;
}

export const ProjectTemplateOverviewTag = ({
  text,
  borderColorClass,
}: Props) => {
  return text ? (
    <div
      className={classNames("border px-3 py-0.5 max-w-max rounded-2xl", [
        borderColorClass,
      ])}
    >
      {text}
    </div>
  ) : null;
};
