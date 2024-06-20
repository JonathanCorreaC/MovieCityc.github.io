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
            "5. CONTACTAR SOPORTE 📞<br><br>" +
            "Para poder atenderte, solo indícanos tu número de preferencia:<br>";

    } else if (lowerInput === "hasta luego") {
        return "Gracias, esperamos que nos vuelvas a visitar pronto. ¡Que tengas un excelente día!";

    } else if (lowerInput === "1") {
        return "Actualmente, tenemos las siguientes películas en cartelera:<br>" +
            "1. Intensamente 2<br>" +
            "2. Mi villano Favorito 4<br>" +
            "3. Rápidos y Furiosos 10<br>" +
            "4. Moana<br><br>" +
            "¿Te gustaría saber más detalles sobre alguna de estas películas? Responde con el número de la película.<br>";

    } else if (lowerInput === "2") {
        return "Puedo proporcionarte información sobre los horarios de las películas:<br>" +
            "🌞 Matutino: 10:00 AM<br>" +
            "🌇 Vespertino: 3:00 PM<br>" +
            "🌚 Nocturno: 8:00 PM<br>" +
            "Responde con el número de la película para conocer los horarios específicos:<br>" +
            "1. Intensamente 2<br>" +
            "2. Mi villano Favorito 4<br>" +
            "3. Rápidos y Furiosos 10<br>" +
            "4. Moana<br>";

    } else if (lowerInput === "3") {
        return "Puedes comprar tus boletos fácilmente a través de nuestro sitio web. ¿Te gustaría que te envíe el enlace para la compra de boletos?";

    } else if (lowerInput === "4") {
        return "¡Tenemos algunas promociones increíbles para ti!<br>" +
            "🎟️ 2x1 en boletos todos los miércoles.<br>" +
            "🍿 Combo familiar: 4 boletos + 2 combos de palomitas y refresco por solo $20.<br>" +
            "🎬 Descuentos especiales para estudiantes y tercera edad.<br>" +
            "¿Te gustaría aprovechar alguna de estas promociones? Responde con el número de la promoción:<br>" +
            "1. 2x1 en boletos<br>" +
            "2. Combo familiar<br>" +
            "3. Descuentos para estudiantes y tercera edad<br>";

    } else if (lowerInput === "5") {
        return "Si necesitas contactar con nuestro soporte, puedes hacerlo vía WhatsApp:<br>" +
            "<a href='https://wa.me/923459861?text=Comunicate%20con%20MovieCity%20estamos%20para%20servirte' target='_blank'>Haz clic aquí para contactarnos por WhatsApp</a>";

    } else if (["1.1", "1.2", "1.3", "1.4"].includes(lowerInput)) {
        switch (lowerInput) {
            case "1.1":
                return "Detalles sobre 'Intensamente 2':<br>" +
                    "Sinopsis: Los personajes favoritos de Pixar están de vuelta en una nueva aventura.<br>" +
                    "Duración: 1h 40min<br>" +
                    "Clasificación: Apta para todo público<br>";
            case "1.2":
                return "Detalles sobre 'Mi villano Favorito 4':<br>" +
                    "Sinopsis: Gru y los Minions regresan en una nueva misión.<br>" +
                    "Duración: 1h 45min<br>" +
                    "Clasificación: Apta para todo público<br>";
            case "1.3":
                return "Detalles sobre 'Rápidos y Furiosos 10':<br>" +
                    "Sinopsis: La saga de acción y autos continúa con más velocidad y adrenalina.<br>" +
                    "Duración: 2h 20min<br>" +
                    "Clasificación: PG-13<br>";
            case "1.4":
                return "Detalles sobre 'Moana':<br>" +
                    "Sinopsis: Una joven polinesia se embarca en una épica aventura para salvar a su pueblo.<br>" +
                    "Duración: 1h 50min<br>" +
                    "Clasificación: Apta para todo público<br>";
        }
    } else if (["2.1", "2.2", "2.3", "2.4"].includes(lowerInput)) {
        switch (lowerInput) {
            case "2.1":
                return "Horarios para 'Intensamente 2':<br>" +
                    "🌞 Matutino: 10:00 AM<br>" +
                    "🌇 Vespertino: 3:00 PM<br>" +
                    "🌚 Nocturno: 8:00 PM<br>";
            case "2.2":
                return "Horarios para 'Mi villano Favorito 4':<br>" +
                    "🌞 Matutino: 10:15 AM<br>" +
                    "🌇 Vespertino: 3:15 PM<br>" +
                    "🌚 Nocturno: 8:15 PM<br>";
            case "2.3":
                return "Horarios para 'Rápidos y Furiosos 10':<br>" +
                    "🌞 Matutino: 10:30 AM<br>" +
                    "🌇 Vespertino: 3:30 PM<br>" +
                    "🌚 Nocturno: 8:30 PM<br>";
            case "2.4":
                return "Horarios para 'Moana':<br>" +
                    "🌞 Matutino: 10:45 AM<br>" +
                    "🌇 Vespertino: 3:45 PM<br>" +
                    "🌚 Nocturno: 8:45 PM<br>";
        }
    } else if (["4.1", "4.2", "4.3"].includes(lowerInput)) {
        switch (lowerInput) {
            case "4.1":
                return "Detalles de la promoción 2x1 en boletos:<br>" +
                    "Aplica todos los miércoles. Compra un boleto y recibe otro gratis.<br>" +
                    "Disponible en todas las películas y horarios.<br>";
            case "4.2":
                return "Detalles del Combo familiar:<br>" +
                    "Incluye 4 boletos y 2 combos de palomitas y refresco por solo $20.<br>" +
                    "Disponible todos los días en cualquier horario.<br>";
            case "4.3":
                return "Descuentos especiales para estudiantes y tercera edad:<br>" +
                    "Presenta tu identificación de estudiante o tarjeta de tercera edad para obtener un 20% de descuento en boletos.<br>" +
                    "Disponible en todas las películas y horarios.<br>";
        }
    } else {
        return "Lo siento, no entendí tu mensaje. Recuerda que debes colocar solo el número solicitado, no puntos, comas u otro dato adicional. En caso desees hacernos otras consultas puedes comunicarte al siguiente número:<br>" +
            "<a href='https://wa.me/923459861?text=Comunicate%20con%20MovieCity%20estamos%20para%20servirte' target='_blank'>Haz clic aquí para contactarnos por WhatsApp</a>";
    }
}
