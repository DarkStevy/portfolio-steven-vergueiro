import React, { useEffect, useState } from 'react';
import { arrayProject } from '../arrayProjects';
import Cliparts from '../images/Cliparts';
import Presentations from '../images/Presentations';

export default function Projects() {
    const [overlay, setOverlay] = useState(false)
    const [overlayId, setOverlayId] = useState("closeOverlayDescriptionProject")
    const [blockDescriptionProject, setBlockDescriptionProject] = useState("closeDescriptionProject")
    const [descriptionProject, setDescriptionProject] = useState()
    const [backgroundDescription, setBackgroundDescription] = useState();

    const backgroundDefault = {
        background: 'rgb(23, 36, 78)'
    }

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
            if(descriptionProject !== undefined) {
                setBackgroundDescription(descriptionProject.background)
            }
            else {
                setBackgroundDescription(backgroundDefault.background)
            }
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
                <div id="descriptionProject">
                    <section id="presentation">
                        <h2>{name}</h2>
                        <Presentations nameImage={imgPresentationPc} />
                    </section>
                    <section id="description">
                        <div>
                            <p>{developped}</p>
                            <p>Projet : {project}</p>
                            <h3>Description</h3>
                            <p>{description}</p>
                        </div>
                        <div>
                            <h3>Technologies utilis??es</h3>
                            <div>
                                {technology.map((value) => (
                                    <span>{value}</span>
                                ))}
                            </div>
                            <h3>Cat??gorie</h3>
                            <p>{category}</p>
                            <h3>Ann??e de cr??ation</h3>
                            <p>{year}</p>
                        </div>
                        <div>
                            <a href={url} target="blank">Voir le site</a>
                        </div>
                    </section>
                </div>
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
                        <div className="clipart">
                            <Cliparts nameImage={value.imgClipart}/>
                        </div>
                        <div className="hoverClipart">
                            <a className="plus" onClick={() => click(index)} href="#projets"> </a>
                        </div>
                    </div>
                ))}
            </div>

            <div onClick={blockOverlay} id={overlayId}></div>

            <div style={{background : backgroundDescription}}  id={blockDescriptionProject}>
                <span onClick={blockOverlay} className="close"></span>
                <Description/>
            </div>
        </>
    )
}