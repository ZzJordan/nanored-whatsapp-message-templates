/**
 * Plantillas de mensajes de WhatsApp para negocios (/herramientas/plantillas-mensajes-whatsapp).
 * Textos ES/EN/FR escritos a mano; las variables usan claves fijas ({nombre}, {fecha}…) y se muestran con el
 * nombre del idioma del mensaje ({name}, {nom}…). Reglas: sin promesas, sin presión, y las de reseña piden la
 * opinión sea cual sea, sin ofrecer nada a cambio (Google lo prohíbe) y sin filtrar a los clientes contentos.
 */

export type MessageLanguage = 'es' | 'en' | 'fr'

export const TEMPLATE_SECTORS = ['general', 'clinica', 'peluqueria', 'taller', 'gestoria', 'restaurante', 'inmobiliaria', 'tienda'] as const
export type TemplateSector = (typeof TEMPLATE_SECTORS)[number]

export const TEMPLATE_TYPES = ['recordatorio', 'confirmacion', 'cambio', 'resena', 'presupuesto', 'seguimiento', 'cobro', 'bienvenida', 'fuera_horario'] as const
export type TemplateType = (typeof TEMPLATE_TYPES)[number]

export const SECTOR_LABELS: Record<TemplateSector, { es: string; en: string }> = {
  general: { es: 'General (cualquier negocio)', en: 'General (any business)' },
  clinica: { es: 'Clínica y salud', en: 'Clinic and healthcare' },
  peluqueria: { es: 'Peluquería y estética', en: 'Hair and beauty' },
  taller: { es: 'Taller mecánico', en: 'Car repair garage' },
  gestoria: { es: 'Gestoría y asesoría', en: 'Accountancy and advisory firm' },
  restaurante: { es: 'Restaurante', en: 'Restaurant' },
  inmobiliaria: { es: 'Inmobiliaria', en: 'Estate agency' },
  tienda: { es: 'Tienda', en: 'Shop' },
}

export const TYPE_LABELS: Record<TemplateType, { es: string; en: string }> = {
  recordatorio: { es: 'Recordatorio de cita', en: 'Appointment reminder' },
  confirmacion: { es: 'Confirmación', en: 'Confirmation' },
  cambio: { es: 'Cambio o cancelación', en: 'Change or cancellation' },
  resena: { es: 'Pedir una reseña', en: 'Asking for a review' },
  presupuesto: { es: 'Presupuesto enviado', en: 'Quote sent' },
  seguimiento: { es: 'Seguimiento de presupuesto', en: 'Quote follow-up' },
  cobro: { es: 'Cobro pendiente (amable)', en: 'Friendly payment reminder' },
  bienvenida: { es: 'Bienvenida', en: 'Welcome' },
  fuera_horario: { es: 'Fuera de horario', en: 'Out of hours' },
}

export const MESSAGE_LANGUAGE_LABELS: Record<MessageLanguage, { es: string; en: string }> = {
  es: { es: 'Español', en: 'Spanish' },
  en: { es: 'Inglés', en: 'English' },
  fr: { es: 'Francés', en: 'French' },
}

/** Variables admitidas: clave fija → cómo se ve en cada idioma del mensaje y su etiqueta en el formulario. */
export const TEMPLATE_VARIABLES = {
  nombre: { token: { es: 'nombre', en: 'name', fr: 'nom' }, label: { es: 'Nombre del cliente', en: 'Customer name' }, example: { es: 'Laura', en: 'Laura' } },
  negocio: { token: { es: 'negocio', en: 'business', fr: 'entreprise' }, label: { es: 'Nombre del negocio', en: 'Business name' }, example: { es: 'Clínica Sol', en: 'Sol Clinic' } },
  fecha: { token: { es: 'fecha', en: 'date', fr: 'date' }, label: { es: 'Fecha', en: 'Date' }, example: { es: 'martes 3 de marzo', en: 'Tuesday 3 March' } },
  hora: { token: { es: 'hora', en: 'time', fr: 'heure' }, label: { es: 'Hora', en: 'Time' }, example: { es: '10:30', en: '10:30' } },
  servicio: { token: { es: 'servicio', en: 'service', fr: 'service' }, label: { es: 'Servicio o producto', en: 'Service or product' }, example: { es: 'la revisión', en: 'the check-up' } },
  direccion: { token: { es: 'direccion', en: 'address', fr: 'adresse' }, label: { es: 'Dirección', en: 'Address' }, example: { es: 'Calle Larios 1', en: '1 High Street' } },
  enlace: { token: { es: 'enlace', en: 'link', fr: 'lien' }, label: { es: 'Enlace (reseñas, carta, pago…)', en: 'Link (reviews, menu, payment…)' }, example: { es: 'https://…', en: 'https://…' } },
  importe: { token: { es: 'importe', en: 'amount', fr: 'montant' }, label: { es: 'Importe', en: 'Amount' }, example: { es: '120 €', en: '€120' } },
  referencia: { token: { es: 'referencia', en: 'reference', fr: 'référence' }, label: { es: 'Referencia (factura, pedido…)', en: 'Reference (invoice, order…)' }, example: { es: 'F-2026-014', en: 'INV-014' } },
  horario: { token: { es: 'horario', en: 'hours', fr: 'horaires' }, label: { es: 'Horario', en: 'Opening hours' }, example: { es: 'de lunes a viernes, de 9:00 a 14:00', en: 'Monday to Friday, 9:00 to 14:00' } },
} as const
export type TemplateVariable = keyof typeof TEMPLATE_VARIABLES
export const VARIABLE_KEYS = Object.keys(TEMPLATE_VARIABLES) as TemplateVariable[]

export interface WhatsAppTemplate {
  id: string
  sector: TemplateSector
  type: TemplateType
  text: Record<MessageLanguage, string>
}

const t = (id: string, sector: TemplateSector, type: TemplateType, es: string, en: string, fr: string): WhatsAppTemplate => ({ id, sector, type, text: { es, en, fr } })

