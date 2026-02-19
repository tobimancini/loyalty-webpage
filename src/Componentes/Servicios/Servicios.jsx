import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartPie, faCoins, faShield } from '@fortawesome/free-solid-svg-icons';
import Background from '../Background/Background';
import ScrollReveal from '../UI/ScrollReveal';
import PageHero from '../UI/PageHero';
import CTASection from '../UI/CTASection';
import './Servicios.css';

const services = [
  {
    icon: faChartLine,
    title: 'Banca Privada',
    description: 'Ofrecemos un servicio integral de gestión de ahorros, adaptado a las necesidades de cada cliente para preservar y potenciar su capital. Los servicios ofrecidos son: Mercado de capitales, Inversión en Real Estate y Gestión de portafolios.',
  },
  {
    icon: faChartPie,
    title: 'Asesoramiento Financiero para Individuos',
    description: 'Ofrecemos asesoramiento financiero personalizado para ayudarte a alcanzar tus metas a largo plazo. Estamos para guiarte en cada paso.',
  },
  {
    icon: faShield,
    title: 'Gestión y Protección de Capital para Empresas',
    description: 'Brindamos soluciones integrales para la gestión y protección del capital empresarial. Optimiza tus recursos, asegura tu flujo de caja y minimiza los riesgos financieros con nuestro apoyo experto.',
  },
  {
    icon: faCoins,
    title: 'Optimización Fiscal',
    description: 'Desarrollamos estrategias para la optimización fiscal que te permiten reducir tu carga impositiva y mejorar tu rentabilidad. Aprovecha al máximo tus recursos con nuestras soluciones a medida.',
  },
];

const Servicios = () => {
  return (
    <Background>
      <Helmet>
        <title>Servicios | Loyalty Investments</title>
        <meta name="description" content="Banca privada, asesoramiento financiero, protección de capital y optimización fiscal. Soluciones financieras a medida para individuos y empresas en Argentina." />
        <link rel="canonical" href="https://loyalty.investments/servicios" />
        <meta property="og:title" content="Servicios | Loyalty Investments" />
        <meta property="og:description" content="Soluciones financieras personalizadas: banca privada, asesoramiento, protección de capital y optimización fiscal." />
        <meta property="og:url" content="https://loyalty.investments/servicios" />
      </Helmet>
      <div className="container">
        <PageHero
          label="Soluciones"
          title="Servicios diseñados para tu tranquilidad."
        />

        <section className="services-page">
          <ScrollReveal>
            <p className="services-page__intro">
              Cada cliente es único. Por eso diseñamos soluciones a medida que se
              adaptan a tus objetivos, tu perfil de riesgo y tu horizonte temporal.
            </p>
          </ScrollReveal>

          <div className="services-list">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="service-card-full">
                  <div className="service-card-full__icon">
                    <div className="icon-circle">
                      <FontAwesomeIcon icon={service.icon} />
                    </div>
                  </div>
                  <div className="service-card-full__content">
                    <h3 className="service-card-full__title">{service.title}</h3>
                    <p className="service-card-full__text">{service.description}</p>
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

export default Servicios;
