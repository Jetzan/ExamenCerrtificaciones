const elementMain = document.getElementById("main");

const buttonInicio = document.getElementById("button-inicio");
const buttonCertificaciones = document.getElementById("button-certificaciones");
const buttonContacto = document.getElementById("button-contacto");
const buttonNosotros = document.getElementById("button-sobreNosotros");
const buttonIniciarSesion = document.getElementById("button-iniciarSesion");
const buttonCerrarSesion = document.getElementById("button-cerrarSesion");
const formInicio = document.getElementById("formularioIniciar");

let buttonVerCertificaciones = document.getElementById("ver-certificaciones");

let buttonPagarReact;
let buttonEnviarSesion;
let cuentaLogeada;
let examenPagado = false;


const API = "http://10.13.123.186:3000/api/questions";

const paginas = new Map();
paginas.set(
  "inicio",
  `<section class="hero-inicio">
        <h3 class="eslogan">
          Valida tus conocimientos en los frameworks más usados del mundo.
        </h3>
        <h2 class="title-inicio">
          Obtén certificaciones oficiales en React, Next, Express y más.
        </h2>
        <button id="ver-certificaciones">Ver certificaciones</button>
      </section>

      <section class="cards-main">
        <div class="card-main"><img src="img/demuestraTusH.jpg" alt=""><p>Demuestra tus habilidades profesionales.</p></div>
        <div class="card-main"><img src="img/oportunidadesL.jpg" alt=""><p>Aumenta tus oportunidades laborales.</p></div>
        <div class="card-main"><img src="img/mapaPines.jpg" alt=""><p>Certificaciones válidas internacionalmente.</p></div>
        <div class="card-main"><img src="img/aprenderProgra.png" alt=""><p>Aprende con evaluaciones prácticas.</p></div>
      </section>

      <section class="section-inicio">
        <div class="section-inicio-left">
          <h1 class="porque-certifcarte">
            PORQUE DEBES <span>CERTIFICARTE</span> EN NUESTRO PROGRAMA
          </h1>
          <p class="info-empresa">
            En Code Validated creemos que la validación del código es más que un
            proceso: es el sentir. En un mundo donde la tecnología avanza
            constantemente y las empresas buscan estar un paso adelante, contar
            con una certificación te brinda un respaldo y una ventaja
            competitiva tangible, sólida y confiable.
          </p>
        </div>
        <div class="section-inicio-right">
          <img src="img/caracteristicas.png" alt="" />
        </div>
      </section>`
);

