alert("JS cargado");
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = "❤️Te Amo Dulcee❤️".split("");
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff69b4";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const heart = hearts[Math.floor(Math.random() * hearts.length)];
    ctx.fillText(heart, i * fontSize, drops[i] * fontSize);
     console.log(heart);

    if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 75);
const texto = `Hola mi Amor Dulce ❤️

Quiero que sepas lo mucho que significás para mí. Estar contigo es lo mejor que me ha pasado, 
y no necesito pensarlo dos veces para decirlo. Me haces feliz, me das paz y también emoción, 
y eso no lo encuentro y no lo encontrare en nadie más.

Me encanta estar a tu lado. Hablar contigo, reírnos de cualquier cosa, abrazarte, mirarte sin razon . 
Eres esa persona que elijo cada día con ganas, con seguridad, sin pensarlo.

No estás en mi vida por casualidad, estás porque lo quiero, porque te quiero a ti, 
y porque todo es mejor cuando estás cerca de mi.

Gracias por ser parte de mi vida. No solo eres mi pareja,eres mi compañera, mi apoyo y mi mejor momento del día. 
Ojalá nunca dejés de serlo, porque no me imagino estar sin ti mi rayito de luzluzluzl.

Te amo mucho mucho mucho mucho. ❤️
`;

let i = 0;

function escribir() {
  if (i < texto.length) {
    document.getElementById("mensaje").textContent += texto.charAt(i);
    i++;
    setTimeout(escribir, 50); // velocidad de escritura
  }
}

escribir();
