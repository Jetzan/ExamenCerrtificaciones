module.exports = [
    {
        id: 1,
        text: "¿En qué se enfoca este framework?",
        options: ["Bases de Datos", "Interfaces de usuario", "Administración de servidores", "Manipulación del DOM con jQuery"],
        correct: "Interfaces de usuario"
    },
    {
        id: 2,
        text: "¿Quién fué el desarrollador de React?",
        options: ["Microsoft", "Facebook", "Google", "IBM"],
        correct: "Facebook"
    },
    {
        id: 3,
        text: "¿En qué lenguaje está basado React?",
        options: ["JavaScript", "C#", "Python", "PHP"],
        correct: "JavaScript"
    },
    {
        id: 4,
        text: "JSX en React es...",
        options: ["Una herramienta de depuración", "Un lenguaje independiente de JavaScript", "Un archivo de configuración", "Una extensión de JS que permite escribir HTML dentro del código"],
        correct: "Una extensión de JS que permite escribir HTML dentro del código"
    },
    {
        id: 5,
        text: "¿Cuál es el concepto que permite actualizar solo partes del DOM en React?",
        options: ["Virtual DOM", "Shadow DOM", "DOM directo", "Render DOM"],
        correct: "Virtual DOM"
    },
    {
        id: 6,
        text: "¿Qué método se usa para renderizar componentes en el DOM?",
        options: ["React.inject()", "renderComponent()", "ReactDOM.render()", "display()"],
        correct: "ReactDOM.render()"
    },
    {
        id: 7,
        text: "¿Qué son los “props” en React?",
        options: ["Un tipo de hook", "Estados locales", "Variables globales", "Propiedades que pasan de componente padre a hijo"],
        correct: "Propiedades que pasan de componente padre a hijo"
    },
    {
        id: 8,
        text: "¿Qué hook se utiliza para manejar el estado en un componente funcional?",
        options: ["setHook()", "useClass()", "useStatus()", "useState()"],
        correct: "useState()"
    },
    {
        id: 9,
        text: "¿Qué hook permite realizar efectos secundarios, como llamadas a APIs?",
        options: ["useEffect()", "useCall()", "useAsync()", "useFetch()"],
        correct: "useEffect()"
    },
    {
        id: 10,
        text: "¿Qué tipo de arquitectura sigue React?",
        options: ["Cliente-servidor", "Modelo Vista-Controlador", "Basada en componentes", "Monolítica"],
        correct: "Basada en componentes"
    },
    {
        id: 11,
        text: "¿Qué comando se usa para crear una nueva app de React con la herramienta oficial?",
        options: ["npm react-create", "npx create-react-app nombre", "npm start react", "npm create-react-app nombre"],
        correct: "npx create-react-app nombre"
    },
    {
        id: 12,
        text: "¿Qué significa el término 'componente' en React?",
        options: ["Una función o clase que define una parte reutilizable de la interfaz", "Un archivo que contiene estilos y scripts globales", "Un bloque de código que solo se ejecuta en el servidor", "Una unidad lógica y visual independiente que puede reutilizarse"],
        correct: "Una unidad lógica y visual independiente que puede reutilizarse"
    },
    {
        id: 13,
        text: "¿Cómo se pasa información de un componente padre a uno hijo?",
        options: ["A través de propiedades conocidas como props", "Utilizando context() para cada elemento del árbol", "Usando el hook useEffect para enviar datos al render hijo", "Mediante variables globales definidas con useState"],
        correct: "A través de propiedades conocidas como props"
    },
    {
        id: 14,
        text: "¿Qué se usa para manejar rutas en una aplicación React?",
        options: ["La librería react-router-dom", "El hook useNavigate() disponible por defecto en React", "El módulo path integrado en Node.js", "Un componente interno llamado RouteProvider"],
        correct: "La librería react-router-dom"
    },
    {
        id: 15,
        text: "¿Qué hook se usa para acceder a valores proporcionados por un contexto global?",
        options: ["useRef()", "useSharedState()", "useContext()", "useGlobal()"],
        correct: "useContext()"
    },
    {
        id: 16,
        text: "¿Qué archivo suele ser el punto de entrada principal en una app React creada con Create React App?",
        options: ["main.jsx, el cual controla los imports globales y la configuración", "index.html, ya que contiene el elemento raíz del DOM", "App.js, que contiene toda la lógica principal del proyecto", "index.js, donde se renderiza el componente raíz de la aplicación"],
        correct: "index.js, donde se renderiza el componente raíz de la aplicación"
    }
]; 