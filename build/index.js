var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// public/imgs/Poster1.jpg
var require_Poster1 = __commonJS({
  "public/imgs/Poster1.jpg"(exports, module2) {
    module2.exports = "/build/_assets/Poster1-YZKSDTUL.jpg";
  }
});

// public/imgs/Poster2.jpg
var require_Poster2 = __commonJS({
  "public/imgs/Poster2.jpg"(exports, module2) {
    module2.exports = "/build/_assets/Poster2-EI4GD3IC.jpg";
  }
});

// public/imgs/Poster3.jpg
var require_Poster3 = __commonJS({
  "public/imgs/Poster3.jpg"(exports, module2) {
    module2.exports = "/build/_assets/Poster3-2RP4ZU6Y.jpg";
  }
});

// public/imgs/Poster4.jpg
var require_Poster4 = __commonJS({
  "public/imgs/Poster4.jpg"(exports, module2) {
    module2.exports = "/build/_assets/Poster4-ADRQO2OO.jpg";
  }
});

// public/imgs/Poster5.jpg
var require_Poster5 = __commonJS({
  "public/imgs/Poster5.jpg"(exports, module2) {
    module2.exports = "/build/_assets/Poster5-BQLI56SP.jpg";
  }
});

// public/imgs/Poster6.jpg
var require_Poster6 = __commonJS({
  "public/imgs/Poster6.jpg"(exports, module2) {
    module2.exports = "/build/_assets/Poster6-7USMDYAR.jpg";
  }
});

// public/imgs/Poster7.jpg
var require_Poster7 = __commonJS({
  "public/imgs/Poster7.jpg"(exports, module2) {
    module2.exports = "/build/_assets/Poster7-7HJN4ILR.jpg";
  }
});

// public/imgs/Poster8.jpg
var require_Poster8 = __commonJS({
  "public/imgs/Poster8.jpg"(exports, module2) {
    module2.exports = "/build/_assets/Poster8-JM2WAR4Q.jpg";
  }
});

// public/imgs/Icon.jpg
var require_Icon = __commonJS({
  "public/imgs/Icon.jpg"(exports, module2) {
    module2.exports = "/build/_assets/Icon-LHFMNONL.jpg";
  }
});

// public/imgs/Banner1.jpg
var require_Banner1 = __commonJS({
  "public/imgs/Banner1.jpg"(exports, module2) {
    module2.exports = "/build/_assets/Banner1-U5JHR32U.jpg";
  }
});

// public/imgs/Banner2.jpg
var require_Banner2 = __commonJS({
  "public/imgs/Banner2.jpg"(exports, module2) {
    module2.exports = "/build/_assets/Banner2-PDT67JOU.jpg";
  }
});

// public/imgs/Banner3.png
var require_Banner3 = __commonJS({
  "public/imgs/Banner3.png"(exports, module2) {
    module2.exports = "/build/_assets/Banner3-GOKSILZN.png";
  }
});

// public/imgs/Banner4.jpg
var require_Banner4 = __commonJS({
  "public/imgs/Banner4.jpg"(exports, module2) {
    module2.exports = "/build/_assets/Banner4-4E3WK6X3.jpg";
  }
});

