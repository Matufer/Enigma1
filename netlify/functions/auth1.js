exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const { password } = JSON.parse(event.body);
  const CORRECT = process.env.SECRET_PASSWORD;

  if (password !== CORRECT) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: "Contraseña incorrecta" })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      links: [
        {
          id: "wa",
          name: "WhatsApp",
          handle: "+595 986 929 253",
          url: "https://wa.me/595986929253"
        },
        {
          id: "ig",
          name: "Instagram",
          handle: "@enigma_investigaciones",
          url: "https://www.instagram.com/enigma_investigaciones?igsh=ODZtZXEycjloM2Jw"
        },
        {
          id: "fb",
          name: "Facebook",
          handle: "Enigma Investigaciones",
          url: "https://www.facebook.com/share/1NLyDm4waB/"
        },
        {
          id: "web",
          name: "Sitio web",
          handle: "enigma-investigaciones.com",
          url: "https://matufer.github.io/enigma/"
        }
      ]
    })
  };
};
