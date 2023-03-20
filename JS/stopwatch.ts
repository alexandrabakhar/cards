export const stopwatch = () => {
    const clock = document.querySelector('.game__clock') as HTMLElement;
    let sec: number = 0;
    let min: number = 0;

    function tick() {
        sec++;

        if (sec >= 60) {
            sec = 0;
            min++;
            if (min >= 60) {
                min = 0;
                return;
            }
        }
    }

    function add() {
        tick();
        clock.textContent =
            (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec);
    }

    function timer() {
        const setStopwatchInterval = setInterval(() => {
            add();
            console.log(1);
        }, 1000);
        window.application.timers.push(setStopwatchInterval);
    }
    timer();
};
