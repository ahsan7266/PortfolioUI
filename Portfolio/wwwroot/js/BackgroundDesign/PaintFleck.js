(async function () {

    // if (CSS["paintWorklet"] === undefined) {
    //     await import("https://unpkg.com/css-paint-polyfill");
    // }

    // The code for this worklet can be found here: https://github.com/georgedoescode/houdini-fleck-patterns/blob/main/fleck-worklet.js
    CSS.paintWorklet.addModule("js/BackgroundDesign/fleck-worklet.bundle.js");

    // Fix a weird Safari/Firefox polyfill issue...
    // setTimeout(() => {
    //     document.querySelectorAll(".fleck-demo").forEach((el) => {
    //         el.style.width = "100%";
    //     });
    // }, 250);
})();