// public/imgs/Wallpaper.jpeg
var require_Wallpaper = __commonJS({
  "public/imgs/Wallpaper.jpeg"(exports, module2) {
    module2.exports = "/build/_assets/Wallpaper-ZIJMGMSM.jpeg";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/hiniku/ApollosWill/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-33SB6CTZ.css";

// route:/home/hiniku/ApollosWill/app/root.tsx
var import_react2 = require("@remix-run/react");
var meta = () => ({
  charset: "utf-8",
  title: "Apollo's Will",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/home/hiniku/ApollosWill/app/routes/components/season_carousel/season_carousel.tsx
var season_carousel_exports = {};
__export(season_carousel_exports, {
  default: () => Season_Carousel
});
var import_react3 = __toESM(require("react"));
var import_react_modal = __toESM(require("react-modal"));
var AsyncImage = (props) => {
  const [loadedSrc, setLoadedSrc] = import_react3.default.useState(null);
  import_react3.default.useEffect(() => {
    setLoadedSrc(null);
    if (props.src) {
      const handleLoad = () => {
        setLoadedSrc(props.src);
      };
      const image = new Image();
      image.addEventListener("error", (e) => console.log(e));
      image.addEventListener("load", handleLoad);
      image.src = props.src;
      return () => {
        image.removeEventListener("load", handleLoad);
      };
    }
  }, [props.src]);
  if (loadedSrc === props.src) {
    return /* @__PURE__ */ import_react3.default.createElement("img", __spreadValues({}, props));
  }
  return null;
};
function Season_Carousel({ children }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = import_react3.default.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "carousel w-full"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: ""
  }, /* @__PURE__ */ import_react3.default.createElement(import_react_modal.default, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    contentLabel: "Example Modal",
    className: ""
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-[500px] mr-10"
  }, /* @__PURE__ */ import_react3.default.createElement("figure", null, /* @__PURE__ */ import_react3.default.createElement("img", {
    className: "w-[300px]",
    src: require_Poster1(),
    alt: "Poster1"
  })), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ import_react3.default.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Something Something"))))), /* @__PURE__ */ import_react3.default.createElement(AsyncImage, {
    src: "imgs/anime_" + children[10].id + ".png"
  }));
}

// route:/home/hiniku/ApollosWill/app/routes/components/anime_cards/anime_cards_list.tsx
var anime_cards_list_exports = {};
__export(anime_cards_list_exports, {
  default: () => Anime_Cards_List
});
function Anime_Cards_List() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full flex justify-center items-center pt-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-32 mr-10"
  }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-[91px]",
    src: require_Poster1(),
    alt: "Poster1"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ React.createElement("p", null, "Something Something"))), /* @__PURE__ */ React.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-32"
  }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-[91px]",
    src: require_Poster2(),
    alt: "Poster2"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ React.createElement("p", null, "Something Something")))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full flex justify-center items-center pt-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-32 mr-10"
  }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-[91px]",
    src: require_Poster3(),
    alt: "Poster3"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ React.createElement("p", null, "Something Something"))), /* @__PURE__ */ React.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-32"
  }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-[91px]",
    src: require_Poster4(),
    alt: "Poster4"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ React.createElement("p", null, "Something Something")))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full flex justify-center items-center pt-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-32 mr-10"
  }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-[91px]",
    src: require_Poster5(),
    alt: "Poster5"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ React.createElement("p", null, "Something Something"))), /* @__PURE__ */ React.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-32"
  }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-[91px]",
    src: require_Poster6(),
    alt: "Poster6"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ React.createElement("p", null, "Something Something")))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full flex justify-center items-center pt-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-32 mr-10"
  }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-[91px]",
    src: require_Poster7(),
    alt: "Poster7"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ React.createElement("p", null, "Something Something"))), /* @__PURE__ */ React.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-32 "
  }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-[91px]",
    src: require_Poster8(),
    alt: "Poster8"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ React.createElement("p", null, "Something Something")))));
}

