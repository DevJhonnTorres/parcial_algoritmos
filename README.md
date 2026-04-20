# parcial_algoritmos

## Descripcion general

Este proyecto es una mini experiencia web inspirada en **El Chapulin Colorado**, desarrollada con **Next.js**, **React** y **Framer Motion**. La idea principal fue construir una interfaz que no se sintiera como una pagina estatica tradicional, sino como una **app interactiva con estilo de videojuego**, con animaciones, transiciones suaves, contenido dinamico y feedback visual en cada accion.

La aplicacion cumple con la idea planteada en el parcial:

- pantalla splash de bienvenida durante 3 segundos
- sidebar animado en la parte superior izquierda
- contenido dinamico sin recargar la pagina
- interfaz tipo HUD o panel de videojuego
- animaciones de entrada, impacto y cambio de seccion
- uso de imagenes y efectos para reforzar la experiencia visual

---

## Objetivo del proyecto

El objetivo fue aplicar conceptos de organizacion de componentes, renderizado dinamico y diseño de interfaces interactivas, tomando como base una tematica conocida: **El Chapulin Colorado**.

No se busco solamente mostrar informacion, sino construir una interfaz que transmitiera:

- rapidez
- interactividad
- sensacion de juego
- respuesta inmediata a las acciones del usuario

---

## Tecnologias utilizadas

- **Next.js 15**: framework principal del proyecto
- **React 19**: construccion de la interfaz basada en componentes
- **Framer Motion**: animaciones del splash, sidebar, tarjetas y transiciones
- **CSS global**: estilos personalizados para el look de videojuego
- **Web Audio API**: generacion de sonidos arcade simples sin depender de archivos externos

---

## Estructura clave del proyecto

```bash
app/
├── globals.css
├── layout.js
├── not-found.js
└── page.js

components/
├── AttackButton.js
├── Content.js
├── EnemyCard.js
├── EnergyBar.js
├── Sidebar.js
└── SplashScreen.js

data/
└── sections.js

public/
├── images/
│   ├── chapulin-hero-real.png
│   ├── chapulin-hero.svg
│   ├── chapulin-logo.svg
│   └── chapulin-splash.png
└── sounds/

utils/
├── animations.js
└── sound.js
```

---

## Explicacion de la estructura

### `app/page.js`

Es el punto principal de la aplicacion. Aqui se controla todo el flujo general:

- se muestra primero la pantalla splash
- despues de 3 segundos se entra a la app principal
- se controla la seccion activa del contenido
- se maneja el estado del sidebar
- se actualiza la energia, el combo y el estado del heroe

En otras palabras, este archivo funciona como el **centro de control** de la interfaz.

### `components/SplashScreen.js`

Este componente representa la pantalla inicial. Su funcion es:

- mostrar la imagen principal de introduccion
- aplicar una animacion de entrada
- desaparecer automaticamente luego de 3 segundos

Esto cumple con el requerimiento de una **pantalla splash estilo app real**.

### `components/Sidebar.js`

Este componente implementa el menu lateral animado que aparece desde la izquierda. Aqui se encuentran las secciones:

- Inicio
- Misiones
- Armas
- Enemigos
- Habilidades
- Aliados

El sidebar responde al clic del usuario y cambia la seccion sin recargar la pagina.

### `components/Content.js`

Es el componente mas importante en la parte visual. Su trabajo es mostrar el contenido dinamico segun la opcion seleccionada en el sidebar.

Tambien incluye:

- el HUD superior
- la informacion del heroe
- las tarjetas de informacion
- la imagen principal del personaje
- las transiciones entre secciones

Aqui fue donde se aplico la idea de convertir la pagina en una experiencia tipo videojuego.

### `components/AttackButton.js`

Representa un boton interactivo con estilo arcade. Cuando el usuario hace clic:

- se dispara una animacion
- se reproduce un sonido
- se incrementa el combo
- se refuerza la idea de ataque o accion

### `components/EnemyCard.js`

Muestra enemigos animados en la seccion correspondiente. Cada tarjeta entra con movimiento lateral y responde a la interaccion del usuario con un efecto de golpe.

