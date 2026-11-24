---
title: Chucao Web · Práctica oral por rondas
date: 2026-01-01
weight: 10
featureImage: access_view.png
liveurl: https://chucao.solmos.dev/
summary: Organiza conceptos en listas privadas, practica explicarlos en voz alta y conserva el progreso de cada ronda y sesión.
tags: [Desarrollo web, Persistencia de datos, React, TypeScript, PostgreSQL, Supabase]
showTaxonomies: true
showDate: true
---

[Probar Chucao Web](https://chucao.solmos.dev/) · [Ver el código en GitHub](https://github.com/sebastianolmos/chucao-web)

## Contexto y aporte

Creé Chucao Web como evolución de [Chucao Desktop]({{< relref "chucao-desktop" >}}), mi aplicación para Windows, que guardaba las listas y el progreso en archivos CSV locales. El objetivo era llevar al navegador una rutina de estudio sencilla: preparar una lista de temas y practicar su explicación en un orden aleatorio, llevando registro de cuáles ya habían salido. En la versión web desarrollé ese recorrido con inicio de sesión con Google, datos privados por cuenta y un historial de prácticas y rondas.

## Cómo funciona

Después de iniciar sesión, creas una lista, agregas conceptos y eliges **Sortear concepto**. El resultado queda marcado como visto en cuanto sale. Desde ahí puedes iniciar la práctica y revelar la descripción si quieres consultarla. Al terminar el temporizador, puedes añadir una nota y una calificación, guardar la sesión y encontrarla en **Historial**.

**El sorteo y el progreso se guardan juntos.** PostgreSQL comprueba que la lista pertenece a la cuenta autenticada y bloquea su fila mientras elige un concepto entre los pendientes, lo marca como visto y registra su posición en la ronda. Cada solicitud lleva un identificador único. Si el servidor registró el sorteo pero se perdió la respuesta, el cliente puede reenviar el mismo identificador y recuperar el resultado sin consumir otro concepto. Los conceptos vistos quedan fuera del sorteo hasta que se devuelven a pendientes o se inicia otra ronda.

**La animación sigue al temporizador.** La cuenta regresiva se calcula a partir del tiempo transcurrido y conserva el saldo al pausar. Si el navegador demora una actualización, el contador se ajusta al reloj en la siguiente. Ese avance también mueve al chucao por el bosque, con sprites de vuelo e ilustraciones que creé para la escena. La opción de movimiento reducido conserva el contador con una escena estática.

## Tecnologías

TypeScript, React, Vite, Mantine, TanStack Query, i18next, Supabase Auth con Google OAuth, PostgreSQL con políticas de seguridad por fila, GitHub Actions y Cloudflare Pages.

## Resultado y cómo comprobarlo

La aplicación permite completar el ciclo de estudio en el navegador y volver más tarde al progreso de cada ronda y a las prácticas guardadas. La interfaz está disponible en español e inglés.

- **Sin cuenta.** Abre **Probar temporizador**, selecciona un minuto y comienza. Al pausar, el contador se detiene. Al reanudar, continúa desde el saldo que quedaba.
- **Con cuenta.** Crea una lista con dos conceptos, sortea uno, completa una práctica y guárdala. Recarga la página y abre **Historial** para ver la sesión guardada. Si vuelves a la lista y sorteas de nuevo, saldrá el otro concepto pendiente.

El temporizador en curso vive en la página. Al recargar, se pierde la cuenta regresiva activa.
