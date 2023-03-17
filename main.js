let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #e2aae2;">Soy Merchandiser y Estudiante de desarrollo sitios web en Tecnolochicas PRO.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