### `components/EnergyBar.js`

Es la barra de energia del HUD. Visualmente ayuda a reforzar la idea de panel de videojuego y cambia de ancho de forma animada.

### `data/sections.js`

Aqui se centralizan los datos del proyecto. En lugar de escribir el contenido directamente en muchos componentes, se organiza la informacion en un solo archivo para:

- mantener el proyecto mas limpio
- separar datos de presentacion
- facilitar el cambio de textos y secciones

### `utils/animations.js`

Contiene animaciones reutilizables, por ejemplo:

- efecto bounce
- efecto de golpe

Esto evita repetir configuraciones de animacion en distintos componentes.

### `utils/sound.js`

Genera sonidos simples usando la Web Audio API. Se utilizo para dar feedback arcade al abrir menu o atacar.

### `app/globals.css`

En este archivo se definio toda la identidad visual:

- colores rojos y amarillos inspirados en el Chapulin
- estilo HUD
- tarjetas de vidrio o panel translúcido
- sombras
- responsive design

---

## Flujo de la app

El flujo final de la aplicacion es el siguiente:

1. Al cargar el proyecto aparece una **pantalla splash** con la imagen principal del Chapulin.
2. Despues de 3 segundos la pantalla desaparece automaticamente.
3. Se muestra la app principal con:
   - sidebar animado
   - HUD superior
   - seccion inicial de bienvenida
4. El usuario puede navegar entre las secciones desde el sidebar.
5. Cada cambio de seccion ocurre sin recargar la pagina.
6. Algunas interacciones activan animaciones, barra de energia, golpes o sonidos.

---

## Como se aplico exactamente lo solicitado

### 1. Pantalla splash

Se implemento en `SplashScreen.js` con:

- `useEffect` para el temporizador de 3 segundos
- `motion.section` y `motion.img` para la animacion
- salida automatica al terminar el tiempo

### 2. Sidebar animado

Se implemento en `Sidebar.js` con:

- boton tactico en la esquina superior izquierda
- animacion lateral con Framer Motion
- seleccion dinamica de secciones

### 3. Contenido dinamico

Se implemento en `Content.js` usando renderizado condicional. Dependiendo de la seccion activa, la interfaz cambia entre:

- inicio
- misiones
- armas
- enemigos
- habilidades
- aliados

### 4. Sensacion premium o modo videojuego

Se aplico mediante:

- HUD superior con energia y combo
- botones con efectos `hover` y `tap`
- tarjetas con movimiento
- enemigos interactivos
- combo visual
- transiciones entre paneles
- colores y glow inspirados en videojuegos

### 5. Sonido y feedback

Se utilizo `utils/sound.js` para generar sonidos cortos al:

- abrir menu
- cambiar seccion
- atacar enemigos

---

## Decisiones de diseño

Se eligio un diseño en tonos rojos, dorados y oscuros para mantener coherencia con la identidad visual del personaje. El resultado busca mezclar dos ideas:

- la nostalgia del Chapulin Colorado
- una interfaz moderna de videojuego web

La imagen del heroe en el panel principal se dejo separada del splash para poder cambiarla sin alterar el flujo inicial de la app.

---

## Como ejecutar el proyecto

### Requisitos

- Node.js 20 o 22

El proyecto se fijo con `.nvmrc` en:

```bash
v22.22.0
```

Esto se hizo porque con Node 24 aparecieron errores de desarrollo de Webpack en `next dev`.

### Pasos

```bash
cd "/Users/Alex/Desktop/pagina chapulin"
nvm use
npm install
npm run dev
```

Luego abrir:

```bash
http://localhost:3000
```

---

## Conclusiones

Este parcial no solo presenta una estructura organizada en componentes, sino que tambien demuestra:

- manejo de estados en React
- separacion clara entre logica, datos y presentacion
- uso de animaciones modernas
- diseño interactivo centrado en la experiencia del usuario
- capacidad de transformar una idea visual en una aplicacion funcional

En conclusion, el proyecto cumple con lo solicitado y lo lleva un paso mas alla al convertir la pagina en una **mini experiencia tipo videojuego** basada en el universo del **Chapulin Colorado**.
