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

// public/imgs/loginWall.jpg
var require_loginWall = __commonJS({
  "public/imgs/loginWall.jpg"(exports, module2) {
    module2.exports = "/build/_assets/loginWall-7XR7ZGCY.jpg";
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

// route:/home/hiniku/Documents/GitHub/ApollosWill/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-33SB6CTZ.css";

// node_modules/react-responsive-carousel/lib/styles/carousel.min.css
var carousel_min_default = "/build/_assets/carousel.min-PQ3VLNRO.css";

// route:/home/hiniku/Documents/GitHub/ApollosWill/app/root.tsx
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

// route:/home/hiniku/Documents/GitHub/ApollosWill/app/routes/components/anime_cards/anime_cards_search.tsx
var anime_cards_search_exports = {};
__export(anime_cards_search_exports, {
  default: () => Anime_Cards_Search
});
var import_react3 = require("react");
var import_react4 = __toESM(require("react"));
var import_react_modal = __toESM(require("react-modal"));
function Anime_Cards_Search({ userId, listAnimes }) {
  let [whatAnimeId, setWhatAnimeId] = (0, import_react3.useState)(0);
  let [animeTitle, setAnimeTitle] = (0, import_react3.useState)("Anime_Title");
  let [animeSynopsis, setAnimeSynopsis] = (0, import_react3.useState)("Anime_Synopsis");
  let [isAddBtnHidden, setAddBtnHidden] = (0, import_react3.useState)("btn btn-primary");
  let [isUpdateRemoveBtnHidden, setUpdateRemoveBtnHidden] = (0, import_react3.useState)("hidden");
  let [isSynopsisHidden, setSynopsisHidden] = (0, import_react3.useState)("");
  let [isEpisodesScoreHidden, setEpisodesScoreHidden] = (0, import_react3.useState)("hidden");
  let [episodesWatched, setEpisodesWatched] = (0, import_react3.useState)(0);
  let [scoreGiven, setScoreGiven] = (0, import_react3.useState)(0);
  let [animeState, setAnimeState] = (0, import_react3.useState)("");
  let [episodeCount, setEpisodeCount] = (0, import_react3.useState)(0);
  const divs = [];
  let subtitle;
  const [modalIsOpen, setIsOpen] = import_react4.default.useState(false);
  function openModal(id) {
    console.log(userId);
    fetch("http://localhost:3011/searchAnimeOnList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        userId
      })
    }).then((data) => {
      return data.json();
    }).then((post) => {
      if (post.isOnList) {
        console.log(post);
        setEpisodesWatched(post.episodesWatched);
        setScoreGiven(post.scoreGiven);
        setAnimeState(post.animeState);
        setAddBtnHidden("hidden");
        setSynopsisHidden("hidden");
        setUpdateRemoveBtnHidden("btn btn-primary");
        setEpisodesScoreHidden("");
      } else {
        setAddBtnHidden("btn btn-primary");
        setSynopsisHidden("");
        setUpdateRemoveBtnHidden("hidden");
        setEpisodesScoreHidden("hidden");
      }
    });
    fetch("http://localhost:3011/getAnimeInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify([{
        id
      }])
    }).then((data) => {
      return data.json();
    }).then((post) => {
      console.log(post);
      setAnimeTitle(post.en_title);
      setAnimeSynopsis(post.synopsis);
      setEpisodeCount(post.episode_count);
    });
    setWhatAnimeId(id);
    setIsOpen(true);
  }
  function afterOpenModal() {
  }
  function closeModal() {
    setIsOpen(false);
  }
  function addToList() {
    fetch("http://localhost:3011/addAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: whatAnimeId,
        userId
      })
    });
    setAddBtnHidden("hidden");
    setSynopsisHidden("hidden");
    setUpdateRemoveBtnHidden("btn btn-primary");
    setEpisodesScoreHidden("");
  }
  function removeOfList() {
    fetch("http://localhost:3011/removeAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: whatAnimeId,
        userId
      })
    });
    setAddBtnHidden("btn btn-primary");
    setSynopsisHidden("");
    setUpdateRemoveBtnHidden("hidden");
    setEpisodesScoreHidden("hidden");
  }
  function addScore() {
    if (scoreGiven < 10) {
      setScoreGiven(scoreGiven + 1);
    }
  }
  function subScore() {
    if (scoreGiven > 0) {
      setScoreGiven(scoreGiven - 1);
    }
  }
  function addEpisode() {
    if (episodesWatched < episodeCount) {
      setEpisodesWatched(episodesWatched + 1);
    }
  }
  function subEpisode() {
    if (episodesWatched > 0) {
      setEpisodesWatched(episodesWatched - 1);
    }
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
      body: JSON.stringify({
        id: whatAnimeId,
        animeState,
        score: scoreGiven,
        episodesWatched,
        userId
      })
    });
  }
  for (const anime of listAnimes) {
    divs.push(/* @__PURE__ */ import_react4.default.createElement("div", {
      className: "w-full h-full flex justify-center items-center pt-16 pb-16",
      key: anime.id
    }, /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "card card-side bg-base-100 shadow-xl h-32 mr-10"
    }, /* @__PURE__ */ import_react4.default.createElement("figure", null, /* @__PURE__ */ import_react4.default.createElement("img", {
      className: "w-[91px]",
      src: "../imgs/poster_" + anime.id + ".png",
      alt: "Poster",
      onClick: () => {
        openModal(anime.id);
      }
    })), /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "card-body w-[700px]"
    }, /* @__PURE__ */ import_react4.default.createElement("h2", {
      className: "card-title"
    }, anime.en_jp_title)))));
  }
  return /* @__PURE__ */ import_react4.default.createElement("div", null, /* @__PURE__ */ import_react4.default.createElement(import_react_modal.default, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    ariaHideApp: false,
    contentLabel: "Example Modal",
    className: "h-[300px] justify-center items-center rounded-sm"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "card bg-base-100 shadow-xl image-full"
  }, /* @__PURE__ */ import_react4.default.createElement("figure", {
    className: " h-[500px]"
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "w-full h-full",
    src: "../imgs/banner_" + whatAnimeId + ".png",
    alt: "Banner"
  })), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ import_react4.default.createElement("h2", {
    className: "card-title"
  }), /* @__PURE__ */ import_react4.default.createElement("p", null, animeTitle), /* @__PURE__ */ import_react4.default.createElement("p", {
    className: isEpisodesScoreHidden
  }, /* @__PURE__ */ import_react4.default.createElement("div", null, /* @__PURE__ */ import_react4.default.createElement("p", null, "Episodes Watched ", /* @__PURE__ */ import_react4.default.createElement("br", null), episodesWatched, "/", episodeCount), /* @__PURE__ */ import_react4.default.createElement("ul", {
    className: "flex"
  }, /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement("button", {
    onClick: subEpisode,
    className: isUpdateRemoveBtnHidden
  }, "-")), /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement("button", {
    onClick: addEpisode,
    className: isUpdateRemoveBtnHidden
  }, "+"))), /* @__PURE__ */ import_react4.default.createElement("p", null, "Score ", /* @__PURE__ */ import_react4.default.createElement("br", null), scoreGiven, "/10"), /* @__PURE__ */ import_react4.default.createElement("ul", {
    className: "flex"
  }, /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement("button", {
    onClick: subScore,
    className: isUpdateRemoveBtnHidden
  }, "-")), /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement("button", {
    onClick: addScore,
    className: isUpdateRemoveBtnHidden
  }, "+"))), /* @__PURE__ */ import_react4.default.createElement("select", {
    onChange: gettingAnimeState,
    value: animeState,
    className: "select w-full max-w-xs"
  }, /* @__PURE__ */ import_react4.default.createElement("option", {
    disabled: true,
    selected: true
  }, "Anime State"), /* @__PURE__ */ import_react4.default.createElement("option", null, "Plan To Watch"), /* @__PURE__ */ import_react4.default.createElement("option", null, "Watching"), /* @__PURE__ */ import_react4.default.createElement("option", null, "Completed"), /* @__PURE__ */ import_react4.default.createElement("option", null, "Dropped")))), /* @__PURE__ */ import_react4.default.createElement("p", {
    className: isSynopsisHidden
  }, animeSynopsis), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "card-actions justify-end"
  }, /* @__PURE__ */ import_react4.default.createElement("button", {
    onClick: addToList,
    className: isAddBtnHidden
  }, "Add To List")), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "card-actions justify-end"
  }, /* @__PURE__ */ import_react4.default.createElement("button", {
    onClick: saveData,
    className: isUpdateRemoveBtnHidden
  }, "Update"), /* @__PURE__ */ import_react4.default.createElement("button", {
    onClick: removeOfList,
    className: isUpdateRemoveBtnHidden
  }, "Remove"))))), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "w-full h-full"
  }, divs));
}

