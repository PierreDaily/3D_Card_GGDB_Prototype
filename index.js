import Hammer from "hammerjs";
const [container] = document.getElementsByClassName("container");
const [shoe] = document.getElementsByClassName("shoe__img ");
const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");
const [selectSize] = document.getElementsByClassName("select-size ");
const [purchase] = document.getElementsByClassName("purchase");

const resetAnimation = () => {
  container.style.transition = "all 0.5s ease";
  container.style.transform = `rotateX(0deg) rotateY(0deg)`;
  h1.style.transition = "all 0.5s ease";
  h1.style.transform = "translateZ(0px)";
  h3.style.transition = "all 0.5s ease";
  h3.style.transform = "translateZ(0px)";
  selectSize.style.transition = "all 0.5s ease";
  selectSize.style.transform = "translateZ(0px)";
  purchase.style.transition = "all 0.5s ease";
  purchase.style.transform = "translateZ(0px)";
  shoe.style.transform = "translateZ(0px) rotate(0deg)";
};

const transform = (callback) => {
  container.style.transition = "none";
  callback();
  h1.style.transform = "translateZ(250px)";
  h3.style.transform = "translateZ(200px)";
  selectSize.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(50px)";
  shoe.style.transform = "translateZ(250px) rotate(-45deg)";
};
if (container && h1 && h3 && shoe) {
  container.addEventListener("mousemove", (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    transform(() => {
      container.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
    });
  });

  container.addEventListener("mouseleave", () => {
    resetAnimation();
  });
}

var hammertime = new Hammer(container);
hammertime.on("pan", function (ev) {
  transform(() => {
    container.style.transform = `rotateX(${ev.deltaY / 20}deg) rotateY(${
      ev.deltaX
    }deg)`;
  });
});

hammertime.on("panend", function (ev) {
  resetAnimation();
});
