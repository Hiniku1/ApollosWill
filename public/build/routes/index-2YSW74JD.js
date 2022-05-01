import {
  News
} from "/build/_shared/chunk-SNYIVYPZ.js";
import {
  Ender
} from "/build/_shared/chunk-QY5JLRWB.js";
import {
  gql,
  useQuery
} from "/build/_shared/chunk-TUGPCD65.js";
import {
  Season_F
} from "/build/_shared/chunk-7AJLX53Z.js";
import {
  Season_Su
} from "/build/_shared/chunk-B5HTOMRL.js";
import {
  Season_F as Season_F2
} from "/build/_shared/chunk-VSYN35HC.js";
import {
  Season
} from "/build/_shared/chunk-5NZQLEIT.js";
import "/build/_shared/chunk-H7SLTJQE.js";
import {
  Navbar
} from "/build/_shared/chunk-OHGLGSUJ.js";
import "/build/_shared/chunk-HR2AEAP7.js";
import "/build/_shared/chunk-4QVVR2OG.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/home/hiniku/ApollosWill/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var GetPosterById = gql`
  query poster($id: ID!) {
    findAnimeById(id: $id) {
      bannerImage {
        original {
          url
        }
      }
    }
  }
`;
function Index() {
  const { loading, error, data } = useQuery(GetPosterById, {
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
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("div", null, JSON.stringify(data.findAnimeById.bannerImage.original.url)), /* @__PURE__ */ React.createElement("div", {
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
//# sourceMappingURL=/build/routes/index-2YSW74JD.js.map
