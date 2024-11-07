const axios = require("axios");

const token = "EAAEOuGUYaiMBO8IVXnfLMZBRSXQuX3a7NkZBLiVMiMqdh1B3CLqRSSqormH4OTz0payDi4kDHEhNyZCAVXgqbgoGZAI8m1ZACZAs5i0Yi0vmkBLEZB9vgIS18I4kGkVvZBusqLlmn10szjsTeL8csHkehk5KwCGqgo71zSxiYKrgQXZBklF5kc0up83USiXSxHCWl0CRXG1tpY78AxqUy4QcBCd5E0ukZD"; // Token de acceso
const phoneNumberId = "484990758028832"; // ID del número de teléfono
const templateName = "hello_world"; // Nombre de la plantilla aprobada

// Número de teléfono al que se enviará el mensaje
const phone = "573196558337"; // Reemplaza con el número de teléfono al que quieres enviar el mensaje

// Función para enviar un mensaje a un contacto específico
const sendMessage = async(phone) => {
    const url = `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`; // Usando la URL correcta con la versión de la API

    const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    };

    const data = {
        messaging_product: "whatsapp",
        to: phone,
        type: "template",
        template: {
            name: templateName,
            language: { code: "es" }, // Asegúrate de que el código del idioma esté configurado correctamente
        }
    };

    try {
        console.log(`Enviando mensaje a ${phone}...`);
        const response = await axios.post(url, data, { headers });
        console.log(`Mensaje enviado a ${phone}:`, response.data);
    } catch (error) {
        // Si el error tiene una respuesta, logueamos detalles más completos
        if (error.response) {
            console.error(`Error detallado:`);
            console.error(`Status: ${error.response.status}`);
            console.error(`Data:`, error.response.data);
            console.error(`Headers:`, error.response.headers);
        } else {
            console.error(`Error:`, error.message);
        }
    }
};

// Enviar un mensaje al número especificado
sendMessage(phone);