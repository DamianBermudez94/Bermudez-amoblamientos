function headertComponet(el) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `  


  <!--Menu principal-->
  <div class="main-header__container">
      <a href="#" class="img_title"><img class="title-img" src="imagenes/IMG-20210315-WA0010.jpg" alt="bermudez-amoblamientos"></a>
      
      <div class="btn-menu">
        <div class="menu-btn_burger"></div>
      </div>
      <nav class="main-nav" id="main-nav">
          <ul class="menu">
              <li class="menu__items"><a href="Index.html" class="menu-link active">Inicio</a></li>
              <li class="menu__items container-menu__items"><a href="#" id="productos" class="menu-link">Productos</a>
                  <ul class="sub-menu" id="sub_menu">
                      <li class="sub-items"><a class="sub-link" href="indoor.html">Indoor</a></li>
                      <li class="sub-items"><a class="sub-link" href="oudoor.html">Oudoor</a></li>
                  </ul>
              </li>
              <li class="menu__items"><a href="index.html" class="menu-link">Sobre</a></li>
              <li class="menu__items"><a href="contacto.html" class="menu-link">Contacto</a></li>
          </ul>
      </nav>
      <div  class="main-header__container-redes">
        <a href="" class="redes-sociales"><i class="fab fa-facebook-square"></i></a>
        <a href="" class="redes-sociales"><i class="fab fa-instagram"></i></a>
        <a href="" class="redes-sociales"><i class="fab fa-whatsapp"></i></a>
      </div>
    
  </div>

  
           `;

  el.appendChild(headerEl);
}

// Animacion del menu

function menu() {
  let btnMenu = document.querySelector(".btn-menu");

  let mainNav = document.getElementById("main-nav");

  let containerMenu = document.querySelector(".container");
  let btnOpen = false;

  btnMenu.addEventListener("click", () => {
    mainNav.classList.toggle("mostrar");
    console.log(btnOpen);
    if (!btnOpen) {
      btnMenu.classList.add("open");
      btnOpen = true;
    } else {
      btnMenu.classList.remove("open");
      btnOpen = false;
    }
  });

  // Obtener todos los enlaces
  let links = document.querySelectorAll(".menu .menu__items .menu-link");
  console.log(links);
  // Función para mostrar sección activa y se ejecutará:
  //    1. Al cargar la página
  //    2. Cuando haya cambios de hash en la página actual
  function linkActive() {
    // Recorrer enlaces, no se necesita Array.from(), el objeto es iterable
    links.forEach((link) => {
      console.log(link);
      if (link.href == window.location.href) {
        // Marcar como activo si coincide con la URL de la ventana
        link.classList.add("active");
        // Cargar contenido o mostrar contenedor
      } else {
        // De lo contrario, desmarcar
        link.classList.remove("active");

        // Otras acciones, como ocultar contenedor
      }
    });
  }
  // Marcar enlace activo al cargar la página
  document.addEventListener("DOMContentLoaded", linkActive);

  // Marcar enlace activo cuando haya cambio de hash
  window.addEventListener("hashchange", linkActive);
}
