var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// route:/home/hiniku/ApollosWill/app/routes/components/anime_seasons/Season_Sp.tsx
var Season_Sp_exports = {};
__export(Season_Sp_exports, {
  default: () => Season_F
});
function Season_F() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "carousel w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "seasonSp-1",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSp-4",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSp-2",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonSp-2",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSp-1",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSp-3",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonSp-3",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSp-2",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSp-4",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonSp-4",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSp-3",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSp-1",
    className: "btn btn-circle"
  }, "\u276F"))));
}

// route:/home/hiniku/ApollosWill/app/routes/components/anime_seasons/Season_Su.tsx
var Season_Su_exports = {};
__export(Season_Su_exports, {
  default: () => Season_Su
});
function Season_Su() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "carousel w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "seasonSu-1",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSu-4",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSu-2",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonSu-2",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSu-1",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSu-3",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonSu-3",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSu-2",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSu-4",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonSu-4",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSu-3",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSu-1",
    className: "btn btn-circle"
  }, "\u276F"))));
}

// route:/home/hiniku/ApollosWill/app/routes/components/anime_seasons/Season_F.tsx
var Season_F_exports = {};
__export(Season_F_exports, {
  default: () => Season_F2
});
function Season_F2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "carousel w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "seasonF-1",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonF-4",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonF-2",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonF-2",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonF-1",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonF-3",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonF-3",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonF-2",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonF-4",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonF-4",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonF-3",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonF-1",
    className: "btn btn-circle"
  }, "\u276F"))));
}

// route:/home/hiniku/ApollosWill/app/routes/components/anime_seasons/Season_W.tsx
var Season_W_exports = {};
__export(Season_W_exports, {
  default: () => Season
});
function Season() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "carousel w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "seasonW-1",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonW-4",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonW-2",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonW-2",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonW-1",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonW-3",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonW-3",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonW-2",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonW-4",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonW-4",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonW-3",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonW-1",
    className: "btn btn-circle"
  }, "\u276F"))));
}

// route:/home/hiniku/ApollosWill/app/routes/components/min_anime/min_anime.tsx
var min_anime_exports = {};
__export(min_anime_exports, {
  default: () => MinAnime
});
function MinAnime() {
  return /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "my-modal-3",
    className: "btn modal-button"
  }, "open modal"), /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    id: "my-modal-3",
    className: "modal-toggle"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "modal"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "modal-box relative"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "my-modal-3",
    className: "btn btn-sm btn-circle absolute right-2 top-2"
  }, "\u2715"), /* @__PURE__ */ React.createElement("h3", {
    className: "text-lg font-bold"
  }, "Congratulations random Interner user!"), /* @__PURE__ */ React.createElement("p", {
    className: "py-4"
  }, "You've been selected for a chance to get one year of subscription to use Wikipedia for free!"))));
}

// route:/home/hiniku/ApollosWill/app/routes/components/navbar/Navbar.tsx
var Navbar_exports = {};
__export(Navbar_exports, {
  default: () => Navbar
});
var import_react3 = require("@remix-run/react");
function Navbar() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-[75px] z-10 bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-2 flex justify-between items-center w-full h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center pl-4"
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
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
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
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
var import_react4 = require("@remix-run/react");
function Navbar2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-[75px] z-10 bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-2 flex justify-between items-center w-full h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center pl-4"
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
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
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "/list"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "rounded-3xl w-[100px]",
    src: require_Icon(),
    alt: "Icon"
  }))))));
}

// app/routes/components/anime_seasons/Season_W.tsx
function Season2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "carousel w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "seasonW-1",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonW-4",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonW-2",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonW-2",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonW-1",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonW-3",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonW-3",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonW-2",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonW-4",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonW-4",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonW-3",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonW-1",
    className: "btn btn-circle"
  }, "\u276F"))));
}

// app/routes/components/anime_seasons/Season_Sp.tsx
function Season_F3() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "carousel w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "seasonSp-1",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSp-4",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSp-2",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonSp-2",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSp-1",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSp-3",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonSp-3",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSp-2",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSp-4",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonSp-4",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSp-3",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSp-1",
    className: "btn btn-circle"
  }, "\u276F"))));
}

// app/routes/components/anime_seasons/Season_Su.tsx
function Season_Su2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "carousel w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "seasonSu-1",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSu-4",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSu-2",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonSu-2",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSu-1",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSu-3",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonSu-3",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSu-2",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSu-4",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonSu-4",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSu-3",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonSu-1",
    className: "btn btn-circle"
  }, "\u276F"))));
}

