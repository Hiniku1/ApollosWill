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

// public/imgs/search_1.jpg
var require_search_1 = __commonJS({
  "public/imgs/search_1.jpg"(exports, module2) {
    module2.exports = "/build/_assets/search_1-ZVQ65TD3.jpg";
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

// route:C:\ApollosWill\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-JTRBZMUK.css";

// node_modules/react-responsive-carousel/lib/styles/carousel.min.css
var carousel_min_default = "/build/_assets/carousel.min-PQ3VLNRO.css";

// route:C:\ApollosWill\app\root.tsx
var import_react2 = require("@remix-run/react");
var meta = () => ({
  charset: "utf-8",
  title: "Apollo's Will",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: carousel_min_default }
];
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-smooth-pink"
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:C:\ApollosWill\app\routes\components\season_carousel\season_carousel.tsx
var season_carousel_exports = {};
__export(season_carousel_exports, {
  default: () => Season_Carousel
});
var import_react3 = __toESM(require("react"));
var import_react4 = require("react");
var import_react_modal = __toESM(require("react-modal"));
function Season_Carousel({ animes, loginId }) {
  let [animeState, setAnimeState] = (0, import_react4.useState)("");
  let [animeId, setListAnimeId] = (0, import_react4.useState)(0);
  let [modalAnimeId, setAnimeId] = (0, import_react4.useState)("");
  let [modalAnimeName, setAnimeName] = (0, import_react4.useState)("");
  let [modalAnimeDescription, setAnimeDescription] = (0, import_react4.useState)("");
  let [modalAnimeEpisodeCount, setAnimeEpisodeCount] = (0, import_react4.useState)(0);
  let [modalAnimeEpisodeWatched, setAnimeEpisodeWatched] = (0, import_react4.useState)(0);
  let [modalAnimeScore, setAnimeScore] = (0, import_react4.useState)(0);
  let [isEpisodeHidden, setEpisodeHidden] = (0, import_react4.useState)("hidden");
  let [isAddAnimeHidden, setAddAnimeHidden] = (0, import_react4.useState)("btn");
  let [isStateHidden, setStateHidden] = (0, import_react4.useState)("hidden");
  let listData = [
    {
      id: animes[animeId].id,
      animeState,
      score: modalAnimeScore,
      episodesWatched: modalAnimeEpisodeWatched,
      userId: loginId
    }
  ];
  function changeModalAnime(id) {
    fetch("http://localhost:3011/searchAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: animes[id].id,
        userId: loginId
      })
    }).then((data) => {
      return data.json();
    }).then((post) => {
      if (post == true) {
        fetch("http://localhost:3011/getEpisodesAndScore", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id: animes[id].id,
            userId: loginId
          })
        }).then((data) => {
          return data.json();
        }).then((post2) => {
          console.log(post2);
          setAnimeEpisodeWatched(post2.episodes_watched);
          setAnimeScore(post2.rating);
        });
        console.log("ta na lista");
        console.log(loginId);
        setEpisodeHidden("");
        setAddAnimeHidden("hidden");
        setStateHidden("justify-center flex");
      } else {
        console.log("n\xE3o ta na lista");
        setEpisodeHidden("hidden");
        setAddAnimeHidden("btn");
        setStateHidden("hidden");
      }
    });
    setAnimeId(animes[id].id);
    setAnimeName(animes[id].en_title);
    setAnimeDescription(animes[id].synopsis);
    setAnimeEpisodeCount(animes[id].episode_count);
    setListAnimeId(id);
    console.log(id);
    openModal();
  }
  function gettingAnimeState(event) {
    setAnimeState(event.target.value);
  }
  function saveData() {
    fetch("http://localhost:3011/postListData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(listData[0])
    });
  }
  function addToList() {
    fetch("http://localhost:3011/addAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: animes[animeId].id,
        userId: loginId
      })
    });
    setEpisodeHidden("");
    setAddAnimeHidden("hidden");
    setStateHidden("justify-center flex");
  }
  function removeOfList() {
    fetch("http://localhost:3011/removeAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: animes[animeId].id,
        userId: loginId
      })
    });
    setEpisodeHidden("hidden");
    setAddAnimeHidden("btn");
    setStateHidden("hidden");
  }
  function addScore() {
    if (modalAnimeScore < 10) {
      setAnimeScore(modalAnimeScore + 1);
    }
  }
  function subScore() {
    if (modalAnimeScore > 0) {
      setAnimeScore(modalAnimeScore - 1);
    }
  }
  function addEpisode() {
    if (modalAnimeEpisodeWatched < modalAnimeEpisodeCount) {
      setAnimeEpisodeWatched(modalAnimeEpisodeWatched + 1);
    }
  }
  function subEpisode() {
    if (modalAnimeEpisodeWatched > 0) {
      setAnimeEpisodeWatched(modalAnimeEpisodeWatched - 1);
    }
  }
  let subtitle;
  const [modalIsOpen, setIsOpen] = import_react3.default.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
  }
  function closeModal() {
    setIsOpen(false);
  }
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "carousel w-full"
  }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement(import_react_modal.default, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    ariaHideApp: false,
    contentLabel: "Example Modal"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "card card-side bg-base-100 h-[500px]"
  }, /* @__PURE__ */ import_react3.default.createElement("figure", null, /* @__PURE__ */ import_react3.default.createElement("img", {
    className: "w-[300px] h-[500px]",
    src: "imgs/poster_" + modalAnimeId + ".png",
    alt: "Poster1"
  })), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ import_react3.default.createElement("h2", {
    className: "card-title"
  }, modalAnimeName), /* @__PURE__ */ import_react3.default.createElement("p", null, modalAnimeDescription), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: isAddAnimeHidden,
    onClick: addToList
  }, "Add to List", " "), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "card-actions justify-center flex"
  }, /* @__PURE__ */ import_react3.default.createElement("datalist", {
    id: "states"
  }, /* @__PURE__ */ import_react3.default.createElement("option", {
    value: "Watching"
  }), /* @__PURE__ */ import_react3.default.createElement("option", {
    value: "Plan To Watch"
  }), /* @__PURE__ */ import_react3.default.createElement("option", {
    value: "Completed"
  }), /* @__PURE__ */ import_react3.default.createElement("option", {
    value: "On Hold"
  }), /* @__PURE__ */ import_react3.default.createElement("option", {
    value: "Dropped"
  })), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: isStateHidden
  }, "Anime State"), /* @__PURE__ */ import_react3.default.createElement("form", null, /* @__PURE__ */ import_react3.default.createElement("input", {
    onChange: gettingAnimeState,
    list: "states",
    className: isStateHidden
  }))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: isEpisodeHidden
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "justify-center flex"
  }, "Score"), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "justify-center items-center flex"
  }, modalAnimeScore + " / 10"), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "card-actions justify-center flex"
  }, /* @__PURE__ */ import_react3.default.createElement("button", {
    className: "w-[50px] bg-smooth-blue",
    onClick: subScore
  }, "-"), /* @__PURE__ */ import_react3.default.createElement("button", {
    className: "w-[50px] bg-smooth-blue",
    onClick: addScore
  }, "+")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "justify-center flex"
  }, "Episodes"), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "justify-center items-center flex"
  }, modalAnimeEpisodeWatched + " / " + modalAnimeEpisodeCount), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "card-actions justify-center flex"
  }, /* @__PURE__ */ import_react3.default.createElement("button", {
    className: "w-[50px] bg-smooth-blue",
    onClick: subEpisode
  }, "-"), /* @__PURE__ */ import_react3.default.createElement("button", {
    className: "w-[50px] bg-smooth-blue",
    onClick: addEpisode
  }, "+")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "card-actions justify-end flex"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "btn",
    onClick: saveData
  }, "Save"), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "btn",
    onClick: removeOfList
  }, "Remove Anime From List"))))))), /* @__PURE__ */ import_react3.default.createElement("div", {
    id: "season-1",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ import_react3.default.createElement("img", {
    onClick: () => changeModalAnime(0),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[0].id + ".png",
    alt: "Poster1"
  }), /* @__PURE__ */ import_react3.default.createElement("img", {
    onClick: () => changeModalAnime(1),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[1].id + ".png",
    alt: "Poster2"
  }), /* @__PURE__ */ import_react3.default.createElement("img", {
    onClick: () => changeModalAnime(2),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[2].id + ".png",
    alt: "Poster3"
  }), /* @__PURE__ */ import_react3.default.createElement("img", {
    onClick: () => changeModalAnime(3),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[3].id + ".png",
    alt: "Poster4"
  }), /* @__PURE__ */ import_react3.default.createElement("img", {
    onClick: () => changeModalAnime(4),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[4].id + ".png",
    alt: "Poster5"
  }), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#season-3",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#season-2",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ import_react3.default.createElement("div", {
    id: "season-2",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ import_react3.default.createElement("img", {
    onClick: () => changeModalAnime(5),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[5].id + ".png",
    alt: "Poster1"
  }), /* @__PURE__ */ import_react3.default.createElement("img", {
    onClick: () => changeModalAnime(6),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[6].id + ".png",
    alt: "Poster2"
  }), /* @__PURE__ */ import_react3.default.createElement("img", {
    onClick: () => changeModalAnime(7),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[7].id + ".png",
    alt: "Poster3"
  }), /* @__PURE__ */ import_react3.default.createElement("img", {
    onClick: () => changeModalAnime(8),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[8].id + ".png",
    alt: "Poster4"
  }), /* @__PURE__ */ import_react3.default.createElement("img", {
    onClick: () => changeModalAnime(9),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[9].id + ".png",
    alt: "Poster5"
  }), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#season-1",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#season-3",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ import_react3.default.createElement("div", {
    id: "season-3",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ import_react3.default.createElement("img", {
    onClick: () => changeModalAnime(10),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[10].id + ".png",
    alt: "Poster1"
  }), /* @__PURE__ */ import_react3.default.createElement("img", {
    onClick: () => changeModalAnime(11),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[11].id + ".png",
    alt: "Poster2"
  }), /* @__PURE__ */ import_react3.default.createElement("img", {
    onClick: () => changeModalAnime(12),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[12].id + ".png",
    alt: "Poster3"
  }), /* @__PURE__ */ import_react3.default.createElement("img", {
    onClick: () => changeModalAnime(13),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[13].id + ".png",
    alt: "Poster4"
  }), /* @__PURE__ */ import_react3.default.createElement("img", {
    onClick: () => changeModalAnime(14),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[14].id + ".png",
    alt: "Poster5"
  }), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#season-2",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#season-1",
    className: "btn btn-circle"
  }, "\u276F"))));
}

