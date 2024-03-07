import './index.scss';

const GallerySectionComponent = () => {
  const img =
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg';
  const fakeArrayForCards = Array.of(...Array(5).keys());
  return (
    <section className={'section-gallery'}>
      <div className={'card-layout'}>
        <div className={'card-container'}>
          {fakeArrayForCards.map((data, index) => (
            <div key={index} className={'card'}>
              <div className={'intercalaire'}></div>
              <img src={img} alt={`Salon cozy`} />
              <h3>Titre de la location</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySectionComponent;