// app/routes/components/anime_seasons/Season_F.tsx
function Season_F4() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "carousel w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "seasonF-1",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonF-4",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonF-2",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonF-2",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonF-1",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonF-3",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonF-3",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonF-2",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonF-4",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ React.createElement("div", {
    id: "seasonF-4",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster1(),
    alt: "Poster1"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster2(),
    alt: "Poster2"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster3(),
    alt: "Poster3"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster4(),
    alt: "Poster4"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-[250px] h-[350px] pl-16",
    src: require_Poster5(),
    alt: "Poster5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#seasonF-3",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ React.createElement("a", {
    href: "#seasonF-1",
    className: "btn btn-circle"
  }, "\u276F"))));
}

// app/routes/components/ender/Ender.tsx
function Ender2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[150px] bg-[#FBAFAF] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("h1", null, "Apollo\u2019s Will is a property of Apollo\u2019s Will Co.,Ltd. \xA92022 All Rights Reserved."), /* @__PURE__ */ React.createElement("h1", null, "Icone Icone Icone"));
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
var loader = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query("SELECT * FROM `test`");
    console.log(res[0]);
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
  }, "Winter 2022"), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-full flex items-center justify-center bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-full h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[400px]"
  }, /* @__PURE__ */ React.createElement(Season2, null)))), /* @__PURE__ */ React.createElement("h1", {
    className: "pl-20 pb-5 font-quicksand text-[24px] pt-10"
  }, "Spring 2022"), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-full flex items-center justify-center bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-full h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[400px]"
  }, /* @__PURE__ */ React.createElement(Season_F3, null)))), /* @__PURE__ */ React.createElement("h1", {
    className: "pl-20 pb-5 font-quicksand text-[24px] pt-10"
  }, "Summer 2022"), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-full flex items-center justify-center bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-full h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[400px]"
  }, /* @__PURE__ */ React.createElement(Season_Su2, null)))), /* @__PURE__ */ React.createElement("h1", {
    className: "pl-20 pb-5 font-quicksand text-[24px] pt-10"
  }, "Fall 2022"), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-full flex items-center justify-center bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-full h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[400px]"
  }, /* @__PURE__ */ React.createElement(Season_F4, null)))), /* @__PURE__ */ React.createElement(Ender2, null));
}

// route:/home/hiniku/ApollosWill/app/routes/list.tsx
var list_exports = {};
__export(list_exports, {
  default: () => List
});
var import_react5 = require("@remix-run/react");

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

// app/routes/components/min_anime/min_anime.tsx
function MinAnime2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "my-modal-3",
    className: "btn modal-button"
  }, "open modal"), /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    id: "my-modal-3",
    className: "modal-toggle"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "modal"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "modal-box relative"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "my-modal-3",
    className: "btn btn-sm btn-circle absolute right-2 top-2"
  }, "\u2715"), /* @__PURE__ */ React.createElement("h3", {
    className: "text-lg font-bold"
  }, "Congratulations random Interner user!"), /* @__PURE__ */ React.createElement("p", {
    className: "py-4"
  }, "You've been selected for a chance to get one year of subscription to use Wikipedia for free!"))));
}

