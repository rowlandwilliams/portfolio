import classNames from "classnames";
import { selectAll } from "d3-selection";
import { debounce } from "lodash";
import { useEffect, useRef, useState } from "react";
import { clusterStore } from "../../../../../store/cluster";
import { pointGroups } from "../../GroupSelectors/utils/utils";
import { graphMargin } from "../utils/shared";

import { plotZoomGraph } from "./utils/plot";

export const ZoomGraph = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const isLoading = parentWidth === 0;

  const {
    zoomGraphDomains,
    coordsAndTooltipData: { coords, tooltipData },
    pointIsHovered,
  } = clusterStore();

  const handleWindowResize = debounce((current: HTMLDivElement) => {
    setParentWidth(current.offsetWidth);
    setParentHeight(current.offsetHeight);
  }, 100);

  useEffect(() => {
    const { current } = parentRef;

    if (current) {
      const setDimensions = () => handleWindowResize(current);
      setDimensions();
      window.addEventListener("resize", setDimensions);
      return () => window.removeEventListener("resize", setDimensions);
    }
  }, [handleWindowResize, parentWidth, parentHeight]);

  useEffect(() => {
    plotZoomGraph(parentWidth, parentHeight, zoomGraphDomains);

    // after both graphs plotted set color of all graph axis lines
    selectAll(".tick > line, .domain").attr("stroke-width", "0.1");
  }, [parentWidth, parentHeight, zoomGraphDomains]);

  // console.log(mouse, pointIsHovered);
  return (
    <div
      className={classNames(
        "relative w-full md:w-1/2 h-1/2 md:h-full transition-opacity duration-200",
        {
          "opacity-0": isLoading,
          "opacity-100": !isLoading,
        }
      )}
      ref={parentRef}
    >
      <svg width="100%" height="100%">
        <clipPath id="myClip">
          <rect
            transform={`translate(${graphMargin.left}, ${graphMargin.top})`}
            width={parentWidth - graphMargin.left - graphMargin.right}
            height={parentHeight - graphMargin.top - graphMargin.bottom}
          ></rect>{" "}
        </clipPath>
        <g
          id="x-axis-zoom"
          transform={`translate(0,${parentHeight - graphMargin.top})`}
          className="stroke-current stroke-0 text-chart-grid-grey font-inconsolata-regular"
        ></g>
        <g
          id="y-axis-zoom"
          transform={`translate(${graphMargin.left}, 0)`}
          className="stroke-current stroke-0 text-chart-grid-grey font-inconsolata-regular"
        ></g>
        <g id="points-zoom" clipPath="url(#myClip)"></g>
      </svg>
      <div
        className={classNames(
          "absolute bg-white rounded-sm pointer-events-none transition-opacity duration-500 -translate-y-full -translate-x-1/2",
          {
            "opacity-0": !pointIsHovered,
            "opacity-100": pointIsHovered,
          }
        )}
        style={{ top: coords.y, left: coords.x }}
      >
        <div className="relative h-full p-2 space-y-2">
          <section className="text-dark-gray space-y-2 font-medium">
            <div className="flex justify-between gap-x-2">
              <div>x:</div>
              <div
                className={classNames(
                  "px-2 bg-opacity-10 w-12 rounded-sm text-center font-medium",
                  [
                    pointGroups[tooltipData.group].bgClass,
                    pointGroups[tooltipData.group].textClass,
                    pointGroups[tooltipData.group].borderClass,
                  ]
                )}
              >
                {tooltipData.x.toFixed(2)}
              </div>
            </div>
            <div className="flex justify-between">
              <div>y:</div>
              <div
                className={classNames(
                  "px-2 bg-opacity-10 w-12 rounded-sm text-center",
                  [
                    pointGroups[tooltipData.group].bgClass,
                    pointGroups[tooltipData.group].textClass,
                    pointGroups[tooltipData.group].borderClass,
                  ]
                )}
              >
                {tooltipData.y.toFixed(2)}
              </div>
            </div>
          </section>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
            <div
              style={{
                borderLeft: "7px solid transparent",
                borderRight: "7px solid transparent",
                borderTop: `7px solid white`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
