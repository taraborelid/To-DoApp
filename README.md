#  To-DoApp

Aplicación de lista de tareas construida con **React + Vite**.

Permite **crear, filtrar, completar y eliminar tareas**, con persistencia en `localStorage`.

---

##  Requisitos previos

* **Node.js** (versión 16 o superior recomendada)
* **npm** (se instala junto con Node)

---

##  Instalación

1.  Clonar el repositorio:
    ```bash
    git clone [https://github.com/tu-usuario/to-doapp.git](https://github.com/tu-usuario/to-doapp.git)
    ```
2.  Entrar al directorio del proyecto:
    ```bash
    cd to-doapp
    ```
3.  Instalar dependencias:
    ```bash
    npm install
    ```

---

##  Ejecución en desarrollo

```bash
npm run dev
Esto levantará un servidor local (por defecto en http://localhost:5173/).
```

##  Build para producción
```Bash
npm run build
```

###  Esto genera la carpeta dist/ lista para desplegar en cualquier hosting estático (Netlify, Vercel, GitHub Pages, etc.).

##  Previsualización del build

```
Bash
npm run preview
```

##  Estructura del proyecto

```
to-doapp/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes (Header, TaskForm, TaskList, etc.)
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos globales
│   └── main.jsx         # Punto de entrada
├── package.json
├── vite.config.js
└── README.md
```

##  Funcionalidades

- ➕ **Agregar tareas**  
- ✅ **Marcar como completadas**  
- 🔄 **Filtrar por estado** (todas, pendientes, completadas)  
- 🗑️ **Eliminar tareas**  
- 💾 **Persistencia en `localStorage`**
