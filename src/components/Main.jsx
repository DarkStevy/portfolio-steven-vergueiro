import React, { useContext, useEffect, useState } from 'react';
import { ThemeFormation, ThemeMe, ThemeNetwork, ThemeProject, ThemeSkill } from '../Themes/ThemeMain';
import { ThemeContext } from './contexts/ThemeContext';
import Formations from './main/Formations';
import Me from './main/Me';
import Networks from './main/Networks';
import Projects from './main/Projects';
import Skills from './main/Skills';
import SectionPage from './SectionPage';

export default function Main() {

    const [test, setTest] = useState();

    const theme = useContext(ThemeContext);

    function scrolled(){
        let projets = document.querySelector("#projets");
        let networks = document.querySelector("#networks");
        let windowHeight = document.body.clientHeight,
            currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let add = projets.offsetHeight + networks.offsetHeight;
        (currentScroll >= windowHeight - add) ?
        setTest('fixed') : 
        setTest('');
    }

    useEffect(() => {
        if(window){
            window.addEventListener("scroll", scrolled, false);
        }
    }, []);

    return (
        <main>
            <SectionPage 
                title="Qui suis-je?" 
                id="me" 
                theme={ThemeMe(theme)}
                content={Me()}
            />
            <SectionPage 
                title="Mon Parcours"
                id="formations"
                theme={ThemeFormation(theme)}
                content={Formations()}
            />
            <SectionPage 
                title="Mes compétences"
                id="skills"
                theme={ThemeSkill(theme)}
                content={Skills()}
            />
            <div id={test}></div>
            <SectionPage 
                title="Mes projets"
                id="projets"
                theme={ThemeProject(theme)}
                content={Projects()}
            />

            <SectionPage
                title="Mes réseaux"
                id="networks"
                theme={ThemeNetwork(theme)}
                content={Networks()}
            />
        </main>
    )
}