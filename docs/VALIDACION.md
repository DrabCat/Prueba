# Registro de validación

## Diseño verificado

- Archivo real de Figma creado y leído mediante MCP: bJrivLb6GsQ6rUVWeK3MCm.
- Tres páginas separadas: Wireframe, Diseño final y Componentes.
- Pantallas de 375 y 1440 px; TV Azteca lunes a viernes en ambos anchos y Azteca Estudios en ambos anchos.
- Fotografías incorporadas como rellenos de imagen. Los textos, estructuras, componentes e instancias son editables.
- Lectura de estructura de escritorio lunes: 18 frames, 80 textos, 21 instancias y 3 rectángulos. Móvil lunes: 26 frames, 79 textos, 21 instancias y 3 rectángulos.
- Familias tipográficas leídas en el diseño final: DM Sans y Playfair Display, coincidentes con la dirección visual.
- Inspección visual de composición completa de lunes en móvil y escritorio, viernes en escritorio y Azteca Estudios móvil. Wireframes y muestrario de estados revisados visualmente. No se observó superposición ni texto cortado en estas composiciones.
- 72 interacciones de prototipo configuradas entre sedes, días y CTA. Figma rechazó un enlace al mismo frame; se corrigió omitiendo enlaces redundantes al estado activo y se verificó la escritura posterior. Hover del botón configurado con cambio de variante.
- Componentes con estados de normal, hover y foco; pestañas activa/inactiva/hover y día seleccionado/normal/hover.

## Implementación verificada

- Diseño aprobado expresamente por el usuario antes de crear la implementación.
- HTML5, CSS3 y JavaScript vanilla. Comprobación sintáctica de app.js, data.js y domain.js sin errores.
- npm test: 3 pruebas aprobadas. Se recorren lunes a domingo en hora local a las 00:01 y 23:59, navegación circular con flechas e Inicio/Fin e integridad del inventario.
- Sitio publicado en https://mercado-azteca-prueba-daniela.peppyswift18.chatgpt.site. Sites devolvió despliegue succeeded el 18 de octubre de 2026 y el usuario autorizó cambiar su acceso a público.
- Se abrió la URL por HTTPS sin iniciar sesión y cargó la landing completa. Al cargar en domingo se mostró lunes, consistente con la regla del brief.
- Se pulsaron los cinco días: cantidades 2, 3, 2, 2 y 7. Títulos de las tarjetas coincidentes con los datos. Los 4 postres, 4 mensajes de septiembre y 3 eventos permanecen disponibles en todos los días.
- Ambas pestañas verificadas: el panel de la sede inactiva queda hidden y desaparece del árbol accesible; Azteca Estudios contiene las 13 indicaciones y un solo contacto de WhatsApp visible.
- Flechas, Inicio y Fin probados con eventos de teclado reales en pestañas. En el selector se verificó lunes → flecha izquierda → viernes e Inicio → lunes. El foco permaneció en el control seleccionado con :focus-visible activo.
- Se revisaron ambas sedes a 360, 375, 768 y 1440 px. En las ocho combinaciones scrollWidth coincidió con clientWidth; no se encontraron elementos de main que sobresalieran horizontalmente. Los 15 px de barra de desplazamiento del navegador reducen el área útil del viewport simulado.
- Se inspeccionaron capturas completas de TV Azteca en móvil y escritorio y Azteca Estudios en escritorio, comparándolas con el diseño de Figma. Sin superposición ni recortes de texto observados.
- Las tres fotografías cargaron con dimensiones naturales no nulas y texto alternativo. La portada original medía 460 px de alto. Tras la actualización del 19 de octubre, ocupa todo el hero de 760 px en escritorio y 780 px en móvil con object-fit cover; las fotografías de promoción conservan 180 px de alto.
- Playfair Display y DM Sans regular/negrita cargaron correctamente desde el proyecto. Familias CSS coinciden con Figma.
- Sin IDs duplicados ni referencias aria-controls o aria-labelledby sin destino. Se comprobó la dirección de WhatsApp sin abrir ni enviar mensajes.
- No se observaron errores de la aplicación en la consola. Los avisos registrados durante el acceso previo proceden del flujo de autenticación de OpenAI, no del código de la landing.

## Contraste calculado

| Texto / fondo | Relación |
| --- | --- |
| Tinta / crema | 14.25:1 |
| Secundario / crema | 6.10:1 |
| Rojo / blanco | 8.07:1 |
| Blanco / rojo | 8.07:1 |
| Blanco / hover rojo | 11.07:1 |
| Blanco / verde oliva | 8.69:1 |
| Secundario / fondo de postres | 5.28:1 |
| Secundario / aviso | 5.16:1 |

Todas estas combinaciones superan el umbral de 4.5:1 para texto normal.

## Límites de las comprobaciones

La configuración de interacciones del prototipo Figma se comprobó mediante la API; no se realizó una prueba manual exhaustiva de cada enlace en su reproductor. Las comprobaciones web se hicieron en el navegador integrado, con tamaños simulados; no sustituyen pruebas con lectores de pantalla, Safari, Firefox o dispositivos físicos. El hover existe en Figma y CSS; no se automatizó un recorrido del puntero por cada botón.

