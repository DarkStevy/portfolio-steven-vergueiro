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
    const [returnTop, setReturnTop] = useState();

    const theme = useContext(ThemeContext);

    function scrolledReturnTop() {
        
        let projets = document.querySelector("#projets");
        let networks = document.querySelector("#networks");
        let skills = document.querySelector("#skills");
        let formations = document.querySelector("#formations");
        let me = document.querySelector("#me");
        
        let windowHeight = document.body.clientHeight,
        currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
        
        let add = projets.offsetHeight + networks.offsetHeight + skills.offsetHeight + formations.offsetHeight + me.offsetHeight;
        (currentScroll >= windowHeight - add) ? setReturnTop('returnTop') : setReturnTop('');
        
    }


    function scrolledBackground(){
        
        let projets = document.querySelector("#projets");
        let networks = document.querySelector("#networks");
        
        let windowHeight = document.body.clientHeight,
        currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
        
        let add = projets.offsetHeight + networks.offsetHeight;
        (currentScroll >= windowHeight - add) ? setTest('fixed') : setTest('');
    }

    useEffect(() => {
        if(window){
            window.addEventListener("scroll", scrolledBackground, false);
            window.addEventListener("scroll", scrolledReturnTop, false);
        }
    }, []);

    return (
        <main>
            <SectionPage 
                title="Qui suis-je???" 
                id="me" 
                theme={ThemeMe(theme)}
                content={Me()}
            />
            <a href="#home" id={returnTop}> </a>
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