import Breakline from '@/common/components/elements/Breakline';

import BlogPreview from './components/BlogCarousel';
import Introduction from './components/Introduction';
import Services from './components/Services';
import SkillsSection from './components/SkillsSection';

const Home = () => {
  return (
    <>
      <Introduction />
      <Breakline className='mb-7 mt-8' />
      <BlogPreview />
      <Breakline className='my-8' />
      <SkillsSection />
      <Breakline className='my-8' />
      <Services />
    </>
  );
};

export default Home;