// route:C:\ApollosWill\app\routes\components\anime_cards\anime_cards_list.tsx
var anime_cards_list_exports = {};
__export(anime_cards_list_exports, {
  default: () => Anime_Cards_List
});
function Anime_Cards_List(listAnimes) {
  const divs = [];
  for (const anime of listAnimes.listAnimes) {
    divs.push(/* @__PURE__ */ React.createElement("div", {
      className: "w-full h-full flex justify-center items-center pt-16",
      key: anime.id
    }, /* @__PURE__ */ React.createElement("div", {
      className: "card card-side bg-base-100 shadow-xl h-32 mr-10"
    }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
      className: "w-[91px]",
      src: "imgs/poster_" + anime.id + ".png",
      alt: "Poster"
    })), /* @__PURE__ */ React.createElement("div", {
      className: "card-body w-[700px]"
    }, /* @__PURE__ */ React.createElement("h2", {
      className: "card-title"
    }, anime.en_jp_title), /* @__PURE__ */ React.createElement("p", null, "something")))));
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full"
  }, divs);
}

// route:C:\ApollosWill\app\routes\components\list_carousel\list_carousel.tsx
var list_carousel_exports = {};
__export(list_carousel_exports, {
  default: () => List_Carousel
});
var import_react5 = __toESM(require("react"));
var import_react_responsive_carousel = require("react-responsive-carousel");
var import_react_modal2 = __toESM(require("react-modal"));
function List_Carousel() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = import_react5.default.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
  }
  function closeModal() {
    setIsOpen(false);
  }
  return /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement(import_react_modal2.default, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    ariaHideApp: false,
    contentLabel: "Example Modal"
  }, /* @__PURE__ */ import_react5.default.createElement("div", null, "PEe")), /* @__PURE__ */ import_react5.default.createElement(import_react_responsive_carousel.Carousel, {
    showThumbs: false,
    centerMode: true,
    swipeable: true
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    onClick: openModal,
    className: "w-32"
  }, /* @__PURE__ */ import_react5.default.createElement("img", {
    src: "imgs/poster_1.png",
    className: "h-[500px]"
  }), /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "legend"
  }, "Cowboy Bebop")), /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("img", {
    src: "imgs/banner_3.png",
    className: "w-[300px] h-[500px]"
  }), /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "legend"
  }, "Legend 1")), /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("img", {
    src: "imgs/banner_1697.png",
    className: "w-[300px] h-[500px]"
  }), /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "legend"
  }, "Lucky Stars"))));
}

