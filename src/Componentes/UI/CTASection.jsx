import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import { trackEvent } from '../../Utils/analytics';
import './UI.css';

const CTASection = ({
  title = 'Tu patrimonio merece un equipo dedicado',
  subtitle = 'Dejá que nuestros expertos te acompañen a proteger y hacer crecer lo que construiste. El primer paso es una conversación.',
  buttonText = 'Contactanos Ahora',
  to = '/contacto',
}) => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <ScrollReveal>
          <h2 className="cta-title">{title}</h2>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="cta-subtitle">{subtitle}</p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <Link to={to} className="btn btn-secondary" onClick={() => trackEvent('cta_click', { text: buttonText })}>
            {buttonText}
          </Link>
        </ScrollReveal>
      </div>
      <div className="cta-logo">
        <img
          src="https://loyalty-optimized.s3.sa-east-1.amazonaws.com/simbolo3.png"
          alt="Loyalty Investments"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default CTASection;