paginas.set(
  "certificaciones",
  `<section class="info-certificaciones">
    <h2>Opciones de certificación disponible
</h2>
    En Code Validated creemos que la validación del código es más que un
    proceso: es el sentir. En un mundo donde la tecnología avanza constantemente
    y las empresas buscan estar un paso adelante, contar con una certificación
    te brinda un respaldo y una ventaja competitiva tangible, sólida y
    confiable.
</section>
<section class="certificaciones">
    <div class="card-certificacion">
    <h3 class="name-certificacion">Certificación en React.js</h3>
    <p class="descripcion-certificacion">Acredita tus conocimientos en la creación de interfaces interactivas con componentes reutilizables usando React.</p>
    <ul class="list-ventajas">
        <li class="li-ventaja">Mejora tus oportunidades laborales.</li>
        <li class="li-ventaja">Demuestra dominio en desarrollo frontend moderno.</li>
        <li class="li-ventaja">Refuerza tu portafolio profesional.</li>
        <li class="li-ventaja">Te prepara para trabajar en proyectos de alta demanda.</li>
    </ul>
    <p class="puntuacionMinima">Puntuación mínima: 70%</p>
    <p class="tiempoExamen">Tiempo del examen: 60 minutos</p>
    <p class="costoExamen">Costo: USD 99</p>
    <button class="btnPagar" id="pagarReact">Pagar</button>
    <button class="btnIniciar" id="iniciarReact">Iniciar examen</button>
</div>

<div class="card-certificacion">
    <h3 class="name-certificacion">Certificación en Next.js</h3>
    <p class="descripcion-certificacion">Demuestra tus habilidades en renderizado del lado del servidor (SSR), generación estática y optimización con Next.js.</p>
    <ul class="list-ventajas">
        <li class="li-ventaja">Te posiciona como desarrollador fullstack moderno.</li>
        <li class="li-ventaja">Aumenta tu valor en proyectos empresariales.</li>
        <li class="li-ventaja">Mejora tu comprensión de despliegue y rendimiento web.</li>
        <li class="li-ventaja">Te permite acceder a oportunidades internacionales.</li>
    </ul>
    <p class="puntuacionMinima">Puntuación mínima: 75%</p>
    <p class="tiempoExamen">Tiempo del examen: 90 minutos</p>
    <p class="costoExamen">Costo: USD 120</p>
    <button class="btnPagar" id="pagarNext" disabled>Pagar</button>
    <button class="btnIniciar" id="iniciarNext" disabled>Iniciar examen</button>
    <p class="no-disponible">Disponible desde el 22/11/2025</p>
</div>

<div class="card-certificacion">
    <h3 class="name-certificacion">Certificación en .NET</h3>
    <p class="descripcion-certificacion">Valida tus conocimientos en desarrollo de aplicaciones robustas y seguras con C# y el framework .NET.</p>
    <ul class="list-ventajas">
        <li class="li-ventaja">Reconocida internacionalmente por Microsoft.</li>
        <li class="li-ventaja">Ideal para entornos corporativos y gubernamentales.</li>
        <li class="li-ventaja">Amplía tus posibilidades en el sector empresarial.</li>
        <li class="li-ventaja">Acredita experiencia en tecnologías Microsoft.</li>
    </ul>
    <p class="puntuacionMinima">Puntuación mínima: 700 / 1000</p>
    <p class="tiempoExamen">Tiempo del examen: 120 minutos</p>
    <p class="costoExamen">Costo: USD 165</p>
    <button class="btnPagar" id="pagarDotNet" disabled>Pagar</button>
    <button class="btnIniciar" id="iniciarDotNet" disabled>Iniciar examen</button>
    <p class="no-disponible" >Disponible desde el 28/11/2025</p>
</div>

<div class="card-certificacion">
    <h3 class="name-certificacion">Certificación en Express.js</h3>
    <p class="descripcion-certificacion">Certifica tus habilidades en el desarrollo de APIs y aplicaciones backend usando Node.js y Express.</p>
    <ul class="list-ventajas">
        <li class="li-ventaja">Te acredita como desarrollador backend competente.</li>
        <li class="li-ventaja">Mejora tu manejo de rutas, middleware y APIs REST.</li>
        <li class="li-ventaja">Fortalece tu perfil para proyectos fullstack.</li>
        <li class="li-ventaja">Facilita el acceso a puestos de desarrollo en servidores.</li>
    </ul>
    <p class="puntuacionMinima">Puntuación mínima: 70%</p>
    <p class="tiempoExamen">Tiempo del examen: 75 minutos</p>
    <p class="costoExamen">Costo: USD 89</p>
    <button class="btnPagar" id="pagarExpress" disabled>Pagar</button>
    <button class="btnIniciar" id="iniciarExpress" disabled>Iniciar examen</button>
    <p class="no-disponible">Disponible desde el 08/12/2025</p>
</div>

</section>`
);

paginas.set(
  "contacto",
  `
  <section class="section-contacto">
    <h2>Contacto</h2>
    <h4>Tu opinión es muy importante para nosotros. Si tienes dudas, sugerencias o comentarios sobre nuestras certificaciones, no dudes en escribirnos. ¡Estamos aquí para ayudarte! </h4>
    <form action="" id="form-contacto">
        <label for="input-nombre">Nombre:</label><input type="text" id="input-nombre" placeholder="Ingresa tu nombre">
        <label for="input-correo">Correo:</label><input type="email" id="input-correo" placeholder="Ingresa tu correo">
        <label for="input-mensaje">Mensaje</label>
        <textarea name="mensaje" id="input-mensaje" placeholder="Ingresa tu mensaje"></textarea>
        <input id="enviar-mensaje" type="submit" value="Enviar">
    </form>
</section>`
);