// route:C:\ApollosWill\app\routes\components\modal\modal_anime.tsx
var modal_anime_exports = {};
__export(modal_anime_exports, {
  default: () => Modal_Anime
});
var import_react6 = __toESM(require("react"));
var import_react_modal3 = __toESM(require("react-modal"));
function Modal_Anime() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = import_react6.default.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  return /* @__PURE__ */ import_react6.default.createElement("div", {
    className: ""
  }, /* @__PURE__ */ import_react6.default.createElement("button", {
    onClick: openModal
  }, "Open Modal"), /* @__PURE__ */ import_react6.default.createElement(import_react_modal3.default, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    contentLabel: "Example Modal"
  }, /* @__PURE__ */ import_react6.default.createElement("button", {
    onClick: closeModal
  }, "close"), /* @__PURE__ */ import_react6.default.createElement("div", null, "I am a modal"), /* @__PURE__ */ import_react6.default.createElement("form", null, /* @__PURE__ */ import_react6.default.createElement("input", null))));
}

// route:C:\ApollosWill\app\routes\components\navbar\Navbar.tsx
var Navbar_exports = {};
__export(Navbar_exports, {
  default: () => Navbar
});
var import_react7 = require("@remix-run/react");
function Navbar() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-[75px] bg-smooth-blue"
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
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: "/search_anime"
  }, "Anime Search")), /* @__PURE__ */ React.createElement("li", null, "Industry"), /* @__PURE__ */ React.createElement("li", null, "About"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "pr-4"
  }, "User_Name"), /* @__PURE__ */ React.createElement("div", {
    className: "flex w-[130px] h-[130px] bg-smooth-blue items-center rounded-3xl justify-center mt-12 mr-10 z-10"
  }, /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: "/list"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "rounded-3xl w-[100px]",
    src: require_Icon(),
    alt: "Icon"
  }))))));
}