// route:/home/hiniku/ApollosWill/app/routes/list.tsx
function List() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-smooth-pink"
  }, /* @__PURE__ */ React.createElement(MinAnime2, null), /* @__PURE__ */ React.createElement("img", {
    className: "w-screen h-[500px] -z-10 -mb-32",
    src: require_Wallpaper(),
    alt: "Wallpaper"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-[200px] h-[200px] bg-smooth-pink items-center rounded-3xl justify-center"
  }, /* @__PURE__ */ React.createElement(import_react5.Link, {
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
var assets_manifest_default = { "version": "08b5c71e", "entry": { "module": "/build/entry.client-ZSHVBG2L.js", "imports": ["/build/_shared/chunk-LTD73PV3.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-UELYOXDM.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/anime_cards/anime_cards_list": { "id": "routes/components/anime_cards/anime_cards_list", "parentId": "root", "path": "components/anime_cards/anime_cards_list", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/anime_cards/anime_cards_list-JNLWYNRK.js", "imports": ["/build/_shared/chunk-EZPPP6U5.js", "/build/_shared/chunk-H7SLTJQE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/anime_seasons/Season_F": { "id": "routes/components/anime_seasons/Season_F", "parentId": "root", "path": "components/anime_seasons/Season_F", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/anime_seasons/Season_F-H2BCFB33.js", "imports": ["/build/_shared/chunk-VSYN35HC.js", "/build/_shared/chunk-H7SLTJQE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/anime_seasons/Season_Sp": { "id": "routes/components/anime_seasons/Season_Sp", "parentId": "root", "path": "components/anime_seasons/Season_Sp", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/anime_seasons/Season_Sp-D5DXLOJB.js", "imports": ["/build/_shared/chunk-7AJLX53Z.js", "/build/_shared/chunk-H7SLTJQE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/anime_seasons/Season_Su": { "id": "routes/components/anime_seasons/Season_Su", "parentId": "root", "path": "components/anime_seasons/Season_Su", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/anime_seasons/Season_Su-PLY4ZVKS.js", "imports": ["/build/_shared/chunk-B5HTOMRL.js", "/build/_shared/chunk-H7SLTJQE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/anime_seasons/Season_W": { "id": "routes/components/anime_seasons/Season_W", "parentId": "root", "path": "components/anime_seasons/Season_W", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/anime_seasons/Season_W-B3EQFFV4.js", "imports": ["/build/_shared/chunk-QXPJ2DQU.js", "/build/_shared/chunk-H7SLTJQE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/ender/Ender": { "id": "routes/components/ender/Ender", "parentId": "root", "path": "components/ender/Ender", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/ender/Ender-5FFAFQ36.js", "imports": ["/build/_shared/chunk-QY5JLRWB.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/min_anime/min_anime": { "id": "routes/components/min_anime/min_anime", "parentId": "root", "path": "components/min_anime/min_anime", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/min_anime/min_anime-PQ2RJGWI.js", "imports": ["/build/_shared/chunk-5SE6NU5K.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/navbar/Navbar": { "id": "routes/components/navbar/Navbar", "parentId": "root", "path": "components/navbar/Navbar", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/navbar/Navbar-UJSZWL77.js", "imports": ["/build/_shared/chunk-MRFT7TK3.js", "/build/_shared/chunk-HR2AEAP7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/news/News": { "id": "routes/components/news/News", "parentId": "root", "path": "components/news/News", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/news/News-OX7ZRYOS.js", "imports": ["/build/_shared/chunk-SNYIVYPZ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-UCZGYRFQ.js", "imports": ["/build/_shared/chunk-MRFT7TK3.js", "/build/_shared/chunk-SNYIVYPZ.js", "/build/_shared/chunk-HR2AEAP7.js", "/build/_shared/chunk-QY5JLRWB.js", "/build/_shared/chunk-7AJLX53Z.js", "/build/_shared/chunk-B5HTOMRL.js", "/build/_shared/chunk-VSYN35HC.js", "/build/_shared/chunk-QXPJ2DQU.js", "/build/_shared/chunk-H7SLTJQE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/list": { "id": "routes/list", "parentId": "root", "path": "list", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/list-S47Y7OUH.js", "imports": ["/build/_shared/chunk-HR2AEAP7.js", "/build/_shared/chunk-QY5JLRWB.js", "/build/_shared/chunk-EZPPP6U5.js", "/build/_shared/chunk-H7SLTJQE.js", "/build/_shared/chunk-5SE6NU5K.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-08B5C71E.js" };

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
  "routes/components/anime_cards/anime_cards_list": {
    id: "routes/components/anime_cards/anime_cards_list",
    parentId: "root",
    path: "components/anime_cards/anime_cards_list",
    index: void 0,
    caseSensitive: void 0,
    module: anime_cards_list_exports
  },
  "routes/components/anime_seasons/Season_Sp": {
    id: "routes/components/anime_seasons/Season_Sp",
    parentId: "root",
    path: "components/anime_seasons/Season_Sp",
    index: void 0,
    caseSensitive: void 0,
    module: Season_Sp_exports
  },
  "routes/components/anime_seasons/Season_Su": {
    id: "routes/components/anime_seasons/Season_Su",
    parentId: "root",
    path: "components/anime_seasons/Season_Su",
    index: void 0,
    caseSensitive: void 0,
    module: Season_Su_exports
  },
  "routes/components/anime_seasons/Season_F": {
    id: "routes/components/anime_seasons/Season_F",
    parentId: "root",
    path: "components/anime_seasons/Season_F",
    index: void 0,
    caseSensitive: void 0,
    module: Season_F_exports
  },
  "routes/components/anime_seasons/Season_W": {
    id: "routes/components/anime_seasons/Season_W",
    parentId: "root",
    path: "components/anime_seasons/Season_W",
    index: void 0,
    caseSensitive: void 0,
    module: Season_W_exports
  },
  "routes/components/min_anime/min_anime": {
    id: "routes/components/min_anime/min_anime",
    parentId: "root",
    path: "components/min_anime/min_anime",
    index: void 0,
    caseSensitive: void 0,
    module: min_anime_exports
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