paginas.set(
  "nosotros",
  `
 <section class="section-nosotros">
  <h2>Sobre Nosotros</h2>
  <p class="info-nostros">
    En CertiFrameworks, creemos que la mejor forma de aprender es compartiendo
    conocimiento con pasión, experiencia y compromiso. Nuestro equipo está
    conformado por tres entusiastas de la tecnología y el desarrollo web que
    buscan impulsar el aprendizaje de frameworks modernos a través de
    certificaciones prácticas y actualizadas.
  </p>
  <div class="container-anfitriones-nosotros">
    <div class="card-anfitrion">
      <h3 class="name-instructor">Ángel Gael</h3>
      <img src="img/angelN.png" alt="">
      <p class="descripcion-instructor">
        Desarrollador frontend con un gran interés por las interfaces limpias y
        responsivas. Ángel domina frameworks como React.js y Next.js,
        enfocándose en brindar experiencias de usuario intuitivas y modernas. Su
        objetivo es que cada estudiante aprenda a crear proyectos visualmente
        atractivos y bien estructurados.
      </p>
    </div>
    <div class="card-anfitrion">
      <h3 class="name-instructor">Hugo Ernesto</h3>
      <img src="img/hugoN.png" alt="">
      <p class="descripcion-instructor">
        Apasionado por el desarrollo backend y la arquitectura de software. Hugo
        se especializa en la creación de APIs seguras y escalables con Node.js,
        Express y bases de datos MySQL. Su enfoque es enseñar a comprender la
        lógica detrás del código, ayudando a los estudiantes a construir
        aplicaciones funcionales desde cero.
      </p>
    </div>
    <div class="card-anfitrion">
      <h3 class="name-instructor">Jetzan Azael</h3>
      <img src="img/jetzanN.png" alt="">
      <p class="descripcion-instructor">
        Ingeniero en Sistemas Computacionales y entusiasta del aprendizaje
        constante. Jetzan combina conocimientos en programación, diseño web y
        redes, aportando una visión integral al equipo. Su meta es hacer que la
        tecnología sea accesible para todos, guiando a los alumnos paso a paso
        hacia la certificación profesional.
      </p>
    </div>
  </div>
</section>


`
);

let formularioActivo = false;

let pagarCursoBack = async () => {
  if (cuentaLogeada) {
    const user = cuentaLogeada;

    const res = await fetch("http://10.13.123.186:3000/api/pagar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        cuenta: user,
      }),
    });
    const data = await res.json();

    console.log(data);

    if (res.ok) {
      const pago = data.usuario.pago;
      if (pago) {
        ban = true;
        console.log("----------------------------");
        document.getElementById("pagarReact").style.display = "none";
      }
    }
  }
};

let pagarCurso = () => {
  if (!cuentaLogeada) {
    Swal.fire({
      icon: "warning",
      title: "Inicia sesión para continuar",
      text: "Para pagar el curso debes iniciar sesión primero.",
      confirmButtonText: "Iniciar sesión",
      confirmButtonColor: "#f8bb86",
    }).then((result) => {
      if (result.isConfirmed) {
        buttonIniciarSesion.click();
      }
    });
  } else {
    pagarCursoBack();
    Swal.fire({
      title: "¡Curso pagado con éxito!",
      text: "Gracias por tu compra. Ya puedes acceder al contenido.",
      icon: "success",
      confirmButtonText: "Aceptar",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }
};

let verificarPago = async () => {
  const user = cuentaLogeada;

  const res = await fetch("http://10.13.123.186:3000/api/verificar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      cuenta: user,
    }),
  });
  const data = await res.json();
  if (res.ok) {
    const pago = data.usuario.pago;
    if(pago=="false"){
      return;
    }
    if (pago ) {
      examenPagado = true;
    }
  }
};
let realizado = false;
let verificarRealizado = async () => {
  const user = cuentaLogeada;

 

  const res = await fetch("http://10.13.123.186:3000/api/realizado", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      cuenta: user,
    }),
  });
  const data = await res.json();

  if (res.ok) {
    const realizadoBack = data.usuario.realizado;
    console.log(realizadoBack);
    console.log(realizado);
    if (realizadoBack=="false") {
      realizado = false;
      return;
    }else{
      realizado=true;
    }
  }
};

