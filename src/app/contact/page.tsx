import { ContactPageContent } from './_components/contact-page';

export const metadata = {
  title: 'Contact Vladimir Hlobchastyi',
  description:
    'Contact Vladimir Hlobchastyi about turning business rules into working web and mobile products. Fastest reply by email or Telegram.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