// route:/home/hiniku/ApollosWill/app/routes/components/list_carousel/list_carousel.tsx
var list_carousel_exports = {};
__export(list_carousel_exports, {
  default: () => List_Carousel
});
var import_react4 = __toESM(require("react"));
var import_react_modal2 = __toESM(require("react-modal"));
function List_Carousel() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = import_react4.default.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "carousel w-full"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: ""
  }, /* @__PURE__ */ import_react4.default.createElement(import_react_modal2.default, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    contentLabel: "Example Modal",
    className: ""
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-[500px] mr-10"
  }, /* @__PURE__ */ import_react4.default.createElement("figure", null, /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "w-[300px]",
    src: require_Poster1(),
    alt: "Poster1"
  })), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ import_react4.default.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ import_react4.default.createElement("p", null, "Something Something"))))), /* @__PURE__ */ import_react4.default.createElement("div", {
    id: "seasonW-1",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "#seasonW-4",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "#seasonW-2",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ import_react4.default.createElement("div", {
    id: "seasonW-2",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "#seasonW-1",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "#seasonW-3",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ import_react4.default.createElement("div", {
    id: "seasonW-3",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "#seasonW-2",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "#seasonW-4",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ import_react4.default.createElement("div", {
    id: "seasonW-4",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ import_react4.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "#seasonW-3",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "#seasonW-1",
    className: "btn btn-circle"
  }, "\u276F"))));
}

// route:/home/hiniku/ApollosWill/app/routes/components/modal/modal_anime.tsx
var modal_anime_exports = {};
__export(modal_anime_exports, {
  default: () => Modal_Anime
});
var import_react5 = __toESM(require("react"));
var import_react_modal3 = __toESM(require("react-modal"));
function Modal_Anime() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = import_react5.default.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    className: ""
  }, /* @__PURE__ */ import_react5.default.createElement("button", {
    onClick: openModal
  }, "Open Modal"), /* @__PURE__ */ import_react5.default.createElement(import_react_modal3.default, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    contentLabel: "Example Modal"
  }, /* @__PURE__ */ import_react5.default.createElement("button", {
    onClick: closeModal
  }, "close"), /* @__PURE__ */ import_react5.default.createElement("div", null, "I am a modal"), /* @__PURE__ */ import_react5.default.createElement("form", null, /* @__PURE__ */ import_react5.default.createElement("input", null))));
}

// route:/home/hiniku/ApollosWill/app/routes/components/navbar/Navbar.tsx
var Navbar_exports = {};
__export(Navbar_exports, {
  default: () => Navbar
});
var import_react6 = require("@remix-run/react");
function Navbar() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-[75px] z-10 bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-2 flex justify-between items-center w-full h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center pl-4"
  }, /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-quicksand mr-4 text-[24px]"
  }, "Apollo's Will")), /* @__PURE__ */ React.createElement("ul", {
    className: "hidden md:flex font-montserrat"
  }, /* @__PURE__ */ React.createElement("li", null, "Anime Search"), /* @__PURE__ */ React.createElement("li", null, "Industry"), /* @__PURE__ */ React.createElement("li", null, "About"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "pr-4"
  }, "User_Name"), /* @__PURE__ */ React.createElement("div", {
    className: "flex w-[130px] h-[130px] bg-smooth-blue items-center rounded-3xl justify-center mt-12 mr-10"
  }, /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: "/list"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "rounded-3xl w-[100px]",
    src: require_Icon(),
    alt: "Icon"
  }))))));
}

// route:/home/hiniku/ApollosWill/app/routes/components/ender/Ender.tsx
var Ender_exports = {};
__export(Ender_exports, {
  default: () => Ender
});
function Ender() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[150px] bg-[#FBAFAF] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("h1", null, "Apollo\u2019s Will is a property of Apollo\u2019s Will Co.,Ltd. \xA92022 All Rights Reserved."), /* @__PURE__ */ React.createElement("h1", null, "Icone Icone Icone"));
}

// route:/home/hiniku/ApollosWill/app/routes/components/news/News.tsx
var News_exports = {};
__export(News_exports, {
  default: () => News
});
function News() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "carousel autoplay w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "slide-news1",
    className: "carousel-item relative w-full scroll-mt-40"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[1000px] h-[450px]",
    src: require_Banner1(),
    alt: "Banner1"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#slide-news4",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#slide-news2",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "slide-news2",
    className: "carousel-item relative w-full scroll-mt-40"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[1000px] h-[450px]",
    src: require_Banner2(),
    alt: "Banner2"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#slide-news1",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#slide-news3",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "slide-news3",
    className: "carousel-item relative w-full scroll-mt-40"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[1000px] h-[450px]",
    src: require_Banner3(),
    alt: "Banner3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#slide-news2",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#slide-news4",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "slide-news4",
    className: "carousel-item relative w-full scroll-mt-40"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[1000px] h-[450px]",
    src: require_Banner4(),
    alt: "Banner4"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#slide-news3",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#slide-news1",
    className: "btn btn-circle"
  }, "\u276F"))));
}

