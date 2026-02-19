import './UI.css';

const PageHero = ({ label, title }) => {
  return (
    <section className="page-hero">
      <div className="page-hero__content">
        <span className="page-hero__label">{label}</span>
        <h1 className="page-hero__title">{title}</h1>
      </div>
    </section>
  );
};

export default PageHero;
