import { Helmet } from 'react-helmet-async';
import { faEnvelope, faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Background from '../Background/Background';
import ScrollReveal from '../UI/ScrollReveal';
import PageHero from '../UI/PageHero';
import { trackEvent } from '../../Utils/analytics';
import './Contacto.css';

const Contacto = () => {
  const whatsappNumber = '541139875923';
  const whatsappMessage = 'Hola, me gustaría hacer una consulta...';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Background>
      <Helmet>
        <title>Contacto | Loyalty Investments</title>
        <meta name="description" content="Contactá a Loyalty Investments. Av. del Libertador 6810, Piso 14, CABA, Argentina. Teléfono: 11-3987-5923. Email: info@linv.com.ar." />
        <link rel="canonical" href="https://loyalty.investments/contacto" />
        <meta property="og:title" content="Contacto | Loyalty Investments" />
        <meta property="og:description" content="Agendá una reunión o escribinos. Estamos en Av. del Libertador 6810, CABA." />
        <meta property="og:url" content="https://loyalty.investments/contacto" />
      </Helmet>
      <div className="container">
        <PageHero
          label="Contacto"
          title="Conversemos sobre tu futuro financiero."
        />

        <section className="contact-intro">
          <ScrollReveal>
            <p className="contact-intro__text">
              Estamos a tu disposición para responder consultas, agendar una reunión
              o simplemente conversar sobre cómo podemos ayudarte.
            </p>
          </ScrollReveal>
        </section>

        <div className="contact-layout">
          {/* Info column */}
          <div className="contact-info">
            <ScrollReveal>
              <a
                href="https://maps.google.com/?q=Av.+del+Libertador+6810+CABA"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-item__icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="contact-item__text">
                  <span className="contact-item__label">Dirección</span>
                  <span className="contact-item__value">Av. del Libertador 6810, Piso 14, CP 1429, C.A.B.A.</span>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <a href="tel:+541139875923" className="contact-item" onClick={() => trackEvent('contact_click', { method: 'phone' })}>
                <div className="contact-item__icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="contact-item__text">
                  <span className="contact-item__label">Teléfono</span>
                  <span className="contact-item__value">11-3987-5923</span>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <a href="mailto:info@linv.com.ar" className="contact-item" onClick={() => trackEvent('contact_click', { method: 'email' })}>
                <div className="contact-item__icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="contact-item__text">
                  <span className="contact-item__label">Email</span>
                  <span className="contact-item__value">info@linv.com.ar</span>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="contact-item">
                <div className="contact-item__icon">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="contact-item__text">
                  <span className="contact-item__label">Horario de atención</span>
                  <span className="contact-item__value">Lunes a Viernes, 9:00 a 18:00 hs</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="contact-whatsapp">
                <h3 className="contact-whatsapp__title">Envíanos un mensaje ahora</h3>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  onClick={() => trackEvent('contact_click', { method: 'whatsapp' })}
                >
                  Contactar por WhatsApp
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Map column */}
          <ScrollReveal delay={200} className="contact-map-wrapper">
            <div className="contact-map">
              <iframe
                title="Ubicación de Loyalty Investments"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26242.997658300876!2d-58.42406886684696!3d-34.54675904688948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6a3e2e4e597%3A0x96db6d53d7b01254!2sAv.%20Del%20Libertador%206810%2C%20C1429BNB%20CABA%2C%20Argentina!5e0!3m2!1sen!2sus!4v1692626093585!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Background>
  );
};

export default Contacto;
