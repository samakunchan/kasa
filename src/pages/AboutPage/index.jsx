import './index.scss';
import BlockAccordionComponent from '../../components/BlockAccordionComponent';
import SectionTitleAndBackgroundComponent from '../../components/SectionTitleAndBackgroundComponent';
import { globalMessages } from '../../core/utils/global-messages';

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
        title={globalMessages.fiability.title}
        content={globalMessages.fiability.content}
      />
      <BlockAccordionComponent
        title={globalMessages.respect.title}
        content={globalMessages.respect.content}
      />
      <BlockAccordionComponent
        title={globalMessages.service.title}
        content={globalMessages.service.content}
      />
      <BlockAccordionComponent
        title={globalMessages.security.title}
        content={globalMessages.security.content}
      />
    </section>
  </div>
);

export default AboutPage;