// route:C:\ApollosWill\app\routes\components\ender\Ender.tsx
var Ender_exports = {};
__export(Ender_exports, {
  default: () => Ender
});
function Ender() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[150px] bg-[#FBAFAF] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("h1", null, "Apollo\u2019s Will is a property of Apollo\u2019s Will Co.,Ltd. \xA92022 All Rights Reserved."), /* @__PURE__ */ React.createElement("h1", null, "Icone Icone Icone"));
}

// route:C:\ApollosWill\app\routes\components\news\News.tsx
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

// route:C:\ApollosWill\app\routes\search_anime.tsx
var search_anime_exports = {};
__export(search_anime_exports, {
  default: () => searchAnime
});
var import_react9 = require("@remix-run/react");
var import_react10 = require("react");

// app/routes/components/anime_cards/anime_cards_list.tsx
function Anime_Cards_List2(listAnimes) {
  const divs = [];
  for (const anime of listAnimes.listAnimes) {
    divs.push(/* @__PURE__ */ React.createElement("div", {
      className: "w-full h-full flex justify-center items-center pt-16",
      key: anime.id
    }, /* @__PURE__ */ React.createElement("div", {
      className: "card card-side bg-base-100 shadow-xl h-32 mr-10"
    }, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
      className: "w-[91px]",
      src: "imgs/poster_" + anime.id + ".png",
      alt: "Poster"
    })), /* @__PURE__ */ React.createElement("div", {
      className: "card-body w-[700px]"
    }, /* @__PURE__ */ React.createElement("h2", {
      className: "card-title"
    }, anime.en_jp_title), /* @__PURE__ */ React.createElement("p", null, "something")))));
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full"
  }, divs);
}

// app/routes/components/ender/Ender.tsx
function Ender2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[150px] bg-[#FBAFAF] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("h1", null, "Apollo\u2019s Will is a property of Apollo\u2019s Will Co.,Ltd. \xA92022 All Rights Reserved."), /* @__PURE__ */ React.createElement("h1", null, "Icone Icone Icone"));
}

// app/routes/components/navbar/Navbar.tsx
var import_react8 = require("@remix-run/react");
function Navbar2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-[75px] bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-2 flex justify-between items-center w-full h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center pl-4"
  }, /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-quicksand mr-4 text-[24px]"
  }, "Apollo's Will")), /* @__PURE__ */ React.createElement("ul", {
    className: "hidden md:flex font-montserrat"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: "/search_anime"
  }, "Anime Search")), /* @__PURE__ */ React.createElement("li", null, "Industry"), /* @__PURE__ */ React.createElement("li", null, "About"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "pr-4"
  }, "User_Name"), /* @__PURE__ */ React.createElement("div", {
    className: "flex w-[130px] h-[130px] bg-smooth-blue items-center rounded-3xl justify-center mt-12 mr-10 z-10"
  }, /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: "/list"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "rounded-3xl w-[100px]",
    src: require_Icon(),
    alt: "Icon"
  }))))));
}

// route:C:\ApollosWill\app\routes\search_anime.tsx
function searchAnime() {
  let [search, setSearch] = (0, import_react10.useState)("");
  let [anime, setAnime] = (0, import_react10.useState)([]);
  function gettingSearch(event) {
    console.log(event.target.value);
    setSearch(event.target.value);
  }
  function doSearch() {
    fetch("http://localhost:3011/searchAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        search
      })
    }).then((data) => {
      return data.json();
    }).then((post) => {
      setAnime(post);
      console.log(anime);
    });
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-smooth-pink"
  }, /* @__PURE__ */ React.createElement(Navbar2, null), /* @__PURE__ */ React.createElement("img", {
    className: "w-screen h-[500px] z-0 -mb-32",
    src: require_search_1(),
    alt: "Wallpaper"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-[200px] h-[200px] bg-smooth-pink items-center rounded-3xl justify-center"
  }, /* @__PURE__ */ React.createElement(import_react9.Link, {
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
    className: "input input-bordered w-[700px]",
    onChange: gettingSearch
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: doSearch
  }, "Search"))), /* @__PURE__ */ React.createElement(Anime_Cards_List2, {
    listAnimes: anime
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-16"
  }, /* @__PURE__ */ React.createElement(Ender2, null)));
}

// route:C:\ApollosWill\app\routes\index.tsx
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

