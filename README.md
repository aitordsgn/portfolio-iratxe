
# Iratxe Conde Turon - Portfolio

Este es un proyecto de página web para el portafolio personal de **Iratxe Conde Turon**. El objetivo de este proyecto es proporcionar una plataforma donde Iratxe pueda mostrar sus trabajos, habilidades y experiencia de una manera atractiva y fácil de navegar.



## Características principales

- **Presentación de proyectos:** Presentación de los proyectos mas importantes que ha creado y en los que ha formado parte Iratxe.
- **Información adicional:** Información adicional sobre la experiencía de la que dispone y los estudios que ha realizado Iratxe.


### Capturas de pantalla de la web de La Velada IV

![Captura de pantalla en ordenador](https://github.com/aitordsgn/portfolio-iratxe/blob/88b38d994f623ab48683019ccdd4c743200f8843/public/Readme1.jpg)
![Captura de pantalla en móvil](https://github.com/aitordsgn/portfolio-iratxe/blob/88b38d994f623ab48683019ccdd4c743200f8843/public/Readme2.jpg)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>



<details>
<summary>Tabla de contenidos</summary>

- [Web oficial de La Velada IV](#web-oficial-de-la-velada-iv)
- [Características principales](#características-principales)
  - [Capturas de pantalla de la web de La Velada IV](#capturas-de-pantalla-de-la-web-de-la-velada-iv)
- [Para empezar](#para-empezar)
  - [Prerequisitos](#prerequisitos)
  - [Instalación](#instalación)
- [Contribuir al proyecto](#contribuir-al-proyecto)
  - [Contribuir desde Stackblitz](#contribuir-desde-stackblitz)
- [🛠️ Stack](#️-stack)

</details>

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>


## Contribuir al proyecto

Las contribuciones son lo que hacen que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. ¡Cualquier contribución que hagas es **muy apreciada**!

Si tienes alguna sugerencia que podría mejorar el proyecto, por favor haz un [_fork_](https://github.com/aitordsgn/portfolio-iratxe/fork) del repositorio y crea una [_pull request_](https://github.com/aitordsgn/portfolio-iratxe/pulls). También puedes simplemente abrir un [_issue_](https://github.com/aitordsgn/portfolio-iratxe/issues) con la etiqueta "enhancement".

Aquí tienes una guía rápida:

1. Haz un [_fork_](https://github.com/aitordsgn/portfolio-iratxe/fork) del Proyecto
2. Clona tu [_fork_](https://github.com/aitordsgn/portfolio-iratxe/fork) (`git clone <URL del fork>`)
3. Añade el repositorio original como remoto (`git remote add upstream <URL del repositorio original>`)
4. Crea tu Rama de Funcionalidad (`git switch -c feature/CaracteristicaIncreible`)
5. Realiza tus Cambios (`git commit -m 'Add: alguna CaracterísticaIncreible'`)
6. Haz Push a la Rama (`git push origin feature/CaracteristicaIncreible`)
7. Abre una [_pull request_](https://github.com/aitordsgn/portfolio-iratxe/pulls)

Por favor, consulta nuestra [guía de contribución](https://github.com/aitordsgn/portfolio-iratxe/blob/master/CONTRIBUTING.md) para saber cómo puedes empezar de la mejor manera y siguiendo [buenas prácticas](https://github.com/aitordsgn/portfolio-iratxe/blob/main/CONTRIBUTING.md#buenas-prácticas-).

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Para empezar

### Prerequisitos

- NVM (recomendado para asegurar versión de Node) ver [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

  ```sh
  nvm use
  # o
  nvm use <version>
  ```

  > Si quieres automatizar el proceso, puedes crear un script siguiendo la [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)

<details>
	<summary>Pequeño script de automatización</summary>
	
- En Linux/MacOS:
	```sh
	# .bashrc | .zshrc | cualquier archivo de configuración
	# pequeño script para cambiar de version al entrar al directorio
	cd() {
  builtin cd "$@"
		if [[ -f .nvmrc ]]; then
			nvm use > /dev/null
			# Si quieres que te diga la versión
			nvm use
		fi
	}
	```

- En Windows:

  ```powershell
  # $PROFILE
  function Change-Node-Version {
  	param($path)
  	& Set-Location $path
  	$pwd = pwd
  	if ( Test-Path "$pwd\\.nvmrc" ) {
  		$version = Get-Content .nvmrc
  		nvm use $version
  	}
  }
  New-Alias -Name cd -Value Change-Node-Version -Force -Option AllScope
  ```

  </details>

- PNPM (es nuestra recomendación por su eficiencia y rapidez)

  ```sh
  npm install -g pnpm
  ```

- o NPM

  ```sh
  npm install npm@latest -g
  ```

### Instalación

1. Clona el repositorio

   ```sh
   git clone https://github.com/midudev/la-velada-web-oficial.git
   ```

2. Instala los paquetes de NPM

   ```sh
   pnpm install
   ```

3. Ejecuta el proyecto
	 - Base de datos remota (necesario linkear con proyecto de Astro Studio)
   ```sh
   pnpm run dev
   ```
   - Base de datos local
   ```sh
   pnpm run start
   ```
   
<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Autores

- [@aitordsgn](https://github.com/aitordsgn)
- [Iratxeconde](https://www.linkedin.com/in/iratxeconde/)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>


## 🛠️ Stack

- [![Astro][astro-badge]][astro-url] - The web framework for content-driven websites.
- [![Typescript][typescript-badge]][typescript-url] - JavaScript with syntax for types.
- [![Tailwind CSS][tailwind-badge]][tailwind-url] - A utility-first CSS framework for rapidly building custom designs.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

[astro-url]: https://astro.build/
[typescript-url]: https://www.typescriptlang.org/
[tailwind-url]: https://tailwindcss.com/
[astro-badge]: https://img.shields.io/badge/Astro-fff?style=for-the-badge&logo=astro&logoColor=bd303a&color=352563
[typescript-badge]: https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&color=blue
[tailwind-badge]: https://img.shields.io/badge/Tailwind-ffffff?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8
