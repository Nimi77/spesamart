import AboutBreadcrumb from './_components/Breadcrumb';
import ExecutiveInfo from './_components/Executives';
import BrandAcheivement from './_components/Achievement';
import Services from '@/components/Services';
import Story from './_components/Story';

export default function About() {
  return (
    <div className="m-auto flex max-w-[90%] flex-col gap-12 pb-2 pt-14 xl:max-w-6xl">
      <AboutBreadcrumb current="About" />
      <Story />
      <BrandAcheivement />
      <ExecutiveInfo />
      <Services />
    </div>
  );
}
