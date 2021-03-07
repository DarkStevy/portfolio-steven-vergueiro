import React from 'react';
import Image from '../images/LogosNetworks'

export default function Me() {

    function getAge() { 
        var date = new Date(1994, 3, 9);
        var now = new Date(Date.now()); 

        return Math.abs(now.getFullYear() - date.getFullYear());
    }

    return (
        <div id="profile">
            <div>
                <Image nameImage="profile"/>
            </div>
            <div className="card" itemScope itemType="http://schema.org/LocalBusiness">
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