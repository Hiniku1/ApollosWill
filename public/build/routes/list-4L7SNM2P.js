import {
  Ender
} from "/build/_shared/chunk-4XI4HX6U.js";
import {
  Anime_Cards_List
} from "/build/_shared/chunk-F4V4AMO3.js";
import "/build/_shared/chunk-2QPKAB7J.js";
import {
  require_Icon
} from "/build/_shared/chunk-C4Y45FKJ.js";
import {
  Link
} from "/build/_shared/chunk-MWYMRJYR.js";
import {
  React,
  __commonJS,
  init_react
} from "/build/_shared/chunk-3WTMIVJX.js";

// public/imgs/Wallpaper.jpeg
var require_Wallpaper = __commonJS({
  "public/imgs/Wallpaper.jpeg"(exports, module) {
    module.exports = "/build/_assets/Wallpaper-ZIJMGMSM.jpeg";
  }
});

// browser-route-module:C:\Users\workstation\Desktop\ApollosWill\app\routes\list.tsx?browser
init_react();

// app/routes/list.tsx
init_react();
function List() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-smooth-pink"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-screen h-[500px] -z-10 -mb-32",
    src: require_Wallpaper(),
    alt: "Wallpaper"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-[200px] h-[200px] bg-smooth-pink items-center rounded-3xl justify-center"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/list"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "rounded-3xl w-[150px]",
    src: require_Icon(),
    alt: "Icon"
  })))), /* @__PURE__ */ React.createElement("h1", {
    className: "font-montserrat text-7xl flex justify-center"
  }, "User_Name"), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-control w-full flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "label"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "label-text-"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "label-text-alt"
  }, "Filters")), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "Search Anime",
    className: "input input-bordered w-[700px]"
  }))), /* @__PURE__ */ React.createElement(Anime_Cards_List, null), /* @__PURE__ */ React.createElement("div", {
    className: "mt-16"
  }, /* @__PURE__ */ React.createElement(Ender, null)));
}
export {
  List as default
};
//# sourceMappingURL=/build/routes/list-4L7SNM2P.js.map
