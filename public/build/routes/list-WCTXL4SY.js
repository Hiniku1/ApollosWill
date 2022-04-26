import {
  require_Icon
} from "/build/_shared/chunk-HR2AEAP7.js";
import {
  Link
} from "/build/_shared/chunk-4QVVR2OG.js";
import {
  React,
  __commonJS,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// public/imgs/Wallpaper.jpeg
var require_Wallpaper = __commonJS({
  "public/imgs/Wallpaper.jpeg"(exports, module) {
    module.exports = "/build/_assets/Wallpaper-ZIJMGMSM.jpeg";
  }
});

// browser-route-module:/home/hiniku/apolloswill/app/routes/list.tsx?browser
init_react();

// app/routes/list.tsx
init_react();
function List() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-screen h-[500px] -z-10",
    src: require_Wallpaper(),
    alt: "Wallpaper"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-[200px] h-[200px] bg-smooth-blue items-center rounded-3xl justify-center"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/list"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "rounded-3xl w-[100px]",
    src: require_Icon(),
    alt: "Icon"
  })))));
}
export {
  List as default
};
//# sourceMappingURL=/build/routes/list-WCTXL4SY.js.map
