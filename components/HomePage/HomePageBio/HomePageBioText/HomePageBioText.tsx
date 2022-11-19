import Image from "next/image";

export const HomePageBioText = () => {
  return (
    <section className="space-y-4 text-lg text-gray-100">
      <h1>Welcome...</h1>
      <h2 className="text-2xl font-medium text-white">
        I am a Software Engineer and UX Designer.
      </h2>
      <h3>
        I connect data, design and technology to build apps that explore and
        visualise complex information.
      </h3>
      <h4 className="text-base">
        React, TypeScript, GraphQL and d3.js are some of the technologies I use.
      </h4>
      <h5 className="text-base">
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
