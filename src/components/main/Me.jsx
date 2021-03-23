import React, { useEffect, useState } from 'react';
import LogosSkills from '../images/LogoSkills';

export default function Me() {
    const [classRight, setClassRight] = useState("SectionRigth");

    function scrolledChangeClass() {
        
        let projets = document.querySelector("#projets");
        let networks = document.querySelector("#networks");
        let skills = document.querySelector("#skills");
        let formations = document.querySelector("#formations");
        let me = document.querySelector("#me");
        
        let windowHeight = document.body.clientHeight,
        currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
        
        let add = projets.offsetHeight + networks.offsetHeight + skills.offsetHeight + formations.offsetHeight + me.offsetHeight;
        (currentScroll >= windowHeight - add) && setClassRight('SectionRigthCenter');
        
    }

    useEffect(() => {
        if(window && classRight === "SectionRigth"){
            window.addEventListener("scroll", scrolledChangeClass, false);
        }
    }, []);

    function getAge() { 
        var date = new Date(1994, 3, 9);
        var now = new Date(Date.now()); 

        return Math.abs(now.getFullYear() - date.getFullYear());
    }

    return (
        <div id="profile">
            <div>
                <LogosSkills nameImage="profile"/>
            </div>
            <div className={classRight} itemScope itemType="http://schema.org/LocalBusiness">
                <p>Nom : <span itemProp="name">Vergueiro</span></p>
                <p>Prénom : <span itemProp="name">Steven</span></p>
                <p>Age : <span>{getAge()} ans</span></p>
                <p itemProp="address" itemScope itemType="http://schema.org/PostalAddress" />
                <p>Adresse : <span itemProp="address">2 rue Chanoine Bonnard</span></p>
                <p>Code postal : <span itemProp="postalCode">21470</span></p>
                <p>Ville : <span itemProp="addressLocality">Brazey en Plaine</span></p>
                <p>Téléphone : <span itemProp="telephone">07.88.10.46.22</span></p>
                <p>Email : <span itemProp="email">vergueiro.steven@gmail.com</span></p>
            </div>
        </div>
    )
}