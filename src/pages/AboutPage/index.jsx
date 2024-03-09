import './index.scss';
import BlockAccordionComponent from '../../components/BlockAccordionComponent';
import SectionTitleAndBackgroundComponent from '../../components/SectionTitleAndBackgroundComponent';

/**
 * Construit la page AboutPage
 * @return {JSX.Element<AboutPage>}
 * @constructor
 */
const AboutPage = () => (
  <div>
    <SectionTitleAndBackgroundComponent title={''} sourceImage={'image-source-2.png'} />
    <section className={'accordion-about'}>
      <BlockAccordionComponent title={'Fiabilité'} />
      <BlockAccordionComponent title={'Respect'} content={''} />
      <BlockAccordionComponent title={'Service'} content={''} />
      <BlockAccordionComponent title={'Sécurité'} content={''} />
    </section>
  </div>
);

export default AboutPage;