// route:/home/hiniku/ApollosWill/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});

// app/routes/components/news/News.tsx
function News2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "carousel autoplay w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "slide-news1",
    className: "carousel-item relative w-full scroll-mt-40"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[1000px] h-[450px]",
    src: require_Banner1(),
    alt: "Banner1"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#slide-news4",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#slide-news2",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "slide-news2",
    className: "carousel-item relative w-full scroll-mt-40"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[1000px] h-[450px]",
    src: require_Banner2(),
    alt: "Banner2"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#slide-news1",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#slide-news3",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "slide-news3",
    className: "carousel-item relative w-full scroll-mt-40"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[1000px] h-[450px]",
    src: require_Banner3(),
    alt: "Banner3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#slide-news2",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#slide-news4",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "slide-news4",
    className: "carousel-item relative w-full scroll-mt-40"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[1000px] h-[450px]",
    src: require_Banner4(),
    alt: "Banner4"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#slide-news3",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#slide-news1",
    className: "btn btn-circle"
  }, "\u276F"))));
}

// app/routes/components/navbar/Navbar.tsx
var import_react7 = require("@remix-run/react");
function Navbar2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-[75px] z-10 bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-2 flex justify-between items-center w-full h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center pl-4"
  }, /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-quicksand mr-4 text-[24px]"
  }, "Apollo's Will")), /* @__PURE__ */ React.createElement("ul", {
    className: "hidden md:flex font-montserrat"
  }, /* @__PURE__ */ React.createElement("li", null, "Anime Search"), /* @__PURE__ */ React.createElement("li", null, "Industry"), /* @__PURE__ */ React.createElement("li", null, "About"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "pr-4"
  }, "User_Name"), /* @__PURE__ */ React.createElement("div", {
    className: "flex w-[130px] h-[130px] bg-smooth-blue items-center rounded-3xl justify-center mt-12 mr-10"
  }, /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: "/list"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "rounded-3xl w-[100px]",
    src: require_Icon(),
    alt: "Icon"
  }))))));
}

// app/routes/components/ender/Ender.tsx
function Ender2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[150px] bg-[#FBAFAF] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("h1", null, "Apollo\u2019s Will is a property of Apollo\u2019s Will Co.,Ltd. \xA92022 All Rights Reserved."), /* @__PURE__ */ React.createElement("h1", null, "Icone Icone Icone"));
}

// app/routes/components/season_carousel/season_carousel.tsx
var import_react8 = __toESM(require("react"));
var import_react_modal4 = __toESM(require("react-modal"));
var AsyncImage2 = (props) => {
  const [loadedSrc, setLoadedSrc] = import_react8.default.useState(null);
  import_react8.default.useEffect(() => {
    setLoadedSrc(null);
    if (props.src) {
      const handleLoad = () => {
        setLoadedSrc(props.src);
      };
      const image = new Image();
      image.addEventListener("error", (e) => console.log(e));
      image.addEventListener("load", handleLoad);
      image.src = props.src;
      return () => {
        image.removeEventListener("load", handleLoad);
      };
    }
  }, [props.src]);
  if (loadedSrc === props.src) {
    return /* @__PURE__ */ import_react8.default.createElement("img", __spreadValues({}, props));
  }
  return null;
};
function Season_Carousel2({ children }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = import_react8.default.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  return /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "carousel w-full"
  }, /* @__PURE__ */ import_react8.default.createElement("div", {
    className: ""
  }, /* @__PURE__ */ import_react8.default.createElement(import_react_modal4.default, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    contentLabel: "Example Modal",
    className: ""
  }, /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-[500px] mr-10"
  }, /* @__PURE__ */ import_react8.default.createElement("figure", null, /* @__PURE__ */ import_react8.default.createElement("img", {
    className: "w-[300px]",
    src: require_Poster1(),
    alt: "Poster1"
  })), /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ import_react8.default.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ import_react8.default.createElement("p", null, "Something Something"))))), /* @__PURE__ */ import_react8.default.createElement(AsyncImage2, {
    src: "imgs/anime_" + children[10].id + ".png"
  }));
}