function mezclar(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let preguntas = [];

let revisarPreguntas = async (e) => {
  e.preventDefault();
  console.log("a");
  const answers = preguntas.map((q) => {
    const selected = document.querySelector(`input[name="q_${q.id}"]:checked`);
    return { id: q.id, answer: selected ? selected.value : "" };
  });
  const res = await fetch(`${API}/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userName: localStorage.getItem("userName"),
      answers,
    }),
  });
  if (!res.ok) throw new Error(`Error del servidor: ${res.status}`);
  const data = await res.json();

  console.log(res);
  console.log("-");
  console.log(data);

  if (data.certificado) {
    const base = "http://10.13.123.186:3000";
    window.open(base + data.certificado, "_blank");
  }

  elementMain.textContent = "";
  elementMain.innerHTML = `
        <h2 class="title-revision">Resultado: ${data.score}/${data.total}</h2>
        ${data.details
          .map(
            (d) => `
                <div class="card-revision">
                    <p class="text-question-revision">${d.text}</p>
                    <p class="respuesta-question-revision">Tu respuesta: ${
                      d.yourAnswer == "" ? "(sin responder)" : d.yourAnswer
                    }</p>
                    <p class="correcta-question-revision">Correcta: ${
                      d.correctAnswer
                    }</p>
                    <br>
                    <p class="${d.correct ? "ok" : "bad"}">
                    ${d.correct ? " Correcto" : " Incorrecto"}
                    </p>
                </div>
            `
          )
          .join("")}
    `;

};


let iniciarExamen = async () => {
  if (cuentaLogeada) {
    await verificarPago();
    if (examenPagado) {
      if (realizado) {
        Swal.fire({
          icon: "warning",
          title: "Examen ya realizado",
          text: "Solo puedes hacer el examen una vez.",
          confirmButtonText: "Ok",
          confirmButtonColor: "#f8bb86",
        }).then((result) => {
          if (result.isConfirmed) {
            buttonIniciarSesion.click();
          }
        });
      } else {
        const res = await fetch(`${API}/start`, { method: "POST" });
        const data = await res.json();
        preguntas = data.questions;

        elementMain.textContent = "";
        console.log(preguntas);
        let iterador=1;
        let formularioText = `
        <h2 class="title-certifiacion-examen">Examen de certificación - React.js</h2>
        <h3 class="completa-certificacion">Instrucciones: Selecciona la respuesta correcta para cada pregunta y luego presiona "Terminar examen" para enviar tus respuestas.</h3>
        <h3 class="time-examen">Tiempo restante: 60 minutos</h3>
        <h3 class="total-questions-examen">Total de preguntas: ${preguntas.length}</h3>
        <h3 class="score-examen">Puntuación mínima para aprobar: 70%</h3>
        <h4 class="fecha-examen">Fecha de examen: ${new Date().toLocaleDateString()}</h4>
        `;
         formularioText += `<form id="form-examen">`;
        preguntas.forEach((q) => {
          // Mezclamos las opciones antes de mostrarlas
          const opcionesAleatorias = mezclar(q.options);

          // Mostramos la pregunta
          formularioText += `
    <div class="card-question">
      <p class="question-text">${iterador}${q.text}</p>
      ${opcionesAleatorias
        .map(
          (opt) => `
            <label>
              <input type="radio" name="q_${q.id}" value="${opt}">
              ${opt}
            </label><br>
          `
        )
        .join("")}
    </div>
  `;
  iterador++;
        });
        formularioText += `<input value="Terminar examen"type="submit" id="button-terminar">
  </form>`;
        elementMain.innerHTML = formularioText;
        document
          .getElementById("form-examen")
          .addEventListener("submit", revisarPreguntas);
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Paga el examen para continuar",
        text: "Para iniciar el examen debes pagarlo.",
        confirmButtonText: "Ok",
        confirmButtonColor: "#f8bb86",
      });
    }
  } else {
    Swal.fire({
      icon: "warning",
      title: "Inicia sesión para continuar",
      text: "Para pagar el curso debes iniciar sesión primero.",
      confirmButtonText: "Iniciar sesión",
      confirmButtonColor: "#f8bb86",
    }).then((result) => {
      if (result.isConfirmed) {
        buttonIniciarSesion.click();
      }
    });
  }
};

let cargarCertificaciones =async () => {
  if (formularioActivo) {
    document.getElementById("container-iniciarSesion").style.display = "none";
    formularioActivo = false;
  }

  elementMain.style.display = "block";
  elementMain.textContent = "";
  elementMain.innerHTML = paginas.get("certificaciones");
  buttonPagarReact = document.getElementById("pagarReact");
  buttonPagarReact.addEventListener("click", pagarCurso);
  buttonIniciarExamen = document.getElementById("iniciarReact");
  buttonIniciarExamen.addEventListener("click", iniciarExamen);
  examenPagado = false;
  await verificarPago();
  console.log(examenPagado);
  if (examenPagado) {
    buttonPagarReact.style.display = "none";
  }
  realizado=false;
   await verificarRealizado();
  if (realizado) {
  // Mantener visible el botón, pero avisar al hacer clic
  buttonIniciarExamen.addEventListener("click", () => {
    Swal.fire({
      icon: "info",
      title: "Examen ya realizado",
      text: "Ya completaste este examen. Solo puedes hacerlo una vez.",
      confirmButtonText: "Entendido",
      confirmButtonColor: "#4CAF50",
    });
  });
}

};

let enviarMensaje = async (e) => {
  e.preventDefault();
  let nombreUser = document.getElementById("input-nombre").value.trim();
  let correoUser = document.getElementById("input-correo").value.trim();
  let mensajeUser = document.getElementById("input-mensaje").value.trim();

  if (!nombreUser || !correoUser || !mensajeUser) {
    Swal.fire({
      icon: "warning",
      title: "Campos vacíos",
      text: "Por favor llena todos los campos antes de enviar.",
      confirmButtonColor: "#f8bb86",
    });
    return;
  }

  try {
    const res = await fetch("http://10.13.123.186:3000/api/comentarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cuenta: nombreUser,
        correo: correoUser,
        mensaje: mensajeUser,
      }),
    });

    // Esperar la respuesta JSON
    const data = await res.json();
    console.log("Respuesta del servidor:", data);
    if (res.ok) {
      await Swal.fire({
        icon: "success",
        title: "Comentario Enviado",
        text: "Tu comentario se envió con éxito",
        confirmButtonText: "Continuar",
        confirmButtonColor: "#4CAF50",
      });

      // Limpia los campos
      document.getElementById("input-nombre").value = "";
      document.getElementById("input-correo").value = "";
      document.getElementById("input-mensaje").value = "";
    } else {
      Swal.fire({
        icon: "error",
        title: "Error al enviar",
        text: data?.error ?? "Ocurrió un error al enviar tu comentario.",
        confirmButtonColor: "#e53935",
      });
    }
  } catch (error) {
    console.error("Error de conexión:", error);
    Swal.fire({
      icon: "error",
      title: "Error de conexión",
      text: "No se pudo conectar con el servidor.",
      confirmButtonColor: "#e53935",
    });
  }
};


let cargarContacto = () => {
  if (formularioActivo) {
    document.getElementById("container-iniciarSesion").style.display = "none";
    formularioActivo = false;
  }
  elementMain.style.display = "block";
  elementMain.textContent = "";
  elementMain.innerHTML = paginas.get("contacto");
  document.getElementById("form-contacto").addEventListener("submit",enviarMensaje);

};
let cargarNosotros = () => {
  elementMain.textContent = "";
  elementMain.innerHTML = paginas.get("nosotros");
};

let cargarInicio = () => {
  if (formularioActivo) {
    document.getElementById("container-iniciarSesion").style.display = "none";
    formularioActivo = false;
  }
  elementMain.style.display = "block";
  elementMain.textContent = "";
  elementMain.innerHTML = paginas.get("inicio");
  buttonVerCertificaciones = document.getElementById("ver-certificaciones");
  buttonVerCertificaciones.addEventListener("click", cargarCertificaciones);
};

let actualizarUISesion = (cuenta) => {
  document.getElementById("nameUserHeader").textContent = cuenta;
  buttonIniciarSesion.style.display = "none";
  document.getElementById("button-cerrarSesion").style.display = "list-item";
  elementMain.style.display = "block";
  // document.getElementById("formulario-iniciarSesion").style.display="none";
};

formInicio.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameLoginInput = document.getElementById("input-name").value;
  const contrasenaInput = document.getElementById("input-contrasena").value;

  try {
    const res = await fetch("http://10.13.123.186:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cuenta: nameLoginInput,
        contrasena: contrasenaInput,
      }),
    });

    let data;
    try {
      data = await res.json();
    } catch (parseErr) {
      console.warn("Respuesta no JSON del servidor", parseErr);
      data = {};
    }

    if (res.ok) {
      const cuenta = data.usuario?.cuenta;
      const token = data.token;

      localStorage.setItem("token", token);
      localStorage.setItem("userName", cuenta);

      // 1. PRIMERO: Limpiar los campos

      Swal.fire({
        icon: "success",
        title: "Acceso permitido",
        text: "Bienvenido, " + cuenta + " 🎉",
        confirmButtonText: "Continuar",
        confirmButtonColor: "#4CAF50",
      });

      actualizarUISesion(cuenta);

      // 3. DESPUÉS: Ocultar el formulario
      document.getElementById("container-iniciarSesion").style.display = "none";
      formularioActivo = false;

      document.getElementById("input-name").value = "";
      document.getElementById("input-contrasena").value = "";

      cuentaLogeada = cuenta;
    } else {
      Swal.fire({
        icon: "error",
        title: "Error al conectar con el servidor",
        text: data?.error ?? `Error ${res.status}`,
        confirmButtonText: "Reintentar",
        confirmButtonColor: "#d33",
      });
    }
  } catch (err) {
    console.error("Error al conectar con el servidor:", err);
    Swal.fire({
      icon: "error",
      title: "Error de conexión",
      text: "No se pudo conectar con el servidor. Inténtalo nuevamente.",
      confirmButtonText: "Reintentar",
      confirmButtonColor: "#d33",
    });
  }
});
let cargarFormularioSesion = (e) => {
  formularioActivo = true;
  elementMain.style.display = "none";
  document.getElementById("container-iniciarSesion").style.display = "flex";
};

let actualizarUICerrarSesion = () => {
  document.getElementById("nameUserHeader").textContent = "";
  buttonIniciarSesion.style.display = "inline-flex";
  document.getElementById("button-cerrarSesion").style.display = "none";
};
let cerrarSesion = async () => {
  try {
    const res = await fetch("http://10.13.123.186:3000/api/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (res.ok) {
      Swal.fire({
        icon: "info",
        title: "Sesión cerrada",
        text: "Sesión cerrada correctamente.",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6",
      });

      cuentaLogeada = null;
      examenPagado = false;
      realizado = false;
    } else {
      const data = await res.json();
      Swal.fire({
        icon: "error",
        title: "Error al cerrar sesión",
        text: data?.error ?? "Ocurrió un problema al cerrar sesión.",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#d33",
      });
    }
  } catch (err) {
    console.error("Error al conectar con el servidor:", err);
    Swal.fire({
      icon: "error",
      title: "Error de conexión",
      text: "No se pudo establecer la conexión con el servidor.",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#d33",
    });
  } finally {
    // Siempre limpiar localStorage y actualizar UI, incluso si hay error
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    actualizarUICerrarSesion();
  }
};

buttonCertificaciones.addEventListener("click", cargarCertificaciones);
buttonContacto.addEventListener("click", cargarContacto);
buttonNosotros.addEventListener("click", cargarNosotros);
buttonInicio.addEventListener("click", cargarInicio);
buttonIniciarSesion.addEventListener("click", cargarFormularioSesion);
buttonCerrarSesion.addEventListener("click", cerrarSesion);

buttonVerCertificaciones.addEventListener("click", cargarCertificaciones);

function checkSession() {
  const userName = localStorage.getItem("userName");
  if (userName) {
    actualizarUISesion(userName);
    cuentaLogeada = userName;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  checkSession();
});