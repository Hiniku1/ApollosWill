import {
  News
} from "/build/_shared/chunk-IN4IZSPL.js";
import {
  Ender
} from "/build/_shared/chunk-4XI4HX6U.js";
import {
  gql,
  useQuery
} from "/build/_shared/chunk-4422JD5L.js";
import {
  Season_F
} from "/build/_shared/chunk-MVTP6UD5.js";
import {
  Season_Su
} from "/build/_shared/chunk-UXA57OHK.js";
import {
  Season_F as Season_F2
} from "/build/_shared/chunk-XIHO5YRC.js";
import {
  Season
} from "/build/_shared/chunk-XS5WF7OR.js";
import "/build/_shared/chunk-2QPKAB7J.js";
import {
  Navbar
} from "/build/_shared/chunk-XUBEILZJ.js";
import "/build/_shared/chunk-C4Y45FKJ.js";
import "/build/_shared/chunk-MWYMRJYR.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react
} from "/build/_shared/chunk-3WTMIVJX.js";

// empty-module:../database/db.server
var require_db = __commonJS({
  "empty-module:../database/db.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:C:\Users\workstation\Desktop\ApollosWill\app\routes\index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_db = __toESM(require_db());
var dbLoad = gql`
  query anime($id: ID!) {
    findAnimeById(id: $id) {
      id
      slug
      description
      titles {
        localized
        alternatives
      }
      startDate
      endDate
      averageRatingRank
      subtype
      status

      posterImage {
        original {
          url
        }
      }
      bannerImage {
        original {
          url
        }
      }

      episodeCount
    }
  }
`;
function Index() {
  const { loading, error, data } = useQuery(dbLoad, {
    variables: {
      id: 1
    }
  });
  if (loading)
    return "Loading...";
  if (error)
    return `Error! ${error.message}`;
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-smooth-pink"
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-[900px] h-[350px] flex"
  }, /* @__PURE__ */ React.createElement(News, null))), /* @__PURE__ */ React.createElement("h1", {
    className: "pl-20 pb-5 font-quicksand text-[24px]"
  }, "Winter 2022"), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-full flex items-center justify-center bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-full h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[400px]"
  }, /* @__PURE__ */ React.createElement(Season, null)))), /* @__PURE__ */ React.createElement("h1", {
    className: "pl-20 pb-5 font-quicksand text-[24px] pt-10"
  }, "Spring 2022"), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-full flex items-center justify-center bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-full h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[400px]"
  }, /* @__PURE__ */ React.createElement(Season_F, null)))), /* @__PURE__ */ React.createElement("h1", {
    className: "pl-20 pb-5 font-quicksand text-[24px] pt-10"
  }, "Summer 2022"), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-full flex items-center justify-center bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-full h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[400px]"
  }, /* @__PURE__ */ React.createElement(Season_Su, null)))), /* @__PURE__ */ React.createElement("h1", {
    className: "pl-20 pb-5 font-quicksand text-[24px] pt-10"
  }, "Fall 2022"), /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-full flex items-center justify-center bg-smooth-blue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-full h-[500px] flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-[400px]"
  }, /* @__PURE__ */ React.createElement(Season_F2, null)))), /* @__PURE__ */ React.createElement(Ender, null));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-N7C5DOUJ.js.map