// app/routes/components/list_carousel/list_carousel.tsx
var import_react9 = __toESM(require("react"));
var import_react_modal5 = __toESM(require("react-modal"));
function List_Carousel2() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = import_react9.default.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "carousel w-full"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: ""
  }, /* @__PURE__ */ import_react9.default.createElement(import_react_modal5.default, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    contentLabel: "Example Modal",
    className: ""
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-[500px] mr-10"
  }, /* @__PURE__ */ import_react9.default.createElement("figure", null, /* @__PURE__ */ import_react9.default.createElement("img", {
    className: "w-[300px]",
    src: require_Poster1(),
    alt: "Poster1"
  })), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ import_react9.default.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ import_react9.default.createElement("p", null, "Something Something"))))), /* @__PURE__ */ import_react9.default.createElement("div", {
    id: "seasonW-1",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ import_react9.default.createElement("a", {
    href: "#seasonW-4",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ import_react9.default.createElement("a", {
    href: "#seasonW-2",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ import_react9.default.createElement("div", {
    id: "seasonW-2",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ import_react9.default.createElement("a", {
    href: "#seasonW-1",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ import_react9.default.createElement("a", {
    href: "#seasonW-3",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ import_react9.default.createElement("div", {
    id: "seasonW-3",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ import_react9.default.createElement("a", {
    href: "#seasonW-2",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ import_react9.default.createElement("a", {
    href: "#seasonW-4",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ import_react9.default.createElement("div", {
    id: "seasonW-4",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    onClick: openModal,
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ import_react9.default.createElement("a", {
    href: "#seasonW-3",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ import_react9.default.createElement("a", {
    href: "#seasonW-1",
    className: "btn btn-circle"
  }, "\u276F"))));
}

// app/database/db.server.ts
var mariadb = require("mariadb");
var dotenv = require("dotenv").config({ path: ".env-local" });
var pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 5
});
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection lost");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connection");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused");
    }
  }
  if (connection)
    connection.release();
  return;
});

// route:/home/hiniku/ApollosWill/app/routes/index.tsx
var seasonAnime;
var loader = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    seasonAnime = await conn.query("SELECT * FROM Anime WHERE MONTH(start_date) = 4 and YEAR(start_date)= 2021 ;");
  } finally {
    if (conn)
      conn.release();
  }
  return null;
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-smooth-pink"
  }, /* @__PURE__ */ React.createElement(Navbar2, null), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-[900px] h-[350px] flex"
  }, /* @__PURE__ */ React.createElement(News2, null))), /* @__PURE__ */ React.createElement("h1", {
    className: "pl-20 pb-5 font-quicksand text-[24px]"
  }, "Your List"), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-full flex items-center justify-center bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-full h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[400px]"
  }, /* @__PURE__ */ React.createElement(List_Carousel2, null)))), /* @__PURE__ */ React.createElement("h1", {
    className: "pl-20 pb-5 font-quicksand text-[24px] pt-10"
  }, "Current"), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-full flex items-center justify-center bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-full h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[400px]"
  }, /* @__PURE__ */ React.createElement(Season_Carousel2, null, seasonAnime)))), /* @__PURE__ */ React.createElement(Ender2, null));
}

