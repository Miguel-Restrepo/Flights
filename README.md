# Proyecto FullStack .net Angular


1. En la carpeta "Documentación" se agregó el diagrama de arquitectura de la solución con el cual se realizó la aplicación: este diagrama se hizo cumpliendo los principios SOLID y KISS con el patrón de diseño para el Back de n-capas, siendo en este caso de 3 capas (API, Business, DataAccess).
2. Todo está hecho con programación orientada a objetos.
3. El backend en su capa "DataAccess" consume la API de vuelos, de igual forma, el Front consume al back como una REST API y tambien consume la API de vuelos.
4. Se realizo control de versión con GitHub--> este repositorio.
5. Para el Css se usó Bootstrap con  SCSS en el frontend (se puede apreciar en la configuración y en los archivos (.scss).
6. El Backend se desarrolló en .Net con Entity Framework.
7. El frontend se desarrolló  con Angular 14.0.1 y Node js 18.10.0.
8. Tanto en el backend como en el frontend se desarrolló control de excepciones (se aprecia más en el backend).


## ¿Qué no se hizo?


1.	No se hicieron logs de aplicación por no encontrar donde ubicarlos(Para que usarlos o donde usarlos).
2.	No se hicieron test unitarios por falta de tiempo.
3.	No se hicieron interceptores ni tokens por el corto alcance de lo pedido.



## Instrucciones para la ejecución:


1. Abrir la carpeta del proyecto en visual estudio.
2. Instalar dependencias faltantes (en caso de faltar).
3. Ejecutar proyecto.
4. Abrir un terminal en la carpeta Front.(cd Front desde la consola).
5. Ejecutar npm i en la consola.
5. 1. En caso de error ejecutar: npm i --force 
6. Ejecutar ng g 
7. Abrir el navegador y entrar al link: http://localhost:4200/ 
