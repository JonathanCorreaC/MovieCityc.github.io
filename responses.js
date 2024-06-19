function getBotResponse(input) {
    // Convertir la entrada a minúsculas para hacer comparaciones sin distinción entre mayúsculas y minúsculas
    var lowerInput = input.toLowerCase();

    // Respuestas simples
    if (lowerInput === "hola") {
        return "Hola. Bienvenid@ a MOVIECITY! ¿En qué te puedo ayudar el día de hoy?<br>" +
       
        "1. PELÍCULAS EN CARTELERA 🎞️⭐<br>" +
            "2. CONSULTAR HORARIOS ⏲️<br>" +
            "3. COMPRA DE BOLETOS 🎟️<br>" +
            "4. PROMOCIONES Y DESCUENTOS 🎁<br>" +
            "5. CONTACTAR SOPORTE 📞<br><br>"+
            "Para poder atenderte solo indicanos tu nro de preferencia:<br> ";

    } else if (lowerInput === "Hasta luego") {
        return "Gracias, esperamos que nos vuelvas a visitar pronto. ¡Que tengas un excelente día!";

    } else if (lowerInput === "1") {
        return "Actualmente, tenemos las siguientes películas en cartelera:<br>" +
            "1. Avatar: El Camino del Agua<br>" +
            "2. Mario Bros: La Película<br>" +
            "3. Rápidos y Furiosos 10<br>" +
            "4. Trolls 3: Gira Mundial<br>" +
            "5. The Marvels<br>" +
            "¿Te gustaría saber más detalles sobre alguna de estas películas?";

    } else if (lowerInput === "2") {
        return "Puedo proporcionarte información sobre los horarios de las películas:<br>" +
            "🌞 Matutino: 10:00 AM<br>" +
            "🌇 Vespertino: 3:00 PM<br>" +
            "🌚 Nocturno: 8:00 PM<br>" +
            "¿Tienes una película en mente o prefieres ver todas las opciones?";

    } else if (lowerInput === "3") {
        return "Puedes comprar tus boletos fácilmente a través de nuestro sitio web. ¿Te gustaría que te envíe el enlace para la compra de boletos?";

    } else if (lowerInput === "4") {
        return "¡Tenemos algunas promociones increíbles para ti!<br>" +
            "🎟️ 2x1 en boletos todos los miércoles.<br>" +
            "🍿 Combo familiar: 4 boletos + 2 combos de palomitas y refresco por solo $20.<br>" +
            "🎬 Descuentos especiales para estudiantes y tercera edad.<br>" +
            "¿Te gustaría aprovechar alguna de estas promociones?";

    } else if (lowerInput === "5") {
        return "Si necesitas contactar con nuestro soporte, puedes hacerlo vía WhatsApp:<br>" +
            "<a href='https://wa.me/923459861?text=Comunicate%20con%20MovieCity%20estamos%20para%20servirte' target='_blank'>Haz clic aquí para contactarnos por WhatsApp</a>";

    } else {
        return "Lo siento, no entendí tu mensaje.Recuerda que debes colocar solo el nro solicitado , no puntos ,comas y otro dato adicional. En caso desees hacernos otras consultas puedes comunicarte al sgte nro:<br>" +
            "<a href='https://wa.me/923459861?text=Comunicate%20con%20MovieCity%20estamos%20para%20servirte' target='_blank'>Haz clic aquí para contactarnos por WhatsApp</a>";
    }
}
