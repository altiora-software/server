import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'OPENAI_API_KEY', // Define tu clave de API aquí
});

export const generateResponse = async (message: string): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4", // Puedes usar "text-davinci-003" o "gpt-4"
      messages: [
        {
          role: "system",
          content: "Eres un asistente especializado en Altiora Software. Responde de manera clara y precisa.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    return response.choices[0].message?.content || "No entendí tu consulta.";
  } catch (error) {
    console.error("Error al generar la respuesta de OpenAI:", error);
    return "Ocurrió un error al procesar tu consulta.";
  }
};
