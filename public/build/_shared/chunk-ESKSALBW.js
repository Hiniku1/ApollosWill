import {
  gql,
  useQuery
} from "/build/_shared/chunk-TUGPCD65.js";
import {
  require_Poster1,
  require_Poster2,
  require_Poster3,
  require_Poster4,
  require_Poster5
} from "/build/_shared/chunk-H7SLTJQE.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// app/routes/components/anime_seasons/Season_W.tsx
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
function Season() {
  const { loading, error, data } = useQuery(GetPosterById, {
    variables: {
      id: 1
    }
  });
  if (loading)
    return "Loading...";
  if (error)
    return `Error! ${error.message}`;
  const url = data.findAnimeById.bannerImage.original.url;
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

export {
  Season
};
//# sourceMappingURL=/build/_shared/chunk-ESKSALBW.js.map
