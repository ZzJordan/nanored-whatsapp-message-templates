// Textos de la página (ES/EN). Generados a partir de los de nanoredlabs.com.
export interface PageContent {
  metaTitle: string; metaDescription: string; eyebrow: string; h1: string; answer: string; toolTitle: string; howToTitle: string
  howToSteps: [string, string][]
  sections: { title: string; paragraphs?: string[]; list?: string[] }[]
  limitsTitle: string; limits: string[]; faqTitle: string; faqs: [string, string][]
}

export const content: Record<'es' | 'en', PageContent> = {
  "es": {
    "metaTitle": "Plantillas de mensajes de WhatsApp para negocios | NanoRed Labs",
    "metaDescription": "Más de 60 plantillas gratis de WhatsApp para negocios: recordatorio de cita, confirmación, reseñas, presupuestos, cobros y fuera de horario. En español, inglés y francés.",
    "eyebrow": "Herramienta gratuita · ES, EN y FR",
    "h1": "Plantillas de mensajes de WhatsApp para negocios",
    "answer": "Esta herramienta gratuita de NanoRed Labs (Málaga) reúne más de 60 plantillas de mensajes de WhatsApp para negocios, en español, inglés y francés: recordatorio y confirmación de cita, cambio o cancelación, pedir una reseña, presupuesto enviado y su seguimiento, cobro pendiente, bienvenida y fuera de horario. Filtras por sector y tipo, rellenas nombre, fecha u hora una sola vez, y copias el mensaje o creas con él un enlace de WhatsApp. Funciona en tu navegador: lo que escribes no se envía a ningún servidor.",
    "toolTitle": "Elige y personaliza tu mensaje",
    "howToTitle": "Cómo se usa",
    "howToSteps": [
      [
        "Filtra",
        "Elige tu sector (o «General») y el tipo de mensaje que necesitas: recordatorio, reseña, cobro, fuera de horario… Y el idioma en que lo vas a enviar."
      ],
      [
        "Rellena los datos",
        "Escribe una vez el nombre del negocio, el del cliente, la fecha o la hora. Se ponen en todas las plantillas que ves; lo que dejes vacío queda entre llaves."
      ],
      [
        "Copia o crea el enlace",
        "Copia el texto para pegarlo en WhatsApp o en las respuestas rápidas de WhatsApp Business, o pulsa «Crear enlace de WhatsApp» para llevarlo al generador de enlaces y QR."
      ],
      [
        "Ajústalo a tu forma de hablar",
        "Son una base: cambia el tú por usted, añade tu firma o quita lo que no aplique. Un mensaje que suena a ti funciona mejor que uno perfecto."
      ]
    ],
    "sections": [
      {
        "title": "Cómo usarlas en WhatsApp Business",
        "list": [
          "Respuestas rápidas: guarda las que más uses con un atajo (por ejemplo, /recordatorio) y escríbelo en el chat para insertarlas.",
          "Mensaje de bienvenida y de ausencia: WhatsApp Business permite enviarlos solos al primer mensaje o fuera de tu horario; usa las plantillas de «Bienvenida» y «Fuera de horario».",
          "Enlaces con mensaje: con el generador de enlaces puedes poner un mensaje precargado en tu web, tu tarjeta o tu ficha de Google.",
          "Si usas la plataforma oficial de WhatsApp Business (la API), los mensajes que inicia el negocio fuera de la ventana de 24 horas deben ser plantillas aprobadas por Meta: estas te sirven de base para darlas de alta."
        ]
      },
      {
        "title": "Buenas prácticas",
        "list": [
          "Escribe solo a quien te ha dado su número para ese fin; para mensajes comerciales necesitas su consentimiento.",
          "Mensajes cortos, con lo importante al principio (día y hora) y una forma clara de responder.",
          "Para reseñas: pídelas a todos, sin ofrecer nada a cambio. Google prohíbe incentivar reseñas y también pedirlas solo a los clientes contentos.",
          "En cobros, tono amable y sin presión: muchas veces es un despiste o un pago que se ha cruzado.",
          "No envíes datos sensibles (diagnósticos, DNI, cuentas) por WhatsApp si no es imprescindible."
        ]
      }
    ],
    "limitsTitle": "Lo que conviene saber",
    "limits": [
      "Son textos de partida: revísalos y adáptalos a tu negocio antes de usarlos.",
      "La herramienta no envía mensajes ni se conecta a tu WhatsApp; solo prepara el texto.",
      "Las plantillas en inglés y francés están escritas para clientes de esos idiomas, no traducidas palabra por palabra; si tienes dudas con un matiz, pregúntanos.",
      "Para enviar recordatorios automáticos hace falta un sistema conectado a tu agenda y a tu WhatsApp."
    ],
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      [
        "¿Cómo escribo un recordatorio de cita por WhatsApp?",
        "Saluda por el nombre, di el día y la hora al principio, el sitio si hace falta y da una forma fácil de cambiar la cita: «Hola, Laura. Te recordamos tu cita el martes a las 10:30. Si no puedes venir, avísanos por aquí». En la herramienta tienes varias versiones por sector."
      ],
      [
        "¿Son gratis? ¿Puedo usarlas en mi negocio?",
        "Sí. Son gratuitas, sin registro, y puedes copiarlas, modificarlas y usarlas en tu negocio como quieras."
      ],
      [
        "¿Cómo pido una reseña en Google sin incumplir sus normas?",
        "Pídela a todos los clientes, sin ofrecer descuentos, regalos ni nada a cambio, y sin filtrar antes quién está contento. Las plantillas de reseña de esta herramienta siguen esas reglas: invitan a contar la experiencia, sea cual sea."
      ],
      [
        "¿Cómo pongo un mensaje automático de fuera de horario?",
        "En WhatsApp Business: Herramientas para la empresa → Mensaje de ausencia. Actívalo «fuera del horario comercial» y pega una de las plantillas de «Fuera de horario». Recuerda poner tu horario en el perfil."
      ],
      [
        "¿Puedo crear un enlace de WhatsApp con el mensaje ya escrito?",
        "Sí. Pulsa «Crear enlace de WhatsApp con este mensaje»: se abre nuestro generador de enlaces con el texto puesto. Solo tienes que escribir tu número para obtener el enlace wa.me y su código QR."
      ],
      [
        "¿Se guarda lo que escribo?",
        "No. Los datos que rellenas se sustituyen en tu navegador y no se envían a ningún servidor. Al pasar el mensaje al generador de enlaces, viaja en la parte de la dirección que el navegador no envía (después de #) y se borra de la barra al cargar."
      ],
      [
        "¿En qué idiomas están?",
        "En español, inglés y francés. Útil si atiendes a clientes extranjeros: eliges el idioma del mensaje independientemente del idioma de la página."
      ],
      [
        "¿Tú o usted?",
        "Las de clínicas, gestorías e inmobiliarias van de usted y el resto de tú, que es lo más habitual en cada caso. Cámbialo si en tu negocio se habla de otra forma."
      ]
    ]
  },
  "en": {
    "metaTitle": "WhatsApp message templates for business | NanoRed Labs",
    "metaDescription": "Over 60 free WhatsApp business templates: appointment reminders, confirmations, reviews, quotes, payment reminders and out-of-hours replies. In EN, ES and FR.",
    "eyebrow": "Free tool · EN, ES and FR",
    "h1": "WhatsApp message templates for business",
    "answer": "This free tool by NanoRed Labs (Málaga, Spain) collects over 60 WhatsApp message templates for businesses, in English, Spanish and French: appointment reminders and confirmations, changes and cancellations, review requests, quotes sent and follow-ups, friendly payment reminders, welcome and out-of-hours messages. Filter by sector and type, fill in the name, date or time once, then copy the message or turn it into a WhatsApp link. It runs in your browser: what you type is never sent to a server.",
    "toolTitle": "Choose and personalise your message",
    "howToTitle": "How to use it",
    "howToSteps": [
      [
        "Filter",
        "Choose your sector (or “General”) and the type of message you need: reminder, review, payment, out of hours… And the language you will send it in."
      ],
      [
        "Fill in the details",
        "Type the business name, customer name, date or time once. They are inserted into every template shown; anything left empty stays in braces."
      ],
      [
        "Copy or create the link",
        "Copy the text to paste into WhatsApp or WhatsApp Business quick replies, or press “Create a WhatsApp link” to take it to the link and QR generator."
      ],
      [
        "Make it sound like you",
        "They are a starting point: change the tone, add your sign-off or remove what does not apply. A message that sounds like you works better than a perfect one."
      ]
    ],
    "sections": [
      {
        "title": "How to use them in WhatsApp Business",
        "list": [
          "Quick replies: save the ones you use most with a shortcut (for example, /reminder) and type it in the chat to insert them.",
          "Greeting and away messages: WhatsApp Business can send them automatically on the first message or outside your hours; use the “Welcome” and “Out of hours” templates.",
          "Links with a message: with the link generator you can put a pre-filled message on your website, business card or Google profile.",
          "If you use the official WhatsApp Business Platform (the API), business-initiated messages outside the 24-hour window must be templates approved by Meta: these give you a base to submit."
        ]
      },
      {
        "title": "Good practice",
        "list": [
          "Only message people who gave you their number for that purpose; marketing messages need their consent.",
          "Short messages, with the key information first (day and time) and a clear way to reply.",
          "For reviews: ask everyone, without offering anything in return. Google prohibits incentivising reviews and asking only happy customers.",
          "For payments, a friendly tone with no pressure: it is often an oversight or a payment that crossed in the post.",
          "Do not send sensitive data (diagnoses, ID numbers, bank details) over WhatsApp unless it is essential."
        ]
      }
    ],
    "limitsTitle": "Good to know",
    "limits": [
      "They are starting texts: review and adapt them to your business before using them.",
      "The tool does not send messages or connect to your WhatsApp; it only prepares the text.",
      "The English and French templates are written for customers who speak those languages, not translated word for word; if you are unsure about a nuance, ask us.",
      "Sending reminders automatically needs a system connected to your diary and your WhatsApp."
    ],
    "faqTitle": "Frequently asked questions",
    "faqs": [
      [
        "How do I write an appointment reminder on WhatsApp?",
        "Greet the customer by name, put the day and time first, the place if needed, and give an easy way to change it: “Hi Laura, this is a reminder of your appointment on Tuesday at 10:30. If you can’t make it, just let us know here.” The tool has several versions by sector."
      ],
      [
        "Are they free? Can I use them in my business?",
        "Yes. They are free, with no sign-up, and you can copy, edit and use them in your business however you like."
      ],
      [
        "How do I ask for a Google review without breaking the rules?",
        "Ask every customer, without offering discounts, gifts or anything in return, and without first filtering out who is happy. The review templates in this tool follow those rules: they invite people to share their experience, whatever it was."
      ],
      [
        "How do I set up an automatic out-of-hours message?",
        "In WhatsApp Business: Business tools → Away message. Turn it on “outside of business hours” and paste one of the “Out of hours” templates. Remember to add your hours to your profile."
      ],
      [
        "Can I create a WhatsApp link with the message already typed?",
        "Yes. Press “Create a WhatsApp link with this message”: our link generator opens with the text in place. Just type your number to get the wa.me link and its QR code."
      ],
      [
        "Is what I type stored?",
        "No. The details you enter are inserted in your browser and never sent to a server. When the message is passed to the link generator, it travels in the part of the address the browser does not send (after #) and is removed from the address bar on load."
      ],
      [
        "Which languages are they in?",
        "English, Spanish and French. Useful if you serve international customers: you choose the message language independently of the page language."
      ],
      [
        "Formal or informal?",
        "The English templates use a friendly, polite tone that suits most businesses. The Spanish ones use “usted” for clinics, advisers and estate agents and “tú” for the rest; the French ones always use “vous”."
      ]
    ]
  }
}

export const meta = {
  "site": "https://nanoredlabs.com",
  "repo": "https://github.com/ZzJordan/nanored-whatsapp-message-templates",
  "urls": {
    "es": "https://nanoredlabs.com/herramientas/plantillas-mensajes-whatsapp",
    "en": "https://nanoredlabs.com/en/tools/whatsapp-message-templates"
  },
  "disclaimer": {
    "es": "NanoRed Labs (también escrito «Nano Red Labs») es el negocio de Jordan Moyano en Málaga. No tiene relación con Nano RED Biotechnology ni con otras empresas de nombre parecido.",
    "en": "NanoRed Labs (also written “Nano Red Labs”) is Jordan Moyano’s business in Málaga. It is not related to Nano RED Biotechnology or to other companies with a similar name."
  }
}
