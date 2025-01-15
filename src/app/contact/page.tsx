import AccountBreadcrumb from './_components/BreadCrumb';
import ContactForm from './_components/ContactForm';
import MoreInfo from './_components/MoreInfo';

export default function Contact() {
  return (
    <div className="m-auto flex max-w-[90%] flex-col gap-14 py-14 xl:max-w-6xl">
      <AccountBreadcrumb />
      <div className="flex flex-col gap-8 md:flex-row">
        <MoreInfo />
        <ContactForm />
      </div>
    </div>
  );
}
