/** @jsx vNode */
import { vNode, View } from "../node_modules/@ocdladefense/view/view.js";
import { Modal } from "../node_modules/@ocdladefense/modal/dist/modal.js";
class Resources {
  constructor() {
    fetch('resources.json').then(response => response.json()).then(resources => {
      let vnode = vNode(ResourcesList, {
        resources: resources
      });
      let modal = new Modal();
      modal.render(vnode);
      // let node = View.createElement(vnode);
      // document.getElementById("hi").appendChild(node);
    });
  }
}

const ResourcesList = function (props) {
  let resources = props.resources;
  let ClientForms = resources.filter(resources => resources.type == "ClientForms");
  let CourtFilings = resources.filter(resources => resources.type == "CourtFilings");
  let Appendix = resources.filter(resources => resources.type == "Appendix");
  return vNode("div", null, vNode(ResourcesSection, {
    resources: ClientForms,
    title: "Client Forms"
  }), vNode(ResourcesSection, {
    resources: CourtFilings,
    title: "Court Filings"
  }), vNode(ResourcesSection, {
    resources: Appendix,
    title: "Appendix"
  }));
};
const ResourcesSection = function (props) {
  let resources = props.resources;
  let title = props.title;
  console.log(resources);
  let html = resources.map((resource, index) => {
    return vNode(ResourceHtml, {
      resource: resource,
      index: index
    });
  });
  return vNode("div", null, vNode("h2", null, title), html);
};
const ResourceHtml = function (props, index) {
  let resource = props.resource;
  let name = resource.name;
  let url = resource.url;
  let type = resources.type;
  const foobar = vNode("div", {
    class: "section",
    "data-index": index
  }, vNode("a", {
    href: url,
    class: "internal"
  }, name));
  return foobar;
};
export { Resources };