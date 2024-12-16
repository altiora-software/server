import axios from 'axios';
import { Request, Response } from 'express';
import { generateResponse } from './openAiController';

// Verificación del Webhook
export const verifyWebhook = (req: Request, res: Response) => {
  const VERIFY_TOKEN = "EAAIDSOODJlEBOZCy1NaDtu1xJquVGYo7NrgypN0XuePCXqwDrs921pjgpQleZAJeDmWV8twqZCl3AIqTORCUkl1Tmt7W2ZCHuIbSwi9MrD1wTCzSsRHGaLb3gsTvUZBHZAxC5UZB4vtJbAiGf0ihsF1AEXUbcnr3jyMN0Mi0q6n9K8kQo55UOpBCBY2Qhi7baPxZAbsuMR8rHi7nOCbNg3a8WRWmXe84x3XcSLYZD"; // Define un token en el panel de Meta y ponlo aquí

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("Webhook verificado");
    res.status(200).send(challenge);
  } else {
    res.status(403).send("Error en la verificación");
  }
};

// Manejo de mensajes entrantes
export const handleMessage = async (req: Request, res: Response) => {
  try {
    const entry = req.body.entry[0];
    const changes = entry.changes[0];
    const messageData = changes.value.messages[0];
    const from = messageData.from; // Número del remitente
    const text = messageData.text.body; // Mensaje enviado

    console.log(`Mensaje recibido de ${from}: ${text}`);

    // Generar respuesta desde OpenAI
    const aiResponse = await generateResponse(text);

    // Enviar la respuesta al usuario
    await axios.post(
      `${process.env.META_API_URL}/${process.env.META_PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: from,
        text: { body: aiResponse },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.META_ACCESS_TOKEN}`,
        },
      }
    );

    res.status(200).send("Mensaje manejado correctamente");
  } catch (error) {
    console.error("Error al manejar el mensaje:", error);
    res.status(500).send("Error al procesar el mensaje");
  }
};
