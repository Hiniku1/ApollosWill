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

// public/imgs/Banner4.jpg
var require_Banner4 = __commonJS({
  "public/imgs/Banner4.jpg"(exports, module) {
    module.exports = "/build/_assets/Banner4-4E3WK6X3.jpg";
  }
});

// app/routes/components/Carousel/Carousel.tsx
init_react();
function News() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "carousel w-full h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "item1",
    className: "carousel-item w-full"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[900px] h-[350px]",
    src: require_Banner1(),
    alt: "Banner1"
  })), /* @__PURE__ */ React.createElement("div", {
    id: "item2",
    className: "carousel-item w-full"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[900px] h-[350px]",
    src: require_Banner2(),
    alt: "Banner2"
  })), /* @__PURE__ */ React.createElement("div", {
    id: "item3",
    className: "carousel-item w-full"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[900px] h-[350px]",
    src: require_Banner3(),
    alt: "Banner3"
  })), /* @__PURE__ */ React.createElement("div", {
    id: "item4",
    className: "carousel-item w-full"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[900px] h-[350px]",
    src: require_Banner4(),
    alt: "Banner4"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center w-full py-2 gap-2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#item1",
    className: "btn btn-xs"
  }, "1"), /* @__PURE__ */ React.createElement("a", {
    href: "#item2",
    className: "btn btn-xs"
  }, "2"), /* @__PURE__ */ React.createElement("a", {
    href: "#item3",
    className: "btn btn-xs"
  }, "3"), /* @__PURE__ */ React.createElement("a", {
    href: "#item4",
    className: "btn btn-xs"
  }, "4")));
}

export {
  News
};
//# sourceMappingURL=/build/_shared/chunk-EQZDBRWG.js.map