export const WHATSAPP_TEMPLATES: WhatsAppTemplate[] = [
  // ── General ─────────────────────────────────────────────────────────────
  t('general-recordatorio', 'general', 'recordatorio',
    'Hola, {nombre}. Te recordamos tu cita en {negocio} el {fecha} a las {hora}. Si no puedes venir, avísanos por aquí y te buscamos otro hueco. ¡Gracias!',
    'Hi {nombre}, this is a reminder of your appointment at {negocio} on {fecha} at {hora}. If you can’t make it, just let us know here and we’ll find you another slot. Thank you!',
    'Bonjour {nombre}, nous vous rappelons votre rendez-vous chez {negocio} le {fecha} à {hora}. Si vous ne pouvez pas venir, prévenez-nous ici et nous vous proposerons un autre créneau. Merci !'),
  t('general-recordatorio-respuesta', 'general', 'recordatorio',
    'Hola, {nombre}: tienes cita en {negocio} el {fecha} a las {hora}. ¿Nos confirmas que vienes? Responde «Sí» para confirmar o «Cambiar» si necesitas otra hora.',
    'Hi {nombre}, you have an appointment at {negocio} on {fecha} at {hora}. Can you confirm you’re coming? Reply “Yes” to confirm or “Change” if you need another time.',
    'Bonjour {nombre}, vous avez rendez-vous chez {negocio} le {fecha} à {hora}. Pouvez-vous nous confirmer votre venue ? Répondez « Oui » pour confirmer ou « Changer » si vous avez besoin d’un autre horaire.'),
  t('general-confirmacion', 'general', 'confirmacion',
    'Hola, {nombre}. Tu cita en {negocio} queda confirmada para el {fecha} a las {hora}. Estamos en {direccion}. Si necesitas cambiarla, escríbenos por aquí.',
    'Hi {nombre}, your appointment at {negocio} is confirmed for {fecha} at {hora}. You’ll find us at {direccion}. If you need to change it, just message us here.',
    'Bonjour {nombre}, votre rendez-vous chez {negocio} est confirmé pour le {fecha} à {hora}. Nous sommes au {direccion}. Si vous devez le modifier, écrivez-nous ici.'),
  t('general-cambio', 'general', 'cambio',
    'Hola, {nombre}. Por un imprevisto tenemos que cambiar tu cita del {fecha} a las {hora}. Sentimos las molestias. ¿Qué días y horas te vienen bien? Te proponemos el primer hueco que encaje.',
    'Hi {nombre}, due to an unforeseen issue we need to move your appointment on {fecha} at {hora}. We’re sorry for the inconvenience. Which days and times suit you? We’ll offer you the first slot that fits.',
    'Bonjour {nombre}, suite à un imprévu, nous devons déplacer votre rendez-vous du {fecha} à {hora}. Veuillez nous excuser pour la gêne occasionnée. Quels jours et horaires vous conviennent ? Nous vous proposerons le premier créneau disponible.'),
  t('general-cancelacion', 'general', 'cambio',
    'Hola, {nombre}. Hemos anulado tu cita del {fecha} a las {hora}, como nos pediste. Cuando quieras volver a reservar, escríbenos por aquí. ¡Un saludo!',
    'Hi {nombre}, we’ve cancelled your appointment on {fecha} at {hora}, as you asked. Whenever you’d like to book again, just message us here. Best wishes!',
    'Bonjour {nombre}, nous avons annulé votre rendez-vous du {fecha} à {hora}, comme vous nous l’avez demandé. Quand vous souhaiterez reprendre rendez-vous, écrivez-nous ici. Bonne journée !'),
  t('general-resena', 'general', 'resena',
    'Hola, {nombre}. Gracias por confiar en {negocio}. Si tienes un momento, nos ayudaría mucho que contaras tu experiencia en Google, sea cual sea: {enlace}. Y si algo no fue como esperabas, dínoslo por aquí para mejorarlo.',
    'Hi {nombre}, thank you for choosing {negocio}. If you have a moment, it would help us a lot if you shared your experience on Google, whatever it was: {enlace}. And if anything wasn’t as you expected, please tell us here so we can improve.',
    'Bonjour {nombre}, merci de votre confiance envers {negocio}. Si vous avez un instant, cela nous aiderait beaucoup que vous partagiez votre expérience sur Google, quelle qu’elle soit : {enlace}. Et si quelque chose ne s’est pas passé comme prévu, dites-le-nous ici pour que nous puissions nous améliorer.'),
  t('general-presupuesto', 'general', 'presupuesto',
    'Hola, {nombre}. Te acabamos de enviar el presupuesto de {servicio} (ref. {referencia}) por un total de {importe}. Si tienes cualquier duda o quieres ajustar algo, dínoslo por aquí.',
    'Hi {nombre}, we’ve just sent you the quote for {servicio} (ref. {referencia}), for a total of {importe}. If you have any questions or would like to adjust anything, just let us know here.',
    'Bonjour {nombre}, nous venons de vous envoyer le devis pour {servicio} (réf. {referencia}), pour un total de {importe}. Si vous avez des questions ou souhaitez ajuster quelque chose, dites-le-nous ici.'),
  t('general-seguimiento', 'general', 'seguimiento',
    'Hola, {nombre}. Te escribo por el presupuesto de {servicio} que te enviamos el {fecha}. ¿Has podido revisarlo? Si quieres, lo comentamos en una llamada corta o te resuelvo las dudas por aquí.',
    'Hi {nombre}, I’m following up on the quote for {servicio} we sent you on {fecha}. Have you had a chance to look at it? If you like, we can go through it in a short call or I can answer any questions here.',
    'Bonjour {nombre}, je reviens vers vous au sujet du devis pour {servicio} envoyé le {fecha}. Avez-vous pu le consulter ? Si vous le souhaitez, nous pouvons en parler lors d’un court appel ou je réponds à vos questions ici.'),
  t('general-seguimiento-ultimo', 'general', 'seguimiento',
    'Hola, {nombre}. No quiero insistir: solo saber si sigue en pie lo de {servicio}. Si ahora no es buen momento, no pasa nada; el presupuesto queda guardado por si lo necesitas más adelante.',
    'Hi {nombre}, I don’t want to chase you, I’d just like to know whether {servicio} is still on the cards. If now isn’t a good time, that’s absolutely fine; we’ll keep the quote on file in case you need it later.',
    'Bonjour {nombre}, je ne veux pas insister : j’aimerais simplement savoir si le projet {servicio} est toujours d’actualité. Si ce n’est pas le bon moment, aucun problème ; nous gardons le devis au cas où vous en auriez besoin plus tard.'),
  t('general-cobro', 'general', 'cobro',
    'Hola, {nombre}. Te escribimos de {negocio} porque nos consta pendiente el pago de la factura {referencia}, de {importe}. Puede que se haya cruzado con tu pago; si es así, ignora este mensaje. Si necesitas los datos de pago o una copia, te los mandamos.',
    'Hi {nombre}, this is {negocio}. Our records show invoice {referencia} for {importe} is still outstanding. It may have crossed with your payment; if so, please ignore this message. If you need the payment details or a copy, we’ll send them over.',
    'Bonjour {nombre}, ici {negocio}. Selon nos informations, la facture {referencia} d’un montant de {importe} reste à régler. Votre paiement s’est peut-être croisé avec ce message ; dans ce cas, ne tenez pas compte de celui-ci. Si vous avez besoin des coordonnées de paiement ou d’une copie, nous vous les envoyons.'),
  t('general-cobro-segundo', 'general', 'cobro',
    'Hola, {nombre}. Te recordamos de nuevo la factura {referencia} ({importe}), con vencimiento el {fecha}. Si hay algún problema con ella, cuéntanoslo y lo vemos juntos.',
    'Hi {nombre}, just a further reminder about invoice {referencia} ({importe}), which was due on {fecha}. If there’s any issue with it, let us know and we’ll sort it out together.',
    'Bonjour {nombre}, nous nous permettons de vous rappeler la facture {referencia} ({importe}), arrivée à échéance le {fecha}. Si elle pose un problème, dites-le-nous et nous verrons cela ensemble.'),
  t('general-bienvenida', 'general', 'bienvenida',
    '¡Hola! Gracias por escribir a {negocio}. Cuéntanos en qué podemos ayudarte y te respondemos lo antes posible. Nuestro horario es {horario}.',
    'Hello! Thank you for messaging {negocio}. Tell us how we can help and we’ll get back to you as soon as possible. Our opening hours are {horario}.',
    'Bonjour ! Merci d’avoir écrit à {negocio}. Dites-nous comment nous pouvons vous aider et nous vous répondrons dès que possible. Nos horaires : {horario}.'),
  t('general-fuera-horario', 'general', 'fuera_horario',
    'Hola, gracias por tu mensaje. Ahora mismo {negocio} está cerrado; nuestro horario es {horario}. Lo leeremos en cuanto abramos y te responderemos.',
    'Hello, thank you for your message. {negocio} is closed right now; our opening hours are {horario}. We’ll read it as soon as we open and get back to you.',
    'Bonjour, merci pour votre message. {negocio} est actuellement fermé ; nos horaires sont {horario}. Nous le lirons dès l’ouverture et vous répondrons.'),

  // ── Clínica y salud (usted) ────────────────────────────────────────────
  t('clinica-recordatorio', 'clinica', 'recordatorio',
    'Hola, {nombre}. Le recordamos su cita en {negocio} el {fecha} a las {hora}. Si necesita cambiarla o no puede acudir, avísenos por aquí para poder ofrecer el hueco a otro paciente. Gracias.',
    'Hello {nombre}, this is a reminder of your appointment at {negocio} on {fecha} at {hora}. If you need to change it or can’t attend, please let us know here so we can offer the slot to another patient. Thank you.',
    'Bonjour {nombre}, nous vous rappelons votre rendez-vous chez {negocio} le {fecha} à {hora}. Si vous devez le modifier ou ne pouvez pas venir, merci de nous prévenir ici afin que nous puissions proposer ce créneau à un autre patient.'),
  t('clinica-confirmacion', 'clinica', 'confirmacion',
    'Hola, {nombre}. Su cita de {servicio} en {negocio} queda confirmada para el {fecha} a las {hora}, en {direccion}. Le rogamos que llegue unos minutos antes.',
    'Hello {nombre}, your {servicio} appointment at {negocio} is confirmed for {fecha} at {hora}, at {direccion}. Please arrive a few minutes early.',
    'Bonjour {nombre}, votre rendez-vous pour {servicio} chez {negocio} est confirmé le {fecha} à {hora}, au {direccion}. Merci d’arriver quelques minutes à l’avance.'),
  t('clinica-cambio', 'clinica', 'cambio',
    'Hola, {nombre}. Por motivos de agenda necesitamos cambiar su cita del {fecha} a las {hora}. Disculpe las molestias. Indíquenos qué días le vienen mejor y le buscamos un hueco.',
    'Hello {nombre}, due to a scheduling issue we need to move your appointment on {fecha} at {hora}. We apologise for the inconvenience. Let us know which days suit you best and we’ll find you a slot.',
    'Bonjour {nombre}, pour des raisons d’organisation, nous devons déplacer votre rendez-vous du {fecha} à {hora}. Veuillez nous en excuser. Indiquez-nous les jours qui vous conviennent le mieux et nous vous trouverons un créneau.'),
  t('clinica-resena', 'clinica', 'resena',
    'Hola, {nombre}. Gracias por su visita a {negocio}. Si quiere compartir su opinión, puede hacerlo en Google: {enlace}. Nos ayuda a mejorar y a que otros pacientes nos conozcan.',
    'Hello {nombre}, thank you for visiting {negocio}. If you would like to share your opinion, you can do so on Google: {enlace}. It helps us improve and lets other patients know about us.',
    'Bonjour {nombre}, merci pour votre visite chez {negocio}. Si vous souhaitez partager votre avis, vous pouvez le faire sur Google : {enlace}. Cela nous aide à nous améliorer et à nous faire connaître d’autres patients.'),
  t('clinica-cobro', 'clinica', 'cobro',
    'Hola, {nombre}. Le escribimos de {negocio}: tenemos pendiente el pago de {importe} correspondiente a su visita del {fecha}. Si ya lo ha abonado, ignore este mensaje. Si lo prefiere, le enviamos el detalle.',
    'Hello {nombre}, this is {negocio}: a payment of {importe} for your visit on {fecha} is still outstanding. If you have already paid, please ignore this message. We can send you the details if you wish.',
    'Bonjour {nombre}, ici {negocio} : un paiement de {importe} correspondant à votre visite du {fecha} reste en attente. Si vous l’avez déjà réglé, ne tenez pas compte de ce message. Nous pouvons vous envoyer le détail si vous le souhaitez.'),
  t('clinica-bienvenida', 'clinica', 'bienvenida',
    'Hola, gracias por contactar con {negocio}. Para pedir cita, indíquenos su nombre, el motivo de la consulta en pocas palabras y qué días le vienen mejor. Por este canal no damos diagnósticos; ante una urgencia, llame al 112.',
    'Hello, thank you for contacting {negocio}. To book an appointment, please tell us your name, the reason for your visit in a few words and which days suit you best. We cannot give diagnoses through this channel; in an emergency, call 112.',
    'Bonjour, merci d’avoir contacté {negocio}. Pour prendre rendez-vous, indiquez-nous votre nom, le motif de la consultation en quelques mots et les jours qui vous conviennent le mieux. Nous ne donnons pas de diagnostic par ce canal ; en cas d’urgence, appelez le 112.'),
  t('clinica-fuera-horario', 'clinica', 'fuera_horario',
    'Hola, gracias por su mensaje. La clínica está cerrada en este momento (horario: {horario}). Le responderemos al abrir. Si se trata de una urgencia médica, llame al 112.',
    'Hello, thank you for your message. The clinic is closed at the moment (opening hours: {horario}). We will reply when we open. If this is a medical emergency, call 112.',
    'Bonjour, merci pour votre message. Le cabinet est fermé pour le moment (horaires : {horario}). Nous vous répondrons à l’ouverture. En cas d’urgence médicale, appelez le 112.'),

  // ── Peluquería y estética ───────────────────────────────────────────────
  t('peluqueria-recordatorio', 'peluqueria', 'recordatorio',
    '¡Hola, {nombre}! Te esperamos el {fecha} a las {hora} en {negocio} para {servicio}. Si te surge algo, avísanos con tiempo y te cambiamos la cita.',
    'Hi {nombre}! We’re looking forward to seeing you on {fecha} at {hora} at {negocio} for {servicio}. If something comes up, let us know in good time and we’ll move your appointment.',
    'Bonjour {nombre} ! Nous vous attendons le {fecha} à {hora} chez {negocio} pour {servicio}. En cas d’empêchement, prévenez-nous à l’avance et nous déplacerons votre rendez-vous.'),
  t('peluqueria-confirmacion', 'peluqueria', 'confirmacion',
    '¡Hecho, {nombre}! Tu cita para {servicio} queda reservada el {fecha} a las {hora}. Si necesitas cambiarla, escríbenos por aquí. ¡Hasta pronto!',
    'All done, {nombre}! Your appointment for {servicio} is booked for {fecha} at {hora}. If you need to change it, just message us here. See you soon!',
    'C’est noté, {nombre} ! Votre rendez-vous pour {servicio} est réservé le {fecha} à {hora}. Si vous devez le modifier, écrivez-nous ici. À bientôt !'),
  t('peluqueria-cambio', 'peluqueria', 'cambio',
    'Hola, {nombre}. Lo sentimos, pero tenemos que mover tu cita del {fecha} a las {hora}. ¿Te viene bien otro día esta semana? Dinos qué te encaja y te la reservamos.',
    'Hi {nombre}, we’re sorry, but we need to move your appointment on {fecha} at {hora}. Would another day this week work for you? Tell us what suits you and we’ll book it.',
    'Bonjour {nombre}, nous sommes désolés, mais nous devons déplacer votre rendez-vous du {fecha} à {hora}. Un autre jour cette semaine vous conviendrait-il ? Dites-nous ce qui vous arrange et nous le réservons.'),
  t('peluqueria-resena', 'peluqueria', 'resena',
    '¡Gracias por venir, {nombre}! Si te apetece contar qué tal tu experiencia en {negocio}, puedes dejar tu opinión aquí: {enlace}. Nos ayuda muchísimo. Y si algo no te convenció, dínoslo directamente.',
    'Thanks for coming in, {nombre}! If you’d like to share how your experience at {negocio} was, you can leave your review here: {enlace}. It really helps us. And if anything wasn’t right, please tell us directly.',
    'Merci de votre visite, {nombre} ! Si vous avez envie de partager votre expérience chez {negocio}, vous pouvez laisser votre avis ici : {enlace}. Cela nous aide énormément. Et si quelque chose ne vous a pas convenu, dites-le-nous directement.'),
  t('peluqueria-bienvenida', 'peluqueria', 'bienvenida',
    '¡Hola! Gracias por escribir a {negocio}. Para reservar, dinos qué servicio quieres y qué días y horas te vienen bien, y te proponemos hueco.',
    'Hello! Thanks for messaging {negocio}. To book, tell us which service you’d like and which days and times suit you, and we’ll suggest a slot.',
    'Bonjour ! Merci d’avoir écrit à {negocio}. Pour réserver, dites-nous quel service vous souhaitez et les jours et horaires qui vous conviennent, et nous vous proposerons un créneau.'),
  t('peluqueria-fuera-horario', 'peluqueria', 'fuera_horario',
    '¡Hola! Ahora estamos cerrados (horario: {horario}). Te respondemos en cuanto abramos. Si quieres reservar, déjanos el servicio y el día que prefieres y te lo confirmamos.',
    'Hello! We’re closed right now (opening hours: {horario}). We’ll reply as soon as we open. If you’d like to book, leave us the service and the day you prefer and we’ll confirm it.',
    'Bonjour ! Nous sommes fermés pour le moment (horaires : {horario}). Nous vous répondrons dès l’ouverture. Pour réserver, laissez-nous le service et le jour souhaités et nous vous confirmerons.'),

  // ── Taller mecánico ─────────────────────────────────────────────────────
  t('taller-recordatorio', 'taller', 'recordatorio',
    'Hola, {nombre}. Te recordamos que tienes el coche citado en {negocio} el {fecha} a las {hora} para {servicio}. Si no puedes traerlo, avísanos por aquí.',
    'Hi {nombre}, a reminder that your car is booked in at {negocio} on {fecha} at {hora} for {servicio}. If you can’t bring it in, please let us know here.',
    'Bonjour {nombre}, nous vous rappelons que votre véhicule a rendez-vous chez {negocio} le {fecha} à {hora} pour {servicio}. Si vous ne pouvez pas l’amener, prévenez-nous ici.'),
  t('taller-recibido', 'taller', 'confirmacion',
    'Hola, {nombre}. Hemos recibido tu vehículo para {servicio}. Te avisaremos por aquí cuando esté listo o si vemos algo que haya que consultarte antes de seguir.',
    'Hi {nombre}, we’ve received your vehicle for {servicio}. We’ll let you know here when it’s ready or if we find anything we need to check with you before going ahead.',
    'Bonjour {nombre}, nous avons bien reçu votre véhicule pour {servicio}. Nous vous préviendrons ici dès qu’il sera prêt ou si nous constatons quelque chose dont nous devons vous parler avant de continuer.'),
  t('taller-listo', 'taller', 'confirmacion',
    'Hola, {nombre}. Tu vehículo ya está listo. Puedes pasar a recogerlo en nuestro horario ({horario}). El importe es de {importe}.',
    'Hi {nombre}, your vehicle is ready. You can collect it during our opening hours ({horario}). The amount due is {importe}.',
    'Bonjour {nombre}, votre véhicule est prêt. Vous pouvez venir le récupérer pendant nos horaires d’ouverture ({horario}). Le montant à régler est de {importe}.'),
  t('taller-presupuesto', 'taller', 'presupuesto',
    'Hola, {nombre}. Ya tenemos el presupuesto de la reparación: {servicio}, por {importe} (ref. {referencia}). No empezaremos nada sin tu aprobación. ¿Te parece bien que sigamos?',
    'Hi {nombre}, we have the quote for the repair: {servicio}, for {importe} (ref. {referencia}). We won’t start any work without your approval. Are you happy for us to go ahead?',
    'Bonjour {nombre}, voici le devis de la réparation : {servicio}, pour {importe} (réf. {referencia}). Nous ne commencerons rien sans votre accord. Souhaitez-vous que nous poursuivions ?'),
  t('taller-seguimiento', 'taller', 'seguimiento',
    'Hola, {nombre}. ¿Has podido mirar el presupuesto de {servicio} que te enviamos el {fecha}? Si tienes dudas, te las explicamos por aquí o por teléfono.',
    'Hi {nombre}, have you had a chance to look at the quote for {servicio} we sent on {fecha}? If you have any questions, we can explain here or by phone.',
    'Bonjour {nombre}, avez-vous pu consulter le devis pour {servicio} envoyé le {fecha} ? Si vous avez des questions, nous pouvons vous les expliquer ici ou par téléphone.'),
  t('taller-resena', 'taller', 'resena',
    'Hola, {nombre}. Gracias por confiar en {negocio}. Si quieres contar qué tal te ha ido, puedes dejar tu opinión en Google: {enlace}. Y cualquier cosa que no te haya convencido, dínosla por aquí.',
    'Hi {nombre}, thanks for trusting {negocio}. If you’d like to tell others how it went, you can leave your review on Google: {enlace}. And if anything didn’t convince you, please tell us here.',
    'Bonjour {nombre}, merci de votre confiance envers {negocio}. Si vous souhaitez raconter comment cela s’est passé, vous pouvez laisser votre avis sur Google : {enlace}. Et si quelque chose ne vous a pas convaincu, dites-le-nous ici.'),
  t('taller-fuera-horario', 'taller', 'fuera_horario',
    'Hola, gracias por escribir a {negocio}. Ahora mismo estamos cerrados (horario: {horario}). Te respondemos al abrir. Si es una avería en carretera, contacta con la asistencia de tu seguro.',
    'Hello, thanks for messaging {negocio}. We’re closed right now (opening hours: {horario}). We’ll reply when we open. If you’ve broken down on the road, contact your insurer’s roadside assistance.',
    'Bonjour, merci d’avoir écrit à {negocio}. Nous sommes fermés pour le moment (horaires : {horario}). Nous vous répondrons à l’ouverture. En cas de panne sur la route, contactez l’assistance de votre assurance.'),

  // ── Gestoría y asesoría (usted) ─────────────────────────────────────────
  t('gestoria-recordatorio', 'gestoria', 'recordatorio',
    'Buenos días, {nombre}. Le recordamos su cita en {negocio} el {fecha} a las {hora}. Si puede, traiga la documentación que le indicamos. Si necesita cambiarla, avísenos por aquí.',
    'Good morning {nombre}, this is a reminder of your appointment at {negocio} on {fecha} at {hora}. If possible, please bring the documents we mentioned. If you need to change it, let us know here.',
    'Bonjour {nombre}, nous vous rappelons votre rendez-vous chez {negocio} le {fecha} à {hora}. Si possible, apportez les documents que nous vous avons indiqués. Si vous devez le modifier, prévenez-nous ici.'),
  t('gestoria-documentacion', 'gestoria', 'recordatorio',
    'Hola, {nombre}. Para preparar {servicio} necesitamos que nos envíe la documentación pendiente antes del {fecha}. Si tiene dudas sobre qué falta, pregúntenos por aquí.',
    'Hello {nombre}, to prepare {servicio} we need you to send us the outstanding documents before {fecha}. If you’re unsure what is missing, just ask us here.',
    'Bonjour {nombre}, pour préparer {servicio}, nous avons besoin que vous nous envoyiez les documents manquants avant le {fecha}. Si vous avez un doute sur ce qui manque, demandez-nous ici.'),
  t('gestoria-confirmacion', 'gestoria', 'confirmacion',
    'Hola, {nombre}. Confirmamos que hemos recibido su documentación para {servicio}. La revisamos y le diremos si falta algo. Gracias.',
    'Hello {nombre}, we confirm we have received your documents for {servicio}. We’ll review them and let you know if anything is missing. Thank you.',
    'Bonjour {nombre}, nous confirmons avoir bien reçu vos documents pour {servicio}. Nous les examinons et vous dirons s’il manque quelque chose. Merci.'),
  t('gestoria-presupuesto', 'gestoria', 'presupuesto',
    'Hola, {nombre}. Le hemos enviado por correo la propuesta de honorarios para {servicio} (ref. {referencia}): {importe}. Quedamos a su disposición para cualquier aclaración.',
    'Hello {nombre}, we have emailed you our fee proposal for {servicio} (ref. {referencia}): {importe}. Please don’t hesitate to contact us if you need any clarification.',
    'Bonjour {nombre}, nous vous avons envoyé par e-mail notre proposition d’honoraires pour {servicio} (réf. {referencia}) : {importe}. Nous restons à votre disposition pour toute précision.'),
  t('gestoria-seguimiento', 'gestoria', 'seguimiento',
    'Hola, {nombre}. Le escribo por la propuesta para {servicio} que le enviamos el {fecha}. ¿Ha podido revisarla? Si lo prefiere, la comentamos en una llamada breve.',
    'Hello {nombre}, I’m following up on the proposal for {servicio} we sent you on {fecha}. Have you been able to review it? If you prefer, we can discuss it in a short call.',
    'Bonjour {nombre}, je reviens vers vous au sujet de la proposition pour {servicio} envoyée le {fecha}. Avez-vous pu l’examiner ? Si vous préférez, nous pouvons en parler lors d’un bref appel.'),
  t('gestoria-cobro', 'gestoria', 'cobro',
    'Hola, {nombre}. Le recordamos que la factura {referencia} de {importe} está pendiente de pago. Si ya la ha abonado, disculpe este mensaje. Si necesita que le reenviemos la factura o los datos bancarios, díganoslo.',
    'Hello {nombre}, a reminder that invoice {referencia} for {importe} is still pending. If you have already paid it, please disregard this message. If you need us to resend the invoice or the bank details, just let us know.',
    'Bonjour {nombre}, nous vous rappelons que la facture {referencia} de {importe} est en attente de règlement. Si vous l’avez déjà payée, veuillez excuser ce message. Si vous avez besoin que nous vous renvoyions la facture ou nos coordonnées bancaires, dites-le-nous.'),
  t('gestoria-bienvenida', 'gestoria', 'bienvenida',
    'Hola, {nombre}. Le damos la bienvenida a {negocio}. Por este número puede enviarnos dudas y documentos; le responderemos en horario de oficina ({horario}). Para trámites con plazo, avísenos con antelación.',
    'Hello {nombre}, welcome to {negocio}. You can send us questions and documents on this number; we’ll reply during office hours ({horario}). For anything with a deadline, please let us know in advance.',
    'Bonjour {nombre}, bienvenue chez {negocio}. Vous pouvez nous envoyer vos questions et documents à ce numéro ; nous vous répondrons pendant nos heures de bureau ({horario}). Pour les démarches avec une échéance, prévenez-nous à l’avance.'),
  t('gestoria-fuera-horario', 'gestoria', 'fuera_horario',
    'Hola, gracias por su mensaje. La oficina está cerrada ahora (horario: {horario}). Le contestaremos el próximo día laborable.',
    'Hello, thank you for your message. The office is closed now (opening hours: {horario}). We will reply on the next working day.',
    'Bonjour, merci pour votre message. Le bureau est fermé actuellement (horaires : {horario}). Nous vous répondrons le prochain jour ouvré.'),

  // ── Restaurante ─────────────────────────────────────────────────────────
  t('restaurante-recordatorio', 'restaurante', 'recordatorio',
    'Hola, {nombre}. Te recordamos tu reserva en {negocio} el {fecha} a las {hora}. Si cambian los planes o el número de personas, avísanos por aquí para ajustar la mesa. ¡Te esperamos!',
    'Hi {nombre}, a reminder of your booking at {negocio} on {fecha} at {hora}. If your plans or the number of guests change, let us know here so we can adjust the table. See you then!',
    'Bonjour {nombre}, nous vous rappelons votre réservation chez {negocio} le {fecha} à {hora}. Si vos projets ou le nombre de personnes changent, prévenez-nous ici pour que nous adaptions la table. À bientôt !'),
  t('restaurante-confirmacion', 'restaurante', 'confirmacion',
    '¡Hola, {nombre}! Tu reserva en {negocio} queda confirmada para el {fecha} a las {hora}. Estamos en {direccion}. Si tienes alguna alergia o necesitas algo especial, dínoslo antes.',
    'Hi {nombre}! Your booking at {negocio} is confirmed for {fecha} at {hora}. You’ll find us at {direccion}. If you have any allergies or special requirements, please let us know beforehand.',
    'Bonjour {nombre} ! Votre réservation chez {negocio} est confirmée pour le {fecha} à {hora}. Nous sommes au {direccion}. Si vous avez une allergie ou un besoin particulier, dites-le-nous à l’avance.'),
  t('restaurante-cancelacion', 'restaurante', 'cambio',
    'Hola, {nombre}. Hemos anulado tu reserva del {fecha} a las {hora}, como nos pediste. ¡Esperamos verte en otra ocasión!',
    'Hi {nombre}, we’ve cancelled your booking on {fecha} at {hora}, as you asked. We hope to see you another time!',
    'Bonjour {nombre}, nous avons annulé votre réservation du {fecha} à {hora}, comme vous nous l’avez demandé. Au plaisir de vous accueillir une prochaine fois !'),
  t('restaurante-resena', 'restaurante', 'resena',
    'Hola, {nombre}. Gracias por venir a {negocio}. Si te apetece contar tu experiencia, puedes dejar tu opinión aquí: {enlace}. Y si algo no estuvo a la altura, cuéntanoslo: queremos saberlo.',
    'Hi {nombre}, thank you for coming to {negocio}. If you’d like to share your experience, you can leave your review here: {enlace}. And if anything wasn’t up to standard, please tell us: we want to know.',
    'Bonjour {nombre}, merci d’être venu chez {negocio}. Si vous souhaitez partager votre expérience, vous pouvez laisser votre avis ici : {enlace}. Et si quelque chose n’était pas à la hauteur, dites-le-nous : nous tenons à le savoir.'),
  t('restaurante-bienvenida', 'restaurante', 'bienvenida',
    '¡Hola! Gracias por escribir a {negocio}. Para reservar, indícanos día, hora y número de personas. Si quieres ver la carta, la tienes aquí: {enlace}.',
    'Hello! Thanks for messaging {negocio}. To book, tell us the day, time and number of guests. If you’d like to see the menu, it’s here: {enlace}.',
    'Bonjour ! Merci d’avoir écrit à {negocio}. Pour réserver, indiquez-nous le jour, l’heure et le nombre de personnes. Pour consulter la carte, c’est ici : {enlace}.'),
  t('restaurante-fuera-horario', 'restaurante', 'fuera_horario',
    '¡Hola! Gracias por escribirnos. Ahora no podemos atender el WhatsApp (horario: {horario}). Si quieres reservar, déjanos día, hora y número de personas y te confirmamos en cuanto podamos.',
    'Hello! Thanks for your message. We can’t answer WhatsApp right now (opening hours: {horario}). If you’d like to book, leave us the day, time and number of guests and we’ll confirm as soon as we can.',
    'Bonjour ! Merci pour votre message. Nous ne pouvons pas répondre sur WhatsApp pour le moment (horaires : {horario}). Pour réserver, laissez-nous le jour, l’heure et le nombre de personnes et nous vous confirmerons dès que possible.'),

  // ── Inmobiliaria (usted) ────────────────────────────────────────────────
  t('inmobiliaria-recordatorio', 'inmobiliaria', 'recordatorio',
    'Hola, {nombre}. Le recordamos la visita al inmueble de {direccion} el {fecha} a las {hora}. Si no puede venir, avísenos y la cambiamos.',
    'Hello {nombre}, a reminder of the viewing at {direccion} on {fecha} at {hora}. If you can’t make it, let us know and we’ll rearrange it.',
    'Bonjour {nombre}, nous vous rappelons la visite du bien situé au {direccion} le {fecha} à {hora}. Si vous ne pouvez pas venir, prévenez-nous et nous la décalerons.'),
  t('inmobiliaria-confirmacion', 'inmobiliaria', 'confirmacion',
    'Hola, {nombre}. Queda confirmada la visita al inmueble de {direccion} (ref. {referencia}) el {fecha} a las {hora}. Le esperaremos en la puerta. Cualquier cambio, escríbanos por aquí.',
    'Hello {nombre}, the viewing at {direccion} (ref. {referencia}) is confirmed for {fecha} at {hora}. We’ll meet you at the door. If anything changes, message us here.',
    'Bonjour {nombre}, la visite du bien situé au {direccion} (réf. {referencia}) est confirmée le {fecha} à {hora}. Nous vous attendrons devant l’entrée. Pour tout changement, écrivez-nous ici.'),
  t('inmobiliaria-cambio', 'inmobiliaria', 'cambio',
    'Hola, {nombre}. Le escribimos porque tenemos que cambiar la visita del {fecha} a las {hora}. Disculpe las molestias. ¿Qué otro día y hora le vienen bien?',
    'Hello {nombre}, we need to rearrange the viewing on {fecha} at {hora}. We apologise for the inconvenience. Which other day and time would suit you?',
    'Bonjour {nombre}, nous devons modifier la visite prévue le {fecha} à {hora}. Veuillez nous en excuser. Quel autre jour et quelle heure vous conviendraient ?'),
  t('inmobiliaria-valoracion', 'inmobiliaria', 'presupuesto',
    'Hola, {nombre}. Le hemos enviado por correo la valoración de su inmueble de {direccion} (ref. {referencia}). Si quiere que la comentemos, díganos cuándo le viene bien una llamada.',
    'Hello {nombre}, we have emailed you the valuation of your property at {direccion} (ref. {referencia}). If you’d like to go through it, let us know when a call would suit you.',
    'Bonjour {nombre}, nous vous avons envoyé par e-mail l’estimation de votre bien situé au {direccion} (réf. {referencia}). Si vous souhaitez en discuter, dites-nous quand un appel vous conviendrait.'),
  t('inmobiliaria-seguimiento', 'inmobiliaria', 'seguimiento',
    'Hola, {nombre}. ¿Qué le pareció el inmueble de {direccion}? Si quiere volver a verlo, tiene dudas o prefiere que le enseñemos otras opciones, díganoslo.',
    'Hello {nombre}, what did you think of the property at {direccion}? If you’d like a second viewing, have any questions or would prefer to see other options, just let us know.',
    'Bonjour {nombre}, qu’avez-vous pensé du bien situé au {direccion} ? Si vous souhaitez le revoir, si vous avez des questions ou préférez découvrir d’autres options, dites-le-nous.'),
  t('inmobiliaria-bienvenida', 'inmobiliaria', 'bienvenida',
    'Hola, gracias por contactar con {negocio}. Para ayudarle mejor, díganos si busca comprar, alquilar o vender, la zona y lo que necesita, y le responderemos con opciones.',
    'Hello, thank you for contacting {negocio}. To help you better, tell us whether you’re looking to buy, rent or sell, the area and what you need, and we’ll reply with options.',
    'Bonjour, merci d’avoir contacté {negocio}. Pour mieux vous aider, dites-nous si vous souhaitez acheter, louer ou vendre, le secteur et vos besoins, et nous vous répondrons avec des propositions.'),
  t('inmobiliaria-fuera-horario', 'inmobiliaria', 'fuera_horario',
    'Hola, gracias por su mensaje. Ahora estamos fuera del horario de oficina ({horario}). Le responderemos en cuanto abramos.',
    'Hello, thank you for your message. We’re currently outside office hours ({horario}). We’ll reply as soon as we open.',
    'Bonjour, merci pour votre message. Nous sommes actuellement en dehors de nos heures d’ouverture ({horario}). Nous vous répondrons dès l’ouverture.'),

  // ── Tienda ──────────────────────────────────────────────────────────────
  t('tienda-pedido', 'tienda', 'confirmacion',
    '¡Hola, {nombre}! Hemos recibido tu pedido {referencia} por {importe}. Te avisaremos por aquí cuando esté listo para recoger o enviado.',
    'Hi {nombre}! We’ve received your order {referencia} for {importe}. We’ll let you know here when it’s ready to collect or has been sent.',
    'Bonjour {nombre} ! Nous avons bien reçu votre commande {referencia} d’un montant de {importe}. Nous vous préviendrons ici dès qu’elle sera prête à retirer ou expédiée.'),
  t('tienda-recogida', 'tienda', 'recordatorio',
    'Hola, {nombre}. Tu pedido {referencia} está listo para recoger en {negocio} ({direccion}). Te lo guardamos hasta el {fecha}. Horario: {horario}.',
    'Hi {nombre}, your order {referencia} is ready to collect at {negocio} ({direccion}). We’ll keep it for you until {fecha}. Opening hours: {horario}.',
    'Bonjour {nombre}, votre commande {referencia} est prête à être retirée chez {negocio} ({direccion}). Nous la gardons jusqu’au {fecha}. Horaires : {horario}.'),
  t('tienda-retraso', 'tienda', 'cambio',
    'Hola, {nombre}. Te escribimos por tu pedido {referencia}: {servicio} se ha retrasado y no llegará en la fecha prevista. Sentimos el retraso. ¿Prefieres esperar, cambiarlo por otro producto o anularlo?',
    'Hi {nombre}, about your order {referencia}: {servicio} has been delayed and won’t arrive on the expected date. We’re sorry about this. Would you prefer to wait, swap it for another product or cancel it?',
    'Bonjour {nombre}, au sujet de votre commande {referencia} : {servicio} a pris du retard et n’arrivera pas à la date prévue. Nous en sommes désolés. Préférez-vous attendre, l’échanger contre un autre produit ou l’annuler ?'),
  t('tienda-resena', 'tienda', 'resena',
    'Hola, {nombre}. Gracias por tu compra en {negocio}. Si quieres contar qué te ha parecido, puedes dejar tu opinión aquí: {enlace}. Y si algo no está bien, escríbenos y lo solucionamos.',
    'Hi {nombre}, thank you for shopping at {negocio}. If you’d like to say what you thought, you can leave your review here: {enlace}. And if anything isn’t right, message us and we’ll sort it out.',
    'Bonjour {nombre}, merci pour votre achat chez {negocio}. Si vous souhaitez donner votre avis, vous pouvez le faire ici : {enlace}. Et si quelque chose ne va pas, écrivez-nous et nous trouverons une solution.'),
  t('tienda-presupuesto', 'tienda', 'presupuesto',
    'Hola, {nombre}. Te paso el presupuesto que nos pediste de {servicio}: {importe} (ref. {referencia}). Si te encaja, dínoslo y lo preparamos.',
    'Hi {nombre}, here’s the quote you asked for: {servicio}, {importe} (ref. {referencia}). If it works for you, let us know and we’ll get it ready.',
    'Bonjour {nombre}, voici le devis que vous nous avez demandé pour {servicio} : {importe} (réf. {referencia}). Si cela vous convient, dites-le-nous et nous le préparons.'),
  t('tienda-seguimiento', 'tienda', 'seguimiento',
    'Hola, {nombre}. ¿Pudiste ver el presupuesto de {servicio}? Si quieres cambiar algo o tienes dudas, dímelo por aquí.',
    'Hi {nombre}, did you get a chance to look at the quote for {servicio}? If you’d like to change anything or have questions, just tell me here.',
    'Bonjour {nombre}, avez-vous pu consulter le devis pour {servicio} ? Si vous souhaitez modifier quelque chose ou avez des questions, dites-le-moi ici.'),
  t('tienda-cobro', 'tienda', 'cobro',
    'Hola, {nombre}. Te recordamos que queda pendiente el pago de {importe} del pedido {referencia}. Si ya lo has hecho, ignora este mensaje. Si te va mejor otra forma de pago, dínoslo.',
    'Hi {nombre}, a reminder that payment of {importe} for order {referencia} is still pending. If you’ve already paid, please ignore this message. If another payment method suits you better, let us know.',
    'Bonjour {nombre}, nous vous rappelons que le paiement de {importe} pour la commande {referencia} est en attente. Si vous l’avez déjà réglé, ne tenez pas compte de ce message. Si un autre moyen de paiement vous convient mieux, dites-le-nous.'),
  t('tienda-bienvenida', 'tienda', 'bienvenida',
    '¡Hola! Gracias por escribir a {negocio}. Pregúntanos por cualquier producto, disponibilidad o pedido y te respondemos en horario de tienda ({horario}).',
    'Hello! Thanks for messaging {negocio}. Ask us about any product, availability or order and we’ll reply during shop hours ({horario}).',
    'Bonjour ! Merci d’avoir écrit à {negocio}. Posez-nous vos questions sur un produit, une disponibilité ou une commande et nous vous répondrons pendant nos horaires d’ouverture ({horario}).'),
  t('tienda-fuera-horario', 'tienda', 'fuera_horario',
    '¡Hola! Ahora la tienda está cerrada (horario: {horario}). Te respondemos en cuanto abramos. Gracias por tu paciencia.',
    'Hello! The shop is closed right now (opening hours: {horario}). We’ll reply as soon as we open. Thanks for your patience.',
    'Bonjour ! La boutique est fermée pour le moment (horaires : {horario}). Nous vous répondrons dès l’ouverture. Merci de votre patience.'),
]

