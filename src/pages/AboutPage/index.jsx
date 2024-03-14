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
    <SectionTitleAndBackgroundComponent title={''} sourceImage={'image-source-2.png'} />
    <section className={'accordion-about'}>
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
