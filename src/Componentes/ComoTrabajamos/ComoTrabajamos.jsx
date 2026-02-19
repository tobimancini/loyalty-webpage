import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHandshake, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import Background from '../Background/Background';
import ScrollReveal from '../UI/ScrollReveal';
import PageHero from '../UI/PageHero';
import SectionHeader from '../UI/SectionHeader';
import CTASection from '../UI/CTASection';
import './ComoTrabajamos.css';

const steps = [
  { number: '01', title: 'Identificación de objetivos', description: 'Conocemos tus metas financieras, tu horizonte temporal y tus prioridades.' },
  { number: '02', title: 'Análisis del perfil de inversor', description: 'Evaluamos tu tolerancia al riesgo y tu experiencia en inversiones.' },
  { number: '03', title: 'Diseño de estrategia financiera', description: 'Creamos un plan personalizado alineado con tus objetivos.' },
  { number: '04', title: 'Propuesta de instrumentos adecuados', description: 'Seleccionamos los vehículos de inversión más apropiados para tu perfil.' },
  { number: '05', title: 'Seguimiento y ajuste', description: 'Monitoreamos tu portafolio y ajustamos la estrategia según las condiciones del mercado.' },
];

const advantages = [
  {
    icon: faScaleBalanced,
    title: 'Sin afiliación bancaria',
    description: 'No pertenecemos a bancos ni a sociedades de bolsa, lo que nos permite ofrecerte soluciones objetivas.',
  },
  {
    icon: faCheckCircle,
    title: 'Soluciones imparciales',
    description: 'Nuestras recomendaciones se basan únicamente en tu interés y objetivos financieros.',
  },
  {
    icon: faHandshake,
    title: 'Intereses alineados',
    description: 'Nuestro modelo de negocio garantiza que nuestro éxito depende directamente del tuyo.',
  },
];

const ComoTrabajamos = () => {
  return (
    <Background>
      <Helmet>
        <title>Cómo Trabajamos | Loyalty Investments</title>
        <meta name="description" content="Nuestro proceso de asesoramiento financiero: identificación de objetivos, análisis del perfil de inversor, diseño de estrategia y seguimiento continuo." />
        <link rel="canonical" href="https://loyalty.investments/comoTrabajamos" />
        <meta property="og:title" content="Cómo Trabajamos | Loyalty Investments" />
        <meta property="og:description" content="Conocé nuestro proceso paso a paso: del análisis de objetivos al seguimiento continuo de tu portafolio." />
        <meta property="og:url" content="https://loyalty.investments/comoTrabajamos" />
      </Helmet>
      <div className="container">
        <PageHero
          label="Proceso"
          title="Un enfoque personalizado en cada paso."
        />

        <section className="process-intro">
          <ScrollReveal>
            <p className="process-intro__text">
              Nuestro proceso está diseñado para entender primero y actuar después.
              Cada decisión se basa en un análisis profundo de tu situación y tus metas.
            </p>
          </ScrollReveal>
        </section>

        {/* Timeline */}
        <div className="timeline">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="timeline-item">
                <div className="timeline-marker">
                  <span className="timeline-number">{step.number}</span>
                  {i < steps.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{step.title}</h3>
                  <p className="timeline-text">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Advantages */}
        <section className="advantages-section">
          <ScrollReveal>
            <SectionHeader label="Modelo Independiente" title="Ventajas de la Independencia" />
          </ScrollReveal>
          <div className="advantages-grid">
            {advantages.map((adv, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="advantage-card">
                  <div className="icon-circle">
                    <FontAwesomeIcon icon={adv.icon} />
                  </div>
                  <h4 className="advantage-title">{adv.title}</h4>
                  <p className="advantage-text">{adv.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <CTASection />
      </div>
    </Background>
  );
};

export default ComoTrabajamos;