const VAR_RE = /\{([a-z]+)\}/g

/** Variables que usa un texto, en orden de aparición y sin repetir. */
export function templateVariables(text: string): TemplateVariable[] {
  const out: TemplateVariable[] = []
  for (const m of text.matchAll(VAR_RE)) {
    const k = m[1] as TemplateVariable
    if (k in TEMPLATE_VARIABLES && !out.includes(k)) out.push(k)
  }
  return out
}

export type TemplateValues = Partial<Record<TemplateVariable, string>>

/**
 * Sustituye las variables por lo que ha escrito el usuario; las que estén vacías se dejan visibles como
 * {nombre}, {name} o {nom} según el idioma del mensaje, para que se vea qué falta.
 */
export function fillTemplate(text: string, values: TemplateValues, lang: MessageLanguage): string {
  return text.replace(VAR_RE, (whole, key: string) => {
    if (!(key in TEMPLATE_VARIABLES)) return whole
    const k = key as TemplateVariable
    const v = values[k]?.replace(/\s+/g, ' ').trim()
    return v ? v : `{${TEMPLATE_VARIABLES[k].token[lang]}}`
  })
}

/** Variables sin rellenar en un texto (claves). */
export function missingVariables(text: string, values: TemplateValues): TemplateVariable[] {
  return templateVariables(text).filter((k) => !values[k]?.trim())
}

/** Plantillas de un sector (más las generales) y de un tipo; 'todos' no filtra. Las del sector van primero. */
export function filterTemplates(sector: TemplateSector | 'todos', type: TemplateType | 'todos'): WhatsAppTemplate[] {
  const byType = WHATSAPP_TEMPLATES.filter((tp) => type === 'todos' || tp.type === type)
  if (sector === 'todos') return byType
  if (sector === 'general') return byType.filter((tp) => tp.sector === 'general')
  return [...byType.filter((tp) => tp.sector === sector), ...byType.filter((tp) => tp.sector === 'general')]
}

/** Parámetro (en el fragmento #, que no viaja al servidor) con el que el generador de enlaces recibe el mensaje. */
export const PREFILL_PARAM = { es: 'mensaje', en: 'message' } as const
