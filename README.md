# Portafolio Personal

Portafolio personal desarrollado con React como parte de la evaluación de Desarrollo Fullstack II.

## Tecnologías utilizadas

- React
- JavaScript
- HTML
- CSS
- Bootstrap
- Jasmine
- Karma
- Istanbul / Karma Coverage

## Características

El portafolio incluye:

- Sección Sobre mí
- Proyectos
- Noticias cargadas desde JSON
- Formulario de contacto
- Diseño responsivo
- Componentes reutilizables
- Uso de props y state
- Validación de formulario
- Pruebas unitarias
- Reporte de cobertura

## Arquitectura de componentes

El proyecto utiliza una estructura basada en diseño molecular:

```text
components/
├── atoms/
├── molecules/
└── organisms/
```

### Atoms

Componentes básicos y reutilizables, como `CustomButton`.

### Molecules

Componentes formados a partir de elementos más pequeños, como:

- `ProjectCard`
- `NewsCard`

### Organisms

Secciones completas de la interfaz:

- `Navbar`
- `AboutSection`
- `ProjectsSection`
- `NewsSection`
- `ContactSection`

## Instalación

Clonar el repositorio:

```bash
git clone URL-DEL-REPOSITORIO
```

Entrar al proyecto:

```bash
cd mi-portafolio
```

Instalar dependencias:

```bash
npm install
```

## Ejecutar aplicación

```bash
npm start
```

La aplicación se ejecutará en modo desarrollo.

## Ejecutar pruebas

```bash
npm test
```

Las pruebas utilizan Jasmine y Karma con Chrome Headless.

## Cobertura

Al ejecutar:

```bash
npm test
```

también se genera el reporte de cobertura.

El informe HTML se encuentra en:

```text
coverage/html/index.html
```

## Pruebas implementadas

Se comprueba:

- Renderizado de componentes.
- Uso correcto de props.
- Enlaces.
- Renderizado del formulario.
- Validación del formulario.
- Eventos.
- Modificaciones del DOM.

Los casos se encuentran documentados en:

```text
PLAN_PRUEBAS.md
```

## Diseño responsivo

La interfaz utiliza Bootstrap Grid para adaptarse a distintos tamaños de pantalla.

Las tarjetas de proyectos se distribuyen en:

- 1 columna en dispositivos pequeños.
- 2 columnas en dispositivos medianos.
- 3 columnas en dispositivos grandes.

La barra de navegación también se adapta a dispositivos móviles mediante el menú desplegable de Bootstrap.

## Accesibilidad

Se incorporan características como:

- Texto alternativo en imágenes.
- Labels asociados a los campos del formulario.
- Atributos ARIA en elementos de navegación.
- Elementos HTML semánticos.

## Autor

Cesar Corvalan