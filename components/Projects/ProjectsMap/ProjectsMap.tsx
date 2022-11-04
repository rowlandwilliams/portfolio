import classNames from "classnames";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { pointer } from "d3-selection";
import { DebouncedFunc } from "lodash";
import debounce from "lodash.debounce";
import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import { feature } from "topojson-client";
import { useResponsiveGraphWidth } from "../../../hooks/useResponsiveGraphWidth";
import world from "./data/110m.json";

const polygons = feature(world as any, world.objects.countries as any);

const features = polygons.features.map((polygon: any) => ({
  ...polygon,
}));

const padding = 10;

const coords = [
  {
    name: "Nairobi",
    coordinates: { latitude: -1.286389, longitude: 36.817223 },
    type: "work",
  },
  {
    name: "Oxford",
    coordinates: { latitude: 51.752022, longitude: -1.257677 },
    type: "work",
  },
  {
    name: "University College London",
    coordinates: { latitude: 51.522504, longitude: -0.132648 },
    type: "education",
  },
  {
    name: "University of British Columbia (UBC)",
    coordinates: { latitude: 49.246292, longitude: -123.116226 },
    type: "education",
  },
];
interface Props {
  setHovered: Dispatch<SetStateAction<boolean>>;
  mouseMove: DebouncedFunc<(e: MouseEvent, properties: any) => void>;
}

export const ProjectsMap = () => {
  const [hovered, setHovered] = useState(false);
  const [county, setCounty] = useState("");
  const [constituency, setConstituency] = useState("");

  const [tooltipInfo, setTooltipInfo] = useState<{
    name: string;
    type: string;
    x: number;
    y: number;
  }>({});

  const mouseMove = debounce((e: MouseEvent, properties: any) => {
    setCounty(properties.NAME_1);
    setConstituency(properties.NAME_2);
  }, 5);

  const { ref, graphWidth, graphHeight } = useResponsiveGraphWidth();

  const projection = geoNaturalEarth1().fitExtent(
    [
      [padding, padding],
      [graphWidth - padding, graphHeight - padding],
    ],
    polygons
  );

  const mapGenerator = geoPath().projection(projection);

  console.log(tooltipInfo);
  return (
    <section
      className="relative text-xs w-full h-full border border-gray-800 bg-gray-200 bg-opacity-10 rounded-sm"
      ref={ref}
    >
      <svg width={graphWidth} height={graphHeight}>
        <g width={graphWidth}>
          {features.map((polygon, i) => (
            <path
              d={mapGenerator(polygon) as string}
              key={i}
              fill={polygon.color}
              className="stroke-[0.5] stroke-gray-300 fill-gray-600 "
              onMouseMove={(e) => mouseMove(e, polygon.properties)}
              id={polygon.id}
              fillOpacity={0.6}
            />
          ))}
        </g>
        <g>
          {coords.map(({ name, type, coordinates }) => {
            const proj = projection([
              coordinates.longitude,
              coordinates.latitude,
            ]);

            const isWork = type === "work";
            const fill = isWork ? "fill-indigo-400" : "fill-orange-400";
            const stroke = isWork ? "stroke-indigo-400" : "stroke-orange-400";
            return (
              <g
                key={name}
                onMouseEnter={() => {
                  setHovered(true);
                  // setTooltipInfo({ ...tooltipInfo, name, type });
                }}
                onMouseLeave={() => {
                  setHovered(false);
                  setTooltipInfo({});
                }}
                onMouseMove={(e: MouseEvent) => {
                  const mouseCoords = pointer(e);

                  setTooltipInfo({
                    name,
                    type,
                    x: mouseCoords[0],
                    y: mouseCoords[1],
                  });
                }}
              >
                <circle
                  cx={proj[0]}
                  cy={proj[1]}
                  r={8}
                  className={classNames(
                    "animate-pulse opacity-10 stroke-[1] fill-gray-200",

                    [stroke]
                  )}
                  strokeOpacity={1}
                ></circle>
                <circle
                  cx={proj[0]}
                  cy={proj[1]}
                  r={2}
                  className={classNames([fill])}
                ></circle>
              </g>
            );
          })}
        </g>
      </svg>
      {hovered && (
        <div
          className={classNames(
            "bg-white p-4 rounded-sm absolute pointer-events-none text-black transition-all duration-300",
            { "hidden opacity-0": !hovered, "opacity-100 block": hovered }
          )}
          style={{ top: tooltipInfo.y, left: tooltipInfo.x }}
        >
          {tooltipInfo.name}
        </div>
      )}
    </section>
  );
};