// route:/home/hiniku/Documents/GitHub/ApollosWill/app/routes/components/anime_cards/anime_cards_home.tsx
var anime_cards_home_exports = {};
__export(anime_cards_home_exports, {
  default: () => Anime_Cards_Home
});
var import_react5 = require("react");
var import_react6 = __toESM(require("react"));
var import_react_modal2 = __toESM(require("react-modal"));
function Anime_Cards_Home({ userId, listAnimes }) {
  let [whatAnimeId, setWhatAnimeId] = (0, import_react5.useState)(0);
  let [animeTitle, setAnimeTitle] = (0, import_react5.useState)("Anime_Title");
  let [animeSynopsis, setAnimeSynopsis] = (0, import_react5.useState)("Anime_Synopsis");
  let [isAddBtnHidden, setAddBtnHidden] = (0, import_react5.useState)("btn btn-primary");
  let [isUpdateRemoveBtnHidden, setUpdateRemoveBtnHidden] = (0, import_react5.useState)("hidden");
  let [isSynopsisHidden, setSynopsisHidden] = (0, import_react5.useState)("");
  let [isEpisodesScoreHidden, setEpisodesScoreHidden] = (0, import_react5.useState)("hidden");
  let [episodesWatched, setEpisodesWatched] = (0, import_react5.useState)(0);
  let [scoreGiven, setScoreGiven] = (0, import_react5.useState)(0);
  let [animeState, setAnimeState] = (0, import_react5.useState)("");
  let [episodeCount, setEpisodeCount] = (0, import_react5.useState)(0);
  const divs = [];
  let subtitle;
  const [modalIsOpen, setIsOpen] = import_react6.default.useState(false);
  function openModal(id) {
    fetch("http://localhost:3011/searchAnimeOnList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        userId: userId.home
      })
    }).then((data) => {
      return data.json();
    }).then((post) => {
      if (post.isOnList) {
        console.log(post);
        setEpisodesWatched(post.episodesWatched);
        setScoreGiven(post.scoreGiven);
        setAnimeState(post.animeState);
        setAddBtnHidden("hidden");
        setSynopsisHidden("hidden");
        setUpdateRemoveBtnHidden("btn btn-primary");
        setEpisodesScoreHidden("");
      } else {
        setAddBtnHidden("btn btn-primary");
        setSynopsisHidden("");
        setUpdateRemoveBtnHidden("hidden");
        setEpisodesScoreHidden("hidden");
      }
    });
    fetch("http://localhost:3011/getAnimeInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify([{
        id
      }])
    }).then((data) => {
      return data.json();
    }).then((post) => {
      console.log(post);
      setAnimeTitle(post.en_title);
      setAnimeSynopsis(post.synopsis);
      setEpisodeCount(post.episode_count);
    });
    setWhatAnimeId(id);
    setIsOpen(true);
  }
  function afterOpenModal() {
  }
  function closeModal() {
    setIsOpen(false);
  }
  function addToList() {
    fetch("http://localhost:3011/addAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: whatAnimeId,
        userId: userId.home
      })
    });
    setAddBtnHidden("hidden");
    setSynopsisHidden("hidden");
    setUpdateRemoveBtnHidden("btn btn-primary");
    setEpisodesScoreHidden("");
  }
  function removeOfList() {
    fetch("http://localhost:3011/removeAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: whatAnimeId,
        userId: userId.home
      })
    });
    setAddBtnHidden("btn btn-primary");
    setSynopsisHidden("");
    setUpdateRemoveBtnHidden("hidden");
    setEpisodesScoreHidden("hidden");
  }
  function addScore() {
    if (scoreGiven < 10) {
      setScoreGiven(scoreGiven + 1);
    }
  }
  function subScore() {
    if (scoreGiven > 0) {
      setScoreGiven(scoreGiven - 1);
    }
  }
  function addEpisode() {
    if (episodesWatched < episodeCount) {
      setEpisodesWatched(episodesWatched + 1);
    }
  }
  function subEpisode() {
    if (episodesWatched > 0) {
      setEpisodesWatched(episodesWatched - 1);
    }
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
      body: JSON.stringify({
        id: whatAnimeId,
        animeState,
        score: scoreGiven,
        episodesWatched,
        userId: userId.home
      })
    });
  }
  for (const anime of listAnimes) {
    divs.push(/* @__PURE__ */ import_react6.default.createElement("div", {
      className: "w-full h-full flex justify-center items-center pt-16 pb-16",
      key: anime.id
    }, /* @__PURE__ */ import_react6.default.createElement("div", {
      className: "card card-side bg-base-100 shadow-xl h-32 mr-10"
    }, /* @__PURE__ */ import_react6.default.createElement("figure", null, /* @__PURE__ */ import_react6.default.createElement("img", {
      className: "w-[91px]",
      src: "../imgs/poster_" + anime.id + ".png",
      alt: "Poster",
      onClick: () => {
        openModal(anime.id);
      }
    })), /* @__PURE__ */ import_react6.default.createElement("div", {
      className: "card-body w-[700px]"
    }, /* @__PURE__ */ import_react6.default.createElement("h2", {
      className: "card-title"
    }, anime.en_jp_title)))));
  }
  return /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement(import_react_modal2.default, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    ariaHideApp: false,
    contentLabel: "Example Modal",
    className: "h-[300px] justify-center items-center rounded-sm"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "card bg-base-100 shadow-xl image-full"
  }, /* @__PURE__ */ import_react6.default.createElement("figure", {
    className: " h-[500px]"
  }, /* @__PURE__ */ import_react6.default.createElement("img", {
    className: "w-full h-full",
    src: "../imgs/banner_" + whatAnimeId + ".png",
    alt: "Banner"
  })), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ import_react6.default.createElement("h2", {
    className: "card-title"
  }), /* @__PURE__ */ import_react6.default.createElement("p", null, animeTitle), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: isEpisodesScoreHidden
  }, /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement("p", null, "Episodes Watched ", /* @__PURE__ */ import_react6.default.createElement("br", null), episodesWatched, "/", episodeCount), /* @__PURE__ */ import_react6.default.createElement("ul", {
    className: "flex"
  }, /* @__PURE__ */ import_react6.default.createElement("li", null, /* @__PURE__ */ import_react6.default.createElement("button", {
    onClick: subEpisode,
    className: isUpdateRemoveBtnHidden
  }, "-")), /* @__PURE__ */ import_react6.default.createElement("li", null, /* @__PURE__ */ import_react6.default.createElement("button", {
    onClick: addEpisode,
    className: isUpdateRemoveBtnHidden
  }, "+"))), /* @__PURE__ */ import_react6.default.createElement("p", null, "Score ", /* @__PURE__ */ import_react6.default.createElement("br", null), scoreGiven, "/10"), /* @__PURE__ */ import_react6.default.createElement("ul", {
    className: "flex"
  }, /* @__PURE__ */ import_react6.default.createElement("li", null, /* @__PURE__ */ import_react6.default.createElement("button", {
    onClick: subScore,
    className: isUpdateRemoveBtnHidden
  }, "-")), /* @__PURE__ */ import_react6.default.createElement("li", null, /* @__PURE__ */ import_react6.default.createElement("button", {
    onClick: addScore,
    className: isUpdateRemoveBtnHidden
  }, "+"))), /* @__PURE__ */ import_react6.default.createElement("select", {
    onChange: gettingAnimeState,
    value: animeState,
    className: "select w-full max-w-xs"
  }, /* @__PURE__ */ import_react6.default.createElement("option", {
    disabled: true,
    selected: true
  }, "Anime State"), /* @__PURE__ */ import_react6.default.createElement("option", null, "Plan To Watch"), /* @__PURE__ */ import_react6.default.createElement("option", null, "Watching"), /* @__PURE__ */ import_react6.default.createElement("option", null, "Completed"), /* @__PURE__ */ import_react6.default.createElement("option", null, "Dropped")))), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: isSynopsisHidden
  }, animeSynopsis), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "card-actions justify-end"
  }, /* @__PURE__ */ import_react6.default.createElement("button", {
    onClick: addToList,
    className: isAddBtnHidden
  }, "Add To List")), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "card-actions justify-end"
  }, /* @__PURE__ */ import_react6.default.createElement("button", {
    onClick: saveData,
    className: isUpdateRemoveBtnHidden
  }, "Update"), /* @__PURE__ */ import_react6.default.createElement("button", {
    onClick: removeOfList,
    className: isUpdateRemoveBtnHidden
  }, "Remove"))))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "w-full h-full"
  }, divs));
}