// app/routes/components/season_carousel/season_carousel.tsx
var import_react11 = __toESM(require("react"));
var import_react12 = require("react");
var import_react_modal4 = __toESM(require("react-modal"));
function Season_Carousel2({ animes, loginId }) {
  let [animeState, setAnimeState] = (0, import_react12.useState)("");
  let [animeId, setListAnimeId] = (0, import_react12.useState)(0);
  let [modalAnimeId, setAnimeId] = (0, import_react12.useState)("");
  let [modalAnimeName, setAnimeName] = (0, import_react12.useState)("");
  let [modalAnimeDescription, setAnimeDescription] = (0, import_react12.useState)("");
  let [modalAnimeEpisodeCount, setAnimeEpisodeCount] = (0, import_react12.useState)(0);
  let [modalAnimeEpisodeWatched, setAnimeEpisodeWatched] = (0, import_react12.useState)(0);
  let [modalAnimeScore, setAnimeScore] = (0, import_react12.useState)(0);
  let [isEpisodeHidden, setEpisodeHidden] = (0, import_react12.useState)("hidden");
  let [isAddAnimeHidden, setAddAnimeHidden] = (0, import_react12.useState)("btn");
  let [isStateHidden, setStateHidden] = (0, import_react12.useState)("hidden");
  let listData = [
    {
      id: animes[animeId].id,
      animeState,
      score: modalAnimeScore,
      episodesWatched: modalAnimeEpisodeWatched,
      userId: loginId
    }
  ];
  function changeModalAnime(id) {
    fetch("http://localhost:3011/searchAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: animes[id].id,
        userId: loginId
      })
    }).then((data) => {
      return data.json();
    }).then((post) => {
      if (post == true) {
        fetch("http://localhost:3011/getEpisodesAndScore", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id: animes[id].id,
            userId: loginId
          })
        }).then((data) => {
          return data.json();
        }).then((post2) => {
          console.log(post2);
          setAnimeEpisodeWatched(post2.episodes_watched);
          setAnimeScore(post2.rating);
        });
        console.log("ta na lista");
        console.log(loginId);
        setEpisodeHidden("");
        setAddAnimeHidden("hidden");
        setStateHidden("justify-center flex");
      } else {
        console.log("n\xE3o ta na lista");
        setEpisodeHidden("hidden");
        setAddAnimeHidden("btn");
        setStateHidden("hidden");
      }
    });
    setAnimeId(animes[id].id);
    setAnimeName(animes[id].en_title);
    setAnimeDescription(animes[id].synopsis);
    setAnimeEpisodeCount(animes[id].episode_count);
    setListAnimeId(id);
    console.log(id);
    openModal();
  }
  function gettingAnimeState(event) {
    setAnimeState(event.target.value);
  }
  function saveData() {
    fetch("http://localhost:3011/postListData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(listData[0])
    });
  }
  function addToList() {
    fetch("http://localhost:3011/addAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: animes[animeId].id,
        userId: loginId
      })
    });
    setEpisodeHidden("");
    setAddAnimeHidden("hidden");
    setStateHidden("justify-center flex");
  }
  function removeOfList() {
    fetch("http://localhost:3011/removeAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: animes[animeId].id,
        userId: loginId
      })
    });
    setEpisodeHidden("hidden");
    setAddAnimeHidden("btn");
    setStateHidden("hidden");
  }
  function addScore() {
    if (modalAnimeScore < 10) {
      setAnimeScore(modalAnimeScore + 1);
    }
  }
  function subScore() {
    if (modalAnimeScore > 0) {
      setAnimeScore(modalAnimeScore - 1);
    }
  }
  function addEpisode() {
    if (modalAnimeEpisodeWatched < modalAnimeEpisodeCount) {
      setAnimeEpisodeWatched(modalAnimeEpisodeWatched + 1);
    }
  }
  function subEpisode() {
    if (modalAnimeEpisodeWatched > 0) {
      setAnimeEpisodeWatched(modalAnimeEpisodeWatched - 1);
    }
  }
  let subtitle;
  const [modalIsOpen, setIsOpen] = import_react11.default.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
  }
  function closeModal() {
    setIsOpen(false);
  }
  return /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "carousel w-full"
  }, /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement(import_react_modal4.default, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    ariaHideApp: false,
    contentLabel: "Example Modal"
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "card card-side bg-base-100 h-[500px]"
  }, /* @__PURE__ */ import_react11.default.createElement("figure", null, /* @__PURE__ */ import_react11.default.createElement("img", {
    className: "w-[300px] h-[500px]",
    src: "imgs/poster_" + modalAnimeId + ".png",
    alt: "Poster1"
  })), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ import_react11.default.createElement("h2", {
    className: "card-title"
  }, modalAnimeName), /* @__PURE__ */ import_react11.default.createElement("p", null, modalAnimeDescription), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: isAddAnimeHidden,
    onClick: addToList
  }, "Add to List", " "), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "card-actions justify-center flex"
  }, /* @__PURE__ */ import_react11.default.createElement("datalist", {
    id: "states"
  }, /* @__PURE__ */ import_react11.default.createElement("option", {
    value: "Watching"
  }), /* @__PURE__ */ import_react11.default.createElement("option", {
    value: "Plan To Watch"
  }), /* @__PURE__ */ import_react11.default.createElement("option", {
    value: "Completed"
  }), /* @__PURE__ */ import_react11.default.createElement("option", {
    value: "On Hold"
  }), /* @__PURE__ */ import_react11.default.createElement("option", {
    value: "Dropped"
  })), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: isStateHidden
  }, "Anime State"), /* @__PURE__ */ import_react11.default.createElement("form", null, /* @__PURE__ */ import_react11.default.createElement("input", {
    onChange: gettingAnimeState,
    list: "states",
    className: isStateHidden
  }))), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: isEpisodeHidden
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "justify-center flex"
  }, "Score"), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "justify-center items-center flex"
  }, modalAnimeScore + " / 10"), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "card-actions justify-center flex"
  }, /* @__PURE__ */ import_react11.default.createElement("button", {
    className: "w-[50px] bg-smooth-blue",
    onClick: subScore
  }, "-"), /* @__PURE__ */ import_react11.default.createElement("button", {
    className: "w-[50px] bg-smooth-blue",
    onClick: addScore
  }, "+")), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "justify-center flex"
  }, "Episodes"), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "justify-center items-center flex"
  }, modalAnimeEpisodeWatched + " / " + modalAnimeEpisodeCount), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "card-actions justify-center flex"
  }, /* @__PURE__ */ import_react11.default.createElement("button", {
    className: "w-[50px] bg-smooth-blue",
    onClick: subEpisode
  }, "-"), /* @__PURE__ */ import_react11.default.createElement("button", {
    className: "w-[50px] bg-smooth-blue",
    onClick: addEpisode
  }, "+")), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "card-actions justify-end flex"
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "btn",
    onClick: saveData
  }, "Save"), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "btn",
    onClick: removeOfList
  }, "Remove Anime From List"))))))), /* @__PURE__ */ import_react11.default.createElement("div", {
    id: "season-1",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ import_react11.default.createElement("img", {
    onClick: () => changeModalAnime(0),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[0].id + ".png",
    alt: "Poster1"
  }), /* @__PURE__ */ import_react11.default.createElement("img", {
    onClick: () => changeModalAnime(1),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[1].id + ".png",
    alt: "Poster2"
  }), /* @__PURE__ */ import_react11.default.createElement("img", {
    onClick: () => changeModalAnime(2),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[2].id + ".png",
    alt: "Poster3"
  }), /* @__PURE__ */ import_react11.default.createElement("img", {
    onClick: () => changeModalAnime(3),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[3].id + ".png",
    alt: "Poster4"
  }), /* @__PURE__ */ import_react11.default.createElement("img", {
    onClick: () => changeModalAnime(4),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[4].id + ".png",
    alt: "Poster5"
  }), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ import_react11.default.createElement("a", {
    href: "#season-3",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ import_react11.default.createElement("a", {
    href: "#season-2",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ import_react11.default.createElement("div", {
    id: "season-2",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ import_react11.default.createElement("img", {
    onClick: () => changeModalAnime(5),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[5].id + ".png",
    alt: "Poster1"
  }), /* @__PURE__ */ import_react11.default.createElement("img", {
    onClick: () => changeModalAnime(6),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[6].id + ".png",
    alt: "Poster2"
  }), /* @__PURE__ */ import_react11.default.createElement("img", {
    onClick: () => changeModalAnime(7),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[7].id + ".png",
    alt: "Poster3"
  }), /* @__PURE__ */ import_react11.default.createElement("img", {
    onClick: () => changeModalAnime(8),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[8].id + ".png",
    alt: "Poster4"
  }), /* @__PURE__ */ import_react11.default.createElement("img", {
    onClick: () => changeModalAnime(9),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[9].id + ".png",
    alt: "Poster5"
  }), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ import_react11.default.createElement("a", {
    href: "#season-1",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ import_react11.default.createElement("a", {
    href: "#season-3",
    className: "btn btn-circle"
  }, "\u276F"))), /* @__PURE__ */ import_react11.default.createElement("div", {
    id: "season-3",
    className: "carousel-item relative w-full scroll-mt-36"
  }, /* @__PURE__ */ import_react11.default.createElement("img", {
    onClick: () => changeModalAnime(10),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[10].id + ".png",
    alt: "Poster1"
  }), /* @__PURE__ */ import_react11.default.createElement("img", {
    onClick: () => changeModalAnime(11),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[11].id + ".png",
    alt: "Poster2"
  }), /* @__PURE__ */ import_react11.default.createElement("img", {
    onClick: () => changeModalAnime(12),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[12].id + ".png",
    alt: "Poster3"
  }), /* @__PURE__ */ import_react11.default.createElement("img", {
    onClick: () => changeModalAnime(13),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[13].id + ".png",
    alt: "Poster4"
  }), /* @__PURE__ */ import_react11.default.createElement("img", {
    onClick: () => changeModalAnime(14),
    className: "w-[250px] h-[350px] pl-16",
    src: "imgs/poster_" + animes[14].id + ".png",
    alt: "Poster5"
  }), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
  }, /* @__PURE__ */ import_react11.default.createElement("a", {
    href: "#season-2",
    className: "btn btn-circle"
  }, "\u276E"), /* @__PURE__ */ import_react11.default.createElement("a", {
    href: "#season-1",
    className: "btn btn-circle"
  }, "\u276F"))));
}

// app/routes/components/list_carousel/list_carousel.tsx
var import_react13 = __toESM(require("react"));
var import_react_responsive_carousel2 = require("react-responsive-carousel");
var import_react_modal5 = __toESM(require("react-modal"));
function List_Carousel2() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = import_react13.default.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
  }
  function closeModal() {
    setIsOpen(false);
  }
  return /* @__PURE__ */ import_react13.default.createElement("div", null, /* @__PURE__ */ import_react13.default.createElement(import_react_modal5.default, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    ariaHideApp: false,
    contentLabel: "Example Modal"
  }, /* @__PURE__ */ import_react13.default.createElement("div", null, "PEe")), /* @__PURE__ */ import_react13.default.createElement(import_react_responsive_carousel2.Carousel, {
    showThumbs: false,
    centerMode: true,
    swipeable: true
  }, /* @__PURE__ */ import_react13.default.createElement("div", {
    onClick: openModal,
    className: "w-32"
  }, /* @__PURE__ */ import_react13.default.createElement("img", {
    src: "imgs/poster_1.png",
    className: "h-[500px]"
  }), /* @__PURE__ */ import_react13.default.createElement("p", {
    className: "legend"
  }, "Cowboy Bebop")), /* @__PURE__ */ import_react13.default.createElement("div", null, /* @__PURE__ */ import_react13.default.createElement("img", {
    src: "imgs/banner_3.png",
    className: "w-[300px] h-[500px]"
  }), /* @__PURE__ */ import_react13.default.createElement("p", {
    className: "legend"
  }, "Legend 1")), /* @__PURE__ */ import_react13.default.createElement("div", null, /* @__PURE__ */ import_react13.default.createElement("img", {
    src: "imgs/banner_1697.png",
    className: "w-[300px] h-[500px]"
  }), /* @__PURE__ */ import_react13.default.createElement("p", {
    className: "legend"
  }, "Lucky Stars"))));
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

// route:C:\ApollosWill\app\routes\index.tsx
var import_react14 = require("@remix-run/react");
var import_react15 = require("react");
var loader = async () => {
  let conn;
  let seasonAnime = [];
  try {
    conn = await pool.getConnection();
    seasonAnime = await conn.query("SELECT * FROM Anime WHERE MONTH(start_date) = 4 and YEAR(start_date)= 2021 ;");
  } finally {
    if (conn)
      conn.release();
  }
  return {
    seasonAnime
  };
};
function Index() {
  const { seasonAnime } = (0, import_react14.useLoaderData)();
  let [userName, setUserName] = (0, import_react15.useState)("");
  let [showMain, setShowMain] = (0, import_react15.useState)("hidden");
  let [loginHidden, setLoginHidden] = (0, import_react15.useState)("");
  let [loginId, setLoginId] = (0, import_react15.useState)();
  let [login, setLogin] = (0, import_react15.useState)("");
  let [password, setPassword] = (0, import_react15.useState)("");
  let loginData = [
    {
      login,
      password
    }
  ];
  function gettingLoginData(event) {
    setLogin(event.target.value);
  }
  function gettingPasswordData(event) {
    setPassword(event.target.value);
  }
  async function doLogin() {
    console.log(login, password);
    fetch("http://localhost:3011/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    }).then((data) => {
      return data.json();
    }).then((post) => {
      if (post) {
        setLoginId(post);
        setLoginHidden("hidden");
        setShowMain("");
      }
    });
  }
  async function signUp() {
    fetch("http://localhost:3011/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    }).then((data) => {
      return data.json();
    }).then((post) => {
      if (post) {
        setLoginId(post);
        setLoginHidden("hidden");
        setShowMain("");
      }
    });
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-smooth-pink h-[100%] w-[100%] "
  }, /* @__PURE__ */ React.createElement("div", {
    className: loginHidden
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-smooth-pink h-[500px] items-center justify-center flex mt-32"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-smooth-blue w-[300px] h-[400px] items-center flex justify-center"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Login", /* @__PURE__ */ React.createElement("input", {
    onChange: gettingLoginData
  })), /* @__PURE__ */ React.createElement("li", null, "Password", /* @__PURE__ */ React.createElement("input", {
    onChange: gettingPasswordData
  })), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", {
    onClick: doLogin
  }, " Login ")), /* @__PURE__ */ React.createElement("li", null, "Or"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", {
    onClick: signUp
  }, " Sign Up ")))))), /* @__PURE__ */ React.createElement("div", {
    className: showMain
  }, /* @__PURE__ */ React.createElement(Navbar2, null), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-[900px] h-[350px] flex"
  }, /* @__PURE__ */ React.createElement(News2, null))), /* @__PURE__ */ React.createElement("h1", {
    className: "pl-20 pb-5 font-quicksand text-[24px]"
  }, "Animes You're Watching"), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-full flex items-center justify-center bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement(List_Carousel2, null)), /* @__PURE__ */ React.createElement("h1", {
    className: "pl-20 pb-5 font-quicksand text-[24px] pt-10"
  }, "Current"), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-full flex items-center justify-center bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-full h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[400px]"
  }, /* @__PURE__ */ React.createElement(Season_Carousel2, {
    animes: seasonAnime,
    loginId
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "place-items-end"
  }, /* @__PURE__ */ React.createElement(Ender2, null)));
}

