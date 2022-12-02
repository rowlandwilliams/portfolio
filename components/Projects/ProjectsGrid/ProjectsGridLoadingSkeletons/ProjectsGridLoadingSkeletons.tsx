import classNames from "classnames";
import { getArrayFromOneToNOptions } from "../../../utils/utils";

const nLargeSkeletons = getArrayFromOneToNOptions(3);
const nSmallSkeletons = getArrayFromOneToNOptions(5);

export const ProjectsGridLoadingSkeletons = () => {
  return (
    <>
      <article className="space-y-8">
        <section className="space-y-4">
          <h1 className="font-medium text-xl border-b border-gray-700">
            Larger Works
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {nLargeSkeletons.map((skeleton, i) => (
              <div
                key={skeleton}
                className={classNames(
                  "rounded-lg animate-pulse h-[378px] bg-opacity-60 border border-gray-600 bg-gray-700"
                )}
              />
            ))}
          </div>
        </section>
        <section className="space-y-4">
          <h1 className="font-medium text-lg border-b border-gray-700">
            Smaller Works
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {nSmallSkeletons.map((skeleton, i) => (
              <div
                key={skeleton}
                className={classNames(
                  "rounded-lg animate-pulse h-[200px] bg-opacity-60 border border-gray-600 bg-gray-700"
                )}
              />
            ))}
          </div>
        </section>
      </article>
    </>
  );
};