// route:/home/hiniku/Documents/GitHub/ApollosWill/app/routes/components/anime_cards/anime_cards_list.tsx
var anime_cards_list_exports = {};
__export(anime_cards_list_exports, {
  default: () => Anime_Cards_List
});
var import_react7 = require("react");
var import_react8 = __toESM(require("react"));
var import_react_modal3 = __toESM(require("react-modal"));
function Anime_Cards_List({ userId, listAnimes }) {
  let [whatAnimeId, setWhatAnimeId] = (0, import_react7.useState)(0);
  let [animeTitle, setAnimeTitle] = (0, import_react7.useState)("Anime_Title");
  let [animeSynopsis, setAnimeSynopsis] = (0, import_react7.useState)("Anime_Synopsis");
  let [isAddBtnHidden, setAddBtnHidden] = (0, import_react7.useState)("btn btn-primary");
  let [isUpdateRemoveBtnHidden, setUpdateRemoveBtnHidden] = (0, import_react7.useState)("hidden");
  let [isSynopsisHidden, setSynopsisHidden] = (0, import_react7.useState)("");
  let [isEpisodesScoreHidden, setEpisodesScoreHidden] = (0, import_react7.useState)("hidden");
  let [episodesWatched, setEpisodesWatched] = (0, import_react7.useState)(0);
  let [scoreGiven, setScoreGiven] = (0, import_react7.useState)(0);
  let [animeState, setAnimeState] = (0, import_react7.useState)("");
  let [episodeCount, setEpisodeCount] = (0, import_react7.useState)(0);
  const divs = [];
  let subtitle;
  const [modalIsOpen, setIsOpen] = import_react8.default.useState(false);
  function openModal(id) {
    fetch("http://localhost:3011/searchAnimeOnList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        userId
      })
    }).then((data) => {
      return data.json();
    }).then((post) => {
      if (post.isOnList) {
        console.log(post);
        setEpisodesWatched(post.episodesWatched);
        setScoreGiven(post.scoreGiven);
        setAnimeState(post.animeState);
        setAddBtnHidden("hidden");
        setSynopsisHidden("hidden");
        setUpdateRemoveBtnHidden("btn btn-primary");
        setEpisodesScoreHidden("");
      } else {
        setAddBtnHidden("btn btn-primary");
        setSynopsisHidden("");
        setUpdateRemoveBtnHidden("hidden");
        setEpisodesScoreHidden("hidden");
      }
    });
    fetch("http://localhost:3011/getAnimeInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify([{
        id
      }])
    }).then((data) => {
      return data.json();
    }).then((post) => {
      console.log(post);
      setAnimeTitle(post.en_title);
      setAnimeSynopsis(post.synopsis);
      setEpisodeCount(post.episode_count);
    });
    setWhatAnimeId(id);
    setIsOpen(true);
  }
  function afterOpenModal() {
  }
  function closeModal() {
    setIsOpen(false);
  }
  function addToList() {
    fetch("http://localhost:3011/addAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: whatAnimeId,
        userId
      })
    });
    setAddBtnHidden("hidden");
    setSynopsisHidden("hidden");
    setUpdateRemoveBtnHidden("btn btn-primary");
    setEpisodesScoreHidden("");
  }
  function removeOfList() {
    fetch("http://localhost:3011/removeAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: whatAnimeId,
        userId
      })
    });
    setAddBtnHidden("btn btn-primary");
    setSynopsisHidden("");
    setUpdateRemoveBtnHidden("hidden");
    setEpisodesScoreHidden("hidden");
  }
  function addScore() {
    if (scoreGiven < 10) {
      setScoreGiven(scoreGiven + 1);
    }
  }
  function subScore() {
    if (scoreGiven > 0) {
      setScoreGiven(scoreGiven - 1);
    }
  }
  function addEpisode() {
    if (episodesWatched < episodeCount) {
      setEpisodesWatched(episodesWatched + 1);
    }
  }
  function subEpisode() {
    if (episodesWatched > 0) {
      setEpisodesWatched(episodesWatched - 1);
    }
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
      body: JSON.stringify({
        id: whatAnimeId,
        animeState,
        score: scoreGiven,
        episodesWatched,
        userId
      })
    });
  }
  for (const anime of listAnimes) {
    divs.push(/* @__PURE__ */ import_react8.default.createElement("div", {
      className: "w-full h-full flex justify-center items-center pt-16 pb-16",
      key: anime.id_anime
    }, /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "card card-side bg-base-100 shadow-xl h-32 mr-10"
    }, /* @__PURE__ */ import_react8.default.createElement("figure", null, /* @__PURE__ */ import_react8.default.createElement("img", {
      className: "w-[91px]",
      src: "../imgs/poster_" + anime.id_anime + ".png",
      alt: "Poster",
      onClick: () => {
        openModal(anime.id_anime);
      }
    })), /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "card-body w-[700px]"
    }, /* @__PURE__ */ import_react8.default.createElement("h2", {
      className: "card-title"
    }, anime.en_jp_title)))));
  }
  return /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement(import_react_modal3.default, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    ariaHideApp: false,
    contentLabel: "Example Modal",
    className: "h-[300px] justify-center items-center rounded-sm"
  }, /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "card bg-base-100 shadow-xl image-full"
  }, /* @__PURE__ */ import_react8.default.createElement("figure", {
    className: " h-[500px]"
  }, /* @__PURE__ */ import_react8.default.createElement("img", {
    className: "w-full h-full",
    src: "../imgs/banner_" + whatAnimeId + ".png",
    alt: "Banner"
  })), /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ import_react8.default.createElement("h2", {
    className: "card-title"
  }), /* @__PURE__ */ import_react8.default.createElement("p", null, animeTitle), /* @__PURE__ */ import_react8.default.createElement("p", {
    className: isSynopsisHidden
  }, animeSynopsis), /* @__PURE__ */ import_react8.default.createElement("p", {
    className: isEpisodesScoreHidden
  }, /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("p", null, "Episodes Watched ", /* @__PURE__ */ import_react8.default.createElement("br", null), episodesWatched, "/", episodeCount), /* @__PURE__ */ import_react8.default.createElement("ul", {
    className: "flex"
  }, /* @__PURE__ */ import_react8.default.createElement("li", null, /* @__PURE__ */ import_react8.default.createElement("button", {
    onClick: subEpisode,
    className: isUpdateRemoveBtnHidden
  }, "-")), /* @__PURE__ */ import_react8.default.createElement("li", null, /* @__PURE__ */ import_react8.default.createElement("button", {
    onClick: addEpisode,
    className: isUpdateRemoveBtnHidden
  }, "+"))), /* @__PURE__ */ import_react8.default.createElement("p", null, "Score ", /* @__PURE__ */ import_react8.default.createElement("br", null), scoreGiven, "/10"), /* @__PURE__ */ import_react8.default.createElement("ul", {
    className: "flex"
  }, /* @__PURE__ */ import_react8.default.createElement("li", null, /* @__PURE__ */ import_react8.default.createElement("button", {
    onClick: subScore,
    className: isUpdateRemoveBtnHidden
  }, "-")), /* @__PURE__ */ import_react8.default.createElement("li", null, /* @__PURE__ */ import_react8.default.createElement("button", {
    onClick: addScore,
    className: isUpdateRemoveBtnHidden
  }, "+"))), /* @__PURE__ */ import_react8.default.createElement("select", {
    onChange: gettingAnimeState,
    value: animeState,
    className: "select w-full max-w-xs"
  }, /* @__PURE__ */ import_react8.default.createElement("option", {
    disabled: true,
    selected: true
  }, "Anime State"), /* @__PURE__ */ import_react8.default.createElement("option", null, "Plan To Watch"), /* @__PURE__ */ import_react8.default.createElement("option", null, "Watching"), /* @__PURE__ */ import_react8.default.createElement("option", null, "Completed"), /* @__PURE__ */ import_react8.default.createElement("option", null, "Dropped")))), /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "card-actions justify-end"
  }, /* @__PURE__ */ import_react8.default.createElement("button", {
    onClick: addToList,
    className: isAddBtnHidden
  }, "Add To List")), /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "card-actions justify-end"
  }, /* @__PURE__ */ import_react8.default.createElement("button", {
    onClick: saveData,
    className: isUpdateRemoveBtnHidden
  }, "Update"), /* @__PURE__ */ import_react8.default.createElement("button", {
    onClick: removeOfList,
    className: isUpdateRemoveBtnHidden
  }, "Remove"))))), /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "w-full h-full"
  }, divs));
}

