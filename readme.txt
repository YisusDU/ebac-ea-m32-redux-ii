Vamos a comenzar convirtiendo el archivo de estilos globales a ts, para que quede todo más uniforme

Primero creamos un archivo de typos llamado types.d.ts, dentro de la carpeta theme
    -En dicho archivo creamos los timpos para cada key value de nuestro index.ts de theme
    -Exportamos DeafultTheme desde types.d.ts y lo importamos y asignamos a index.ts de theme 


--Vale, ahora lo primero sera crar la carpeta del estado, con los slices
    -Estaré utilizando el proyecto Mini-store de Testing con react como ejemplo principal
    -Tenemos que instalar Redux Toolkit con el comando npm install @reduxjs/toolkit    //Es la herramienta de Redux toolkit
    -Tambien es necesario instalar React Redux con el comando npm install react-redux   //Es el puente entre Redux y React
        -Como estamos trabajando con TS, es necesario tipar los datos al hacer un set del estado, para ello es ncesario importar PayloadAction en el Slice

--He creado un reducer para añadir guias, ahora vamos por el store
    -Creamos la carpeta App dentro de src, y dentro pasamos la app como tal, y añadimos el archivo store.ts
    -Devemos envolver la app con provider para que los componentes puedan acceder al estado, esto es desde el index.tsx global
    -En la store hemos creado un tipado llamado RootState y AppDispatch, que tenemos que añadir a un nuevo custom hook para poder usar useSelector y useDispatch

--NOTA
    -He configurado el tsconfig.json para que reciba un atajo a la ruta src como @ lo que ahorra tener que hacer "../../../../."
    /*-/-He vuelto a la confiuracion anterior, por que create react app (CRA) no es compatible con @/ :,v
