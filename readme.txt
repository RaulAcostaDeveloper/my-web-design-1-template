Bienvenido a tu App
Usa los styledComponents para construir tu web page
Las rutas de la app como /products se configuran a través de las carpetas en /app
Los assets y componentes están separados de la lógica del renderizado
El layout.tsx es el elemento que se va a renderizar a partir de la ruta actuál
El layout.tsx es heredado por las rutas hijas
El page.tsx es el elemento que se va a renderizar en la ruta actuál
Configura los objetos de configuración para cada componente de estilos.
Asegura usar entidades para caracteres especiales. Ejemplo: á: &aacute;
Las propiedades de elementos que son arreglos como contentOfFixProblemInnerSection1.cards ya tienen el número ideal de elementos a renderizar
Sin embargo en algunos casos se seguiran viendo bien si añadimos más elementos y en otros casos no.
1._ Importar todos los archivos .sass a /src/app/global.scss
2._ Genera componentes en /pageConfig que funcionen como páginas independientes.