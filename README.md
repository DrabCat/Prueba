# prueba · Mercado Gastronómico Azteca

Landing responsiva para la campaña interna **«Come bien y a un excelente precio»**, desarrollada a partir del copy de `Prueba tecnica.docx`. Permite consultar promociones por sede y día, y las recomendaciones de uso de Azteca Estudios.

## Ligas de entrega

| Entregable solicitado | Enlace |
| --- | --- |
| Archivo editable de Figma | [Diseño, wireframes y componentes](https://www.figma.com/design/bJrivLb6GsQ6rUVWeK3MCm) |
| Repositorio de código | [DrabCat/prueba](https://github.com/DrabCat/prueba) |
| Sitio publicado | [GitHub Pages · prueba](https://drabcat.github.io/prueba/) |
| Errores e inconsistencias del copy y su resolución | [Auditoría completa](docs/AUDITORIA-COPY.md) |

## Cómo correr el proyecto

Necesitas Git y Node.js con npm. El proyecto no tiene dependencias de ejecución ni requiere compilación o `npm install`.

```sh
git clone https://github.com/DrabCat/prueba.git
cd prueba
npm start
```

Abre **http://127.0.0.1:4173/** en el navegador. Detén el servidor con `Ctrl+C`. El servidor sirve la carpeta `dist/`; también puede utilizarse otro servidor estático que apunte a esa carpeta. No abrir `index.html` mediante `file://`, porque se utilizan módulos JavaScript ES.

Para ejecutar las comprobaciones automatizadas:

```sh
npm test
```

Las tres pruebas comprueban el día predeterminado durante los siete días de una semana en hora local, la navegación de teclado y la integridad del inventario comercial.

## Tecnologías utilizadas

| Tecnología o herramienta | Uso |
| --- | --- |
| HTML5 | Estructura semántica, secciones, pestañas y contenido accesible. |
| CSS3 | Diseño responsivo con Grid y Flexbox, variables de color, foco, hover y adaptación de 360 a 1440 px. |
| JavaScript vanilla con módulos ES | Cambio de sede, selector de día, renderizado de promociones y contenido separado de la presentación. |
| Node.js | Servidor estático local y pruebas con `node:test`, sin dependencias externas. |
| Figma | Wireframes, diseños finales, Auto Layout, estilos, variables y componentes reutilizables. |
| GitHub y GitHub Actions | Repositorio con commits descriptivos, pruebas y publicación automática de `dist/` en GitHub Pages. |

No se utilizó Tailwind ni otro framework de interfaz. Las fuentes DM Sans y Playfair Display y las fotografías se sirven localmente. Su procedencia y licencias están documentadas en [Créditos](docs/CREDITOS.md).

## Organización de la información y diseño

La primera decisión es la **sede**. TV Azteca reúne las promociones de comida; Azteca Estudios contiene exclusivamente las recomendaciones recibidas en el brief. Solo se muestra el panel de la sede activa.

En TV Azteca, las promociones de la semana se consultan por día. Al abrir la página se selecciona el día actual mediante `getDay()` local del navegador; sábado y domingo muestran lunes. Los postres permanecen aparte porque tienen su propia disponibilidad. Las ofertas y eventos de septiembre se presentan en una sección temporal con su aviso de vigencia pendiente.

La jerarquía de las tarjetas distingue proveedor, producto, precio y condiciones. La composición usa carteles en oliva, crema, lima y terracota; el hero utiliza DM Sans Bold y la misma paleta. En móvil las tarjetas siguen una columna y en escritorio usan retículas. Los botones de TV Azteca y Azteca Estudios están en la sección posterior al hero.

El archivo de Figma tiene páginas separadas para **Wireframe**, **Diseño final** y **Componentes**, con capas nombradas y Auto Layout. Incluye:

- Cuatro wireframes geométricos sin textos ni fotografías: móvil y escritorio para ambas sedes, alineados con la estructura final.
- Diseños finales de 375 y 1440 px; cinco días de TV Azteca en cada ancho y una vista de Estudios por ancho.
- Pestañas activas de ambas sedes, día seleccionado y botones en estado normal, hover y foco.
- Variables y estilos de color y tipografía, y componentes de botón, pestaña, día y tarjeta de promoción.

Accesos directos: [final móvil](https://www.figma.com/design/bJrivLb6GsQ6rUVWeK3MCm?node-id=4-150), [final de escritorio](https://www.figma.com/design/bJrivLb6GsQ6rUVWeK3MCm?node-id=4-16), [wireframe móvil](https://www.figma.com/design/bJrivLb6GsQ6rUVWeK3MCm?node-id=27-479) y [wireframe de escritorio](https://www.figma.com/design/bJrivLb6GsQ6rUVWeK3MCm?node-id=27-18).

## Errores, inconsistencias y decisiones ante huecos del copy

Las correcciones editoriales conservan los importes, cantidades, fechas, ubicaciones y condiciones originales. Los datos comerciales que faltan no se completaron con información inventada.

| Hallazgo del documento | Resolución aplicada |
| --- | --- |
| Acentos ausentes, mayúsculas y espacios inconsistentes; «Consultas las promociones». | Corregir acentuación y puntuación; usar «Consulta las promociones» y el signo × sin cambiar cantidades. La grafía oficial de las marcas queda por validar. |
| La primera recomendación no tenía número ni título, pero las siguientes eran 2 y 3. | Ordenar los tres grupos como 01 Loza y utensilios, 02 Uso de calefactores y 03 Uso de microondas. |
| WhatsApp y la firma de campaña aparecían repetidos. | Mostrar un contacto común para reportar fallas y una firma compartida al pie, conservando el número 55 3006 2410. |
| Septiembre no tiene año ni vigencia. | Conservar ofertas y eventos con el aviso visible «Año y vigencia por confirmar», sin presentarlos como vigentes ni inferir el año. |
| Tacos de canasta sin proveedor. | Mostrar «Proveedor por confirmar» junto a $10 c/u; no asignarlos a otro negocio. |
| Sin precio en paletas, mensajes de Doña Blanca y Emilia de septiembre y evento de Corte y Norte. | Mostrar «Precio por confirmar», conservando sus mensajes y condiciones disponibles. |
| Siete ofertas después de Viernes, sin otro encabezado. | Interpretarlas como promociones del viernes según la jerarquía del documento; dejar la decisión registrada para validarla con el área. |
| El encabezado «Lunes y jueves» abarca varios postres. | Aplicarlo a palomitas, Moyo y fresas/uvas; «Lunes a viernes» se aplica a las paletas. El alcance requiere confirmación. |
| Se solicitaban logos, pero no se entregaron archivos. | Usar los nombres como texto y fotografías libres de referencia, sin crear ni simular logotipos oficiales. |
| «Desde», «precio especial», «combo» y presentaciones sin detalle. | Mantener esas expresiones e importes. No añadir gramajes, descuentos, inclusiones ni interpretar $35 de Peribán como precio por pieza. |
| «Todos los días» frente a una agenda de lunes a viernes; faltan horarios y direcciones generales. | Conservar el encabezado y la agenda originales, sin inventar horarios, operación de fin de semana, mapas o direcciones. |
| Estudios contiene recomendaciones, incluido el término «calefactores», sin promociones. | Conservar todo ese contenido, incluidas las dos horas máximas de uso; no sustituir el equipo ni inventar ofertas para esa sede. |

La [auditoría completa](docs/AUDITORIA-COPY.md) detalla cada corrección, los supuestos de producto, moneda y ubicación y los puntos por confirmar. Antes de uso institucional deben validarse la vigencia, los precios y proveedores pendientes, los logotipos y el alcance de los grupos del copy.

## Uso de IA y herramientas de apoyo

El documento permite IA y solicita indicar dónde se utilizó:

| Herramienta | Partes en las que se utilizó |
| --- | --- |
| Codex | Análisis del brief, detección de huecos, propuesta de arquitectura y diseño, creación y ajustes de HTML/CSS/JavaScript, pruebas y redacción de documentación. |
| Figma mediante MCP, operado desde Codex | Creación y edición de capas, Auto Layout, variables, estilos, componentes, estados y wireframes; consulta del diseño para trasladarlo a código. |
| Búsqueda web asistida desde Codex | Localización de fotografías libres y consulta de documentación técnica y licencias. Las fuentes se registran en [Créditos](docs/CREDITOS.md). |
| Navegador integrado automatizado desde Codex | Revisión visual, comprobación de tamaños, navegación por sede y día, carga de recursos y verificación de la publicación. |

No se generaron fotografías con IA. Tampoco se utilizó IA para completar precios, promociones, fechas o condiciones que no figuran en el documento. Figma y GitHub son herramientas de diseño y publicación; se incluyen en la tabla para precisar cómo se operaron dentro del flujo asistido.

## Verificación y accesibilidad

Se comprobó el sitio publicado a 360, 375, 768 y 1440 px sin desbordamiento horizontal, la carga de las tres fotografías y las fuentes locales, las siete promociones del viernes y las trece indicaciones de Estudios. Las tres pruebas automatizadas pasan y el despliegue en GitHub Pages termina correctamente.

La implementación incluye texto alternativo, contraste revisado, foco visible, navegación con flechas e Inicio/Fin, atributos ARIA para pestañas y días, exclusión del panel inactivo con `hidden` y respeto a `prefers-reduced-motion`. Las pruebas se realizaron con tamaños simulados en el navegador integrado; quedan pendientes pruebas con lectores de pantalla y dispositivos físicos. El detalle y sus límites están en [Validación](docs/VALIDACION.md).

## Mantenimiento y presentación

**¿Cómo agregar promociones a última hora?** Editar `dist/js/data.js`: añadir un registro con `vendor`, `title`, `price` y, si aplica, `detail` e `image` a la colección correspondiente. `week` contiene cinco listas de lunes a viernes; `desserts`, `september` y `events` son independientes. La plantilla reutilizable genera la tarjeta. Conservar el precio como texto, ejecutar `npm test` y revisar la oferta en móvil antes de publicar.

**¿Por qué esta organización?** Sede y día responden primero dónde está el colaborador y qué puede comer hoy; postres, temporada y recomendaciones conservan sus propios contextos y disponibilidad.

**¿Qué errores se resolvieron?** Se corrigió la forma editorial y se hicieron visibles los datos faltantes. La tabla anterior y la auditoría distinguen las soluciones aplicadas de las confirmaciones comerciales pendientes.

**¿Qué mejoraría con más tiempo?** Validar las ambigüedades con el área, incorporar imágenes reales y logos autorizados, probar con colaboradores y lectores de pantalla y establecer un flujo editorial con aprobación y fechas de publicación y retiro. La [defensa del proyecto](docs/DEFENSA.md) amplía estas respuestas.

## Estructura del repositorio

```text
prueba/
  README.md
  .github/workflows/pages.yml  Pruebas y despliegue de dist/
  dist/
    index.html                Estructura de la landing
    css/styles.css            Estilos y adaptación responsive
    js/app.js                 Interacciones y renderizado
    js/data.js                Copy y promociones editables
    js/domain.js              Fecha local y navegación de teclado
    assets/                   Fotografías, fuentes y licencias
  scripts/serve.mjs            Servidor local
  tests/domain.test.mjs        Comprobaciones automatizadas
  docs/                       Auditoría, créditos, validación y defensa
  *.png                      Vistas de referencia del diseño y wireframes
  package.json
```

GitHub Actions publica `dist/` al actualizar `main`. Los recursos usan rutas relativas para funcionar bajo `/prueba/`.
