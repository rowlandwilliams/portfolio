import Image from "next/image";

export const HomePageBioText = () => {
  return (
    <section className="space-y-4 text-lg text-gray-100 border-b border-gray-700 pb-4">
      <h1>Welcome...</h1>
      <h2 className="text-2xl font-medium text-white">
        I am a <span className="text-yellow-300">Software Engineer</span> and{" "}
        <span className="text-red-400">UX Designer</span>.
      </h2>
      <h3>
        I connect <span className="text-sky-400 font-medium">data</span>,{" "}
        <span className="text-red-400 font-medium">design</span> and{" "}
        <span className="text-yellow-300 font-medium">technology</span> to build
        apps that explore and visualise complex information.
      </h3>
      <h4 className="text-sm">
        React, TypeScript, GraphQL and d3.js are some of the technologies I use.
      </h4>
      <h5 className="text-sm">
        Currently, I am Engineering Lead at{" "}
        <Image
          src={"/home/kulea.svg"}
          width={70}
          height={100}
          alt="kulea"
          className="inline ml-2 mr-0.5 mb-0.5"
        />
        , a commodity intelligence start-up in Nairobi, Kenya.
      </h5>
    </section>
  );
};
