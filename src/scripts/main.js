AOS.init();

const dataDoEvento = new Date("2025-06-28 09:00:00");
const timeStampEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function() {
    const dataAgora = new Date();
    const timeStampAgora = dataAgora.getTime();

    const segundosAteOEvento = (timeStampEvento - timeStampAgora) / 1000;
    const segundos = Math.floor(segundosAteOEvento % 60);
    const minutos = Math.floor((segundosAteOEvento / 60) % 60);
    const horas = Math.floor((segundosAteOEvento / 3600) % 24);
    const dias = Math.floor(segundosAteOEvento / 86400);

    const contador = document.querySelector("#contador");
    contador.innerHTML = `${dias} dias ${horas} h ${minutos} m ${segundos} s`;

    if (segundosAteOEvento < 0) {
        clearInterval(contaHoras);
        contador.innerHTML = "o evento já ocorreu!";
    }

})