// route:/home/hiniku/ApollosWill/app/routes/list.tsx
var list_exports = {};
__export(list_exports, {
  default: () => List
});
var import_react10 = require("@remix-run/react");

// app/routes/components/anime_cards/anime_cards_list.tsx
function Anime_Cards_List2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full flex justify-center items-center pt-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-32 mr-10"
  }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-[91px]",
    src: require_Poster1(),
    alt: "Poster1"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ React.createElement("p", null, "Something Something"))), /* @__PURE__ */ React.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-32"
  }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-[91px]",
    src: require_Poster2(),
    alt: "Poster2"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ React.createElement("p", null, "Something Something")))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full flex justify-center items-center pt-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-32 mr-10"
  }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-[91px]",
    src: require_Poster3(),
    alt: "Poster3"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ React.createElement("p", null, "Something Something"))), /* @__PURE__ */ React.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-32"
  }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-[91px]",
    src: require_Poster4(),
    alt: "Poster4"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ React.createElement("p", null, "Something Something")))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full flex justify-center items-center pt-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-32 mr-10"
  }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-[91px]",
    src: require_Poster5(),
    alt: "Poster5"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ React.createElement("p", null, "Something Something"))), /* @__PURE__ */ React.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-32"
  }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-[91px]",
    src: require_Poster6(),
    alt: "Poster6"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ React.createElement("p", null, "Something Something")))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full flex justify-center items-center pt-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-32 mr-10"
  }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-[91px]",
    src: require_Poster7(),
    alt: "Poster7"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ React.createElement("p", null, "Something Something"))), /* @__PURE__ */ React.createElement("div", {
    className: "card card-side bg-base-100 shadow-xl h-32 "
  }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-[91px]",
    src: require_Poster8(),
    alt: "Poster8"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "card-body w-[300px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Anime_Name"), /* @__PURE__ */ React.createElement("p", null, "Something Something")))));
}

