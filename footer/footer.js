function footerComponet(el) {
  const footerEl = document.createElement("div");
  footerEl.innerHTML = `  <div class="container-footer"> 
    <div class="footer-section">
        <h2 class="title-footer">Sobre nosotros</h2>
        <p class="footer-txt">Somos una empresa que nos caracterizamos por el compromiso y la calidad de nuestros productos</p>
        <a href="" class="redes-footer"><i class="fab fa-whatsapp"></i></a>
        <a href="" class="redes-footer"><i class="fab fa-instagram"></i></a>
        <a href="" class="redes-footer"><i class="fab fa-facebook-square"></i></a>
    </div>

    <div class="footer-section">
      <h2 class="title-footer">localidad</h2>
      <p class="footer-txt"><i class="fas fa-map-marker-alt redes"></i>Lobos | Provincia de Bs As - Argentina / Direccion: Soldado Echave Nº 780</p>
      
    </div>
    <div class="footer-section">
      <h2 class="title-footer">Contacto</h2>
      <p class="footer-txt"><i class="fas fa-phone-alt redes"></i>011-458452</p>
      <p class="footer-txt"><i class="far fa-envelope redes"></i>bermudez-amoblamientos@gmail.com</p>
    </div>
   
    
    
  </div>
  <div class="container-copy">
    <p class="copy">&copy; Bermudez amoblamientos - 2021 | Todos los derechos reservados </p>
  </div>
  `;

  el.appendChild(footerEl);
  console.log("sadasdasd", footerEl);
}
