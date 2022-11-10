import { PortableTextComponents } from "@portabletext/react";

export const ProjectTemplatePortableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-2xl font-medium">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-medium">{children}</h2>,
    normal: ({ children }) => <p className=" my-2">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 underline "
      >
        {children}
      </a>
    ),
  },
  types: {},
};
