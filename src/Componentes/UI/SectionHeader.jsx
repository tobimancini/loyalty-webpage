import ScrollReveal from './ScrollReveal';
import './UI.css';

const SectionHeader = ({ label, title, light = false, centered = false }) => {
  return (
    <div className={`section-header ${light ? 'section-header--light' : ''} ${centered ? 'section-header--centered' : ''}`}>
      <ScrollReveal>
        <span className="section-label">{label}</span>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <h2 className="section-title">{title}</h2>
        <div className="section-title-line" />
      </ScrollReveal>
    </div>
  );
};

export default SectionHeader;
