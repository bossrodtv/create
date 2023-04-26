import { About } from 'modules/about';
import { PageLayout } from 'modules/layouts';
import { PrivateRoute } from 'modules/partials';
import { type NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <PrivateRoute>
      <PageLayout>
        <About />
      </PageLayout>
    </PrivateRoute>
  );
};

export default AboutPage;
