/* eslint-disable */
// Archivo generado desde user-guide.html (contenido estático bilingüe).
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Bi from '../../components/Bi';
import { useLanguage } from '../../i18n/LanguageContext';

export default function UserGuideContent() {
  const { lang, setLang } = useLanguage();
  const [mode, setMode] = useState('rain');

  return (
    <>
      <header className="site-header">
        <Link className="brand" aria-label="GEORISK home" to="/">
          <span className="brand-mark" aria-hidden="true">G</span>
          <span>GEORISK</span>
        </Link>
        <nav className="header-nav" aria-label="Navegación principal">
          <Bi as="a" es="Inicio" en="Home" href="/" />
          <Link className="header-login" to="/login">
            <Bi as="span" es="Acceso a Plataforma" en="Platform Access" />
            <span aria-hidden="true">→</span>
          </Link>
          <div className="lang-switcher" aria-label="Language selection">
            <button className={`lang-btn${lang === 'es' ? ' active' : ''}`} onClick={() => setLang('es')} >ES</button>
            <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')} >EN</button>
          </div>
        </nav>
      </header>
      <main>
        <section className="guide-modes-section">
          <div className="guide-container">
            <Bi as="p" es="Documentación Técnica" en="Technical Documentation" className="eyebrow" />
            <Bi as="h1" es="Guía de Usuario de GEORISK" en="GEORISK User Guide" id="guide-title" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }} />
            <div className="mode-tabs" role="tablist">
              <button className={`mode-tab${mode === 'rain' ? ' active' : ''}`} onClick={() => setMode('rain')} id="tab-rain" role="tab">
                <span className="mode-badge">TO1</span>
                <Bi as="span" es="Precipitaciones Extremas" en="Extreme Rainfall" />
              </button>
              <button className={`mode-tab${mode === 'climate' ? ' active' : ''}`} onClick={() => setMode('climate')} id="tab-climate" role="tab">
                <span className="mode-badge">TO2</span>
                <Bi as="span" es="Extremos Climáticos" en="Climate Extremes" />
              </button>
              <button className={`mode-tab${mode === 'wildfire' ? ' active' : ''}`} onClick={() => setMode('wildfire')} id="tab-wildfire" role="tab">
                <span className="mode-badge">TO3</span>
                <Bi as="span" es="Incendios Forestales" en="Wildfire Risk" />
              </button>
              <button className={`mode-tab${mode === 'erosion' ? ' active' : ''}`} onClick={() => setMode('erosion')} id="tab-erosion" role="tab">
                <span className="mode-badge">TO4</span>
                <Bi as="span" es="Erosión del Suelo" en="Soil Erosion" />
              </button>
            </div>
          </div>
        </section>
        <section className="guide-content-section">
          <div className="guide-container">
            <article className={`mode-panel${mode === 'rain' ? ' active' : ''}`} id="panel-rain" role="tabpanel">
              <header style={{ marginBottom: "40px", borderBottom: "1px solid var(--line)", paddingBottom: "20px" }}>
                <Bi as="p" es="Módulo TO1 — Precipitaciones Extremas" en="Module TO1 — Overland Hydrology & Flash Floods" className="eyebrow" />
                <Bi as="h2" es="Simulación de Precipitaciones Extremas" en="Flash Flood & Rainfall-Runoff Simulation" style={{ fontSize: "2.2rem", margin: "0 0 10px" }} />
                <Bi as="p" es="Guía paso a paso para la configuración de escenarios hidrológicos de precipitación extrema y cálculo de escorrentía 2D." en="Step-by-step guide for setting up extreme precipitation hydrological scenarios and 2D runoff computation." style={{ color: "var(--muted)", margin: "0" }} />
              </header>
              <nav style={{ display: "flex", gap: "10px", marginBottom: "40px", flexWrap: "wrap" }}>
                <Bi as="a" es="1. Creación del proyecto" en="1. Project Creation" href="#sec-proyecto" style={{ background: "var(--blue-deep)", color: "white", padding: "6px 14px", borderRadius: "20px", fontWeight: "700", fontSize: "0.82rem", textDecoration: "none" }} />
                <Bi as="a" es="2. Selección de capas" en="2. Layer Selection" href="#sec-capas" style={{ background: "rgba(18, 35, 47, 0.08)", color: "var(--ink)", padding: "6px 14px", borderRadius: "20px", fontWeight: "600", fontSize: "0.82rem", textDecoration: "none" }} />
                <Bi as="a" es="3. Configuración" en="3. Simulation Setup" href="#sec-configuracion" style={{ background: "rgba(18, 35, 47, 0.08)", color: "var(--ink)", padding: "6px 14px", borderRadius: "20px", fontWeight: "600", fontSize: "0.82rem", textDecoration: "none" }} />
                <Bi as="a" es="4. Resultados" en="4. Results Visualization" href="#sec-resultados" style={{ background: "rgba(18, 35, 47, 0.08)", color: "var(--ink)", padding: "6px 14px", borderRadius: "20px", fontWeight: "600", fontSize: "0.82rem", textDecoration: "none" }} />
              </nav>
              <section id="sec-proyecto" className="guide-step-block">
                <Bi as="h3" es="1. Creación del Proyecto" en="1. Project Creation" style={{ fontSize: "1.6rem", color: "var(--blue-deep)", marginBottom: "25px" }} />
                <div style={{ marginBottom: "30px" }}>
                  <Bi as="h4" es="1.1 Asignación del nombre" en="1.1 Naming the project" style={{ fontSize: "1.1rem", marginBottom: "8px" }} />
                  <Bi as="p" es="Ingrese un identificador único y formal para el proyecto en el campo correspondiente. Este nombre servirá como identificador principal dentro del espacio de trabajo y en los informes generados." en="Enter a unique and formal identifier for the project in the designated field. This name will serve as the primary identifier within the workspace and generated reports." style={{ color: "var(--muted)", margin: "0" }} />
                </div>
                <div style={{ marginBottom: "30px" }}>
                  <Bi as="h4" es="1.2 Modalidad de inicio" en="1.2 Initialization mode" style={{ fontSize: "1.1rem", marginBottom: "8px" }} />
                  <Bi as="p" es="Seleccione el flujo de trabajo inicial según la disponibilidad de sus datos territoriales:" en="Select the initial workflow based on your territorial data availability:" style={{ color: "var(--muted)", marginBottom: "12px" }} />
                  <ul style={{ color: "var(--ink)", lineHeight: "1.7", marginBottom: "20px" }}>
                    <li>
                      <Bi as="strong" es="Empezar el proyecto desde cero:" en="Start project from scratch:" />
                      <Bi as="span" es=" Configuración progresiva mediante la interfaz WebGIS incorporada y la descarga de fuentes públicas." en=" Progressive configuration using the built-in WebGIS interface and public data retrieval." />
                    </li>
                    <li>
                      <Bi as="strong" es="Empezar con datos (ZIP inputs):" en="Start with data (ZIP inputs):" />
                      <Bi as="span" es=" Carga masiva de información previa. Requiere adjuntar un archivo comprimido <code>.zip</code> cuya estructura interna contenga los ficheros con la nomenclatura y formatos compatibles con el motor numérico <strong>SERGHEI</strong>." en=" Bulk upload of existing data. Requires uploading a compressed <code>.zip</code> archive containing files formatted and named according to the internal <strong>SERGHEI</strong> solver specification." />
                    </li>
                  </ul>
                  <figure className="image-container" style={{ margin: "20px 0", textAlign: "center" }}>
                    <img src="/images/user-guide/PE/PE_Creacion_inicio.png" alt="Selección de Modalidad de Inicio y Carga ZIP" style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "8px", border: "1px solid var(--line)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
                    <Bi as="figcaption" es="Figura 1.1: Interfaz para la selección de la modalidad de inicio del proyecto y carga del archivo .zip" en="Figure 1.1: Interface for selecting the project initialization mode and uploading the .zip file" style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "8px", fontStyle: "italic" }} />
                  </figure>
                </div>
                <div style={{ marginBottom: "30px" }}>
                  <Bi as="h4" es="1.3 Selección del modo de simulación" en="1.3 Simulation mode selection" style={{ fontSize: "1.1rem", marginBottom: "8px" }} />
                  <Bi as="p" es="Seleccione el módulo numérico deseado entre los disponibles en la plataforma. Para este caso, elija el modo <strong>Precipitaciones Extremas</strong>. Tenga en cuenta que un mismo proyecto puede albergar múltiples modos de simulación para un análisis multirriesgo acoplado." en="Select the target numerical module from the available options. For this workflow, choose <strong>Extreme Rainfall</strong>. Note that a single project can accommodate multiple simulation modes for coupled multi-hazard assessment." style={{ color: "var(--muted)", marginBottom: "20px" }} />
                  <figure className="image-container" style={{ margin: "20px 0", textAlign: "center" }}>
                    <img src="/images/user-guide/PE/PE_Creacion_modo.png" alt="Selección del Modo Precipitaciones Extremas" style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "8px", border: "1px solid var(--line)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
                    <Bi as="figcaption" es="Figura 1.2: Selección del módulo de simulación de Precipitaciones Extremas" en="Figure 1.2: Selection of the Extreme Rainfall simulation module" style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "8px", fontStyle: "italic" }} />
                  </figure>
                </div>
                <div style={{ marginBottom: "30px" }}>
                  <Bi as="h4" es="1.4 Gestión del proyecto creado" en="1.4 Project management" style={{ fontSize: "1.1rem", marginBottom: "8px" }} />
                  <Bi as="p" es="Una vez confirmado el alta del proyecto, este quedará disponible en su panel personal con tres acciones principales:" en="Once project creation is confirmed, it will be accessible in your personal dashboard with three main actions:" style={{ color: "var(--muted)", marginBottom: "12px" }} />
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px", marginTop: "15px" }}>
                    <div style={{ background: "var(--paper)", padding: "16px", borderRadius: "6px", border: "1px solid var(--line)" }}>
                      <Bi as="strong" es="📂 Abrir" en="📂 Open" style={{ color: "var(--blue-deep)" }} />
                      <Bi as="p" es="Accede al entorno de trabajo WebGIS y panel de configuración." en="Access the WebGIS workspace and configuration panel." style={{ fontSize: "0.85rem", color: "var(--muted)", margin: "6px 0 0" }} />
                    </div>
                    <div style={{ background: "var(--paper)", padding: "16px", borderRadius: "6px", border: "1px solid var(--line)" }}>
                      <Bi as="strong" es="🔗 Compartir" en="🔗 Share" style={{ color: "var(--blue-deep)" }} />
                      <Bi as="p" es="Gestiona permisos de acceso para trabajo colaborativo." en="Manage access permissions for collaborative work." style={{ fontSize: "0.85rem", color: "var(--muted)", margin: "6px 0 0" }} />
                    </div>
                    <div style={{ background: "var(--paper)", padding: "16px", borderRadius: "6px", border: "1px solid var(--line)" }}>
                      <Bi as="strong" es="🗑️ Eliminar" en="🗑️ Delete" style={{ color: "#d9383a" }} />
                      <Bi as="p" es="Elimina definitivamente el proyecto y sus archivos asociados." en="Permanently removes the project and associated files." style={{ fontSize: "0.85rem", color: "var(--muted)", margin: "6px 0 0" }} />
                    </div>
                  </div>
                </div>
              </section>
              <section id="sec-capas" className="guide-step-block" style={{ marginTop: "60px", paddingTop: "40px", borderTop: "1px solid var(--line)" }}>
                <Bi as="h3" es="2. Selección de Capas" en="2. Layer Selection" style={{ fontSize: "1.6rem", color: "var(--blue-deep)", marginBottom: "25px" }} />
                <div style={{ background: "rgba(47, 128, 237, 0.06)", borderLeft: "4px solid var(--blue)", padding: "20px", borderRadius: "0 8px 8px 0", marginBottom: "20px" }}>
                  <Bi as="strong" es="⚠️ Requisitos obligatorios de entrada" en="⚠️ Mandatory Input Requirements" style={{ color: "var(--blue-deep)", display: "block", marginBottom: "8px", fontSize: "1rem" }} />
                  <Bi as="p" es="En el entorno WebGIS de GEORISK es posible incorporar múltiples capas para enriquecer el modelo. No obstante, para poder validar y ejecutar una simulación en el módulo de Precipitaciones Extremas, es <strong>estrictamente obligatorio</strong> haber cargado las siguientes 4 capas:" en="Within the GEORISK WebGIS environment, multiple layers can be added to enrich the model. However, to validate and run a simulation in the Extreme Rainfall module, loading the following 4 layers is <strong>strictly required</strong>:" style={{ color: "var(--ink)", margin: "0 0 12px", fontSize: "0.92rem" }} />
                  <ol style={{ color: "var(--ink)", margin: "0", paddingLeft: "20px", lineHeight: "1.6", fontSize: "0.9rem" }}>
                    <li>
                      <Bi as="strong" es="Capa Ráster o Modelo Digital del Terreno (MDT)" en="Raster Layer or Digital Terrain Model (DTM)" />
                    </li>
                    <li>
                      <Bi as="strong" es="Capa de precipitación" en="Precipitation Layer" />
                    </li>
                    <li>
                      <Bi as="strong" es="Polígono de salida" en="Outlet Polygon" />
                    </li>
                    <li>
                      <Bi as="strong" es="Dirección del flujo" en="Flow Direction" />
                    </li>
                  </ol>
                </div>
                <div id="sidebar-design" style={{ background: "#ffffff", border: "1px solid var(--line)", borderRadius: "8px", padding: "22px", marginBottom: "25px" }}>
                  <Bi as="h4" es="Barra lateral del proyecto" en="Project sidebar" style={{ fontSize: "1.2rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "12px" }} />
                  <Bi as="p" es="Todas las capas del proyecto se gestionan desde la <strong>barra lateral</strong>, situada a la izquierda del mapa. Está organizada en <strong>secciones desplegables</strong> (botón ▾ para plegar/desplegar) y cada sección se divide en <strong>grupos de capas</strong>. El botón <strong>▶️</strong> de la cabecera de cada sección permite lanzar la simulación." en="All project layers are managed from the <strong>sidebar</strong> on the left of the map. It is organised into <strong>collapsible sections</strong> (▾ button to fold/unfold) and each section is split into <strong>layer groups</strong>. The <strong>▶️</strong> button in each section header launches the simulation." style={{ color: "var(--muted)", marginBottom: "16px", fontSize: "0.95rem" }} />
                  <Bi as="h5" es="Grupos de capas" en="Layer groups" style={{ fontSize: "1.05rem", color: "var(--blue-deep)", margin: "0 0 8px" }} />
                  <ul style={{ color: "var(--ink)", lineHeight: "1.6", paddingLeft: "20px", fontSize: "0.9rem", marginBottom: "16px" }}>
                    <li style={{ marginBottom: "8px" }}>
                      <Bi as="strong" es="🔲 Dominio" en="🔲 Domain" />{" "}
                      <Bi as="span" es="Rectángulo o polígono que delimita la zona de cálculo (un único <code>.geojson</code>)." en="Rectangle or polygon bounding the calculation area (a single <code>.geojson</code>)." />
                    </li>
                    <li style={{ marginBottom: "8px" }}>
                      <Bi as="strong" es="🗺️ Rásteres" en="🗺️ Rasters" />{" "}
                      <Bi as="span" es="MDT, MDT recortado al dominio (solo informativo), Rugosidad, LUcoeff y FVCover. Admiten <code>.asc</code>, <code>.tif/.tiff</code> y <code>.input</code>." en="DTM, DTM clipped to the domain (informative only), Roughness, LUcoeff and FVCover. Accept <code>.asc</code>, <code>.tif/.tiff</code> and <code>.input</code>." />
                    </li>
                    <li style={{ marginBottom: "8px" }}>
                      <Bi as="strong" es="👁️ Observación" en="👁️ Observation" />{" "}
                      <Bi as="span" es="Puntos y secciones de control (<code>.geojson</code>)." en="Control points and sections (<code>.geojson</code>)." />
                    </li>
                    <li style={{ marginBottom: "8px" }}>
                      <Bi as="strong" es="🌧️ Precipitación" en="🌧️ Precipitation" />{" "}
                      <Bi as="span" es="Lluvia en <code>.nc</code>, <code>.txt</code> o <code>.input</code>." en="Rainfall as <code>.nc</code>, <code>.txt</code> or <code>.input</code>." />
                    </li>
                    <li style={{ marginBottom: "8px" }}>
                      <Bi as="strong" es="📐 Condiciones de contorno" en="📐 Boundary conditions" />{" "}
                      <Bi as="span" es="Polígono de entrada, Polígono de salida y Dirección del flujo." en="Inlet polygon, Outlet polygon and Flow direction." />
                    </li>
                    <li style={{ marginBottom: "8px" }}>
                      <Bi as="strong" es="📊 Resultados" en="📊 Results" />{" "}
                      <Bi as="span" es="Capas generadas por las simulaciones." en="Layers generated by the simulations." />
                    </li>
                  </ul>
                  <Bi as="p" es="Cada grupo (y cada tipo de capa dentro de él) incluye tres botones: <strong>➕</strong> crear/obtener la capa en la plataforma (descargar el MDT, dibujar una geometría, generar la lluvia…), <strong>📤</strong> subir un archivo local directamente a ese tipo de capa y <strong>✔</strong> indicar si el requisito está cubierto." en="Each group (and each layer type inside it) has three buttons: <strong>➕</strong> create/obtain the layer on the platform (download the DTM, draw a geometry, generate rainfall…), <strong>📤</strong> upload a local file straight into that layer type and <strong>✔</strong> shows whether the requirement is fulfilled." style={{ color: "var(--ink)", fontSize: "0.92rem", marginBottom: "16px" }} />
                  <Bi as="h5" es="Controles de cada capa" en="Per-layer controls" style={{ fontSize: "1.05rem", color: "var(--blue-deep)", margin: "0 0 8px" }} />
                  <ul style={{ color: "var(--ink)", lineHeight: "1.6", paddingLeft: "20px", fontSize: "0.9rem", marginBottom: "16px" }}>
                    <li style={{ marginBottom: "8px" }}>
                      <Bi as="strong" es="Leyenda / ⚙️" en="Legend / ⚙️" />{" "}
                      <Bi as="span" es="En los ráster, el recuadro de color abre el estilo de la capa; en los vectoriales, el botón ⚙️ abre su simbología." en="On rasters, the colour swatch opens the layer style; on vectors, the ⚙️ button opens its symbology." />
                    </li>
                    <li style={{ marginBottom: "8px" }}>
                      <Bi as="strong" es="Casilla de visibilidad" en="Visibility checkbox" />{" "}
                      <Bi as="span" es="Muestra u oculta la capa en el mapa." en="Shows or hides the layer on the map." />
                    </li>
                    <li style={{ marginBottom: "8px" }}>
                      <Bi as="strong" es="Nombre" en="Name" />{" "}
                      <Bi as="span" es="Haga clic sobre el nombre para renombrar la capa en línea." en="Click the name to rename the layer inline." />
                    </li>
                    <li style={{ marginBottom: "8px" }}>
                      <Bi as="strong" es="📈" en="📈" />{" "}
                      <Bi as="span" es="En precipitación, abre la serie temporal de lluvia." en="On rainfall layers, opens the rainfall time series." />
                    </li>
                    <li style={{ marginBottom: "8px" }}>
                      <Bi as="strong" es="⬇️ y ✕" en="⬇️ and ✕" />{" "}
                      <Bi as="span" es="Descargan o eliminan la capa del proyecto." en="Download or remove the layer from the project." />
                    </li>
                  </ul>
                  <Bi as="p" es="Los archivos <code>.input</code> se muestran con la etiqueta <em>«Archivo no visualizable»</em>: se usan en la simulación pero no se dibujan en el mapa." en="<code>.input</code> files show the <em>“Non-viewable file”</em> badge: they are used by the simulation but not drawn on the map." style={{ color: "var(--muted)", fontSize: "0.88rem", marginBottom: "16px" }} />
                  <Bi as="h5" es="Agrupar capas" en="Grouping layers" style={{ fontSize: "1.05rem", color: "var(--blue-deep)", margin: "0 0 8px" }} />
                  <Bi as="p" es="Arrastre una capa sobre otra para crear un <strong>grupo</strong>. Cada grupo puede plegarse, mostrarse/ocultarse en bloque, renombrarse y deshacerse (desagrupar) sin eliminar las capas." en="Drag one layer onto another to create a <strong>group</strong>. A group can be collapsed, shown/hidden as a block, renamed and ungrouped without deleting its layers." style={{ color: "var(--ink)", fontSize: "0.92rem", margin: "0 0 16px" }} />
                  <Bi as="h5" es="Botones del pie de la barra" en="Sidebar footer buttons" style={{ fontSize: "1.05rem", color: "var(--blue-deep)", margin: "0 0 8px" }} />
                  <Bi as="p" es="<strong>📤 Subir</strong> abre una matriz «archivo × sección» para asignar varios archivos a la vez; <strong>💾 Guardar</strong> almacena el estado del proyecto." en="<strong>📤 Upload</strong> opens a “file × section” matrix to assign several files at once; <strong>💾 Save</strong> stores the project state." style={{ color: "var(--ink)", fontSize: "0.92rem", margin: "0 0 16px" }} />
                  <Bi as="h5" es="Botones sobre el mapa" en="Map buttons" style={{ fontSize: "1.05rem", color: "var(--blue-deep)", margin: "0 0 8px" }} />
                  <Bi as="p" es="Junto a la barra lateral hay accesos rápidos: <strong>🌍</strong> catálogo, <strong>📚</strong> capas, <strong>⚙️</strong> ajustes, <strong>🪚</strong> discretizar el dominio (por cotas o Thiessen), <strong>🌧️</strong> método racional y <strong>💬</strong> asistente." en="Next to the sidebar there are shortcuts: <strong>🌍</strong> catalogue, <strong>📚</strong> layers, <strong>⚙️</strong> settings, <strong>🪚</strong> domain discretisation (by elevation bands or Thiessen), <strong>🌧️</strong> rational method and <strong>💬</strong> assistant." style={{ color: "var(--ink)", fontSize: "0.92rem", margin: "0" }} />
                </div>
                <div style={{ background: "rgba(18, 35, 47, 0.04)", borderLeft: "4px solid var(--ink-soft)", padding: "18px 20px", borderRadius: "0 8px 8px 0", marginBottom: "20px" }}>
                  <Bi as="strong" es="📤 Subida directa de archivos locales" en="📤 Direct Local File Upload" style={{ color: "var(--ink)", display: "block", marginBottom: "6px", fontSize: "0.98rem" }} />
                  <Bi as="p" es="Dispone del botón <strong>📤</strong> de cada tipo de capa (y de <strong>📤 Subir</strong> al pie de la barra, con matriz archivo × sección) para cargar archivos guardados en su ordenador. El archivo se valida según el tipo de capa (formato, geometría) y, si es correcto, se integra en el mapa." en="Use the <strong>📤</strong> button of each layer type (or <strong>📤 Upload</strong> at the sidebar footer, with its file × section matrix) to load files stored on your computer. The file is validated against the layer type (format, geometry) and, if valid, added to the map." style={{ color: "var(--muted)", margin: "0", fontSize: "0.9rem" }} />
                </div>
                <div style={{ background: "rgba(239, 140, 100, 0.08)", borderLeft: "4px solid var(--orange)", padding: "18px 20px", borderRadius: "0 8px 8px 0", marginBottom: "35px" }}>
                  <Bi as="strong" es="💾 Guardado obligatorio de la sesión" en="💾 Mandatory Session Saving" style={{ color: "#c85324", display: "block", marginBottom: "6px", fontSize: "0.98rem" }} />
                  <Bi as="p" es="Cada vez que añada o modifique una capa en la plataforma, recuerde pulsar la opción <strong>💾 Guardar</strong>. De lo contrario, los cambios y capas vinculadas no se almacenarán y se perderán al cerrar o recargar la aplicación." en="Every time a layer is added or updated in the workspace, ensure you click <strong>💾 Save</strong>. Otherwise, newly attached layers and session changes will not be stored and will be lost upon closing or refreshing the application." style={{ color: "var(--ink)", margin: "0", fontSize: "0.9rem" }} />
                </div>
                <Bi as="p" es="<strong>Empiece siempre por el dominio (apartado 2.0)</strong>. A continuación se detalla el procedimiento técnico para añadir y configurar cada una de las capas disponibles en la plataforma:" en="<strong>Always start with the domain (section 2.0)</strong>. The technical procedure for adding and configuring each of the layers available on the platform is detailed below:" style={{ color: "var(--muted)", marginBottom: "30px" }} />
                <div id="layer-domain" style={{ marginBottom: "45px", background: "#ffffff", border: "1px solid var(--line)", borderRadius: "8px", padding: "25px" }}>
                  <Bi as="h4" es="2.0 Primer paso: obtener el dominio" en="2.0 First step: obtain the domain" style={{ fontSize: "1.2rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "12px" }} />
                  <Bi as="p" es="Antes de añadir el resto de capas, <strong>defina el dominio de cálculo</strong>: la zona de estudio sobre la que se descargarán los datos y se ejecutará la simulación. El dominio puede ser un <strong>rectángulo</strong> o un <strong>polígono</strong> de forma libre." en="Before adding any other layer, <strong>define the calculation domain</strong>: the study area for which data will be retrieved and the simulation run. The domain can be a <strong>rectangle</strong> or a free-form <strong>polygon</strong>." style={{ color: "var(--muted)", marginBottom: "18px", fontSize: "0.95rem" }} />
                  <ol style={{ color: "var(--ink)", lineHeight: "1.7", marginBottom: "20px", paddingLeft: "20px", fontSize: "0.92rem" }}>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Crear el dominio:" en="Create the domain:" />
                      <Bi as="span" es=" En la barra lateral, grupo <strong>🔲 Dominio</strong>, pulse <strong>➕</strong> y elija <strong>Rectángulo</strong> o <strong>Polígono</strong>; dibújelo sobre el mapa." en=" In the sidebar, <strong>🔲 Domain</strong> group, click <strong>➕</strong> and choose <strong>Rectangle</strong> or <strong>Polygon</strong>; draw it on the map." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="O subir uno existente:" en="Or upload an existing one:" />
                      <Bi as="span" es=" Pulse <strong>📤</strong> y seleccione un único archivo <code>.geojson</code> con un rectángulo o un polígono." en=" Click <strong>📤</strong> and select a single <code>.geojson</code> file containing a rectangle or a polygon." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Comprobar:" en="Check:" />
                      <Bi as="span" es=" El indicador <strong>✔</strong> del grupo se activa cuando el dominio está definido. Con él podrá obtener después el MDT y la precipitación de la misma zona (apartados 2.1 y 2.2)." en=" The group's <strong>✔</strong> indicator turns on once the domain is defined. You can then obtain the DTM and precipitation for the same area (sections 2.1 and 2.2)." />
                    </li>
                  </ol>
                </div>
                <div id="layer-mdt" style={{ marginBottom: "45px", background: "#ffffff", border: "1px solid var(--line)", borderRadius: "8px", padding: "25px" }}>
                  <Bi as="h4" es="2.1 Capa Ráster o Modelo Digital del Terreno (MDT) *" en="2.1 Raster Layer or Digital Terrain Model (DTM) *" style={{ fontSize: "1.2rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }} />
                  <Bi as="p" es="El Modelo Digital del Terreno (MDT) define la topografía sobre la cual se ejecutará la simulación hidrodinámica 2D. Para generar y descargar la capa ráster directamente en el visor WebGIS, siga estos pasos:" en="The Digital Terrain Model (DTM) defines the topography over which the 2D hydrodynamic simulation will run. To generate and retrieve the raster layer directly in the WebGIS viewer, follow these steps:" style={{ color: "var(--muted)", marginBottom: "18px", fontSize: "0.95rem" }} />
                  <ol style={{ color: "var(--ink)", lineHeight: "1.7", marginBottom: "20px", paddingLeft: "20px", fontSize: "0.92rem" }}>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Navegación en el menú:" en="Menu navigation:" />
                      <Bi as="span" es=" En la barra lateral, grupo <strong>🗺️ Rásteres</strong>, pulse <strong>➕</strong> junto a <strong>MDT</strong>." en=" In the sidebar, <strong>🗺️ Rasters</strong> group, click <strong>➕</strong> next to <strong>DTM</strong>." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Configuración de parámetros:" en="Parameter configuration:" />
                      <Bi as="span" es=" Complete los siguientes campos obligatorios en el formulario desplegado:" en=" Fill in the following mandatory fields in the form displayed:" />
                      <ul style={{ marginTop: "8px", marginBottom: "8px", paddingLeft: "20px", color: "var(--muted)" }}>
                        <li>
                          <Bi as="strong" es="Nombre de la capa:" en="Layer name:" style={{ color: "var(--ink)" }} />{" "}
                          <Bi as="span" es="Asigne un identificador descriptivo para la capa dentro del proyecto." en="Assign a descriptive identifier for the layer within the project." />
                        </li>
                        <li>
                          <Bi as="strong" es="Resolución espacial:" en="Spatial resolution:" style={{ color: "var(--ink)" }} />{" "}
                          <Bi as="span" es="Seleccione entre <strong>25 metros</strong> o <strong>5 metros</strong> según el nivel de detalle topográfico requerido." en="Select between <strong>25 meters</strong> or <strong>5 meters</strong> depending on the required topographical detail level." />
                        </li>
                        <li>
                          <Bi as="strong" es="Formato de salida:" en="Output format:" style={{ color: "var(--ink)" }} />{" "}
                          <Bi as="span" es="Elija entre <strong>GeoTIFF</strong> (opción recomendada para alto rendimiento) o <strong>JSON</strong>." en="Choose between <strong>GeoTIFF</strong> (recommended option for high performance) or <strong>JSON</strong>." />
                        </li>
                      </ul>
                    </li>
                    <figure className="image-container" style={{ margin: "20px 0", textAlign: "center" }}>
                      <img src="/images/user-guide/PE/PE_Capa_DEM_parametros.png" alt="Formulario de configuración de la capa DEM / MDT" style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "8px", border: "1px solid var(--line)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
                      <Bi as="figcaption" es="Figura 2.1: Campos de configuración para la generación de la capa DEM" en="Figure 2.1: Configuration fields for DEM layer generation" style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "8px", fontStyle: "italic" }} />
                    </figure>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Delimitación de la zona de estudio:" en="Study area bounding:" />
                      <Bi as="span" es=" Dibuje un rectángulo directamente sobre el visor interactivo del mapa para definir la extensión espacial del MDT." en=" Draw a rectangle directly on the interactive map viewer to define the spatial extent of the DTM." />
                    </li>
                  </ol>
                  <div style={{ background: "rgba(18, 35, 47, 0.04)", borderLeft: "3px solid var(--blue-deep)", padding: "12px 16px", borderRadius: "0 6px 6px 0", marginTop: "15px" }}>
                    <Bi as="strong" es="📏 Restricción de dimensión espacial" en="📏 Spatial Dimension Constraint" style={{ color: "var(--blue-deep)", fontSize: "0.88rem", display: "block", marginBottom: "4px" }} />
                    <Bi as="p" es="Tenga en cuenta que el rectángulo dibujado sobre el mapa tiene un <strong>ancho máximo permitido de 12.500 metros</strong> para garantizar la eficiencia en la descarga y en el procesado numérico posterior." en="Note that the rectangle drawn on the map has a <strong>maximum allowed width of 12,500 meters</strong> to ensure efficiency during data retrieval and subsequent numerical processing." style={{ color: "var(--muted)", margin: "0", fontSize: "0.88rem" }} />
                  </div>
                  <Bi as="p" es="Una vez dibujado el rectángulo y confirmada la selección, el Modelo Digital del Terreno se procesará y se <strong>añadirá automáticamente</strong> como capa activa a su proyecto." en="Once the rectangle is drawn and the selection is confirmed, the Digital Terrain Model will be processed and <strong>automatically added</strong> as an active layer to your project." style={{ color: "var(--ink)", marginTop: "18px", marginBottom: "0", fontSize: "0.92rem" }} />
                </div>
                <div id="layer-precip" style={{ marginBottom: "45px", background: "#ffffff", border: "1px solid var(--line)", borderRadius: "8px", padding: "25px" }}>
                  <Bi as="h4" es="2.2 Capa de precipitación *" en="2.2 Precipitation Layer *" style={{ fontSize: "1.2rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "12px" }} />
                  <Bi as="p" es="La capa de precipitación define la entrada hídrica (hietograma espacio-temporal) necesaria para simular la escorrentía superficial. Para incorporar estos datos, en el grupo <strong>🌧️ Precipitación</strong> de la barra lateral pulse <strong>➕</strong> (o suba un <code>.nc</code>/<code>.txt</code> con <strong>📤</strong>). La plataforma permite elegir entre dos proveedores meteorológicos principales:" en="The precipitation layer defines the spatial and temporal rainfall input needed to simulate surface runoff. To add this data, in the <strong>🌧️ Precipitation</strong> group of the sidebar click <strong>➕</strong> (or upload a <code>.nc</code>/<code>.txt</code> with <strong>📤</strong>). The platform offers two primary meteorological providers:" style={{ color: "var(--muted)", marginBottom: "20px", fontSize: "0.95rem" }} />
                  <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "6px", padding: "20px", marginBottom: "25px" }}>
                    <Bi as="h5" es="A) 📊 AEMET (Predicción a corto plazo)" en="A) 📊 AEMET (Short-term Forecast)" style={{ fontSize: "1.05rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "10px" }} />
                    <Bi as="p" es="Permite obtener datos operativos de predicción meteorológica de la Agencia Estatal de Meteorología para un horizonte de <strong>hasta un máximo de 48 horas</strong>." en="Retrieves operational meteorological forecast data from the Spanish State Meteorological Agency for a horizon of <strong>up to 48 hours</strong>." style={{ color: "var(--muted)", marginBottom: "12px", fontSize: "0.9rem" }} />
                    <ol style={{ color: "var(--ink)", lineHeight: "1.6", marginBottom: "15px", paddingLeft: "20px", fontSize: "0.9rem" }}>
                      <li>
                        <Bi as="strong" es="Extensión:" en="Extent:" />{" "}
                        <Bi as="span" es="Seleccione la extensión espacial utilizando uno de los MDT añadidos previamente al proyecto." en="Select the spatial extent using one of the DTMs previously added to the project." />
                      </li>
                      <li>
                        <Bi as="strong" es="Rango temporal:" en="Time range:" />{" "}
                        <Bi as="span" es="Configure la <strong>Hora de inicio</strong> y la <strong>Hora de fin</strong> dentro del rango de predicción disponible." en="Set the <strong>Start time</strong> and <strong>End time</strong> within the available forecast window." />
                      </li>
                      <li>
                        <Bi as="strong" es="Actualización de datos:" en="Data refresh:" />{" "}
                        <Bi as="span" es="Haga clic en <strong>Actualizar la caché</strong> para forzar la descarga de la información meteorológica más reciente de la red." en="Click <strong>Refresh cache</strong> to pull the latest meteorological data available from the network." />
                      </li>
                    </ol>
                    <figure className="image-container" style={{ margin: "15px 0", textAlign: "center" }}>
                      <img src="/images/user-guide/PE/PE_Capa_Lluvia_AEMET.png" alt="Configuración de capa de precipitación AEMET" style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "8px", border: "1px solid var(--line)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
                      <Bi as="figcaption" es="Figura 2.2a: Panel de parámetros de precipitación mediante AEMET" en="Figure 2.2a: Precipitation parameter panel using AEMET" style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "8px", fontStyle: "italic" }} />
                    </figure>
                  </div>
                  <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "6px", padding: "20px", marginBottom: "25px" }}>
                    <Bi as="h5" es="B) 🌍 ERA5-Land (Reanálisis histórico)" en="B) 🌍 ERA5-Land (Historical Reanalysis)" style={{ fontSize: "1.05rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "10px" }} />
                    <Bi as="p" es="Permite acceder a series temporales históricas de precipitación reanalizada desde el año <strong>1950 hasta la actualidad</strong>, ideal para la reconstrucción de eventos pasados." en="Provides access to historical reanalysis precipitation time series from <strong>1950 to the present day</strong>, suitable for hindcasting past events." style={{ color: "var(--muted)", marginBottom: "12px", fontSize: "0.9rem" }} />
                    <ol style={{ color: "var(--ink)", lineHeight: "1.6", marginBottom: "15px", paddingLeft: "20px", fontSize: "0.9rem" }}>
                      <li>
                        <Bi as="strong" es="Extensión:" en="Extent:" />{" "}
                        <Bi as="span" es="Seleccione como referencia espacial uno de los MDT cargados en el proyecto." en="Select one of the project's loaded DTMs as spatial reference." />
                      </li>
                      <li>
                        <Bi as="strong" es="Configuración de fechas y horas:" en="Date and time setup:" />{" "}
                        <Bi as="span" es="Defina con precisión los campos de <strong>Fecha inicio</strong>, <strong>Hora inicio</strong>, <strong>Fecha fin</strong> y <strong>Hora fin</strong>." en="Precisely set the <strong>Start date</strong>, <strong>Start time</strong>, <strong>End date</strong>, and <strong>End time</strong> fields." />
                      </li>
                    </ol>
                    <figure className="image-container" style={{ margin: "15px 0", textAlign: "center" }}>
                      <img src="/images/user-guide/PE/PE_Capa_Lluvia_ERA5.png" alt="Configuración de capa de precipitación ERA5-Land" style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "8px", border: "1px solid var(--line)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
                      <Bi as="figcaption" es="Figura 2.2b: Panel de parámetros de precipitación mediante ERA5-Land" en="Figure 2.2b: Precipitation parameter panel using ERA5-Land" style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "8px", fontStyle: "italic" }} />
                    </figure>
                  </div>
                  <Bi as="p" es="Tras definir los parámetros en AEMET o ERA5-Land, haga clic en la opción <strong>Generar el NetCDF</strong>. El archivo se procesará y se <strong>añadirá automáticamente</strong> como capa de escorrentía al proyecto." en="After setting the parameters in AEMET or ERA5-Land, click <strong>Generate NetCDF</strong>. The file will be processed and <strong>automatically added</strong> as a runoff layer to the project." style={{ color: "var(--ink)", fontSize: "0.92rem", marginBottom: "15px" }} />
                  <div style={{ background: "rgba(47, 128, 237, 0.05)", border: "1px solid rgba(47, 128, 237, 0.2)", borderRadius: "6px", padding: "14px 18px" }}>
                    <Bi as="strong" es="ℹ️ ¿Qué es un archivo NetCDF (.nc)?" en="ℹ️ What is a NetCDF (.nc) file?" style={{ color: "var(--blue-deep)", fontSize: "0.88rem", display: "block", marginBottom: "4px" }} />
                    <Bi as="p" es="Un archivo <strong>NetCDF</strong> (Network Common Data Form) es un formato estandarizado e independiente para el intercambio de datos científicos multidimensionales. En GEORISK almacena datos espacio-temporales (mallas geográficas con evolución temporal de intensidad de lluvia) que alimentan directamente al motor de simulación." en="A <strong>NetCDF</strong> (Network Common Data Form) file is a standardized, machine-independent format for sharing multidimensional scientific data. In GEORISK, it stores spatiotemporal data (geographic grids with time-evolving rainfall intensity) that directly feed the numerical simulation solver." style={{ color: "var(--muted)", margin: "0", fontSize: "0.85rem", lineHeight: "1.5" }} />
                  </div>
                </div>
                <div id="layer-outlet" style={{ marginBottom: "45px", background: "#ffffff", border: "1px solid var(--line)", borderRadius: "8px", padding: "25px" }}>
                  <Bi as="h4" es="2.3 Polígono de salida *" en="2.3 Outlet Polygon *" style={{ fontSize: "1.2rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "12px" }} />
                  <Bi as="p" es="El Polígono de salida define la zona límite o contorno abierto por donde la masa de agua abandona el dominio de cálculo durante la simulación. Para incorporar esta geometría vectorizada, siga los pasos descritos a continuación:" en="The Outlet Polygon defines the boundary zone or open edge where water mass exits the computational domain during the simulation. To add this vector geometry, follow the steps below:" style={{ color: "var(--muted)", marginBottom: "18px", fontSize: "0.95rem" }} />
                  <ol style={{ color: "var(--ink)", lineHeight: "1.7", marginBottom: "20px", paddingLeft: "20px", fontSize: "0.92rem" }}>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Selección de la herramienta:" en="Tool selection:" />
                      <Bi as="span" es=" En la barra lateral, grupo <strong>📐 Condiciones de contorno</strong>, pulse <strong>➕</strong> junto a <strong>Polígono de salida</strong> (o suba un <code>.geojson</code> con <strong>📤</strong>)." en=" In the sidebar, <strong>📐 Boundary conditions</strong> group, click <strong>➕</strong> next to <strong>Outlet polygon</strong> (or upload a <code>.geojson</code> with <strong>📤</strong>)." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Trazado sobre el visor:" en="Map canvas drawing:" />
                      <Bi as="span" es=" Haga clic en el mapa para añadir vértices de forma secuencial delimitando el área deseada. Continúe añadiendo puntos hasta unir el vértice final con el inicial para <strong>cerrar el polígono</strong>." en=" Click on the map canvas to place vertices sequentially, bounding the desired area. Continue adding points until connecting the last vertex to the first to <strong>close the polygon</strong>." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Identificación y registro:" en="Naming and saving:" />
                      <Bi as="span" es=" Asigne un <strong>Nombre de la capa</strong> en el cuadro emergente y haga clic en <strong>💾 Guardar</strong> para registrar la geometría en el proyecto." en=" Enter a <strong>Layer Name</strong> in the popup form and click <strong>💾 Save</strong> to store the geometry in the project workspace." />
                    </li>
                  </ol>
                  <div style={{ background: "rgba(47, 128, 237, 0.05)", border: "1px solid rgba(47, 128, 237, 0.2)", borderRadius: "6px", padding: "14px 18px", marginTop: "20px" }}>
                    <Bi as="strong" es="💡 Importancia técnica del Polígono de Salida" en="💡 Technical Role of the Outlet Polygon" style={{ color: "var(--blue-deep)", fontSize: "0.88rem", display: "block", marginBottom: "4px" }} />
                    <Bi as="p" es="En la simulación numérica de flujo en lámina libre, el <strong>Polígono de salida</strong> establece la condición de contorno de salida libre (desagüe transitorio). Permite que el agua evacúe el dominio de cálculo sin generar reflejos numéricos o acumulaciones artificiales no físicas en los bordes de la malla, garantizando el cumplimiento del principio de conservación de masa." en="In free-surface numerical flow simulation, the <strong>Outlet Polygon</strong> defines the free-outflow boundary condition (transient drainage). It allows water to exit the computational domain without causing numerical wave reflections or non-physical artificial ponding at grid boundaries, ensuring strict mass conservation compliance." style={{ color: "var(--muted)", margin: "0", fontSize: "0.85rem", lineHeight: "1.5" }} />
                  </div>
                </div>
                <div id="layer-flow-dir" style={{ marginBottom: "45px", background: "#ffffff", border: "1px solid var(--line)", borderRadius: "8px", padding: "25px" }}>
                  <Bi as="h4" es="2.4 Dirección del flujo *" en="2.4 Flow Direction *" style={{ fontSize: "1.2rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "12px" }} />
                  <Bi as="p" es="La capa de Dirección del flujo establece la orientación geométrica con la que el agua atraviesa la sección de salida del dominio. Para definir esta sección lineal, siga los siguientes pasos:" en="The Flow Direction layer establishes the geometric orientation with which water crosses the outflow boundary of the domain. To define this line section, follow these steps:" style={{ color: "var(--muted)", marginBottom: "18px", fontSize: "0.95rem" }} />
                  <ol style={{ color: "var(--ink)", lineHeight: "1.7", marginBottom: "20px", paddingLeft: "20px", fontSize: "0.92rem" }}>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Selección de la herramienta:" en="Tool selection:" />
                      <Bi as="span" es=" En la barra lateral, grupo <strong>📐 Condiciones de contorno</strong>, pulse <strong>➕</strong> junto a <strong>Dirección del flujo</strong> (o suba un <code>.geojson</code> con <strong>📤</strong>)." en=" In the sidebar, <strong>📐 Boundary conditions</strong> group, click <strong>➕</strong> next to <strong>Flow direction</strong> (or upload a <code>.geojson</code> with <strong>📤</strong>)." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Trazado del segmento sobre el visor:" en="Drawing the segment on the canvas:" />
                      <Bi as="span" es=" Dibuje una recta sobre el mapa haciendo clic en el punto de inicio y final para delimitar el segmento por donde se evacuará el caudal." en=" Draw a straight line on the map by clicking the start and end points to bound the segment through which discharge will exit." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Identificación y guardado:" en="Naming and saving:" />
                      <Bi as="span" es=" Asigne el <strong>Nombre de la capa</strong> en el cuadro emergente y pulse <strong>💾 Guardar</strong> para registrar la capa en el proyecto." en=" Enter the <strong>Layer Name</strong> in the popup modal and click <strong>💾 Save</strong> to register the layer in the project workspace." />
                    </li>
                  </ol>
                  <div style={{ background: "rgba(47, 128, 237, 0.05)", border: "1px solid rgba(47, 128, 237, 0.2)", borderRadius: "6px", padding: "14px 18px", marginTop: "20px" }}>
                    <Bi as="strong" es="💡 Explicación técnica: Función del vector de dirección" en="💡 Technical Explanation: Role of the Direction Vector" style={{ color: "var(--blue-deep)", fontSize: "0.88rem", display: "block", marginBottom: "4px" }} />
                    <Bi as="p" es="En los modelos 2D basados en ecuaciones de aguas someras (Shallow Water Equations), la línea de <strong>Dirección del flujo</strong> fija la normal geométrica a la frontera de salida. Esto orienta los vectores de velocidad $\\vec{u} = (u, v)$ en la frontera libre, garantizando que el gradiente del flujo no genere desestabilizaciones numéricas en las celdas adyacentes al contorno." en="In 2D models based on Shallow Water Equations, the <strong>Flow Direction</strong> line defines the geometric normal to the outlet boundary. This aligns the velocity vectors $\\vec{u} = (u, v)$ at the open boundary, preventing numerical instabilities in grid cells adjacent to the border." style={{ color: "var(--muted)", margin: "0", fontSize: "0.85rem", lineHeight: "1.5" }} />
                  </div>
                </div>
                <div id="layer-obs-section" style={{ marginBottom: "45px", background: "#ffffff", border: "1px solid var(--line)", borderRadius: "8px", padding: "25px" }}>
                  <Bi as="h4" es="2.5 Sección de observación (Opcional)" en="2.5 Observation Section (Optional)" style={{ fontSize: "1.2rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "12px" }} />
                  <Bi as="p" es="Las secciones de observación permiten monitorizar variables hidráulicas transversales a lo largo de un segmento lineal durante la simulación. Para añadir una sección de control, siga estos pasos:" en="Observation sections allow monitoring cross-sectional hydraulic variables along a line segment during the simulation. To add a control section, follow these steps:" style={{ color: "var(--muted)", marginBottom: "18px", fontSize: "0.95rem" }} />
                  <ol style={{ color: "var(--ink)", lineHeight: "1.7", marginBottom: "20px", paddingLeft: "20px", fontSize: "0.92rem" }}>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Selección de la herramienta:" en="Tool selection:" />
                      <Bi as="span" es=" En la barra lateral, grupo <strong>👁️ Observación</strong>, pulse <strong>➕</strong> y elija el tipo <strong>Sección</strong>." en=" In the sidebar, <strong>👁️ Observation</strong> group, click <strong>➕</strong> and choose <strong>Section</strong>." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Trazado de la recta en el mapa:" en="Drawing the line on the map:" />
                      <Bi as="span" es=" Dibuje la recta sobre el cauce, valle o zona de interés haciendo clic en el punto de inicio y final para definir el perfil de control." en=" Draw the line across the channel, valley, or area of interest by clicking the start and end points to define the control profile." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Registro de la capa:" en="Registering the layer:" />
                      <Bi as="span" es=" Ingrese el <strong>Nombre de la capa</strong> en el cuadro emergente y pulse <strong>💾 Guardar</strong> para registrar la sección." en=" Enter the <strong>Layer Name</strong> in the popup form and click <strong>💾 Save</strong> to register the section." />
                    </li>
                  </ol>
                  <div style={{ background: "rgba(47, 128, 237, 0.05)", border: "1px solid rgba(47, 128, 237, 0.2)", borderRadius: "6px", padding: "14px 18px", marginTop: "20px" }}>
                    <Bi as="strong" es="💡 Explicación técnica: ¿Qué es una Sección de observación?" en="💡 Technical Explanation: What is an Observation Section?" style={{ color: "var(--blue-deep)", fontSize: "0.88rem", display: "block", marginBottom: "4px" }} />
                    <Bi as="p" es="Una <strong>Sección de observación</strong> actúa como una estación de aforo virtual en el modelo 2D. A lo largo de esta línea, el solver integra en cada paso de tiempo la velocidad y el calado para obtener el <strong>hidrograma de caudal pasante $Q(t) = \\int (\\vec{u} \\cdot \\vec{n}) h \\, dl$</strong>, además de permitir la extracción de perfiles transversales de elevación de lámina de agua y velocidad del flujo." en="An <strong>Observation Section</strong> acts as a virtual gaging station within the 2D model. Along this line, the solver integrates flow velocity and water depth at each time step to compute the <strong>discharge hydrograph $Q(t) = \\int (\\vec{u} \\cdot \\vec{n}) h \\, dl$</strong>, as well as enabling the extraction of cross-sectional water surface elevation and flow velocity profiles." style={{ color: "var(--muted)", margin: "0", fontSize: "0.85rem", lineHeight: "1.5" }} />
                  </div>
                </div>
                <div id="layer-obs-point" style={{ marginBottom: "45px", background: "#ffffff", border: "1px solid var(--line)", borderRadius: "8px", padding: "25px" }}>
                  <Bi as="h4" es="2.6 Punto de observación (Opcional)" en="2.6 Observation Point (Optional)" style={{ fontSize: "1.2rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "12px" }} />
                  <Bi as="p" es="Los puntos de observación permiten extraer series temporales detalladas de las variables del flujo en coordenadas espaciales $(x, y)$ específicas. Para añadir un punto de control, siga estos pasos:" en="Observation points allow extracting detailed time series of flow variables at specific spatial coordinates $(x, y)$. To add a control point, follow these steps:" style={{ color: "var(--muted)", marginBottom: "18px", fontSize: "0.95rem" }} />
                  <ol style={{ color: "var(--ink)", lineHeight: "1.7", marginBottom: "20px", paddingLeft: "20px", fontSize: "0.92rem" }}>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Selección de la herramienta:" en="Tool selection:" />
                      <Bi as="span" es=" En la barra lateral, grupo <strong>👁️ Observación</strong>, pulse <strong>➕</strong> y elija <strong>Punto</strong>." en=" In the sidebar, <strong>👁️ Observation</strong> group, click <strong>➕</strong> and choose <strong>Point</strong>." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Digitalización en el mapa:" en="Digitizing on the map:" />
                      <Bi as="span" es=" Haga clic directamente sobre la localización exacta del visor (por ejemplo, una estación pluviométrica, infraestructuras críticas o puntos de control urbano) para colocar el punto de observación." en=" Click directly on the exact map location (such as a gaging station, critical infrastructure, or urban control point) to place the observation point." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Identificación y registro:" en="Naming and saving:" />
                      <Bi as="span" es=" Ingrese el <strong>Nombre de la capa</strong> en el formulario emergente y pulse <strong>💾 Guardar</strong> para consolidar la entidad en el proyecto." en=" Enter the <strong>Layer Name</strong> in the popup form and click <strong>💾 Save</strong> to consolidate the entity in the project." />
                    </li>
                  </ol>
                  <div style={{ background: "rgba(47, 128, 237, 0.05)", border: "1px solid rgba(47, 128, 237, 0.2)", borderRadius: "6px", padding: "14px 18px", marginTop: "20px" }}>
                    <Bi as="strong" es="💡 Explicación técnica: ¿Qué representa un Punto de observación?" en="💡 Technical Explanation: What does an Observation Point represent?" style={{ color: "var(--blue-deep)", fontSize: "0.88rem", display: "block", marginBottom: "4px" }} />
                    <Bi as="p" es="Un <strong>Punto de observación</strong> simula un sensor puntual o limnímetro virtual dentro de la malla de cálculo. Permite registrar a una frecuencia de muestreo configurable la evolución temporal del calado de agua $h(t)$, el módulo de velocidad $|\\vec{u}|(t)$, la cota de la lámina de agua $z_w(t)$ e intensidad de lluvia local. Resulta esencial para calibrar el modelo frente a datos de campo y evaluar umbrales de riesgo en elementos vulnerables puntuales." en="An <strong>Observation Point</strong> simulates a virtual point sensor or wave gauge within the computational mesh. It records, at a configurable sampling frequency, the time evolution of water depth $h(t)$, velocity magnitude $|\\vec{u}|(t)$, water surface elevation $z_w(t)$, and local rainfall intensity. It is essential for model calibration against field observations and risk threshold evaluation on specific vulnerable assets." style={{ color: "var(--muted)", margin: "0", fontSize: "0.85rem", lineHeight: "1.5" }} />
                  </div>
                </div>
              </section>
              <section id="sec-configuracion" className="guide-step-block" style={{ marginTop: "60px", paddingTop: "40px", borderTop: "1px solid var(--line)" }}>
                <Bi as="h3" es="3. Configuración de la Simulación" en="3. Simulation Setup" style={{ fontSize: "1.6rem", color: "var(--blue-deep)", marginBottom: "25px" }} />
                <Bi as="p" es="Una vez añadidas y verificadas las cuatro capas obligatorias descritas en la Sección 2, el proyecto estará listo para ser parametrizado. Para iniciar este proceso, haga clic en el botón <strong>▶️</strong> de la cabecera de la sección correspondiente de la barra lateral." en="Once the four mandatory layers described in Section 2 are added and verified, the project is ready for parameterization. To start this process, click the <strong>▶️</strong> button in the header of the corresponding sidebar section." style={{ color: "var(--muted)", marginBottom: "25px", fontSize: "0.95rem" }} />
                <div style={{ background: "rgba(18, 35, 47, 0.04)", borderLeft: "4px solid var(--blue-deep)", padding: "20px", borderRadius: "0 8px 8px 0", marginBottom: "35px" }}>
                  <Bi as="strong" es="📋 Ventana modal de configuración técnica" en="📋 Technical Setup Modal Window" style={{ color: "var(--blue-deep)", display: "block", marginBottom: "8px", fontSize: "1rem" }} />
                  <Bi as="p" es="Al pulsar el botón se desplegará una ventana modal de configuración compuesta por <strong>6 pestañas técnicas</strong> que deben revisarse secuencialmente antes de lanzar el cálculo numérico en la GPU:" en="Clicking the button will open a configuration modal window consisting of <strong>6 technical tabs</strong> that must be reviewed sequentially before launching the numerical calculation on the GPU:" style={{ color: "var(--ink)", margin: "0 0 12px", fontSize: "0.92rem" }} />
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px", marginTop: "15px" }}>
                    <Bi as="span" es="1. Capas" en="1. Layers" style={{ background: "#ffffff", padding: "8px 12px", borderRadius: "6px", border: "1px solid var(--line)", fontSize: "0.85rem", fontWeight: "600", color: "var(--blue-deep)" }} />
                    <Bi as="span" es="2. Sedimentos" en="2. Sediments" style={{ background: "#ffffff", padding: "8px 12px", borderRadius: "6px", border: "1px solid var(--line)", fontSize: "0.85rem", fontWeight: "600", color: "var(--blue-deep)" }} />
                    <Bi as="span" es="3. Precipitación" en="3. Precipitation" style={{ background: "#ffffff", padding: "8px 12px", borderRadius: "6px", border: "1px solid var(--line)", fontSize: "0.85rem", fontWeight: "600", color: "var(--blue-deep)" }} />
                    <Bi as="span" es="4. Parámetros Simulación" en="4. Simulation Parameters" style={{ background: "#ffffff", padding: "8px 12px", borderRadius: "6px", border: "1px solid var(--line)", fontSize: "0.85rem", fontWeight: "600", color: "var(--blue-deep)" }} />
                    <Bi as="span" es="5. Observación" en="5. Observation" style={{ background: "#ffffff", padding: "8px 12px", borderRadius: "6px", border: "1px solid var(--line)", fontSize: "0.85rem", fontWeight: "600", color: "var(--blue-deep)" }} />
                    <Bi as="span" es="6. Límites" en="6. Boundaries" style={{ background: "#ffffff", padding: "8px 12px", borderRadius: "6px", border: "1px solid var(--line)", fontSize: "0.85rem", fontWeight: "600", color: "var(--blue-deep)" }} />
                  </div>
                </div>
                <div id="tab-config-capas" style={{ marginBottom: "45px", background: "#ffffff", border: "1px solid var(--line)", borderRadius: "8px", padding: "25px" }}>
                  <Bi as="h4" es="3.1 Pestaña 1: Capas" en="3.1 Tab 1: Layers" style={{ fontSize: "1.2rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "12px" }} />
                  <Bi as="p" es="En la primera pestaña se asignan la base topográfica principal y los parámetros físicos de superficie que caracterizan la escorrentía sobre el terreno. Complete los siguientes campos:" en="In the first tab, assign the main topographic base and the surface physical parameters that characterize overland runoff. Fill in the following fields:" style={{ color: "var(--muted)", marginBottom: "18px", fontSize: "0.95rem" }} />
                  <ol style={{ color: "var(--ink)", lineHeight: "1.7", marginBottom: "20px", paddingLeft: "20px", fontSize: "0.92rem" }}>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="DEM (Modelo Digital del Terreno):" en="DEM (Digital Elevation Model):" />
                      <Bi as="span" es=" Despliegue el menú selector y elija el MDT procesado que fue añadido previamente a las capas del proyecto en la Sección 2.1." en=" Open the dropdown menu and select the processed DTM that was previously added to the project layers in Section 2.1." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Valor constante LUcoeff:" en="Constant LUcoeff value:" />
                      <Bi as="span" es=" Ingrese el coeficiente de uso del suelo (Land Use coefficient) homogéneo para el dominio de cálculo." en=" Enter the homogeneous land use coefficient (LUcoeff) for the calculation domain." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Valor constante FVCover:" en="Constant FVCover value:" />
                      <Bi as="span" es=" Establezca la fracción de cobertura vegetal (Fractional Vegetation Cover) constante para caracterizar la retención superficial e infiltración." en=" Set the constant fractional vegetation cover (FVCover) to characterize surface interception and infiltration." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Valor constante Rugosidad:" en="Constant Roughness value:" />
                      <Bi as="span" es=" Defina el coeficiente de rugosidad de Manning constante $n$ ($\\text{s/m}^{1/3}$) que determinará la fricción del flujo con el lecho." en=" Define the constant Manning roughness coefficient $n$ ($\\text{s/m}^{1/3}$) that governs bed friction forces." />
                    </li>
                  </ol>
                  <figure className="image-container" style={{ margin: "20px 0", textAlign: "center" }}>
                    <img src="/images/user-guide/PE/PE_Config_Pestana_Capas.png" alt="Configuración de la Pestaña Capas en el modal de ejecución" style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "8px", border: "1px solid var(--line)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
                    <Bi as="figcaption" es="Figura 3.1: Formulario de selección de DEM y parámetros constantes de superficie" en="Figure 3.1: Form for DEM selection and constant surface parameters" style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "8px", fontStyle: "italic" }} />
                  </figure>
                </div>
                <div id="tab-config-sedimentos" style={{ marginBottom: "45px", background: "#ffffff", border: "1px solid var(--line)", borderRadius: "8px", padding: "25px" }}>
                  <Bi as="h4" es="3.2 Pestaña 2: Sedimentos" en="3.2 Tab 2: Sediments" style={{ fontSize: "1.2rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "12px" }} />
                  <Bi as="p" es="En la segunda pestaña se configuran las propiedades morfodinámicas del terreno y la caracterización de los sedimentos para la simulación de erosión y arrastre de material. Defina los siguientes campos:" en="In the second tab, set the morphodynamic properties of the terrain and sediment characteristics for soil erosion and transport simulation. Define the following fields:" style={{ color: "var(--muted)", marginBottom: "18px", fontSize: "0.95rem" }} />
                  <Bi as="h5" es="Parámetros geotécnicos y de erodibilidad del lecho:" en="Geotechnical and bed erodibility parameters:" style={{ fontSize: "1rem", color: "var(--blue-deep)", marginTop: "15px", marginBottom: "10px" }} />
                  <ul style={{ color: "var(--ink)", lineHeight: "1.7", marginBottom: "20px", paddingLeft: "20px", fontSize: "0.92rem" }}>
                    <li>
                      <Bi as="strong" es="Ángulo de estabilidad:" en="Angle of stability:" />{" "}
                      <Bi as="span" es="Ángulo de reposo o rozamiento interno del material (en grados, p. ej. 60°)." en="Repose or internal friction angle of the sediment material (in degrees, e.g. 60°)." />
                    </li>
                    <li>
                      <Bi as="strong" es="Espesor capa erodible:" en="Erodible layer thickness:" />{" "}
                      <Bi as="span" es="Profundidad máxima del lecho erosionable (utilice <code>-9999</code> para indicar espesor ilimitado)." en="Maximum depth of the erodible bed layer (use <code>-9999</code> for unlimited bed thickness)." />
                    </li>
                    <li>
                      <Bi as="strong" es="Desprendibilidad interrill:" en="Interrill detachability:" />{" "}
                      <Bi as="span" es="Coeficiente de desprendimiento de partículas por impacto de gotas de lluvia en erosión laminar." en="Particle detachability coefficient caused by raindrop impact in sheet/interrill erosion." />
                    </li>
                    <li>
                      <Bi as="strong" es="Coeficiente de erodibilidad:" en="Erodibility coefficient:" />{" "}
                      <Bi as="span" es="Factor escalar de ajuste para la capacidad global de erosión del suelo." en="Scaling factor adjusting global soil erodibility capacity." />
                    </li>
                    <li>
                      <Bi as="strong" es="Coeficiente turbulencia:" en="Turbulence coefficient:" />{" "}
                      <Bi as="span" es="Parámetro de acoplamiento para la suspensión e incremento de arrastre por fluctuaciones turbulentas." en="Coupling parameter for sediment suspension and transport enhancement due to turbulent fluctuations." />
                    </li>
                    <li>
                      <Bi as="strong" es="Número de sedimentos:" en="Number of sediments:" />{" "}
                      <Bi as="span" es="Cantidad de clases granulométricas discretas a simular en el modelo." en="Number of discrete sediment size fractions to model." />
                    </li>
                  </ul>
                  <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "6px", padding: "18px", marginBottom: "20px" }}>
                    <Bi as="h5" es="Caracterización de la clase granulométrica (Sedimento 1):" en="Granulometric fraction characterization (Sediment 1):" style={{ fontSize: "1rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "10px" }} />
                    <ol style={{ color: "var(--ink)", lineHeight: "1.6", margin: "0", paddingLeft: "20px", fontSize: "0.9rem" }}>
                      <li>
                        <Bi as="strong" es="Nombre:" en="Name:" />{" "}
                        <Bi as="span" es="Etiqueta identificativa de la fracción granulométrica (p. ej. <em>Sediment 1</em>)." en="Label identifier for the grain size fraction (e.g. <em>Sediment 1</em>)." />
                      </li>
                      <li>
                        <Bi as="strong" es="Valor Inicial:" en="Initial Value:" />{" "}
                        <Bi as="span" es="Concentración volumétrica inicial del sedimento en la columna de agua." en="Initial volumetric sediment concentration in the water column." />
                      </li>
                      <li>
                        <Bi as="strong" es="Diámetro (dsValue):" en="Diameter (dsValue):" />{" "}
                        <Bi as="span" es="Diámetro medio de partícula $d_s$ expresado en metros (p. ej. 0,000294 m para arenas finas)." en="Mean particle diameter $d_s$ expressed in meters (e.g. 0.000294 m for fine sand)." />
                      </li>
                      <li>
                        <Bi as="strong" es="Fracción del lecho:" en="Bed fraction:" />{" "}
                        <Bi as="span" es="Proporción (entre 0 y 1) de esta clase granulométrica presente en la mezcla del sustrato." en="Proportion (from 0 to 1) of this grain size class within the bed sediment mixture." />
                      </li>
                      <li>
                        <Bi as="strong" es="Coeficiente de arrastre:" en="Entrainment coefficient:" />{" "}
                        <Bi as="span" es="Factor de tasa de movilización y erosión del sedimento desde el lecho." en="Mobility and erosion rate factor of sediment from the bed." />
                      </li>
                      <li>
                        <Bi as="strong" es="Coeficiente de deposición:" en="Deposition coefficient:" />{" "}
                        <Bi as="span" es="Factor de tasa de sedimentación y decantación de partículas." en="Particle settling and deposition rate factor." />
                      </li>
                    </ol>
                  </div>
                  <figure className="image-container" style={{ margin: "20px 0", textAlign: "center" }}>
                    <img src="/images/user-guide/PE/PE_Config_Pestana_Sedimentos.png" alt="Configuración de la Pestaña Sedimentos en el modal de simulación" style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "8px", border: "1px solid var(--line)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
                    <Bi as="figcaption" es="Figura 3.2: Parámetros geotécnicos de erodibilidad y caracterización granulométrica" en="Figure 3.2: Geotechnical erodibility parameters and grain size characterization" style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "8px", fontStyle: "italic" }} />
                  </figure>
                </div>
                <div id="tab-config-precipitacion" style={{ marginBottom: "45px", background: "#ffffff", border: "1px solid var(--line)", borderRadius: "8px", padding: "25px" }}>
                  <Bi as="h4" es="3.3 Pestaña 3: Precipitación" en="3.3 Tab 3: Precipitation" style={{ fontSize: "1.2rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "12px" }} />
                  <Bi as="p" es="En la tercera pestaña se define la distribución espacial y temporal de la lluvia que actuará como condición de entrada en el modelo. Seleccione primero el tipo de <strong>Fuente de precipitación</strong> deseado:" en="In the third tab, define the spatial and temporal rainfall distribution serving as the model input condition. First select the desired <strong>Precipitation source</strong> type:" style={{ color: "var(--muted)", marginBottom: "18px", fontSize: "0.95rem" }} />
                  <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "6px", padding: "18px", marginBottom: "20px" }}>
                    <Bi as="h5" es="Opción A: 📄 Manual (polígonos de lluvia)" en="Option A: 📄 Manual (rain polygons)" style={{ fontSize: "1rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "10px" }} />
                    <Bi as="p" es="Esta opción permite asignar hietogramas e intensidades de lluvia específicas a subcuencas o polígonos delimitados:" en="This option allows assigning specific hydrographs and rainfall intensities to delimited sub-basins or polygons:" style={{ color: "var(--muted)", marginBottom: "12px", fontSize: "0.9rem" }} />
                    <ol style={{ color: "var(--ink)", lineHeight: "1.6", margin: "0", paddingLeft: "20px", fontSize: "0.9rem" }}>
                      <li>
                        <Bi as="strong" es="Número de polígonos de lluvia:" en="Number of rain polygons:" />{" "}
                        <Bi as="span" es="Indique la cantidad de zonas o geometrías independientes que recibirán lluvia diferenciada." en="Specify the number of independent zones or geometries receiving differentiated rainfall." />
                      </li>
                      <li>
                        <Bi as="strong" es="Selección de Polígono:" en="Polygon Selection:" />{" "}
                        <Bi as="span" es="Para cada zona (p. ej. <em>Lluvia 1</em>), despliegue el listado y seleccione la capa vectorial o polígono asignado." en="For each zone (e.g. <em>Lluvia 1</em>), open the dropdown and select the assigned vector polygon layer." />
                      </li>
                      <li>
                        <Bi as="strong" es="Serie temporal de lluvia:" en="Rainfall time series:" />{" "}
                        <Bi as="span" es="Introduzca la secuencia de valores de precipitación asociadas al polígono seleccionado para definir la evolución del evento pluviométrico." en="Enter the sequence of precipitation values associated with the selected polygon to define the storm event evolution." />
                      </li>
                    </ol>
                  </div>
                  <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "6px", padding: "18px", marginBottom: "20px" }}>
                    <Bi as="h5" es="Opción B: 🌐 Archivo de precipitación NetCDF" en="Option B: 🌐 NetCDF precipitation file" style={{ fontSize: "1.05rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "10px" }} />
                    <Bi as="p" es="Si ha procesado previamente datos meteorológicos continuos (AEMET o ERA5-Land) en el apartado 2.2:" en="If you have previously processed continuous meteorological data (AEMET or ERA5-Land) in Section 2.2:" style={{ color: "var(--muted)", marginBottom: "10px", fontSize: "0.9rem" }} />
                    <ul style={{ color: "var(--ink)", lineHeight: "1.6", margin: "0", paddingLeft: "20px", fontSize: "0.9rem" }}>
                      <li>
                        <Bi as="strong" es="Selección directa NetCDF:" en="Direct NetCDF Selection:" />{" "}
                        <Bi as="span" es="Seleccione la opción de fuente NetCDF y elija directamente del desplegable el archivo raster multidimensional de precipitación generado anteriormente en la Sección 2.2." en="Select the NetCDF source option and choose directly from the dropdown the multidimensional precipitation raster file previously generated in Section 2.2." />
                      </li>
                    </ul>
                  </div>
                  <figure className="image-container" style={{ margin: "20px 0", textAlign: "center" }}>
                    <img src="/images/user-guide/PE/PE_Config_Pestana_Precipitacion.png" alt="Configuración de la Pestaña Precipitación en el modal de simulación" style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "8px", border: "1px solid var(--line)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
                    <Bi as="figcaption" es="Figura 3.3: Formulario de configuración de fuente de precipitación manual por polígonos" en="Figure 3.3: Manual polygon rainfall source configuration form" style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "8px", fontStyle: "italic" }} />
                  </figure>
                </div>
                <div id="tab-config-parametros" style={{ marginBottom: "45px", background: "#ffffff", border: "1px solid var(--line)", borderRadius: "8px", padding: "25px" }}>
                  <Bi as="h4" es="3.4 Pestaña 4: Parámetros Simulación" en="3.4 Tab 4: Simulation Parameters" style={{ fontSize: "1.2rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "12px" }} />
                  <Bi as="p" es="En la cuarta pestaña se configuran los intervalos temporales de integración, la frecuencia de volcado de datos y la monitorización en tiempo real de la ejecución. Complete los siguientes campos:" en="In the fourth tab, set integration time intervals, data output frequencies, and real-time execution monitoring. Complete the following fields:" style={{ color: "var(--muted)", marginBottom: "18px", fontSize: "0.95rem" }} />
                  <ol style={{ color: "var(--ink)", lineHeight: "1.7", marginBottom: "20px", paddingLeft: "20px", fontSize: "0.92rem" }}>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Duración del evento:" en="Event duration:" />
                      <Bi as="span" es=" Tiempo total de simulación expresado en segundos (p. ej. <code>172800</code> s para un escenario de 48 horas)." en=" Total simulation time expressed in seconds (e.g. <code>172800</code> s for a 48-hour scenario)." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Tiempo de salida (s):" en="Output time (s):" />
                      <Bi as="span" es=" Intervalo de tiempo en segundos para la grabación y generación de mapas ráster de resultados (p. ej. <code>1800</code> s para guardar mapas cada 30 minutos)." en=" Time step interval in seconds for writing and generating output result raster maps (e.g. <code>1800</code> s to save maps every 30 minutes)." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Frecuencia observación (s):" en="Observation frequency (s):" />
                      <Bi as="span" es=" Frecuencia de muestreo temporal en segundos para registrar datos continuos en los puntos y secciones de observación (p. ej. <code>60</code> s para guardar hidrogramas cada minuto)." en=" Time sampling frequency in seconds to record continuous data at observation points and sections (e.g. <code>60</code> s to write hydrographs every minute)." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Número de iteraciones para mostrar la información en la pantalla:" en="Number of iterations to show information on screen:" />
                      <Bi as="span" es=" Intervalo de ciclos de cálculo numérico para refrescar las métricas de progreso en la interfaz gráfica (p. ej. cada <code>100</code> iteraciones)." en=" Numerical iteration step interval to refresh progress metrics on the graphical interface (e.g. every <code>100</code> iterations)." />
                    </li>
                  </ol>
                  <div style={{ background: "rgba(47, 128, 237, 0.05)", borderLeft: "4px solid var(--blue)", padding: "14px 18px", borderRadius: "0 6px 6px 0", marginBottom: "20px" }}>
                    <Bi as="strong" es="ℹ️ Nota sobre fuentes de precipitación NetCDF" en="ℹ️ Note on NetCDF precipitation sources" style={{ color: "var(--blue-deep)", fontSize: "0.88rem", display: "block", marginBottom: "4px" }} />
                    <Bi as="p" es="En el caso de haber seleccionado un archivo <strong>NetCDF</strong> como fuente de precipitación en la Pestaña 3, <strong>no será necesario introducir la Duración del evento</strong>. El solver extraerá y fijará automáticamente la ventana temporal del modelo a partir del rango especificado dentro del propio fichero de lluvia." en="If a <strong>NetCDF</strong> file was selected as the precipitation source in Tab 3, <strong>entering the Event Duration is not required</strong>. The solver will automatically extract and bind the simulation time window from the range defined within the rainfall file itself." style={{ color: "var(--muted)", margin: "0", fontSize: "0.85rem", lineHeight: "1.5" }} />
                  </div>
                  <figure className="image-container" style={{ margin: "20px 0", textAlign: "center" }}>
                    <img src="/images/user-guide/PE/PE_Config_Pestana_Parametros.png" alt="Configuración de la Pestaña Parámetros Simulación" style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "8px", border: "1px solid var(--line)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
                    <Bi as="figcaption" es="Figura 3.4: Formulario de intervalos temporales y control de simulación" en="Figure 3.4: Time intervals and simulation control form" style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "8px", fontStyle: "italic" }} />
                  </figure>
                </div>
                <div id="tab-config-observacion" style={{ marginBottom: "45px", background: "#ffffff", border: "1px solid var(--line)", borderRadius: "8px", padding: "25px" }}>
                  <Bi as="h4" es="3.5 Pestaña 5: Observación" en="3.5 Tab 5: Observation" style={{ fontSize: "1.2rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "12px" }} />
                  <Bi as="p" es="En la quinta pestaña se vinculan las geometrías de monitorización temporal dibujadas previamente sobre el mapa en las Secciones 2.5 y 2.6. El usuario puede asociar tantos puntos y secciones de control como requiera para la extracción de resultados:" en="In the fifth tab, bind the temporal monitoring geometries previously drawn on the map canvas in Sections 2.5 and 2.6. Users can link as many control points and sections as needed for results extraction:" style={{ color: "var(--muted)", marginBottom: "18px", fontSize: "0.95rem" }} />
                  <ol style={{ color: "var(--ink)", lineHeight: "1.7", marginBottom: "20px", paddingLeft: "20px", fontSize: "0.92rem" }}>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Número de puntos de observación:" en="Number of observation points:" />
                      <Bi as="span" es=" Indique la cantidad total de puntos de control discreto que desea registrar durante el cálculo." en=" Specify the total number of discrete control points to record during computation." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Número de secciones:" en="Number of sections:" />
                      <Bi as="span" es=" Ingrese el número total de secciones o perfiles de aforo transversal que desea evaluar." en=" Enter the total number of cross-sectional gaging lines to evaluate." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="GeoJSON de punto de observación N:" en="Observation point N GeoJSON:" />
                      <Bi as="span" es=" Para cada punto indicado, despliegue el menú selector y elija la capa de puntos GeoJSON creada en el apartado <strong>2.6 Punto de observación</strong>." en=" For each point, open the dropdown menu and select the GeoJSON point layer created in <strong>Section 2.6 (Observation Point)</strong>." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="GeoJSON de sección N:" en="Section N GeoJSON:" />
                      <Bi as="span" es=" Para cada sección definida, despliegue el listado y asocie la capa vectorial GeoJSON trazada en el apartado <strong>2.5 Sección de observación</strong>." en=" For each section, select the corresponding GeoJSON vector layer drawn in <strong>Section 2.5 (Observation Section)</strong>." />
                    </li>
                  </ol>
                  <figure className="image-container" style={{ margin: "20px 0", textAlign: "center" }}>
                    <img src="/images/user-guide/PE/PE_Config_Pestana_Observacion.png" alt="Configuración de la Pestaña Observación en el modal de simulación" style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "8px", border: "1px solid var(--line)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
                    <Bi as="figcaption" es="Figura 3.5: Formulario de vinculación de capas GeoJSON de puntos y secciones de observación" en="Figure 3.5: Linking form for observation point and section GeoJSON layers" style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "8px", fontStyle: "italic" }} />
                  </figure>
                </div>
                <div id="tab-config-limites" style={{ marginBottom: "45px", background: "#ffffff", border: "1px solid var(--line)", borderRadius: "8px", padding: "25px" }}>
                  <Bi as="h4" es="3.6 Pestaña 6: Límites y Lanzamiento" en="3.6 Tab 6: Boundaries & Execution" style={{ fontSize: "1.2rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "12px" }} />
                  <Bi as="p" es="En la última pestaña se asignan las condiciones de contorno de evacuación creadas en las Secciones 2.3 y 2.4, y se formaliza el lanzamiento de la simulación. Complete los siguientes campos:" en="In the final tab, assign the outflow boundary conditions created in Sections 2.3 and 2.4, and formalize the simulation execution. Complete the following fields:" style={{ color: "var(--muted)", marginBottom: "18px", fontSize: "0.95rem" }} />
                  <ol style={{ color: "var(--ink)", lineHeight: "1.7", marginBottom: "20px", paddingLeft: "20px", fontSize: "0.92rem" }}>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Dirección del flujo:" en="Flow direction:" />
                      <Bi as="span" es=" Seleccione del menú desplegable la capa vectorial lineal creada previamente en la <strong>Sección 2.4 (Dirección del flujo)</strong>." en=" Select from the dropdown menu the line vector layer previously created in <strong>Section 2.4 (Flow Direction)</strong>." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Polígono de salida:" en="Outlet polygon:" />
                      <Bi as="span" es=" Elija en el desplegable la geometría poligonal de contorno libre definida en la <strong>Sección 2.3 (Polígono de salida)</strong>." en=" Choose from the dropdown the free-outflow polygon geometry defined in <strong>Section 2.3 (Outlet Polygon)</strong>." />
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <Bi as="strong" es="Nombre de la simulación:" en="Simulation name:" />
                      <Bi as="span" es=" Ingrese un identificador único y formal (p. ej. <em>Simulation_name</em>) para registrar esta corrida en el sistema." en=" Enter a unique formal identifier (e.g. <em>Simulation_name</em>) to index this run in the system." />
                    </li>
                  </ol>
                  <figure className="image-container" style={{ margin: "20px 0", textAlign: "center" }}>
                    <img src="/images/user-guide/PE/PE_Config_Pestana_Limites.png" alt="Configuración de la Pestaña Límites en el modal de simulación" style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "8px", border: "1px solid var(--line)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
                    <Bi as="figcaption" es="Figura 3.6: Selección de capas de contorno e identificación de la simulación" en="Figure 3.6: Boundary layer selection and simulation naming form" style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "8px", fontStyle: "italic" }} />
                  </figure>
                  <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "6px", padding: "20px", marginTop: "25px" }}>
                    <Bi as="h5" es="▶️ Lanzamiento, monitorización y ejecución en segundo plano" en="▶️ Launch, Monitoring, and Background Execution" style={{ fontSize: "1.05rem", color: "var(--blue-deep)", marginTop: "0", marginBottom: "10px" }} />
                    <Bi as="p" es="Una vez verificados los datos de las 6 pestañas, pulse el botón <strong>Ejecutar simulación</strong>. Si la parametrización es correcta, el sistema iniciará el cálculo en los servidores GPU y desplegará el panel de seguimiento:" en="Once all 6 tabs are verified, click <strong>Run simulation</strong>. If the input parameters are valid, the system will launch the GPU calculation and display the progress panel:" style={{ color: "var(--muted)", marginBottom: "12px", fontSize: "0.9rem" }} />
                    <ul style={{ color: "var(--ink)", lineHeight: "1.6", marginBottom: "15px", paddingLeft: "20px", fontSize: "0.9rem" }}>
                      <li>
                        <Bi as="strong" es="Barra de progreso y logs:" en="Progress bar and logs:" />{" "}
                        <Bi as="span" es="Podrá visualizar en tiempo real el porcentaje de avance del cálculo numérico junto con los registros técnicos del solver (<em>simulation logs</em>)." en="You can monitor in real-time the numerical computation progress percentage alongside solver execution logs." />
                      </li>
                      <li>
                        <Bi as="strong" es="Minimización de la ventana:" en="Window minimization:" />{" "}
                        <Bi as="span" es="Es posible minimizar la ventana de monitorización en cualquier momento. La simulación continuará ejecutándose en segundo plano sin interrumpir su navegación." en="You can minimize the progress window at any time. The simulation will continue executing asynchronously in the background." />
                      </li>
                    </ul>
                    <div style={{ background: "rgba(239, 140, 100, 0.08)", borderLeft: "3px solid var(--orange)", padding: "12px 16px", borderRadius: "0 6px 6px 0" }}>
                      <Bi as="strong" es="⏱️ Consideración sobre tiempos de cómputo" en="⏱️ Computation Time Notice" style={{ color: "#c85324", fontSize: "0.88rem", display: "block", marginBottom: "4px" }} />
                      <Bi as="p" es="Tenga en cuenta que el tiempo total de ejecución dependerá directamente de la extensión del ráster (dominio de cálculo), la resolución espacial seleccionada (5 m o 25 m) y la duración total del evento. En dominios muy amplios o mallas de alta resolución, la simulación puede requerir periodos de tiempo prolongados." en="Note that total execution time depends directly on the raster spatial extent, the selected spatial resolution (5 m vs 25 m), and total event duration. For large domains or high-resolution meshes, computation may require extended periods." style={{ color: "var(--ink)", margin: "0", fontSize: "0.85rem", lineHeight: "1.5" }} />
                    </div>
                  </div>
                </div>
              </section>
              <section id="sec-resultados" className="guide-step-block" style={{ marginTop: "60px", paddingTop: "40px", borderTop: "1px solid var(--line)" }}>
                <Bi as="h3" es="4. Visualización de Resultados" en="4. Results Visualization" style={{ fontSize: "1.6rem", color: "var(--blue-deep)", marginBottom: "25px" }} />
                <Bi as="p" es="Una vez finalizado el cálculo numérico (o para inspeccionar simulaciones previas), el usuario puede acceder a la gestión completa de resultados a través del menú de herramientas WebGIS seleccionado la opción <strong>🗂️ Historial de simulaciones</strong>. Dentro de este panel se listan todas las corridas ejecutadas en el proyecto activo." en="Once numerical computation is completed (or to inspect previous simulation runs), users can access full results management through the WebGIS tool menu by selecting <strong>🗂️ Simulation History</strong>. This panel lists all executed runs within the active project." style={{ color: "var(--muted)", marginBottom: "20px", fontSize: "0.95rem" }} />
                <div style={{ background: "rgba(18, 35, 47, 0.04)", borderLeft: "4px solid var(--ink-soft)", padding: "18px 20px", borderRadius: "0 8px 8px 0", marginBottom: "30px" }}>
                  <Bi as="strong" es="📤 Subida de simulaciones externas (.zip)" en="📤 External Simulation Upload (.zip)" style={{ color: "var(--ink)", display: "block", marginBottom: "6px", fontSize: "0.98rem" }} />
                  <Bi as="p" es="Dispone de la función <strong>📤 Subir Simulación</strong> que permite cargar un archivo comprimido <code>.zip</code> con una simulación ya calculada fuera de la plataforma. El archivo debe contener la estructura interna de ficheros, nomenclaturas y formatos compatibles con el motor numérico <strong>SERGHEI</strong> para su correcta integración en el visor." en="You can use the <strong>📤 Upload Simulation</strong> feature to load a compressed <code>.zip</code> file containing a pre-computed simulation. The archive must contain internal file structures, naming conventions, and formats compatible with the <strong>SERGHEI</strong> numerical solver for proper rendering." style={{ color: "var(--muted)", margin: "0", fontSize: "0.9rem" }} />
                </div>
                <Bi as="p" es="Al abrir una simulación del historial (p. ej. <code>output_20260420_172517</code>), se desplegará la ventana modal de gestión con tres bloques principales de datos:" en="When opening a simulation from the history list (e.g. <code>output_20260420_172517</code>), a management modal window will display three primary data blocks:" style={{ color: "var(--muted)", marginBottom: "20px", fontSize: "0.95rem" }} />
                <ol style={{ color: "var(--ink)", lineHeight: "1.7", marginBottom: "25px", paddingLeft: "20px", fontSize: "0.92rem" }}>
                  <li style={{ marginBottom: "12px" }}>
                    <Bi as="strong" es="netcdf (Resultados principales):" en="netcdf (Main Results):" />
                    <Bi as="span" es=" Muestra el archivo ejecutable ráster <code>output.nc</code>. Permite dos acciones inmediatas:" en=" Displays the primary raster file <code>output.nc</code>. Offers two direct actions:" />
                    <ul style={{ marginTop: "6px", marginBottom: "6px", paddingLeft: "20px", color: "var(--muted)" }}>
                      <li>
                        <Bi as="strong" es="Descargar:" en="Download:" style={{ color: "var(--blue-deep)" }} />{" "}
                        <Bi as="span" es="Guarda el fichero NetCDF en su equipo local para análisis externo en SIG." en="Saves the NetCDF file to your local computer for external GIS processing." />
                      </li>
                      <li>
                        <Bi as="strong" es="Añadir al mapa:" en="Add to map:" style={{ color: "var(--blue-deep)" }} />{" "}
                        <Bi as="span" es="Carga la capa ráster dinámica en el visor 2D para reproducir animaciones de calados, velocidades y mapas de peligro." en="Loads the dynamic raster layer into the 2D viewer to render depth animations, velocities, and hazard maps." />
                      </li>
                    </ul>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Bi as="strong" es="otros (Registros y Logs):" en="others (Logs & Records):" />
                    <Bi as="span" es=" Desplegable que contiene los ficheros de texto técnico de la corrida (logs de ejecución)." en=" Dropdown containing technical text files of the run (execution logs)." />
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Bi as="strong" es="Observación (Puntos y Secciones):" en="Observation (Points & Sections):" />
                    <Bi as="span" es=" Muestra la lista de elementos de control incorporados en la Pestaña 5 de la simulación. Al hacer clic en <strong>Abrir gráfica</strong> se desplegará el visor de series temporales (hidrogramas)." en=" Lists control elements linked in Tab 5 during simulation setup. Clicking <strong>Open plot (Abrir gráfica)</strong> renders the time-series viewer (hydrographs)." />
                  </li>
                </ol>
                <figure className="image-container" style={{ margin: "20px 0", textAlign: "center" }}>
                  <img src="/images/user-guide/PE/PE_Resultados_Historial_Modal.png" alt="Modal de gestión y descarga de resultados de simulación" style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "8px", border: "1px solid var(--line)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
                  <Bi as="figcaption" es="Figura 4.1: Panel modal de gestión de resultados, descarga NetCDF y consulta de gráficas de observación" en="Figure 4.1: Results management modal panel, NetCDF download, and observation plot viewer" style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "8px", fontStyle: "italic" }} />
                </figure>
              </section>
            </article>
            <article className={`mode-panel${mode === 'climate' ? ' active' : ''}`} id="panel-climate" role="tabpanel">
              <header style={{ marginBottom: "40px", borderBottom: "1px solid var(--line)", paddingBottom: "20px" }}>
                <Bi as="p" es="Módulo TO2 — Extremos Climáticos" en="Module TO2 — Climate Extremes" className="eyebrow" />
                <Bi as="h2" es="Extremos Climáticos" en="Climate Extremes" style={{ fontSize: "2.2rem", margin: "0 0 10px" }} />
                <Bi as="p" es="Análisis de fenómenos climáticos extremos." en="Analysis of extreme climate events." style={{ color: "var(--muted)", margin: "0" }} />
              </header>
              <Bi as="p" es="La guía de este módulo está en elaboración." en="The guide for this module is under development." style={{ color: "var(--muted)" }} />
            </article>
            <article className={`mode-panel${mode === 'wildfire' ? ' active' : ''}`} id="panel-wildfire" role="tabpanel">
              <header style={{ marginBottom: "40px", borderBottom: "1px solid var(--line)", paddingBottom: "20px" }}>
                <Bi as="p" es="Módulo TO3 — Riesgo de Incendios Forestales" en="Module TO3 — Wildfire Risk" className="eyebrow" />
                <Bi as="h2" es="Riesgo de Incendios Forestales" en="Wildfire Risk" style={{ fontSize: "2.2rem", margin: "0 0 10px" }} />
                <Bi as="p" es="Evaluación del riesgo de incendios." en="Wildfire risk assessment." style={{ color: "var(--muted)", margin: "0" }} />
              </header>
              <Bi as="p" es="La guía de este módulo está en elaboración." en="The guide for this module is under development." style={{ color: "var(--muted)" }} />
            </article>
            <article className={`mode-panel${mode === 'erosion' ? ' active' : ''}`} id="panel-erosion" role="tabpanel">
              <header style={{ marginBottom: "40px", borderBottom: "1px solid var(--line)", paddingBottom: "20px" }}>
                <Bi as="p" es="Módulo TO4 — Erosión del Suelo" en="Module TO4 — Soil Erosion" className="eyebrow" />
                <Bi as="h2" es="Erosión del Suelo" en="Soil Erosion" style={{ fontSize: "2.2rem", margin: "0 0 10px" }} />
                <Bi as="p" es="Análisis de erosión y pérdida de suelo." en="Erosion and soil loss analysis." style={{ color: "var(--muted)", margin: "0" }} />
              </header>
              <Bi as="p" es="La guía de este módulo está en elaboración." en="The guide for this module is under development." style={{ color: "var(--muted)" }} />
            </article>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-brand">
          <span className="footer-logo">GEORISK</span>
          <Bi as="span" es="Guía de Usuario y Documentación Técnica" en="User Guide & Technical Documentation" />
        </div>
        <div className="footer-right">
          <Bi as="span" es="Grupo de Hidráulica y Hemodinámica Computacional — Universidad de Zaragoza" en="Computational Hydraulics and Hemodynamics Group — University of Zaragoza" />
        </div>
      </footer>
    </>
  );
}
