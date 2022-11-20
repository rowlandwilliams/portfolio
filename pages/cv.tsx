import { ReactElement } from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { CvViewer } from "../components/CvViewer/CvViewer";
import { UiSectionWithMargin } from "../components/SHARED/UiSectionWithMargin/UiSectionWithMargin";

const CV = () => {
  return (
    <section className="bg-gradient-to-t from-dark-gray to-indigo-600">
      <UiSectionWithMargin
        yPadding
        className="flex justify-center items-center animate-fade-in-down mb-12  "
      >
        <CvViewer />
      </UiSectionWithMargin>
    </section>
  );
};

CV.getLayout = (page: ReactElement) => (
  <BaseLayout noPadding>{page}</BaseLayout>
);

export default CV;
