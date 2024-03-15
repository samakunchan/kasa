import './index.scss';
import BlockAccordionComponent from '../../components/BlockAccordionComponent';
import SectionTitleAndBackgroundComponent from '../../components/SectionTitleAndBackgroundComponent';
import { aboutModel } from '../../core/utils/global-messages';

/**
 * Construit la page AboutPage
 * @return {JSX.Element<AboutPage>}
 * @constructor
 */
const AboutPage = () => (
  <div>
    <SectionTitleAndBackgroundComponent sourceImage={'image-source-2.png'} />
    <section aria-label={'Les 4 éléments de qualités'} className={'accordion-about'}>
      <BlockAccordionComponent
        title={aboutModel.fiability.title}
        content={aboutModel.fiability.content}
      />
      <BlockAccordionComponent
        title={aboutModel.respect.title}
        content={aboutModel.respect.content}
      />
      <BlockAccordionComponent
        title={aboutModel.service.title}
        content={aboutModel.service.content}
      />
      <BlockAccordionComponent
        title={aboutModel.security.title}
        content={aboutModel.security.content}
      />
    </section>
  </div>
);

export default AboutPage;
