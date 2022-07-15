const getRemainTime = deadline => {

    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 360 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24))

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

const countdown = (deadline, elem) => {

    const el = document.getElementById(elem);

    const timerUpdate = setInterval(() => {
        let t = getRemainTime(deadline);
        el.innerHTML = `<p><b>TIEMPO RESTANTE:</b></p>`
        el.innerHTML += `<h1 style="font-size: 90px;">${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s</h1>`;
        el.innerHTML += `<p><b>Lunes 18 de Julio, a las 15:00pm</b></p>`

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = `<a id="startEvent" href="pages/acces/index.html">ENTRAR</a>`;
        }
    }, 1000);

};

countdown('July 18, 2022 15:30:00', 'clock');
