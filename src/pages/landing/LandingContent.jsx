/* eslint-disable */
// Archivo generado desde landing.html (contenido estático bilingüe).
import { Link } from 'react-router-dom';
import Bi from '../../components/Bi';
import { useLanguage } from '../../i18n/LanguageContext';

export default function LandingContent() {
  const { lang, setLang } = useLanguage();

  return (
    <>
      <header className="site-header">
        <Link className="brand" aria-label="GEORISK home" to="/">
          <span className="brand-mark" aria-hidden="true">G</span>
          <span>GEORISK</span>
        </Link>
        <nav className="header-nav" aria-label="Navegación principal">
          <Bi as="a" es="Plataforma" en="Platform" href="#platform" />
          <Bi as="a" es="Riesgos Geofísicos" en="Geophysical Hazards" href="#hazards" />
          <Bi as="a" es="Rendimiento HPC" en="HPC Performance" href="#impact" />
          <Link className="header-login" to="/user-guide">
            <Bi as="span" es="Guía de Usuario" en="User Guide" />{" "}
            <span aria-hidden="true">→</span>
          </Link>
          <div className="lang-switcher" aria-label="Language selection">
            <button className={`lang-btn${lang === 'es' ? ' active' : ''}`} onClick={() => setLang('es')} >ES</button>
            <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')} >EN</button>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot"></span>
              <Bi as="span" es="Evaluación y Reducción de Riesgos Geofísicos" en="Geophysical Risk Assessment & Reduction" />
            </p>
            <h1 id="hero-title">
              <Bi as="span" es="Simulación avanzada." en="Advanced simulation." />
              <br />
              <Bi as="span" es="Decisiones precisas ante el cambio climático." en="Precise decision-making under climate change." />
            </h1>
            <Bi as="p" es="Plataforma digital WebGIS acelerada por GPU para el modelado multifísico de precipitaciones extremas, extremos climáticos, riesgo de incendios forestales y erosión del suelo. Soluciones de alta fidelidad científica orientadas a la resiliencia territorial." en="GPU-accelerated WebGIS digital platform for multi-physics modeling of extreme rainfall, climate extremes, wildfire risk, and soil erosion. High-fidelity scientific solutions for regional climate resilience." className="hero-text" />
            <div className="hero-actions">
              <Link className="primary-button" to="/login">
                <Bi as="span" es="Acceder a la Plataforma" en="Access the Platform" />
                <span aria-hidden="true">→</span>
              </Link>
              <Bi as="a" es="Memoria y Objetivos del Proyecto ↗" en="Project Scope & Objectives ↗" className="quiet-link" href="https://ghc.unizar.es/georisk/" target="_blank" rel="noopener noreferrer" />
            </div>
            <div className="hero-meta">
              <Bi as="span" es="Grupo de Hidráulica y Hemodinámica Computacional (GHC)" en="Computational Hydraulics and Hemodynamics Group (GHC)" />
              <span className="meta-separator"></span>
              <Bi as="span" es="Universidad de Zaragoza" en="University of Zaragoza" />
            </div>
          </div>
          <div className="hero-visual" aria-label="Vista previa de simulación geoespacial">
            <img src="/images/georisk.jpg" alt="Simulación de flujo geoespacial GEORISK" />
          </div>
        </section>
        <section className="intro" id="platform" aria-labelledby="platform-title">
          <div>
            <Bi as="p" es="Entorno WebGIS Integrado" en="Integrated WebGIS Environment" className="eyebrow" />
            <Bi as="h2" es="Desde datos satelitales hasta la evaluación cuantitativa del riesgo." en="From satellite data to quantitative risk assessment." id="platform-title" />
          </div>
          <Bi as="p" es="GEORISK democratiza el acceso a modelos numéricos complejos de alta precisión. Integra fuentes geoespaciales públicas (IGN, AEMET, CNIG, Copernicus) y ejecuta análisis de escenarios climáticos IPCC en entornos web accesibles para consultorías, administraciones públicas y gestión de emergencias." en="GEORISK democratizes access to complex, high-precision numerical models. It integrates public geospatial sources (Copernicus, IGN, AEMET) and evaluates IPCC climate scenarios through accessible web interfaces for engineering consultancies, public authorities, and emergency managers." className="intro-text" />
        </section>
        <section className="capabilities" aria-label="Capacidades de la plataforma GEORISK">
          <article className="capability capability-dark">
            <span className="capability-number">01</span>
            <div className="capability-icon" aria-hidden="true"> ◉ </div>
            <Bi as="h3" es="Preprocesado Territorial" en="Territorial Pre-processing" />
            <Bi as="p" es="Carga e integración rápida de modelos digitales del terreno (MDT), datos de cobertura vegetal (FVC), usos del suelo y parámetros hidrológicos y reológicos." en="Rapid loading and integration of digital terrain models (DTM), fractional vegetation cover (FVC), land-use, and hydrological/rheological parameters." />
          </article>
          <article className="capability capability-blue">
            <span className="capability-number">02</span>
            <div className="capability-icon" aria-hidden="true"> ◇ </div>
            <Bi as="h3" es="Simulación GPU Acelerada" en="GPU-Accelerated Simulation" />
            <Bi as="p" es="Ejecución de modelos de volúmenes finitos 2D en paralelismo masivo mediante GPU, reduciendo los tiempos de cómputo de días a minutos (aceleración 50x-100x)." en="Execution of 2D finite-volume models with massive GPU parallelization, reducing computation times from days to minutes (50x-100x speedup)." />
          </article>
          <article className="capability capability-sand">
            <span className="capability-number">03</span>
            <div className="capability-icon" aria-hidden="true"> ↗ </div>
            <Bi as="h3" es="Postprocesado y Análisis" en="Post-processing & Analytics" />
            <Bi as="p" es="Visualización espacio-temporal dinámica, generación de mapas de peligro multicriterio, extracción de perfiles topográficos y series temporales de calibración." en="Dynamic spatiotemporal visualization, multi-criteria hazard mapping, profile extraction, and calibration time-series analytics." />
          </article>
        </section>
        <section className="hazards-section" id="hazards" aria-labelledby="hazards-title">
          <div className="section-heading">
            <div>
              <Bi as="p" es="Modelado Multirriesgo Integrado" en="Integrated Multi-Hazard Modeling" className="eyebrow" />
              <Bi as="h2" es="Una plataforma de simulación.<br />Múltiples fenómenos geofísicos." en="One simulation platform.<br />Multiple geophysical hazards." id="hazards-title" />
            </div>
            <Bi as="p" es="A diferencia de los paquetes comerciales tradicionales limitados a agua limpia, GEORISK incorpora en una única arquitectura modular las ecuaciones dinámicas para fenómenos acoplados de alta severidad." en="Unlike traditional commercial software limited to clear-water hydraulics, GEORISK integrates dynamic equations for severe coupled geophysical phenomena into a single modular framework." />
          </div>
          <div className="hazards-grid">
            <article className="hazard-card hazard-flood">
              <span className="hazard-number">TO1</span>
              <div className="hazard-symbol"> ≋ </div>
              <div className="hazard-content">
                <Bi as="span" es="HIDROLOGÍA EXTREMA" en="EXTREME HYDROLOGY" className="hazard-tag" />
                <Bi as="h3" es="Precipitaciones Extremas (Fast Floods)" en="Flash Floods" />
                <Bi as="p" es="Simulación bidimensional hidrodinámica de precipitación-escorrentía, propagación de calados y velocidades en cuencas complejas y zonas urbanas." en="High-resolution 2D hydrodynamics for rainfall-runoff simulation, water depth propagation, and flow velocity in complex catchments and urban areas." />
              </div>
            </article>
            <article className="hazard-card hazard-climate">
              <span className="hazard-number">TO2</span>
              <div className="hazard-symbol"> 🌡️ </div>
              <div className="hazard-content">
                <Bi as="span" es="CLIMA" en="CLIMATE" className="hazard-tag" />
                <Bi as="h3" es="Extremos Climáticos" en="Climate Extremes" />
                <Bi as="p" es="Análisis de fenómenos climáticos extremos." en="Analysis of extreme climate events." />
              </div>
            </article>
            <article className="hazard-card hazard-wildfire">
              <span className="hazard-number">TO3</span>
              <div className="hazard-symbol"> 🔥 </div>
              <div className="hazard-content">
                <Bi as="span" es="INCENDIOS" en="WILDFIRES" className="hazard-tag" />
                <Bi as="h3" es="Riesgo de Incendios Forestales" en="Wildfire Risk" />
                <Bi as="p" es="Evaluación del riesgo de incendios forestales." en="Wildfire risk assessment." />
              </div>
            </article>
            <article className="hazard-card hazard-erosion">
              <span className="hazard-number">TO4</span>
              <div className="hazard-symbol"> ◌ </div>
              <div className="hazard-content">
                <Bi as="span" es="SUELO" en="SOIL" className="hazard-tag" />
                <Bi as="h3" es="Erosión del Suelo" en="Soil Erosion" />
                <Bi as="p" es="Análisis de erosión y pérdida de suelo." en="Erosion and soil loss analysis." />
              </div>
            </article>
            <article className="hazard-card hazard-future">
              <span className="hazard-number">IPCC</span>
              <div className="hazard-symbol"> + </div>
              <div className="hazard-content">
                <Bi as="span" es="ESCENARIOS FUTUROS" en="FUTURE SCENARIOS" className="hazard-tag" />
                <Bi as="h3" es="Adaptación al Cambio Climático" en="Climate Change Adaptation" />
                <Bi as="p" es="Evaluación de riesgos prospectivos incorporando las proyecciones climáticas regionales del IPCC para una planificación de infraestructuras más resiliente." en="Prospecting future hazards by incorporating IPCC regional climate projections for climate-resilient infrastructure and territorial planning." />
              </div>
            </article>
          </div>
        </section>
        <section className="project-section" aria-labelledby="project-title">
          <div className="project-copy">
            <Bi as="p" es="Transferencia de Conocimiento" en="Knowledge Transfer" className="eyebrow" />
            <Bi as="h2" es="De la investigación científica de vanguardia a la aplicación industrial." en="From cutting-edge academic research to industrial application." id="project-title" />
          </div>
          <div className="project-text">
            <Bi as="p" es="Desarrollado por el Grupo de Hidráulica y Hemodinámica Computacional (GHC) de la Universidad de Zaragoza, el proyecto GEORISK traslada años de avance en modelos matemáticos y códigos numéricos rigurosos hacia un entorno de software profesional y ejecutable en la nube." en="Developed by the Computational Hydraulics and Hemodynamics Group (GHC) at the University of Zaragoza, the GEORISK project transforms years of mathematical research into a cloud-ready, professional software platform." />
            <Bi as="p" es="Diseñado para Organismos de Cuenca (CHE), IGME-CSIC, Protección Civil y consultorías de ingeniería que requieren herramientas precisas de reducción del riesgo de desastres (SDG 11, 13 y 15)." en="Designed for River Basin Authorities (CHE), Geological Surveys (IGME-CSIC), Civil Protection, and engineering firms needing rigorous disaster risk reduction tools (SDGs 11, 13 & 15)." />
            <Bi as="a" es="Visitar la web del Proyecto GEORISK ↗" en="Visit GEORISK Project Webpage ↗" className="project-button" href="https://ghc.unizar.es/georisk/" target="_blank" rel="noopener noreferrer" />
          </div>
        </section>
        <section className="closing-cta" aria-labelledby="cta-title">
          <div>
            <Bi as="p" es="Gestión Integral del Riesgo" en="Comprehensive Risk Management" className="eyebrow" />
            <Bi as="h2" es="Transforme datos numéricos complejos<br />en decisiones de protección eficaces." en="Transform complex simulation data<br />into effective mitigation decisions." id="cta-title" />
          </div>
          <Link className="primary-button light-button" to="/login">
            <Bi as="span" es="Acceso a la Plataforma GEORISK" en="Access GEORISK Platform" />
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-brand">
          <span className="footer-logo"> GEORISK </span>
          <Bi as="span" es="Plataforma digital para la evaluación de riesgos geofísicos" en="Digital platform for geophysical risk assessment" />
        </div>
        <div className="footer-right">
          <Bi as="span" es="Grupo de Hidráulica y Hemodinámica Computacional" en="Computational Hydraulics and Hemodynamics Group" />
          <Bi as="span" es="Universidad de Zaragoza" en="University of Zaragoza" />
          <Bi as="a" es="Proyecto ↗" en="Project ↗" href="https://ghc.unizar.es/georisk/" target="_blank" rel="noopener noreferrer" />
        </div>
      </footer>
    </>
  );
}
