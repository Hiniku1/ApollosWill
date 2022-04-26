import {
  React,
  __commonJS,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// public/imgs/Banner1.jpg
var require_Banner1 = __commonJS({
  "public/imgs/Banner1.jpg"(exports, module) {
    module.exports = "/build/_assets/Banner1-U5JHR32U.jpg";
  }
});

// public/imgs/Banner2.jpg
var require_Banner2 = __commonJS({
  "public/imgs/Banner2.jpg"(exports, module) {
    module.exports = "/build/_assets/Banner2-PDT67JOU.jpg";
  }
});

// public/imgs/Banner3.png
var require_Banner3 = __commonJS({
  "public/imgs/Banner3.png"(exports, module) {
    module.exports = "/build/_assets/Banner3-GOKSILZN.png";
  }
});

// app/routes/components/Carousel/Carousel.tsx
init_react();
function Carousel() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "carousel rounded-box"
  }, /* @__PURE__ */ React.createElement("img", {
    src: require_Banner1(),
    alt: "Banner1"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "carousel-item"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "carousel-item"
  }, /* @__PURE__ */ React.createElement("img", {
    src: require_Banner2(),
    alt: "Banner2"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "carousel-item"
  }, /* @__PURE__ */ React.createElement("img", {
    src: require_Banner3(),
    alt: "Banner3"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "carousel-item"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "carousel-item"
  }, /* @__PURE__ */ React.createElement("img", {
    src: require_Banner2(),
    alt: "Banner2"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "carousel-item"
  }, /* @__PURE__ */ React.createElement("img", {
    src: require_Banner3(),
    alt: "Banner3"
  })));
}

export {
  Carousel
};
//# sourceMappingURL=/build/_shared/chunk-KW4PLAAC.js.map