// route:/home/hiniku/Documents/GitHub/ApollosWill/app/routes/components/navbar/Navbar.tsx
var Navbar_exports = {};
__export(Navbar_exports, {
  default: () => Navbar
});
var import_react9 = require("@remix-run/react");
function Navbar({ userName, userId }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-[75px] bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-2 flex justify-between items-center w-full h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center pl-4"
  }, /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: "/home/" + userId
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-quicksand mr-4 text-[24px]"
  }, "Apollo's Will")), /* @__PURE__ */ React.createElement("ul", {
    className: "hidden md:flex font-montserrat"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: "/search_page/" + userId
  }, "Anime Search")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "pr-4"
  }, userName), /* @__PURE__ */ React.createElement("div", {
    className: "flex w-[130px] h-[130px] bg-smooth-blue items-center rounded-3xl justify-center mt-12 mr-10 z-10"
  }, /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: "/list/" + userId
  }, /* @__PURE__ */ React.createElement("img", {
    className: "rounded-3xl w-[100px]",
    src: require_Icon(),
    alt: "Icon"
  }))), /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: "/",
    className: "mr-4"
  }, "Logout"))));
}

// route:/home/hiniku/Documents/GitHub/ApollosWill/app/routes/components/ender/Ender.tsx
var Ender_exports = {};
__export(Ender_exports, {
  default: () => Ender
});
function Ender() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[150px] bg-[#FBAFAF] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("h1", null, "Apollo\u2019s Will is a property of Apollo\u2019s Will Co.,Ltd. \xA92022 All Rights Reserved."), /* @__PURE__ */ React.createElement("h1", null, "Icone Icone Icone"));
}

// route:/home/hiniku/Documents/GitHub/ApollosWill/app/routes/components/news/News.tsx
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

// route:/home/hiniku/Documents/GitHub/ApollosWill/app/routes/search_page/$search.tsx
var search_exports = {};
__export(search_exports, {
  default: () => searchAnime
});
var import_react13 = require("@remix-run/react");
var import_react14 = require("react");

// app/routes/components/anime_cards/anime_cards_search.tsx
var import_react10 = require("react");
var import_react11 = __toESM(require("react"));
var import_react_modal4 = __toESM(require("react-modal"));
function Anime_Cards_Search2({ userId, listAnimes }) {
  let [whatAnimeId, setWhatAnimeId] = (0, import_react10.useState)(0);
  let [animeTitle, setAnimeTitle] = (0, import_react10.useState)("Anime_Title");
  let [animeSynopsis, setAnimeSynopsis] = (0, import_react10.useState)("Anime_Synopsis");
  let [isAddBtnHidden, setAddBtnHidden] = (0, import_react10.useState)("btn btn-primary");
  let [isUpdateRemoveBtnHidden, setUpdateRemoveBtnHidden] = (0, import_react10.useState)("hidden");
  let [isSynopsisHidden, setSynopsisHidden] = (0, import_react10.useState)("");
  let [isEpisodesScoreHidden, setEpisodesScoreHidden] = (0, import_react10.useState)("hidden");
  let [episodesWatched, setEpisodesWatched] = (0, import_react10.useState)(0);
  let [scoreGiven, setScoreGiven] = (0, import_react10.useState)(0);
  let [animeState, setAnimeState] = (0, import_react10.useState)("");
  let [episodeCount, setEpisodeCount] = (0, import_react10.useState)(0);
  const divs = [];
  let subtitle;
  const [modalIsOpen, setIsOpen] = import_react11.default.useState(false);
  function openModal(id) {
    console.log(userId);
    fetch("http://localhost:3011/searchAnimeOnList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        userId
      })
    }).then((data) => {
      return data.json();
    }).then((post) => {
      if (post.isOnList) {
        console.log(post);
        setEpisodesWatched(post.episodesWatched);
        setScoreGiven(post.scoreGiven);
        setAnimeState(post.animeState);
        setAddBtnHidden("hidden");
        setSynopsisHidden("hidden");
        setUpdateRemoveBtnHidden("btn btn-primary");
        setEpisodesScoreHidden("");
      } else {
        setAddBtnHidden("btn btn-primary");
        setSynopsisHidden("");
        setUpdateRemoveBtnHidden("hidden");
        setEpisodesScoreHidden("hidden");
      }
    });
    fetch("http://localhost:3011/getAnimeInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify([{
        id
      }])
    }).then((data) => {
      return data.json();
    }).then((post) => {
      console.log(post);
      setAnimeTitle(post.en_title);
      setAnimeSynopsis(post.synopsis);
      setEpisodeCount(post.episode_count);
    });
    setWhatAnimeId(id);
    setIsOpen(true);
  }
  function afterOpenModal() {
  }
  function closeModal() {
    setIsOpen(false);
  }
  function addToList() {
    fetch("http://localhost:3011/addAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: whatAnimeId,
        userId
      })
    });
    setAddBtnHidden("hidden");
    setSynopsisHidden("hidden");
    setUpdateRemoveBtnHidden("btn btn-primary");
    setEpisodesScoreHidden("");
  }
  function removeOfList() {
    fetch("http://localhost:3011/removeAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: whatAnimeId,
        userId
      })
    });
    setAddBtnHidden("btn btn-primary");
    setSynopsisHidden("");
    setUpdateRemoveBtnHidden("hidden");
    setEpisodesScoreHidden("hidden");
  }
  function addScore() {
    if (scoreGiven < 10) {
      setScoreGiven(scoreGiven + 1);
    }
  }
  function subScore() {
    if (scoreGiven > 0) {
      setScoreGiven(scoreGiven - 1);
    }
  }
  function addEpisode() {
    if (episodesWatched < episodeCount) {
      setEpisodesWatched(episodesWatched + 1);
    }
  }
  function subEpisode() {
    if (episodesWatched > 0) {
      setEpisodesWatched(episodesWatched - 1);
    }
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
      body: JSON.stringify({
        id: whatAnimeId,
        animeState,
        score: scoreGiven,
        episodesWatched,
        userId
      })
    });
  }
  for (const anime of listAnimes) {
    divs.push(/* @__PURE__ */ import_react11.default.createElement("div", {
      className: "w-full h-full flex justify-center items-center pt-16 pb-16",
      key: anime.id
    }, /* @__PURE__ */ import_react11.default.createElement("div", {
      className: "card card-side bg-base-100 shadow-xl h-32 mr-10"
    }, /* @__PURE__ */ import_react11.default.createElement("figure", null, /* @__PURE__ */ import_react11.default.createElement("img", {
      className: "w-[91px]",
      src: "../imgs/poster_" + anime.id + ".png",
      alt: "Poster",
      onClick: () => {
        openModal(anime.id);
      }
    })), /* @__PURE__ */ import_react11.default.createElement("div", {
      className: "card-body w-[700px]"
    }, /* @__PURE__ */ import_react11.default.createElement("h2", {
      className: "card-title"
    }, anime.en_jp_title)))));
  }
  return /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement(import_react_modal4.default, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    ariaHideApp: false,
    contentLabel: "Example Modal",
    className: "h-[300px] justify-center items-center rounded-sm"
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "card bg-base-100 shadow-xl image-full"
  }, /* @__PURE__ */ import_react11.default.createElement("figure", {
    className: " h-[500px]"
  }, /* @__PURE__ */ import_react11.default.createElement("img", {
    className: "w-full h-full",
    src: "../imgs/banner_" + whatAnimeId + ".png",
    alt: "Banner"
  })), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ import_react11.default.createElement("h2", {
    className: "card-title"
  }), /* @__PURE__ */ import_react11.default.createElement("p", null, animeTitle), /* @__PURE__ */ import_react11.default.createElement("p", {
    className: isEpisodesScoreHidden
  }, /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("p", null, "Episodes Watched ", /* @__PURE__ */ import_react11.default.createElement("br", null), episodesWatched, "/", episodeCount), /* @__PURE__ */ import_react11.default.createElement("ul", {
    className: "flex"
  }, /* @__PURE__ */ import_react11.default.createElement("li", null, /* @__PURE__ */ import_react11.default.createElement("button", {
    onClick: subEpisode,
    className: isUpdateRemoveBtnHidden
  }, "-")), /* @__PURE__ */ import_react11.default.createElement("li", null, /* @__PURE__ */ import_react11.default.createElement("button", {
    onClick: addEpisode,
    className: isUpdateRemoveBtnHidden
  }, "+"))), /* @__PURE__ */ import_react11.default.createElement("p", null, "Score ", /* @__PURE__ */ import_react11.default.createElement("br", null), scoreGiven, "/10"), /* @__PURE__ */ import_react11.default.createElement("ul", {
    className: "flex"
  }, /* @__PURE__ */ import_react11.default.createElement("li", null, /* @__PURE__ */ import_react11.default.createElement("button", {
    onClick: subScore,
    className: isUpdateRemoveBtnHidden
  }, "-")), /* @__PURE__ */ import_react11.default.createElement("li", null, /* @__PURE__ */ import_react11.default.createElement("button", {
    onClick: addScore,
    className: isUpdateRemoveBtnHidden
  }, "+"))), /* @__PURE__ */ import_react11.default.createElement("select", {
    onChange: gettingAnimeState,
    value: animeState,
    className: "select w-full max-w-xs"
  }, /* @__PURE__ */ import_react11.default.createElement("option", {
    disabled: true,
    selected: true
  }, "Anime State"), /* @__PURE__ */ import_react11.default.createElement("option", null, "Plan To Watch"), /* @__PURE__ */ import_react11.default.createElement("option", null, "Watching"), /* @__PURE__ */ import_react11.default.createElement("option", null, "Completed"), /* @__PURE__ */ import_react11.default.createElement("option", null, "Dropped")))), /* @__PURE__ */ import_react11.default.createElement("p", {
    className: isSynopsisHidden
  }, animeSynopsis), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "card-actions justify-end"
  }, /* @__PURE__ */ import_react11.default.createElement("button", {
    onClick: addToList,
    className: isAddBtnHidden
  }, "Add To List")), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "card-actions justify-end"
  }, /* @__PURE__ */ import_react11.default.createElement("button", {
    onClick: saveData,
    className: isUpdateRemoveBtnHidden
  }, "Update"), /* @__PURE__ */ import_react11.default.createElement("button", {
    onClick: removeOfList,
    className: isUpdateRemoveBtnHidden
  }, "Remove"))))), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "w-full h-full"
  }, divs));
}

