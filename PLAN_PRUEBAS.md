# Plan de Pruebas - Portafolio Personal

## 1. Objetivo

El objetivo de este plan es verificar el correcto funcionamiento de los componentes principales del portafolio desarrollado en React.

Las pruebas unitarias se realizan utilizando Jasmine como framework de pruebas y Karma como ejecutor de pruebas en el navegador.

## 2. Entorno de pruebas

- Framework Frontend: React
- Framework de pruebas: Jasmine
- Test Runner: Karma
- Navegador de pruebas: Chrome Headless
- Cobertura de código: Karma Coverage / Istanbul

## 3. Casos de prueba

### CP-001 - Renderizado del texto de CustomButton

**Componente:** CustomButton

**Objetivo:** Verificar que el componente muestre correctamente el texto recibido mediante props.

**Datos de entrada:**
- text: "Ver proyecto"

**Resultado esperado:**
El botón debe mostrar el texto "Ver proyecto".

---

### CP-002 - Enlace de CustomButton

**Componente:** CustomButton

**Objetivo:** Verificar que el componente utilice correctamente el enlace recibido mediante props.

**Datos de entrada:**
- href: "https://example.com"

**Resultado esperado:**
El atributo href debe contener el enlace recibido.

---

### CP-003 - Renderizado del formulario

**Componente:** ContactSection

**Objetivo:** Verificar que el formulario de contacto se renderice correctamente.

**Resultado esperado:**
Deben existir:
- Formulario
- Campo de nombre
- Campo de mensaje

---

### CP-004 - Validación de formulario vacío

**Componente:** ContactSection

**Objetivo:** Verificar la validación cuando el usuario intenta enviar el formulario sin completar los campos.

**Resultado esperado:**
Debe mostrarse el mensaje:

"Por favor, completa todos los campos."

---

### CP-005 - Envío válido del formulario

**Componente:** ContactSection

**Objetivo:** Verificar el comportamiento del formulario cuando se ingresan datos válidos.

**Datos de entrada:**
- Nombre: Alejandro
- Mensaje: Mensaje de prueba

**Resultado esperado:**
Debe mostrarse el mensaje:

"Mensaje enviado correctamente."

## 4. Cobertura

El proyecto genera un reporte de cobertura utilizando Karma Coverage e Istanbul.

El reporte considera:

- Statements
- Branches
- Functions
- Lines

El informe HTML se genera en la carpeta `coverage/html`.

## 5. Resultado

Las pruebas implementadas permiten verificar el renderizado de componentes, uso de props, validación de datos, manejo de eventos y cambios en el DOM.

Los casos de prueba son ejecutados automáticamente mediante el comando:

npm test