// route:/home/hiniku/ApollosWill/app/routes/list.tsx
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
  }, /* @__PURE__ */ React.createElement(import_react10.Link, {
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
  }))), /* @__PURE__ */ React.createElement(Anime_Cards_List2, null), /* @__PURE__ */ React.createElement("div", {
    className: "mt-16"
  }, /* @__PURE__ */ React.createElement(Ender2, null)));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "c02f6628", "entry": { "module": "/build/entry.client-XCMY44MR.js", "imports": ["/build/_shared/chunk-7CZMI56X.js", "/build/_shared/chunk-MEIEL36I.js", "/build/_shared/chunk-XV23MX66.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-M5BSYEUP.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/anime_cards/anime_cards_list": { "id": "routes/components/anime_cards/anime_cards_list", "parentId": "root", "path": "components/anime_cards/anime_cards_list", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/anime_cards/anime_cards_list-3RED4VTJ.js", "imports": ["/build/_shared/chunk-3M5YMT2S.js", "/build/_shared/chunk-DLH4EA4Y.js", "/build/_shared/chunk-XYXPWVCY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/ender/Ender": { "id": "routes/components/ender/Ender", "parentId": "root", "path": "components/ender/Ender", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/ender/Ender-DUYYQCVJ.js", "imports": ["/build/_shared/chunk-BKLBPOWP.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/list_carousel/list_carousel": { "id": "routes/components/list_carousel/list_carousel", "parentId": "root", "path": "components/list_carousel/list_carousel", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/list_carousel/list_carousel-KC57ODFZ.js", "imports": ["/build/_shared/chunk-F4KY2GZ2.js", "/build/_shared/chunk-DLH4EA4Y.js", "/build/_shared/chunk-XYXPWVCY.js", "/build/_shared/chunk-EVNUERIG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/modal/modal_anime": { "id": "routes/components/modal/modal_anime", "parentId": "root", "path": "components/modal/modal_anime", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/modal/modal_anime-INNMENHJ.js", "imports": ["/build/_shared/chunk-EVNUERIG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/navbar/Navbar": { "id": "routes/components/navbar/Navbar", "parentId": "root", "path": "components/navbar/Navbar", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/navbar/Navbar-PCRJCXTZ.js", "imports": ["/build/_shared/chunk-QG4WLLXH.js", "/build/_shared/chunk-T6GTFLHQ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/news/News": { "id": "routes/components/news/News", "parentId": "root", "path": "components/news/News", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/news/News-JL4KIEUI.js", "imports": ["/build/_shared/chunk-BKROVRPJ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/season_carousel/season_carousel": { "id": "routes/components/season_carousel/season_carousel", "parentId": "root", "path": "components/season_carousel/season_carousel", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/season_carousel/season_carousel-TX2F3TAU.js", "imports": ["/build/_shared/chunk-4GK5JZ5K.js", "/build/_shared/chunk-XYXPWVCY.js", "/build/_shared/chunk-EVNUERIG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-MUT6MA5Q.js", "imports": ["/build/_shared/chunk-BKROVRPJ.js", "/build/_shared/chunk-4GK5JZ5K.js", "/build/_shared/chunk-F4KY2GZ2.js", "/build/_shared/chunk-DLH4EA4Y.js", "/build/_shared/chunk-XYXPWVCY.js", "/build/_shared/chunk-EVNUERIG.js", "/build/_shared/chunk-QG4WLLXH.js", "/build/_shared/chunk-T6GTFLHQ.js", "/build/_shared/chunk-BKLBPOWP.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/list": { "id": "routes/list", "parentId": "root", "path": "list", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/list-PAKUW7YG.js", "imports": ["/build/_shared/chunk-3M5YMT2S.js", "/build/_shared/chunk-DLH4EA4Y.js", "/build/_shared/chunk-XYXPWVCY.js", "/build/_shared/chunk-T6GTFLHQ.js", "/build/_shared/chunk-BKLBPOWP.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-C02F6628.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/components/season_carousel/season_carousel": {
    id: "routes/components/season_carousel/season_carousel",
    parentId: "root",
    path: "components/season_carousel/season_carousel",
    index: void 0,
    caseSensitive: void 0,
    module: season_carousel_exports
  },
  "routes/components/anime_cards/anime_cards_list": {
    id: "routes/components/anime_cards/anime_cards_list",
    parentId: "root",
    path: "components/anime_cards/anime_cards_list",
    index: void 0,
    caseSensitive: void 0,
    module: anime_cards_list_exports
  },
  "routes/components/list_carousel/list_carousel": {
    id: "routes/components/list_carousel/list_carousel",
    parentId: "root",
    path: "components/list_carousel/list_carousel",
    index: void 0,
    caseSensitive: void 0,
    module: list_carousel_exports
  },
  "routes/components/modal/modal_anime": {
    id: "routes/components/modal/modal_anime",
    parentId: "root",
    path: "components/modal/modal_anime",
    index: void 0,
    caseSensitive: void 0,
    module: modal_anime_exports
  },
  "routes/components/navbar/Navbar": {
    id: "routes/components/navbar/Navbar",
    parentId: "root",
    path: "components/navbar/Navbar",
    index: void 0,
    caseSensitive: void 0,
    module: Navbar_exports
  },
  "routes/components/ender/Ender": {
    id: "routes/components/ender/Ender",
    parentId: "root",
    path: "components/ender/Ender",
    index: void 0,
    caseSensitive: void 0,
    module: Ender_exports
  },
  "routes/components/news/News": {
    id: "routes/components/news/News",
    parentId: "root",
    path: "components/news/News",
    index: void 0,
    caseSensitive: void 0,
    module: News_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/list": {
    id: "routes/list",
    parentId: "root",
    path: "list",
    index: void 0,
    caseSensitive: void 0,
    module: list_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