// app/routes/components/ender/Ender.tsx
function Ender2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[150px] bg-[#FBAFAF] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("h1", null, "Apollo\u2019s Will is a property of Apollo\u2019s Will Co.,Ltd. \xA92022 All Rights Reserved."), /* @__PURE__ */ React.createElement("h1", null, "Icone Icone Icone"));
}

// app/routes/components/navbar/Navbar.tsx
var import_react12 = require("@remix-run/react");
function Navbar2({ userName, userId }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-[75px] bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-2 flex justify-between items-center w-full h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center pl-4"
  }, /* @__PURE__ */ React.createElement(import_react12.Link, {
    to: "/home/" + userId
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-quicksand mr-4 text-[24px]"
  }, "Apollo's Will")), /* @__PURE__ */ React.createElement("ul", {
    className: "hidden md:flex font-montserrat"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react12.Link, {
    to: "/search_page/" + userId
  }, "Anime Search")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "pr-4"
  }, userName), /* @__PURE__ */ React.createElement("div", {
    className: "flex w-[130px] h-[130px] bg-smooth-blue items-center rounded-3xl justify-center mt-12 mr-10 z-10"
  }, /* @__PURE__ */ React.createElement(import_react12.Link, {
    to: "/list/" + userId
  }, /* @__PURE__ */ React.createElement("img", {
    className: "rounded-3xl w-[100px]",
    src: require_Icon(),
    alt: "Icon"
  }))), /* @__PURE__ */ React.createElement(import_react12.Link, {
    to: "/",
    className: "mr-4"
  }, "Logout"))));
}

// route:/home/hiniku/Documents/GitHub/ApollosWill/app/routes/search_page/$search.tsx
function searchAnime() {
  let userId = (0, import_react13.useParams)();
  let [userName, letUserName] = (0, import_react14.useState)();
  let [search, setSearch] = (0, import_react14.useState)("");
  let [found, setFound] = (0, import_react14.useState)();
  let [idk, setIdk] = (0, import_react14.useState)([]);
  fetch("http://localhost:3011/searchUserName", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify([{
      id: userId.search
    }])
  }).then((data) => {
    return data.json();
  }).then((post) => {
    letUserName(post[0].login);
  });
  function gettingSearch(event) {
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
      setIdk(post);
    });
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-smooth-pink"
  }, /* @__PURE__ */ React.createElement(Navbar2, {
    userName,
    userId: userId.search
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-screen h-[500px] z-0 -mb-32",
    src: require_search_1(),
    alt: "Wallpaper"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-[200px] h-[200px] bg-smooth-pink items-center rounded-3xl justify-center"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "rounded-3xl w-[150px]",
    src: require_Icon(),
    alt: "Icon"
  }))), /* @__PURE__ */ React.createElement("h1", {
    className: "font-montserrat text-7xl flex justify-center"
  }, "Search"), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-control w-full flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "label"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "label-text-"
  })), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "Search Anime",
    className: "input input-bordered w-[700px]",
    onChange: gettingSearch
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: doSearch
  }, "Search"), /* @__PURE__ */ React.createElement("img", {
    src: "imgs/poster_" + +".png",
    alt: ""
  }))), /* @__PURE__ */ React.createElement(Anime_Cards_Search2, {
    listAnimes: idk,
    userId: userId.search
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-16"
  }, /* @__PURE__ */ React.createElement(Ender2, null)));
}

// route:/home/hiniku/Documents/GitHub/ApollosWill/app/routes/list/$listId.tsx
var listId_exports = {};
__export(listId_exports, {
  default: () => List
});
var import_react17 = require("@remix-run/react");

