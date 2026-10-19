# Mercado Gastronómico Azteca

Prueba técnica para la campaña interna «Come bien y a un excelente precio». La propuesta organiza las promociones por sede y día, con postres independientes, ofertas de septiembre identificadas como pendientes de vigencia y recomendaciones para Azteca Estudios.

## Estado de esta entrega

Diseño aprobado por el usuario, implementación completada y sitio público publicado. Se probaron interacciones, teclado, fuentes, imágenes y anchos de 360, 375, 768 y 1440 px en el navegador. Las pruebas automatizadas de fechas, navegación e integridad del contenido pasan. Se está preparando el repositorio prueba para publicarlo en GitHub Pages.

- [Archivo editable en Figma](https://www.figma.com/design/bJrivLb6GsQ6rUVWeK3MCm).
- [Diseño móvil de 375 px](https://www.figma.com/design/bJrivLb6GsQ6rUVWeK3MCm?node-id=4-150).
- [Diseño de escritorio de 1440 px](https://www.figma.com/design/bJrivLb6GsQ6rUVWeK3MCm?node-id=4-16).
- [Repositorio de GitHub: prueba](https://github.com/DrabCat/prueba).
- [Sitio público publicado y verificado](https://mercado-azteca-prueba-daniela.peppyswift18.chatgpt.site).

## Estructura actual

```text
mercado-azteca/
  README.md
  diseno-escritorio.png    Vista previa, no sustituye al archivo Figma
  vista-movil.png          Evidencia del sitio implementado a 375 px
  docs/
    PLAN.md
    AUDITORIA-COPY.md
    DEFENSA.md
    CREDITOS.md
    VALIDACION.md
  dist/
    index.html            Estructura semántica y paneles de sede
    css/styles.css        Estilos responsive y variables de Figma
    js/app.js             Renderizado y accesibilidad de interacciones
    js/data.js            Contenido comercial editable
    js/domain.js          Fecha local y navegación con teclado
    assets/               Fotografías, fuentes locales y licencias
  scripts/serve.mjs        Servidor local sin dependencias
  tests/domain.test.mjs    Fechas, teclado e integridad del inventario
  package.json
```

## Figma

Tres páginas: Wireframe, Diseño final y Componentes. Incluye wireframes móviles de ambas sedes, diez pantallas de TV Azteca (cinco días en cada ancho), dos de Azteca Estudios, Auto Layout, variables, estilos y componentes con propiedades editables. Se configuraron 72 enlaces entre sedes, días y CTA, además del hover del botón principal.

La biblioteca cuenta con diecisiete colores, nueve tamaños de espaciado, tres radios, once estilos de texto y las familias Botón, Pestaña, Día y Tarjeta de promoción. DM Sans Bold compone el hero y las tarjetas tipo cartel; Playfair Display conserva la jerarquía editorial en los títulos de sección. Las únicas imágenes raster son fotografías de contenido; las interfaces se construyeron con nodos editables.

El 19 de octubre de 2026 se actualizó el hero según la referencia visual del usuario: fotografía a sangre, degradado oscuro, título sans serif en verde lima, masthead verde oscuro y CTA a juego. El copy de campaña se conserva completo. El selector TV Azteca / Azteca Estudios permanece en la siguiente sección. El cambio está reflejado en las doce pantallas finales de Figma.

## Arquitectura y decisiones de UX

TV Azteca contiene las promociones de la semana, postres, Septiembre sabe a México y Más variedad llega para ti. Azteca Estudios contiene únicamente las recomendaciones recibidas en el brief. Las pestañas deben excluir visualmente el contenido de la sede inactiva.

El selector de lunes a viernes deberá iniciar en el día local del navegador; el fin de semana mostrará lunes. Los postres no dependen de ese selector porque el brief les asigna días propios. Los precios conservan el símbolo $, cantidades, «desde», «combo» y «precio especial» tal como corresponde.

No se crean descuentos ni datos comerciales. Las ofertas de septiembre mantienen año y vigencia por confirmar. Las fotografías son de referencia, no productos fotografiados de los proveedores.

## Copy y supuestos

La [auditoría completa](docs/AUDITORIA-COPY.md) registra las correcciones y decisiones. Destacan los acentos, «Consulta», numeración incompleta, WhatsApp duplicado, ausencia de logos, proveedor de tacos de canasta, precios ausentes y fechas sin año. Se interpretaron las siete ofertas posteriores al encabezado Viernes como pertenecientes a ese día y los primeros tres postres como disponibles lunes y jueves. Estas interpretaciones necesitan validación del área.

## Tecnologías y ejecución local

HTML5, CSS3 y JavaScript vanilla con módulos ES, sin framework ni paquetes de ejecución. CSS Grid y Flexbox permiten pasar de una columna móvil a las retículas de escritorio. Fotografías y fuentes se sirven desde archivos locales. No se requiere compilar ni ejecutar npm install.

Con Node.js instalado, abre una terminal en la carpeta del proyecto y ejecuta:

```sh
npm start
```

Abre http://127.0.0.1:4173 en el navegador. El comando imprime la URL y mantiene el servidor abierto; Ctrl+C lo detiene. También puede utilizarse cualquier servidor estático apuntando a dist/. Los módulos ES requieren un servidor HTTP: no abrir index.html mediante file://.

```sh
npm test
```

La prueba recorre los siete días de una semana en hora local, comprueba Inicio/Fin y navegación circular y contrasta las cantidades del inventario. La fecha predeterminada usa getDay() local, sin UTC ni zona horaria fija.

## Actualizar promociones

Edita las colecciones week, desserts, september o events en dist/js/data.js. Cada registro tiene vendor, title, price y, opcionalmente, detail e image. price es texto para conservar «desde», «combo», cantidades y condiciones sin reinterpretarlas. week tiene cinco listas, de lunes a viernes. Para agregar una oferta, añade un objeto a la lista correspondiente; no hace falta modificar el HTML de las tarjetas. Usa comillas válidas de JavaScript, ejecuta npm test y revisa la nueva tarjeta.

El contenido se inserta con textContent, sin evaluar HTML recibido. Las sedes usan el patrón accesible de pestañas con flechas e Inicio/Fin; el selector de día usa botones con aria-pressed, foco visible y navegación cíclica. La sede inactiva lleva hidden para excluirla de la vista y del árbol accesible. Se respeta prefers-reduced-motion.

## IA y herramientas utilizadas

Codex se utilizó para analizar el brief, auditar el copy, definir la arquitectura, redactar documentación, crear el diseño mediante Figma MCP y programar la landing y sus pruebas. Figma contiene textos, Auto Layout, variables, componentes e instancias. Se consultó su contexto de diseño para traducirlo a HTML/CSS/JavaScript. La herramienta web ayudó a localizar fotografías de Pexels y revisar su licencia. No se generaron fotografías con IA ni se fabricaron logotipos.

## Validación y defensa

El [registro de validación](docs/VALIDACION.md) distingue las comprobaciones realizadas de las pendientes. La [defensa de entrevista](docs/DEFENSA.md) responde las cuatro preguntas del brief. Los créditos y límites de uso de imágenes están en [Créditos](docs/CREDITOS.md).

## GitHub y publicación

La conexión GitHub identifica la cuenta DrabCat. Sus herramientas disponibles no incluyen crear repositorios nuevos y no hay un cliente gh instalado ni credencial GitHub no interactiva disponible. El usuario compartirá un repositorio vacío para recibir el código. Hay commits locales descriptivos de documentación e implementación. Sites publicó una versión y se cambió a acceso público por autorización expresa del usuario; se comprobó que carga sin iniciar sesión. La publicación no requiere GitHub Pages: usa el hosting estático equivalente de Sites.

Para publicar el mismo proyecto en GitHub Pages cuando exista el repositorio, configura un despliegue desde Actions que suba dist/ como artefacto de Pages o utiliza otra plataforma estática con esa carpeta como raíz. No expongas credenciales ni cambies los datos pendientes de validación solo para completar la entrega. No se enviará ningún correo porque el usuario no lo solicitó.

Las tarjetas siguen el concepto de carteles gastronómicos: fondos oliva, crema, lima y terracota, precios grandes, trazos SVG decorativos y fotografías circulares recortadas. La paleta del hero usa los mismos tonos. No se modificó el contenido comercial.


## GitHub Pages

El repositorio se publica con el nombre **prueba**. El workflow de .github/workflows/pages.yml ejecuta las pruebas y despliega únicamente dist/ cuando cambia main. Los recursos usan rutas relativas para funcionar bajo /prueba/. El despliegue requiere seleccionar GitHub Actions en Settings → Pages del repositorio.

## Wireframes de baja fidelidad

Las cuatro vistas de baja fidelidad siguen la estructura del diseño final: escritorio y móvil para TV Azteca y Azteca Estudios. Se eliminaron textos, fotografías, colores de marca y adornos; solo quedan bloques grises, líneas de contenido y marcadores de imagen editables. Hero, selector de sede, tarjetas, retículas y secciones conservan la disposición final.

- [Baja de escritorio](https://www.figma.com/design/bJrivLb6GsQ6rUVWeK3MCm?node-id=27-18).
- [Baja móvil](https://www.figma.com/design/bJrivLb6GsQ6rUVWeK3MCm?node-id=27-479).
