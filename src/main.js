document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Draggable, InertiaPlugin);
  // const audio = document.querySelector(".p9-knob-audio");
  const el = document.querySelector(".footer-wave");
  const fm = document.querySelector(".footer-station");
  const width = el.clientWidth - innerWidth;
  let x = 0;
  function animate() {
    if (y[0].x === x) {
      requestAnimationFrame(animate);
      return;
    }
    x = y[0].x;
    fm.innerText =
      100 - gsap.utils.mapRange(width, 0, 200, 50, y[0].x).toFixed(1);
    // audio.currentTime = 0;
    // audio.play();
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
  const y = Draggable.create(".footer-wave", {
    type: "x",
    bounds: ".footer",
    inertia: true,
    throwResistance: 0.5,
    dragResistance: 0.5,
    liveSnap: 10,
    snap: 10,
  });
});