// app/routes/components/anime_cards/anime_cards_list.tsx
var import_react15 = require("react");
var import_react16 = __toESM(require("react"));
var import_react_modal5 = __toESM(require("react-modal"));
function Anime_Cards_List2({ userId, listAnimes }) {
  let [whatAnimeId, setWhatAnimeId] = (0, import_react15.useState)(0);
  let [animeTitle, setAnimeTitle] = (0, import_react15.useState)("Anime_Title");
  let [animeSynopsis, setAnimeSynopsis] = (0, import_react15.useState)("Anime_Synopsis");
  let [isAddBtnHidden, setAddBtnHidden] = (0, import_react15.useState)("btn btn-primary");
  let [isUpdateRemoveBtnHidden, setUpdateRemoveBtnHidden] = (0, import_react15.useState)("hidden");
  let [isSynopsisHidden, setSynopsisHidden] = (0, import_react15.useState)("");
  let [isEpisodesScoreHidden, setEpisodesScoreHidden] = (0, import_react15.useState)("hidden");
  let [episodesWatched, setEpisodesWatched] = (0, import_react15.useState)(0);
  let [scoreGiven, setScoreGiven] = (0, import_react15.useState)(0);
  let [animeState, setAnimeState] = (0, import_react15.useState)("");
  let [episodeCount, setEpisodeCount] = (0, import_react15.useState)(0);
  const divs = [];
  let subtitle;
  const [modalIsOpen, setIsOpen] = import_react16.default.useState(false);
  function openModal(id) {
    fetch("http://localhost:3011/searchAnimeOnList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        userId
      })
    }).then((data) => {
      return data.json();
    }).then((post) => {
      if (post.isOnList) {
        console.log(post);
        setEpisodesWatched(post.episodesWatched);
        setScoreGiven(post.scoreGiven);
        setAnimeState(post.animeState);
        setAddBtnHidden("hidden");
        setSynopsisHidden("hidden");
        setUpdateRemoveBtnHidden("btn btn-primary");
        setEpisodesScoreHidden("");
      } else {
        setAddBtnHidden("btn btn-primary");
        setSynopsisHidden("");
        setUpdateRemoveBtnHidden("hidden");
        setEpisodesScoreHidden("hidden");
      }
    });
    fetch("http://localhost:3011/getAnimeInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify([{
        id
      }])
    }).then((data) => {
      return data.json();
    }).then((post) => {
      console.log(post);
      setAnimeTitle(post.en_title);
      setAnimeSynopsis(post.synopsis);
      setEpisodeCount(post.episode_count);
    });
    setWhatAnimeId(id);
    setIsOpen(true);
  }
  function afterOpenModal() {
  }
  function closeModal() {
    setIsOpen(false);
  }
  function addToList() {
    fetch("http://localhost:3011/addAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: whatAnimeId,
        userId
      })
    });
    setAddBtnHidden("hidden");
    setSynopsisHidden("hidden");
    setUpdateRemoveBtnHidden("btn btn-primary");
    setEpisodesScoreHidden("");
  }
  function removeOfList() {
    fetch("http://localhost:3011/removeAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: whatAnimeId,
        userId
      })
    });
    setAddBtnHidden("btn btn-primary");
    setSynopsisHidden("");
    setUpdateRemoveBtnHidden("hidden");
    setEpisodesScoreHidden("hidden");
  }
  function addScore() {
    if (scoreGiven < 10) {
      setScoreGiven(scoreGiven + 1);
    }
  }
  function subScore() {
    if (scoreGiven > 0) {
      setScoreGiven(scoreGiven - 1);
    }
  }
  function addEpisode() {
    if (episodesWatched < episodeCount) {
      setEpisodesWatched(episodesWatched + 1);
    }
  }
  function subEpisode() {
    if (episodesWatched > 0) {
      setEpisodesWatched(episodesWatched - 1);
    }
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
      body: JSON.stringify({
        id: whatAnimeId,
        animeState,
        score: scoreGiven,
        episodesWatched,
        userId
      })
    });
  }
  for (const anime of listAnimes) {
    divs.push(/* @__PURE__ */ import_react16.default.createElement("div", {
      className: "w-full h-full flex justify-center items-center pt-16 pb-16",
      key: anime.id_anime
    }, /* @__PURE__ */ import_react16.default.createElement("div", {
      className: "card card-side bg-base-100 shadow-xl h-32 mr-10"
    }, /* @__PURE__ */ import_react16.default.createElement("figure", null, /* @__PURE__ */ import_react16.default.createElement("img", {
      className: "w-[91px]",
      src: "../imgs/poster_" + anime.id_anime + ".png",
      alt: "Poster",
      onClick: () => {
        openModal(anime.id_anime);
      }
    })), /* @__PURE__ */ import_react16.default.createElement("div", {
      className: "card-body w-[700px]"
    }, /* @__PURE__ */ import_react16.default.createElement("h2", {
      className: "card-title"
    }, anime.en_jp_title)))));
  }
  return /* @__PURE__ */ import_react16.default.createElement("div", null, /* @__PURE__ */ import_react16.default.createElement(import_react_modal5.default, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    ariaHideApp: false,
    contentLabel: "Example Modal",
    className: "h-[300px] justify-center items-center rounded-sm"
  }, /* @__PURE__ */ import_react16.default.createElement("div", {
    className: "card bg-base-100 shadow-xl image-full"
  }, /* @__PURE__ */ import_react16.default.createElement("figure", {
    className: " h-[500px]"
  }, /* @__PURE__ */ import_react16.default.createElement("img", {
    className: "w-full h-full",
    src: "../imgs/banner_" + whatAnimeId + ".png",
    alt: "Banner"
  })), /* @__PURE__ */ import_react16.default.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ import_react16.default.createElement("h2", {
    className: "card-title"
  }), /* @__PURE__ */ import_react16.default.createElement("p", null, animeTitle), /* @__PURE__ */ import_react16.default.createElement("p", {
    className: isSynopsisHidden
  }, animeSynopsis), /* @__PURE__ */ import_react16.default.createElement("p", {
    className: isEpisodesScoreHidden
  }, /* @__PURE__ */ import_react16.default.createElement("div", null, /* @__PURE__ */ import_react16.default.createElement("p", null, "Episodes Watched ", /* @__PURE__ */ import_react16.default.createElement("br", null), episodesWatched, "/", episodeCount), /* @__PURE__ */ import_react16.default.createElement("ul", {
    className: "flex"
  }, /* @__PURE__ */ import_react16.default.createElement("li", null, /* @__PURE__ */ import_react16.default.createElement("button", {
    onClick: subEpisode,
    className: isUpdateRemoveBtnHidden
  }, "-")), /* @__PURE__ */ import_react16.default.createElement("li", null, /* @__PURE__ */ import_react16.default.createElement("button", {
    onClick: addEpisode,
    className: isUpdateRemoveBtnHidden
  }, "+"))), /* @__PURE__ */ import_react16.default.createElement("p", null, "Score ", /* @__PURE__ */ import_react16.default.createElement("br", null), scoreGiven, "/10"), /* @__PURE__ */ import_react16.default.createElement("ul", {
    className: "flex"
  }, /* @__PURE__ */ import_react16.default.createElement("li", null, /* @__PURE__ */ import_react16.default.createElement("button", {
    onClick: subScore,
    className: isUpdateRemoveBtnHidden
  }, "-")), /* @__PURE__ */ import_react16.default.createElement("li", null, /* @__PURE__ */ import_react16.default.createElement("button", {
    onClick: addScore,
    className: isUpdateRemoveBtnHidden
  }, "+"))), /* @__PURE__ */ import_react16.default.createElement("select", {
    onChange: gettingAnimeState,
    value: animeState,
    className: "select w-full max-w-xs"
  }, /* @__PURE__ */ import_react16.default.createElement("option", {
    disabled: true,
    selected: true
  }, "Anime State"), /* @__PURE__ */ import_react16.default.createElement("option", null, "Plan To Watch"), /* @__PURE__ */ import_react16.default.createElement("option", null, "Watching"), /* @__PURE__ */ import_react16.default.createElement("option", null, "Completed"), /* @__PURE__ */ import_react16.default.createElement("option", null, "Dropped")))), /* @__PURE__ */ import_react16.default.createElement("div", {
    className: "card-actions justify-end"
  }, /* @__PURE__ */ import_react16.default.createElement("button", {
    onClick: addToList,
    className: isAddBtnHidden
  }, "Add To List")), /* @__PURE__ */ import_react16.default.createElement("div", {
    className: "card-actions justify-end"
  }, /* @__PURE__ */ import_react16.default.createElement("button", {
    onClick: saveData,
    className: isUpdateRemoveBtnHidden
  }, "Update"), /* @__PURE__ */ import_react16.default.createElement("button", {
    onClick: removeOfList,
    className: isUpdateRemoveBtnHidden
  }, "Remove"))))), /* @__PURE__ */ import_react16.default.createElement("div", {
    className: "w-full h-full"
  }, divs));
}

// route:/home/hiniku/Documents/GitHub/ApollosWill/app/routes/list/$listId.tsx
var import_react18 = require("react");
function List() {
  let [listAnime, setListAnime] = (0, import_react18.useState)([]);
  let [userName, letUserName] = (0, import_react18.useState)();
  const listId = (0, import_react17.useParams)();
  let id = listId.listId;
  fetch("http://localhost:3011/getAnimeOnList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify([{
      id
    }])
  }).then((data) => {
    return data.json();
  }).then((post) => {
    setListAnime(post);
  });
  fetch("http://localhost:3011/searchUserName", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify([{
      id
    }])
  }).then((data) => {
    return data.json();
  }).then((post) => {
    letUserName(post[0].login);
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-smooth-pink"
  }, /* @__PURE__ */ React.createElement(Navbar2, {
    userName,
    userId: id
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-screen h-[500px] -z-10 -mb-32",
    src: require_Wallpaper(),
    alt: "Wallpaper"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-[200px] h-[200px] bg-smooth-pink items-center rounded-3xl justify-center"
  }, /* @__PURE__ */ React.createElement(import_react17.Link, {
    to: "/list"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "rounded-3xl w-[150px]",
    src: require_Icon(),
    alt: "Icon"
  })))), /* @__PURE__ */ React.createElement("h1", {
    className: "font-montserrat text-7xl flex justify-center"
  }, userName, "'s List"), /* @__PURE__ */ React.createElement("div", {
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
    userId: id,
    listAnimes: listAnime
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-16"
  }, /* @__PURE__ */ React.createElement(Ender2, null)));
}

