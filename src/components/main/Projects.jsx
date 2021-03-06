import React, { useEffect, useState } from 'react';
import { arrayProject } from '../arrayProjects';
import Cliparts from '../images/Cliparts';
import Presentations from '../images/Presentations';

export default function Projects() {
    const [overlay, setOverlay] = useState(false)
    const [overlayId, setOverlayId] = useState("closeOverlayDescriptionProject")
    const [blockDescriptionProject, setBlockDescriptionProject] = useState("closeDescriptionProject")
    const [descriptionProject, setDescriptionProject] = useState()

    function blockOverlay() {
        (overlay === false) ? setOverlay(true) : setOverlay(false);
    }

    function description(index) {
        (index !== undefined) && setDescriptionProject(arrayProject.projects[index]);
        
    }

    function click(index) {
        description(index)
        blockOverlay()
    }
    
    useEffect(() => {
        if( overlay === true) {
            setOverlayId("openOverlayDescriptionProject")
            setBlockDescriptionProject("openDescriptionProject")
            document.body.style.overflow = "hidden";
        }
        else if(overlay === false) {
            setOverlayId("closeOverlayDescriptionProject")
            setBlockDescriptionProject("closeDescriptionProject")
            document.body.style.overflow = "visible";
        }
    }, [overlay])

    function Description() {
        if(descriptionProject !== undefined) {
            const{name, url, developped, technology, imgPresentationPc, description, project, year, category} = descriptionProject
        
            return (
                <>
                    <div>
                        <h2>{name}</h2>
                        <figure>
                            <Presentations nameImage={imgPresentationPc} />
                        </figure>
                    </div>
                    <div>
                        <p>{developped}</p>
                        <p>{project}</p>
                        <p>{description}</p>
                    </div>
                    <div>
                        {technology.map((value) => (
                            <p>{value}</p>
                        ))}
                        <p>{category}</p>
                        <p>{year}</p>
                    </div>
                    <div>
                        <a href={url} target="_blank">Voir le site</a>
                    </div>
                </>
            )
        }
        else {
            return (
                <></>
            )
        }
    }

    return (
        <>
            <div id="project">
                {arrayProject.projects.map((value, index) => (
                    <div key={index} id={value.name}>
                        <figure>
                            <Cliparts nameImage={value.imgClipart}/>
                        </figure>
                        <div>
                            <a onClick={() => click(index)} href="#projets">essaie</a>
                        </div>
                    </div>
                ))}
            </div>

            <div onClick={blockOverlay} id={overlayId}></div>

            <div id={blockDescriptionProject}>
                <Description/>
            </div>
        </>
    )
}