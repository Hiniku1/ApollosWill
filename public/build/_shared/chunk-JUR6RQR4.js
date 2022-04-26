import {
  Link
} from "/build/_shared/chunk-AOUH7XPG.js";
import {
  React,
  __commonJS,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// public/imgs/Icon.jpg
var require_Icon = __commonJS({
  "public/imgs/Icon.jpg"(exports, module) {
    module.exports = "/build/_assets/Icon-LHFMNONL.jpg";
  }
});

// app/routes/components/Navbar/Navbar.tsx
init_react();
function Navbar() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-[75px] z-10 bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-2 flex justify-between items-center w-full h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center pl-4"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-quicksand mr-4 text-[24px]"
  }, "Apollo's Will"), /* @__PURE__ */ React.createElement("ul", {
    className: "hidden md:flex"
  }, /* @__PURE__ */ React.createElement("li", null, "Anime Search"), /* @__PURE__ */ React.createElement("li", null, "Industry"), /* @__PURE__ */ React.createElement("li", null, "About"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "pr-4"
  }, "User_Name"), /* @__PURE__ */ React.createElement("div", {
    className: "flex w-[130px] h-[130px] bg-smooth-blue items-center rounded-3xl justify-center mt-12 mr-10"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "app/routes/list"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "rounded-3xl w-[100px]",
    src: require_Icon(),
    alt: "Icon"
  }))))));
}

export {
  Navbar
};
//# sourceMappingURL=/build/_shared/chunk-JUR6RQR4.js.map
