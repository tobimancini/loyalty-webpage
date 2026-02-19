import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBalanceScale, faChartLine, faChartPie, faChevronDown,
  faCoins, faGlobe, faHandshake, faShield, faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import Background from '../Background/Background';
import ScrollReveal from '../UI/ScrollReveal';
import SectionHeader from '../UI/SectionHeader';
import StatsBar from '../UI/StatsBar';
import VideoModal from '../UI/VideoModal';
import CTASection from '../UI/CTASection';
import './Inicio.css';

const logos = [
  { src: 'https://loyalty-optimized.s3.sa-east-1.amazonaws.com/latin.png', alt: 'Latinex', h: 70 },
  { src: 'https://loyalty-optimized.s3.sa-east-1.amazonaws.com/ieb.png', alt: 'IEB', h: 120 },
  { src: 'https://loyalty-optimized.s3.sa-east-1.amazonaws.com/inviu.png', alt: 'InviU', h: 55 },
  { src: 'https://loyalty-optimized.s3.sa-east-1.amazonaws.com/pershing.png', alt: 'Pershing', h: 60 },
  { src: 'https://loyalty-optimized.s3.sa-east-1.amazonaws.com/interactive.png', alt: 'Interactive Brokers', h: 50 },
];

const philosophy = [
  {
    icon: faBalanceScale,
    title: 'Independencia',
    headline: 'No respondemos a bancos. Respondemos a vos.',
    text: 'Sin conflictos de interés, tus objetivos son los únicos que importan.',
  },
  {
    icon: faHandshake,
    title: 'Confianza',
    headline: 'Relaciones que trascienden generaciones.',
    text: '20+ años construyendo vínculos basados en transparencia y resultados.',
  },
  {
    icon: faGlobe,
    title: 'Excelencia',
    headline: 'Acceso global, enfoque personal.',
    text: 'Mercados internacionales con la cercanía de un equipo dedicado.',
  },
];

const services = [
  { icon: faChartLine, title: 'Banca Privada', text: 'Gestión integral de ahorros, Real Estate y portafolios.' },
  { icon: faChartPie, title: 'Asesoramiento Financiero', text: 'Planificación personalizada para tus metas a largo plazo.' },
  { icon: faShield, title: 'Protección de Capital', text: 'Soluciones para optimizar recursos y minimizar riesgos.' },
  { icon: faCoins, title: 'Optimización Fiscal', text: 'Estrategias para reducir tu carga impositiva.' },
];

const Inicio = () => {
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <Background>
      <Helmet>
        <title>Loyalty Investments | Asesoramiento Financiero Independiente</title>
        <meta name="description" content="Asesoramiento financiero independiente con más de 20 años de trayectoria. Banca privada, gestión de activos y optimización fiscal para individuos y empresas en Argentina." />
        <link rel="canonical" href="https://loyalty.investments/" />
        <meta property="og:title" content="Loyalty Investments | Asesoramiento Financiero Independiente" />
        <meta property="og:description" content="Más de 20 años protegiendo y gestionando activos. Banca privada, gestión de portafolios y optimización fiscal." />
        <meta property="og:url" content="https://loyalty.investments/" />
      </Helmet>
      <div className="container inicioContainer">

        {/* ===== 1. HERO — Statement puro ===== */}
        <section className="home-hero">
          <div className="home-hero__content">
            <p className="home-hero__label">Asesoramiento Financiero Independiente</p>
            <h1 className="home-hero__title">
              Más de dos décadas<br />
              construyendo confianza<br />
              financiera.
            </h1>
            <Link to="/contacto" className="btn btn-secondary home-hero__btn">
              Contactanos
            </Link>
          </div>
          <div className="scroll-indicator" aria-hidden="true">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </section>

        {/* ===== 2. STATS BAR ===== */}
        <StatsBar />

        {/* ===== 3. NUESTRA HISTORIA — Video como estrella ===== */}
        <section className="story-section">
          <div className="story-text">
            <ScrollReveal>
              <span className="section-label">Nuestra Historia</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="story-text__title">
                Conocé quiénes somos y por qué hacemos lo que hacemos.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="story-text__body">
                Desde 2004, Loyalty nació de una idea clara: poner siempre al cliente en primer lugar.
                Nuestro modelo independiente nos permite ofrecerte un asesoramiento libre de conflictos
                de interés, con el único objetivo de proteger y hacer crecer tu patrimonio.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Link to="/quienesSomos" className="story-text__link">
                Conocé más sobre nosotros <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={200} variant="fadeLeft">
            <VideoModal
              videoSrc="https://loyalty-optimized.s3.sa-east-1.amazonaws.com/LoyaltyOpt.mp4"
            />
          </ScrollReveal>
        </section>

        {/* ===== 4. FILOSOFÍA — 3 Pilares ===== */}
        <section className="philosophy-section">
          <SectionHeader label="Nuestra Filosofía" title="En qué creemos" centered />
          <div className="philosophy-grid">
            {philosophy.map((item, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="philosophy-card">
                  <div className="icon-circle">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h3 className="philosophy-card__title">{item.title}</h3>
                  <p className="philosophy-card__headline">{item.headline}</p>
                  <p className="philosophy-card__text">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ===== 5. SERVICIOS — Preview ===== */}
        <section className="home-services">
          <SectionHeader label="Soluciones" title="Servicios a tu medida" />
          <div className="services-grid">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="service-card">
                  <div className="icon-circle">
                    <FontAwesomeIcon icon={service.icon} />
                  </div>
                  <div>
                    <h3 className="service-card__title">{service.title}</h3>
                    <p className="service-card__text">{service.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="home-services__link-wrapper">
              <Link to="/servicios" className="btn btn-outline">
                Conocé todos nuestros servicios
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* ===== 6. ALIANZAS ===== */}
        <section className="alianzas-section">
          <ScrollReveal>
            <span className="section-label">Alianzas Estratégicas</span>
          </ScrollReveal>
          <div className="carousel-wrapper">
            <div className="carousel-track">
              {allLogos.map((logo, i) => (
                <div key={i} className="carousel-item">
                  <img src={logo.src} alt={logo.alt} style={{ height: logo.h * 0.8 }} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 7. CTA ===== */}
        <CTASection />

      </div>
    </Background>
  );
};

export default Inicio;
