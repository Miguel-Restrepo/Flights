# Proyecto FullStack .net Angular

- En la carpeta "Documentacion" se agrego el diagrama de arquitectura de la solución con el cual se realizo la aplicación: este diagrama se hizo cumpliendo los principios SOLID y KISS con el patron de diseño para el Back de n-capas, siendo en este caso de 3 capas(API, Business, DataAccess)
- Todo esta hecho con programación orientada a objetos
- El back en su capa "DataAccess" consume la API de vuelos, de igual forma, el Front consume al back como una REST API y tambien consume la API de vuelos
- Se realizo control de version con GitHub--> este repositorio
- Para el Css se uso Boopstrap con  SCSS en el front(se puede apreciar en la configuracion y en los archivos .scss)
- el Backend se desarrollo en .nNet con Entity Framework
- El front se desarrolo  con Angular 14.0.1 y Node js 18.10.0
- Tanto en el back como en el front se desarrollo control de excepciones (se aprecia mas en el back)


## ¿Qué no se hizo?
- No se hicieron logs de aplicacion por no encontrar donde ubicarlos
- No se hicieron test unitarios por falta de tiempo
- No se hicieron interceptors ni tokens por el corto alcance de lo pedido

## Instrucciones para la ejecución:


1. Abrir la solucion o carpeta en visual estudio
2. Instalar dependencias faltantes(en caso de faltar)
3. Ejecutar proyecto
4. Seguir con las instrucciones del README en al carpeta front
5. Abrir un terminal en la carpeta Front
6. Ejecutar npm i
6. 1. En caso de error ejecutar: npm i --force
7. Ejecutar ng g 
8. Abrir el navegador y entrar al link: http://localhost:4200/