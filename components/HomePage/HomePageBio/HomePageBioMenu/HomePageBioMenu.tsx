interface Props {}

const menuOptions = ["Current Role", "Skills", "Background"];

export const HomePageBioMenu = () => {
  return (
    <section className="space-y-2">
      <nav className="flex ">
        {menuOptions.map((option) => (
          <p className="px-4">{option}</p>
        ))}
      </nav>
      <div className="rounded-md p-4 border border-green-600">
        Engineering Lead
      </div>
    </section>
  );
};