La vista previa local fue bloqueada por el entorno del navegador. Las pruebas visuales y de interacción se realizaron en la publicación HTTPS. El empaquetador oficial de Sites requirió añadir Bash de Git a PATH y TAR_OPTIONS=--force-local para tratar las rutas de Windows; con esa adaptación se completó el paquete y el despliegue.

## Pendientes

- Repositorio recibido y publicado: https://github.com/DrabCat/prueba.
- Validar comercialmente los pendientes de la auditoría antes del uso institucional.

## Actualización del hero del 19 de octubre de 2026

Se adaptó la cabecera a la referencia visual proporcionada: fotografía a sangre, masthead chocolate, degradado oscuro, título dorado en Alfa Slab One y CTA dorado. Se conservaron el titular y el párrafo comercial completos; los botones de sede permanecen fuera del hero, en la sección siguiente. Figma refleja el cambio en sus doce pantallas finales con capas editables y dos estilos nuevos de titular.

La versión publicada se comprobó a 360, 375, 768 y 1440 px. En todos los casos el contenido cabe dentro del hero, scrollWidth coincide con clientWidth, el selector de sede comienza después del hero y no hay pestañas dentro de él. La fuente nueva carga desde archivo local. Se revisaron capturas de móvil y escritorio y se verificaron el CTA, cambio de sede con teclado, las 13 indicaciones de Estudios y las 7 promociones del viernes. npm test conserva sus 3 pruebas aprobadas. El degradado garantiza al menos 70% de opacidad en la región que ocupa el texto para reforzar su contraste sobre las zonas claras de la fotografía.

El cálculo conservador sobre una zona blanca de la imagen con máscara al 70% da 4.27:1 para el titular dorado grande y 5.79:1 para el texto crema. El texto oscuro del CTA sobre dorado alcanza 10.92:1. Los valores cumplen el umbral correspondiente a su tamaño de texto.


## Actualización de carteles y paleta, 19 de octubre de 2026

Se sustituyó la tipografía del hero por DM Sans Bold y se unificó el sitio con tonos crema, oliva, lima y terracota. Las tarjetas de promociones usan bloques de color, títulos sans serif, precios destacados, trazos SVG decorativos y fotografías circulares recortadas. Los textos, importes, proveedores y condiciones comerciales no cambiaron. TV Azteca y Azteca Estudios permanecen en la siguiente sección.

Comprobación de la versión pública 5 en el navegador integrado a 360, 375, 768 y 1440 px: scrollWidth coincide con clientWidth; ningún título, precio ni condición sale de su tarjeta. Se revisaron capturas de escritorio y móvil, la fuente computada DM Sans 700, el CTA, el cambio de sede, las siete promociones del viernes y las trece indicaciones de Estudios. Las tres pruebas de dominio e inventario pasan y el módulo JavaScript supera la comprobación de sintaxis. El mismo cambio está reflejado en las doce pantallas finales y el componente reutilizable de Figma.

Contrastes de texto de las tarjetas: crema/oliva 7.88:1, oscuro/crema 11.22:1, oscuro/lima 7.80:1 y crema/terracota 5.58:1. Los importes conservan el texto original, con prefijos como «Desde» y «Precio especial» en una línea secundaria. No se añadieron descuentos, fechas ni condiciones a partir de la referencia visual.


## Corrección de baja fidelidad y preparación de GitHub Pages

Se reemplazó la página de baja fidelidad anterior por cuatro vistas geométricas editables: 1440 px y 375 px para ambas sedes. Se reconstruyeron desde la jerarquía del final y se retiraron todas las capas de texto y los rellenos de imagen. La comprobación devuelve cero nodos TEXT y cero fotografías en las cuatro vistas. Las retículas incluyen dos promociones del lunes, cuatro postres, cuatro promociones de temporada y tres eventos; Estudios conserva sus tres grupos y el bloque de contacto.

El repositorio y el paquete usan el nombre prueba. Se agregó el workflow oficial de GitHub Pages, limitado a dist/, con las tres pruebas existentes antes de publicar. Las rutas de recursos son relativas para admitir el subdirectorio del repositorio.


## Publicación en GitHub Pages

Repositorio público: https://github.com/DrabCat/prueba. Sitio: https://drabcat.github.io/prueba/. Primera publicación: workflow 39306500949, commit 364c8425ca5e8a5a11a2addd6746f5513edc5195, resultado success; pruebas, carga de artefacto y despliegue completados. Se descargó una copia pública y se compararon los archivos: no faltan archivos ni hay diferencias de contenido o de binarios. Las tres pruebas pasan también en esa copia. La subida se realizó mediante la sesión del navegador del usuario; la integración GitHub devolvió 403 al intentar escribir un blob.


La URL de GitHub Pages se comprobó en el navegador: las tres fotografías y DM Sans cargan correctamente, las siete promociones del viernes aparecen y las trece indicaciones de Estudios se muestran al cambiar de sede. En 360, 375, 768 y 1440 px no hay desbordamiento horizontal. La captura prueba-github-pages.png corresponde a esta publicación.
