import Image from "next/image";

export const HomePageBioText = () => {
  return (
    <section className="space-y-12 text-base text-gray-300">
      <h1 className="text-white text-lg font-medium">Hi I&apos;m Rowland.</h1>
      <div className="space-y-6 leading-6">
        <p>
          I&apos;m a Software Engineer interested in
          Data Visualisation. I connect data,
          design and technology to build apps that
          explore and visualise complex information.
        </p>
        <p>
          Currently, I am Engineering Lead at{" "}
          <Image
            src={"/home/kulea.svg"}
            width={70}
            height={100}
            alt="kulea"
            className="inline ml-2 mr-0.5 mb-0.5"
          />
          , a Nairobi-based start-up digitising commodity supply chains in East Africa. I&apos;m also available for freelance work.
        </p>
      </div>
    </section>
  );
};
