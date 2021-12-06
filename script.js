let easeingArr = "power4.out",
  button = document.querySelectorAll("#easeBtnCmd div button"),
  codeExample = document.getElementById("codeExample"),
  copyTxt = document.getElementById("copyTxt"),
  ttDur = 2;
let durAtion = document.getElementById("durAtion");

durAtion.onchange = () => {
  ttDur = durAtion.value;
};

let getEasing = (btn) => {
  let easingVal = btn.innerHTML;
  if (easingVal === "SteppedEase.config(12)") {
    return SteppedEase.config(12);
  } else {
    return easingVal;
  }
};

button.forEach((btn) => {
  btn.onclick = () => {
    gsap.set(".box", { y: 0 });
    let easingVal = btn.innerHTML;
    gsap.to(
      ".box",
      parseInt(ttDur),
      {
        y: -275,
        ease: getEasing(btn),
        delay: 0.5
      }
    );

    codeExample.innerHTML = easingVal;
  };
});
copyTxt.onclick = () => {
  navigator.clipboard.writeText(codeExample.innerHTML);
};