// route:C:\ApollosWill\app\routes\list.tsx
var list_exports = {};
__export(list_exports, {
  default: () => List,
  loader: () => loader2
});
var import_react16 = require("@remix-run/react");
var loader2 = async () => {
  let conn;
  let listAnime = [];
  try {
    conn = await pool.getConnection();
    listAnime = await conn.query("SELECT Anime.id, User_List.anime_state, Anime.en_jp_title ,User_List.episodes_watched, Anime.synopsis FROM Anime INNER JOIN User_List ON Anime.id = User_List.id_anime;");
  } finally {
    if (conn)
      conn.release();
  }
  return listAnime;
};
function List() {
  const listAnimes = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-smooth-pink"
  }, /* @__PURE__ */ React.createElement(Navbar2, null), /* @__PURE__ */ React.createElement("img", {
    className: "w-screen h-[500px] -z-10 -mb-32",
    src: require_Wallpaper(),
    alt: "Wallpaper"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-[200px] h-[200px] bg-smooth-pink items-center rounded-3xl justify-center"
  }, /* @__PURE__ */ React.createElement(import_react16.Link, {
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
  }))), /* @__PURE__ */ React.createElement(Anime_Cards_List2, {
    listAnimes
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-16"
  }, /* @__PURE__ */ React.createElement(Ender2, null)));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "21ae162f", "entry": { "module": "/build/entry.client-66FZKEU5.js", "imports": ["/build/_shared/chunk-AVW5BVGG.js", "/build/_shared/chunk-U6CVYINL.js", "/build/_shared/chunk-WMKGSFCP.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-UPO3KXQO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/anime_cards/anime_cards_list": { "id": "routes/components/anime_cards/anime_cards_list", "parentId": "root", "path": "components/anime_cards/anime_cards_list", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/anime_cards/anime_cards_list-VSDCNVLY.js", "imports": ["/build/_shared/chunk-PTZQMBA4.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/ender/Ender": { "id": "routes/components/ender/Ender", "parentId": "root", "path": "components/ender/Ender", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/ender/Ender-45QKKCCN.js", "imports": ["/build/_shared/chunk-2UUXD6KO.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/list_carousel/list_carousel": { "id": "routes/components/list_carousel/list_carousel", "parentId": "root", "path": "components/list_carousel/list_carousel", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/list_carousel/list_carousel-2SSBIUDF.js", "imports": ["/build/_shared/chunk-IHXT4ZF5.js", "/build/_shared/chunk-SGGON5F4.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/modal/modal_anime": { "id": "routes/components/modal/modal_anime", "parentId": "root", "path": "components/modal/modal_anime", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/modal/modal_anime-Z56FZM4B.js", "imports": ["/build/_shared/chunk-SGGON5F4.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/navbar/Navbar": { "id": "routes/components/navbar/Navbar", "parentId": "root", "path": "components/navbar/Navbar", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/navbar/Navbar-KE6ZTWNW.js", "imports": ["/build/_shared/chunk-EY3KZLIH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/news/News": { "id": "routes/components/news/News", "parentId": "root", "path": "components/news/News", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/news/News-MIDUYLA2.js", "imports": ["/build/_shared/chunk-AGNCBNF6.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/season_carousel/season_carousel": { "id": "routes/components/season_carousel/season_carousel", "parentId": "root", "path": "components/season_carousel/season_carousel", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/season_carousel/season_carousel-ZK7UWMXU.js", "imports": ["/build/_shared/chunk-X47LLUAV.js", "/build/_shared/chunk-SGGON5F4.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-IWDBZD6W.js", "imports": ["/build/_shared/chunk-AGNCBNF6.js", "/build/_shared/chunk-NWS5YGTZ.js", "/build/_shared/chunk-X47LLUAV.js", "/build/_shared/chunk-IHXT4ZF5.js", "/build/_shared/chunk-SGGON5F4.js", "/build/_shared/chunk-EY3KZLIH.js", "/build/_shared/chunk-2UUXD6KO.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/list": { "id": "routes/list", "parentId": "root", "path": "list", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/list-UUPEVJ7M.js", "imports": ["/build/_shared/chunk-NWS5YGTZ.js", "/build/_shared/chunk-PTZQMBA4.js", "/build/_shared/chunk-EY3KZLIH.js", "/build/_shared/chunk-2UUXD6KO.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/search_anime": { "id": "routes/search_anime", "parentId": "root", "path": "search_anime", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/search_anime-QBAKSNFH.js", "imports": ["/build/_shared/chunk-PTZQMBA4.js", "/build/_shared/chunk-EY3KZLIH.js", "/build/_shared/chunk-2UUXD6KO.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-21AE162F.js" };

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
  "routes/search_anime": {
    id: "routes/search_anime",
    parentId: "root",
    path: "search_anime",
    index: void 0,
    caseSensitive: void 0,
    module: search_anime_exports
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
