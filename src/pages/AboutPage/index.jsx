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
      <BlockAccordionComponent
        title={'Fiabilité'}
        content={
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Animi atque doloribus inventore ipsam minus perspiciatis possimus quaerat quam quis quo? ' +
          'Atque debitis, eaque exercitationem expedita iusto nam odit porro repudiandae sequi ut! ' +
          'Alias architecto at, facere fugiat harum impedit laborum maiores minima nam natus obcaecati ' +
          'quae quia quisquam reiciendis, rem.'
        }
      />
      <BlockAccordionComponent
        title={'Respect'}
        content={
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Animi atque doloribus inventore ipsam minus perspiciatis possimus quaerat quam quis quo? ' +
          'Atque debitis, eaque exercitationem expedita iusto nam odit porro repudiandae sequi ut! ' +
          'Alias architecto at, facere fugiat harum impedit laborum maiores minima nam natus obcaecati ' +
          'quae quia quisquam reiciendis, rem.'
        }
      />
      <BlockAccordionComponent
        title={'Service'}
        content={
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Animi atque doloribus inventore ipsam minus perspiciatis possimus quaerat quam quis quo? ' +
          'Atque debitis, eaque exercitationem expedita iusto nam odit porro repudiandae sequi ut! ' +
          'Alias architecto at, facere fugiat harum impedit laborum maiores minima nam natus obcaecati ' +
          'quae quia quisquam reiciendis, rem.'
        }
      />
      <BlockAccordionComponent
        title={'Sécurité'}
        content={
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Animi atque doloribus inventore ipsam minus perspiciatis possimus quaerat quam quis quo? ' +
          'Atque debitis, eaque exercitationem expedita iusto nam odit porro repudiandae sequi ut! ' +
          'Alias architecto at, facere fugiat harum impedit laborum maiores minima nam natus obcaecati ' +
          'quae quia quisquam reiciendis, rem.'
        }
      />
    </section>
  </div>
);

export default AboutPage;