// route:/home/hiniku/Documents/GitHub/ApollosWill/app/routes/home/$home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Home,
  loader: () => loader
});
var import_react21 = require("@remix-run/react");
var import_react22 = require("react");

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

// app/routes/components/anime_cards/anime_cards_home.tsx
var import_react19 = require("react");
var import_react20 = __toESM(require("react"));
var import_react_modal6 = __toESM(require("react-modal"));
function Anime_Cards_Home2({ userId, listAnimes }) {
  let [whatAnimeId, setWhatAnimeId] = (0, import_react19.useState)(0);
  let [animeTitle, setAnimeTitle] = (0, import_react19.useState)("Anime_Title");
  let [animeSynopsis, setAnimeSynopsis] = (0, import_react19.useState)("Anime_Synopsis");
  let [isAddBtnHidden, setAddBtnHidden] = (0, import_react19.useState)("btn btn-primary");
  let [isUpdateRemoveBtnHidden, setUpdateRemoveBtnHidden] = (0, import_react19.useState)("hidden");
  let [isSynopsisHidden, setSynopsisHidden] = (0, import_react19.useState)("");
  let [isEpisodesScoreHidden, setEpisodesScoreHidden] = (0, import_react19.useState)("hidden");
  let [episodesWatched, setEpisodesWatched] = (0, import_react19.useState)(0);
  let [scoreGiven, setScoreGiven] = (0, import_react19.useState)(0);
  let [animeState, setAnimeState] = (0, import_react19.useState)("");
  let [episodeCount, setEpisodeCount] = (0, import_react19.useState)(0);
  const divs = [];
  let subtitle;
  const [modalIsOpen, setIsOpen] = import_react20.default.useState(false);
  function openModal(id) {
    fetch("http://localhost:3011/searchAnimeOnList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        userId: userId.home
      })
    }).then((data) => {
      return data.json();
    }).then((post) => {
      if (post.isOnList) {
        console.log(post);
        setEpisodesWatched(post.episodesWatched);
        setScoreGiven(post.scoreGiven);
        setAnimeState(post.animeState);
        setAddBtnHidden("hidden");
        setSynopsisHidden("hidden");
        setUpdateRemoveBtnHidden("btn btn-primary");
        setEpisodesScoreHidden("");
      } else {
        setAddBtnHidden("btn btn-primary");
        setSynopsisHidden("");
        setUpdateRemoveBtnHidden("hidden");
        setEpisodesScoreHidden("hidden");
      }
    });
    fetch("http://localhost:3011/getAnimeInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify([{
        id
      }])
    }).then((data) => {
      return data.json();
    }).then((post) => {
      console.log(post);
      setAnimeTitle(post.en_title);
      setAnimeSynopsis(post.synopsis);
      setEpisodeCount(post.episode_count);
    });
    setWhatAnimeId(id);
    setIsOpen(true);
  }
  function afterOpenModal() {
  }
  function closeModal() {
    setIsOpen(false);
  }
  function addToList() {
    fetch("http://localhost:3011/addAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: whatAnimeId,
        userId: userId.home
      })
    });
    setAddBtnHidden("hidden");
    setSynopsisHidden("hidden");
    setUpdateRemoveBtnHidden("btn btn-primary");
    setEpisodesScoreHidden("");
  }
  function removeOfList() {
    fetch("http://localhost:3011/removeAnime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: whatAnimeId,
        userId: userId.home
      })
    });
    setAddBtnHidden("btn btn-primary");
    setSynopsisHidden("");
    setUpdateRemoveBtnHidden("hidden");
    setEpisodesScoreHidden("hidden");
  }
  function addScore() {
    if (scoreGiven < 10) {
      setScoreGiven(scoreGiven + 1);
    }
  }
  function subScore() {
    if (scoreGiven > 0) {
      setScoreGiven(scoreGiven - 1);
    }
  }
  function addEpisode() {
    if (episodesWatched < episodeCount) {
      setEpisodesWatched(episodesWatched + 1);
    }
  }
  function subEpisode() {
    if (episodesWatched > 0) {
      setEpisodesWatched(episodesWatched - 1);
    }
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
      body: JSON.stringify({
        id: whatAnimeId,
        animeState,
        score: scoreGiven,
        episodesWatched,
        userId: userId.home
      })
    });
  }
  for (const anime of listAnimes) {
    divs.push(/* @__PURE__ */ import_react20.default.createElement("div", {
      className: "w-full h-full flex justify-center items-center pt-16 pb-16",
      key: anime.id
    }, /* @__PURE__ */ import_react20.default.createElement("div", {
      className: "card card-side bg-base-100 shadow-xl h-32 mr-10"
    }, /* @__PURE__ */ import_react20.default.createElement("figure", null, /* @__PURE__ */ import_react20.default.createElement("img", {
      className: "w-[91px]",
      src: "../imgs/poster_" + anime.id + ".png",
      alt: "Poster",
      onClick: () => {
        openModal(anime.id);
      }
    })), /* @__PURE__ */ import_react20.default.createElement("div", {
      className: "card-body w-[700px]"
    }, /* @__PURE__ */ import_react20.default.createElement("h2", {
      className: "card-title"
    }, anime.en_jp_title)))));
  }
  return /* @__PURE__ */ import_react20.default.createElement("div", null, /* @__PURE__ */ import_react20.default.createElement(import_react_modal6.default, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    ariaHideApp: false,
    contentLabel: "Example Modal",
    className: "h-[300px] justify-center items-center rounded-sm"
  }, /* @__PURE__ */ import_react20.default.createElement("div", {
    className: "card bg-base-100 shadow-xl image-full"
  }, /* @__PURE__ */ import_react20.default.createElement("figure", {
    className: " h-[500px]"
  }, /* @__PURE__ */ import_react20.default.createElement("img", {
    className: "w-full h-full",
    src: "../imgs/banner_" + whatAnimeId + ".png",
    alt: "Banner"
  })), /* @__PURE__ */ import_react20.default.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ import_react20.default.createElement("h2", {
    className: "card-title"
  }), /* @__PURE__ */ import_react20.default.createElement("p", null, animeTitle), /* @__PURE__ */ import_react20.default.createElement("p", {
    className: isEpisodesScoreHidden
  }, /* @__PURE__ */ import_react20.default.createElement("div", null, /* @__PURE__ */ import_react20.default.createElement("p", null, "Episodes Watched ", /* @__PURE__ */ import_react20.default.createElement("br", null), episodesWatched, "/", episodeCount), /* @__PURE__ */ import_react20.default.createElement("ul", {
    className: "flex"
  }, /* @__PURE__ */ import_react20.default.createElement("li", null, /* @__PURE__ */ import_react20.default.createElement("button", {
    onClick: subEpisode,
    className: isUpdateRemoveBtnHidden
  }, "-")), /* @__PURE__ */ import_react20.default.createElement("li", null, /* @__PURE__ */ import_react20.default.createElement("button", {
    onClick: addEpisode,
    className: isUpdateRemoveBtnHidden
  }, "+"))), /* @__PURE__ */ import_react20.default.createElement("p", null, "Score ", /* @__PURE__ */ import_react20.default.createElement("br", null), scoreGiven, "/10"), /* @__PURE__ */ import_react20.default.createElement("ul", {
    className: "flex"
  }, /* @__PURE__ */ import_react20.default.createElement("li", null, /* @__PURE__ */ import_react20.default.createElement("button", {
    onClick: subScore,
    className: isUpdateRemoveBtnHidden
  }, "-")), /* @__PURE__ */ import_react20.default.createElement("li", null, /* @__PURE__ */ import_react20.default.createElement("button", {
    onClick: addScore,
    className: isUpdateRemoveBtnHidden
  }, "+"))), /* @__PURE__ */ import_react20.default.createElement("select", {
    onChange: gettingAnimeState,
    value: animeState,
    className: "select w-full max-w-xs"
  }, /* @__PURE__ */ import_react20.default.createElement("option", {
    disabled: true,
    selected: true
  }, "Anime State"), /* @__PURE__ */ import_react20.default.createElement("option", null, "Plan To Watch"), /* @__PURE__ */ import_react20.default.createElement("option", null, "Watching"), /* @__PURE__ */ import_react20.default.createElement("option", null, "Completed"), /* @__PURE__ */ import_react20.default.createElement("option", null, "Dropped")))), /* @__PURE__ */ import_react20.default.createElement("p", {
    className: isSynopsisHidden
  }, animeSynopsis), /* @__PURE__ */ import_react20.default.createElement("div", {
    className: "card-actions justify-end"
  }, /* @__PURE__ */ import_react20.default.createElement("button", {
    onClick: addToList,
    className: isAddBtnHidden
  }, "Add To List")), /* @__PURE__ */ import_react20.default.createElement("div", {
    className: "card-actions justify-end"
  }, /* @__PURE__ */ import_react20.default.createElement("button", {
    onClick: saveData,
    className: isUpdateRemoveBtnHidden
  }, "Update"), /* @__PURE__ */ import_react20.default.createElement("button", {
    onClick: removeOfList,
    className: isUpdateRemoveBtnHidden
  }, "Remove"))))), /* @__PURE__ */ import_react20.default.createElement("div", {
    className: "w-full h-full"
  }, divs));
}

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

