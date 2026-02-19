import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faHandshake, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import Background from '../Background/Background';
import ScrollReveal from '../UI/ScrollReveal';
import SectionHeader from '../UI/SectionHeader';
import PageHero from '../UI/PageHero';
import CTASection from '../UI/CTASection';
import './QuienesSomos.css';

const values = [
  { icon: faPeopleGroup, title: 'Cercanía', text: 'Conocemos a cada cliente y su historia.' },
  { icon: faBusinessTime, title: 'Experiencia', text: '20+ años navegando todos los ciclos del mercado.' },
  { icon: faHandshake, title: 'Compromiso', text: 'Tu éxito es nuestro único indicador.' },
];

const staff = [
  {
    name: 'Marcos Noceti',
    role: 'Presidente y Fundador',
    imgClass: 'staff-img--presidente',
    quote: 'Loyalty nació de una idea clara: poner siempre al cliente en primer lugar.',
  },
  {
    name: 'Nicolas Mihura',
    role: 'Gerente General',
    imgClass: 'staff-img--gerente',
    quote: 'Creemos que las mejores estrategias nacen de relaciones de confianza genuinas que inspiren y transformen cada oportunidad en un logro compartido.',
  },
];

const QuienesSomos = () => {
  return (
    <Background>
      <Helmet>
        <title>Quiénes Somos | Loyalty Investments</title>
        <meta name="description" content="Conocé al equipo detrás de Loyalty Investments. Asesores financieros independientes desde 2004, especializados en banca privada y gestión patrimonial en Argentina." />
        <link rel="canonical" href="https://loyalty.investments/quienesSomos" />
        <meta property="og:title" content="Quiénes Somos | Loyalty Investments" />
        <meta property="og:description" content="Asesores financieros independientes desde 2004. Conocé nuestro equipo y nuestra filosofía de trabajo." />
        <meta property="og:url" content="https://loyalty.investments/quienesSomos" />
      </Helmet>
      <div className="container">
        <PageHero
          label="Compromiso"
          title="Somos asesores financieros independientes desde 2004."
        />

        {/* La Empresa */}
        <section className="about-intro">
          <ScrollReveal>
            <p className="about-intro__text">
              Nos especializamos en servicios de banca privada, conectando ahorristas,
              inversores y rentistas con asesoramiento personalizado. Nuestro objetivo es proteger y
              gestionar la riqueza de clientes individuales e institucionales, adaptándonos a sus objetivos
              y perfiles de riesgo específicos.
            </p>
          </ScrollReveal>
          <div className="about-values">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="about-value">
                  <div className="icon-circle">
                    <FontAwesomeIcon icon={v.icon} />
                  </div>
                  <div>
                    <h3 className="about-value__title">{v.title}</h3>
                    <p className="about-value__text">{v.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* El Equipo */}
        <section className="team-section">
          <ScrollReveal>
            <SectionHeader label="Liderazgo" title="Nuestro Equipo" centered />
          </ScrollReveal>
          <div className="team-grid">
            {staff.map((member, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="team-card">
                  <div className={`team-card__photo ${member.imgClass}`} />
                  <div className="team-card__body">
                    <h3 className="team-card__name">{member.name}</h3>
                    <span className="team-card__role">{member.role}</span>
                    <blockquote className="team-card__quote">
                      "{member.quote}"
                    </blockquote>
                  </div>
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

export default QuienesSomos;
