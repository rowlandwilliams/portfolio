import { ReactElement } from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { CvViewer } from "../components/CvViewer/CvViewer";
import { UiSectionWithMargin } from "../components/SHARED/UiSectionWithMargin/UiSectionWithMargin";

const CV = () => {
  return (
    <UiSectionWithMargin className="flex justify-center items-center animate-fade-in-down mb-12  ">
      <CvViewer />
    </UiSectionWithMargin>
  );
};

CV.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>;

export default CV;
