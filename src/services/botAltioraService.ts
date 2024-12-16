import { Request } from 'express';
import axios from 'axios';
import { enviroment } from '../configuration/environment';

// Respuestas predefinidas
const responses: { [key: string]: string } = {
    "hola": "¡Hola! ¿En qué puedo ayudarte?",
    "¿Qué servicios ofrecen?": "En Altiora ofrecemos desarrollo de software a medida, aplicaciones móviles, diseño web y soluciones de e-commerce para empresas en Jujuy y toda Argentina.",
    "¿Cuánto cuesta una página web?": "Nuestros precios varían según la complejidad del proyecto. Un sitio web básico puede comenzar desde $500 USD. ¿Te gustaría discutir más detalles?",
    "¿Hacen aplicaciones móviles?": "¡Sí! Desarrollamos aplicaciones móviles para Android y iOS. Cuéntanos más sobre tu idea.",
    "¿Qué tiempo tardan en entregar un proyecto?": "Depende del tamaño del proyecto. Por ejemplo, un sitio web básico puede estar listo en 4 semanas.",
    "¿Tienen experiencia en mi industria?": "Hemos trabajado con empresas de tecnología, comercio electrónico, educación y servicios. Cuéntanos más sobre tu negocio.",
    "¿Ofrecen mantenimiento?": "Sí, ofrecemos planes de mantenimiento para que tu sitio web o aplicación esté siempre actualizado y seguro.",
    "¿Pueden ayudarme con el SEO?": "¡Por supuesto! Ofrecemos estrategias de SEO personalizadas para mejorar tu posicionamiento en Google.",
    "¿Tienen ejemplos de proyectos realizados?": "¡Claro! Hemos trabajado en plataformas de e-commerce, sistemas de gestión y más. ¿Qué tipo de proyecto te interesa?",
    "¿Qué métodos de pago aceptan?": "Ofrecemos opciones flexibles de pago, como pagos por etapas del proyecto. ¿Quieres más detalles?",
    "¿Por qué debería elegir Altiora?": "Altiora combina experiencia, innovación y un enfoque personalizado para que tu proyecto sea un éxito.",
    "¿Dónde están ubicados?": "Estamos en Jujuy, Argentina, pero trabajamos con clientes de todo el país.",
    "¿Ofrecen soporte técnico?": "Sí, nuestro equipo está disponible para ayudarte con cualquier inconveniente.",
    "¿Qué tecnologías usan?": "Trabajamos con tecnologías modernas como React, Node.js, Next.js y más.",
    "¿Pueden integrar APIs?": "¡Sí! Somos expertos en la integración de APIs para expandir las funcionalidades de tu proyecto.",
    "¿Qué es una aplicación web?": "Una aplicación web es un software accesible desde cualquier navegador, ideal para gestionar tu negocio.",
    "¿Qué incluye el diseño web?": "Incluye diseño personalizado, optimización para dispositivos móviles y SEO básico.",
    "¿Qué tiempo tardan en responder?": "Nuestro equipo responde en un máximo de 24 horas. ¿En qué podemos ayudarte?",
    "¿Pueden manejar proyectos grandes?": "¡Claro que sí! Nuestro equipo está preparado para manejar proyectos complejos y escalables.",
    "¿Ofrecen capacitación?": "Sí, brindamos capacitación para que tu equipo pueda usar nuestras soluciones con confianza.",
    "¿Qué es un e-commerce?": "Es una tienda en línea que permite vender productos o servicios. ¿Quieres uno para tu negocio?",
    "¿Trabajan con clientes internacionales?": "Sí, trabajamos con clientes de diferentes países. ¡Contáctanos para más detalles!",
    "¿Pueden automatizar procesos?": "Implementamos soluciones de automatización para aumentar la eficiencia de tu negocio.",
    "¿Qué es el SEO?": "El SEO es la optimización para motores de búsqueda. Mejora tu visibilidad en Google.",
    "¿Qué es una API?": "Una API permite que diferentes sistemas se comuniquen entre sí para compartir datos y funcionalidades.",
    "¿Pueden hacer un sistema de gestión?": "¡Sí! Diseñamos sistemas de gestión personalizados para satisfacer las necesidades específicas de tu negocio.",
    "¿Tienen un blog?": "¡Sí! Visita nuestro sitio para leer artículos sobre tecnología y desarrollo de software.",
    "¿Ofrecen soluciones en la nube?": "Sí, diseñamos soluciones en la nube para garantizar accesibilidad y escalabilidad.",
    "¿Qué es una solución a medida?": "Es un desarrollo diseñado específicamente para las necesidades únicas de tu negocio.",
    "¿Pueden mejorar mi sitio web?": "¡Claro! Ofrecemos rediseño y optimización para mejorar la experiencia del usuario.",
    "¿Pueden manejar múltiples proyectos?": "Sí, contamos con un equipo experimentado capaz de trabajar en varios proyectos simultáneamente.",
    "¿Tienen una política de devoluciones?": "No aplicamos devoluciones, pero trabajamos contigo para garantizar tu satisfacción.",
    "¿Qué garantías ofrecen?": "Garantizamos soporte técnico y calidad en nuestras soluciones.",
    "¿Qué métodos de contacto tienen?": "Puedes escribirnos por WhatsApp, correo electrónico o a través de nuestro sitio web.",
    "¿Qué es una tienda online?": "Es una plataforma digital para vender tus productos o servicios. ¿Quieres que creemos una para tu negocio?",
    "¿Pueden trabajar con mi equipo actual?": "Sí, podemos colaborar con tu equipo para integrar nuestras soluciones con las tuyas.",
    "¿Qué datos necesitan para comenzar?": "Un brief del proyecto, tu objetivo y tus ideas principales.",
    "¿Qué hace único a Altiora?": "Nos enfocamos en soluciones personalizadas, tecnología moderna y un trato cercano con nuestros clientes."
  };

export const botAltioraService = async (req: Request) => {
  try {
    const userQuery = req.body.query?.toLowerCase() || "";

    for (const keyword in responses) {
      if (userQuery.includes(keyword)) {
        return { response: responses[keyword] };
      }
    }

    return { response: "No entendí tu consulta, pero podemos ayudarte. Cuéntame más sobre lo que necesitas." };
  } catch (error) {
    throw new Error("Error en service consult");
  }
};
