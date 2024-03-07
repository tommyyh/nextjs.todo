import Landing from '@/pages/Home/Landing/Landing';
import { useTranslations } from 'next-intl';

type LocaleProps = {
  params: {
    locale: string;
  };
};

export default function Home(locales: LocaleProps) {
  const l = useTranslations('Home.landing');
  const locale = locales.params.locale;

  return (
    <main>
      <h1>{l('title')}</h1>

      <Landing />
    </main>
  );
}
