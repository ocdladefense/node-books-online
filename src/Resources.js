/** @jsx vNode */
import {vNode, View} from "../node_modules/@ocdladefense/view/view.js";
import {Modal} from "../node_modules/@ocdladefense/modal/dist/modal.js";
class Resources {


    constructor() {
        fetch('resources.json')
        .then(response => response.json())
        .then(resources => {
            let vnode = <ResourcesList resources={resources} />;
            let modal = new Modal();
            modal.render(vnode);
            // let node = View.createElement(vnode);
            // document.getElementById("hi").appendChild(node);
        });
    }
}

const ResourcesList = function(props) {
    let resources = props.resources;
    
    let ClientForms = resources.filter(resources => resources.type == "ClientForms");
    let CourtFilings = resources.filter(resources => resources.type == "CourtFilings");
    let Appendix = resources.filter(resources => resources.type == "Appendix");



    return (
        <div>
            <ResourcesSection resources={ClientForms} title={"Client Forms"}/>
            <ResourcesSection resources={CourtFilings} title={"Court Filings"}/>
            <ResourcesSection resources={Appendix} title={"Appendix"}/>
        </div>
    )
};

const ResourcesSection = function(props) {
    let resources = props.resources;
    let title = props.title;
    console.log(resources);
    let html = resources.map((resource, index) => {return <ResourceHtml resource={resource} index={index} />});

    return (
        <div>
            <h2>{title}</h2>
            {html}
        </div>
    )
};

const ResourceHtml = function(props, index){
    let resource = props.resource;
    let name = resource.name;
    let url = resource.url;
    let type = resources.type;

    const foobar = (
        <div class="section" data-index={index}>
            <a href={url} class="internal">{name}</a>
        </div>
    )
    return foobar;
}

export {Resources};