import AboutBreadcrumb from './components/Breadcrumb';
import Story from './components/Story';
import ExecutiveInfo from './components/Executives';
import BrandAcheivement from './components/Achievement';

export default function About() {
  return (
    <div className="m-auto flex max-w-[90%] flex-col gap-16 py-14 xl:max-w-6xl">
      <AboutBreadcrumb current="About" />
      <Story />
      <BrandAcheivement />
      <ExecutiveInfo />
    </div>
  );
}