// route:/home/hiniku/Documents/GitHub/ApollosWill/app/routes/home/$home.tsx
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
function Home() {
  let loginId = (0, import_react21.useParams)();
  let [userName, letUserName] = (0, import_react22.useState)();
  const { seasonAnime } = (0, import_react21.useLoaderData)();
  fetch("http://localhost:3011/searchUserName", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify([{
      id: loginId.home
    }])
  }).then((data) => {
    return data.json();
  }).then((post) => {
    letUserName(post[0].login);
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-[100%] w-[100%] "
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Navbar2, {
    userName,
    userId: loginId.home
  }), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-[900px] h-[350px] flex"
  }, /* @__PURE__ */ React.createElement(News2, null))), /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl"
  }, "Top Animes Of The Season"), /* @__PURE__ */ React.createElement("div", {
    className: "items-center justify-center bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement(Anime_Cards_Home2, {
    listAnimes: seasonAnime,
    userId: loginId
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "place-items-end"
  }, /* @__PURE__ */ React.createElement(Ender2, null)));
}

// route:/home/hiniku/Documents/GitHub/ApollosWill/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react23 = require("@remix-run/react");
var import_react24 = require("react");
function Index() {
  let [isLoggedIn, setIsLoggedIn] = (0, import_react24.useState)(false);
  let [loginId, setLoginId] = (0, import_react24.useState)(0);
  let [login, setLogin] = (0, import_react24.useState)("");
  let [password, setPassword] = (0, import_react24.useState)("");
  let navigate = (0, import_react23.useNavigate)();
  let loginData = [
    {
      login,
      password,
      id: loginId
    }
  ];
  function gettingLoginData(event) {
    setLogin(event.target.value);
  }
  function gettingPasswordData(event) {
    setPassword(event.target.value);
  }
  async function doLogin() {
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
        navigate("/home/" + post);
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
        setIsLoggedIn(true);
      }
    });
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-smooth-pink w-[100%] h-[100%]"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-screen h-[500px] -z-10 -mb-32",
    src: require_loginWall(),
    alt: "Wallpaper"
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "font-montserrat text-7xl flex justify-center text-black"
  }, "Welcome to ApollosWill"), /* @__PURE__ */ React.createElement("ul", {
    className: "flex justify-center mt-12 items-center"
  }, /* @__PURE__ */ React.createElement("li", null, "Login", /* @__PURE__ */ React.createElement("input", {
    onChange: gettingLoginData
  })), /* @__PURE__ */ React.createElement("li", null, "Password", /* @__PURE__ */ React.createElement("input", {
    onChange: gettingPasswordData
  })), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", {
    onClick: doLogin
  }, " Login ")), /* @__PURE__ */ React.createElement("li", null, "Or"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", {
    onClick: signUp
  }, " Sign Up "))), /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement(Ender2, null))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "d3cf96ad", "entry": { "module": "/build/entry.client-I2Z74FYW.js", "imports": ["/build/_shared/chunk-TF7DY7FC.js", "/build/_shared/chunk-X4YTQSUM.js", "/build/_shared/chunk-XV23MX66.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-SUL6ZUUO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/anime_cards/anime_cards_home": { "id": "routes/components/anime_cards/anime_cards_home", "parentId": "root", "path": "components/anime_cards/anime_cards_home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/anime_cards/anime_cards_home-RH6GU3AI.js", "imports": ["/build/_shared/chunk-YF434IOX.js", "/build/_shared/chunk-UQ4CA6AX.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/anime_cards/anime_cards_list": { "id": "routes/components/anime_cards/anime_cards_list", "parentId": "root", "path": "components/anime_cards/anime_cards_list", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/anime_cards/anime_cards_list-MJV3LUTY.js", "imports": ["/build/_shared/chunk-6Z4PAN2L.js", "/build/_shared/chunk-UQ4CA6AX.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/anime_cards/anime_cards_search": { "id": "routes/components/anime_cards/anime_cards_search", "parentId": "root", "path": "components/anime_cards/anime_cards_search", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/anime_cards/anime_cards_search-DFGOBCHD.js", "imports": ["/build/_shared/chunk-X3OZLCRZ.js", "/build/_shared/chunk-UQ4CA6AX.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/ender/Ender": { "id": "routes/components/ender/Ender", "parentId": "root", "path": "components/ender/Ender", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/ender/Ender-K3M5HREF.js", "imports": ["/build/_shared/chunk-BKLBPOWP.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/navbar/Navbar": { "id": "routes/components/navbar/Navbar", "parentId": "root", "path": "components/navbar/Navbar", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/navbar/Navbar-L4JP7NYK.js", "imports": ["/build/_shared/chunk-J3E5JVD6.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/components/news/News": { "id": "routes/components/news/News", "parentId": "root", "path": "components/news/News", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/components/news/News-BFAU4676.js", "imports": ["/build/_shared/chunk-BKROVRPJ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/home/$home": { "id": "routes/home/$home", "parentId": "root", "path": "home/:home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home/$home-2TNE7MVI.js", "imports": ["/build/_shared/chunk-YF434IOX.js", "/build/_shared/chunk-UQ4CA6AX.js", "/build/_shared/chunk-J3E5JVD6.js", "/build/_shared/chunk-BKLBPOWP.js", "/build/_shared/chunk-BKROVRPJ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-WKFKLBHN.js", "imports": ["/build/_shared/chunk-BKLBPOWP.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/list/$listId": { "id": "routes/list/$listId", "parentId": "root", "path": "list/:listId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/list/$listId-IZUEOXCJ.js", "imports": ["/build/_shared/chunk-6Z4PAN2L.js", "/build/_shared/chunk-UQ4CA6AX.js", "/build/_shared/chunk-J3E5JVD6.js", "/build/_shared/chunk-BKLBPOWP.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/search_page/$search": { "id": "routes/search_page/$search", "parentId": "root", "path": "search_page/:search", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/search_page/$search-TSF2XFT3.js", "imports": ["/build/_shared/chunk-X3OZLCRZ.js", "/build/_shared/chunk-UQ4CA6AX.js", "/build/_shared/chunk-J3E5JVD6.js", "/build/_shared/chunk-BKLBPOWP.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-D3CF96AD.js" };

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
  "routes/components/anime_cards/anime_cards_search": {
    id: "routes/components/anime_cards/anime_cards_search",
    parentId: "root",
    path: "components/anime_cards/anime_cards_search",
    index: void 0,
    caseSensitive: void 0,
    module: anime_cards_search_exports
  },
  "routes/components/anime_cards/anime_cards_home": {
    id: "routes/components/anime_cards/anime_cards_home",
    parentId: "root",
    path: "components/anime_cards/anime_cards_home",
    index: void 0,
    caseSensitive: void 0,
    module: anime_cards_home_exports
  },
  "routes/components/anime_cards/anime_cards_list": {
    id: "routes/components/anime_cards/anime_cards_list",
    parentId: "root",
    path: "components/anime_cards/anime_cards_list",
    index: void 0,
    caseSensitive: void 0,
    module: anime_cards_list_exports
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
  "routes/search_page/$search": {
    id: "routes/search_page/$search",
    parentId: "root",
    path: "search_page/:search",
    index: void 0,
    caseSensitive: void 0,
    module: search_exports
  },
  "routes/list/$listId": {
    id: "routes/list/$listId",
    parentId: "root",
    path: "list/:listId",
    index: void 0,
    caseSensitive: void 0,
    module: listId_exports
  },
  "routes/home/$home": {
    id: "routes/home/$home",
    parentId: "root",
    path: "home/:home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
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
