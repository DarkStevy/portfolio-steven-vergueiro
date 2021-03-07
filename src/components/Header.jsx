import React, { useContext } from 'react'
import PropTypes from "prop-types"
import Navigation from './Navigation';
import { ThemeHeader, ThemeImgHeader, ThemeNavHeader } from '../Themes/ThemeHeader';
import { ThemeContext } from './contexts/ThemeContext';

export default function Header(props) {
    const {changeTheme, siteTitle} = props;

    const theme = useContext(ThemeContext);

    return (
        <header id="home" style={ThemeHeader(theme)}>
            <div style={ThemeNavHeader(theme)} id="nav-header">
                <button onClick={changeTheme}>Boutton</button>
                <nav>
                    <ul>
                        <Navigation 
                            theme={theme} 
                            text="Acceuil" 
                            path="#home"    
                        />
                        <Navigation 
                            theme={theme}
                            text="Qui suis-je?"
                            path="#me"
                        />
                        <Navigation 
                            theme={theme}
                            text="Mon parcours"
                            path="#formations"
                        />
                        <Navigation 
                            theme={theme}
                            text="Mes compétences"
                            path="#skills"
                        />
                        <Navigation 
                            theme={theme}
                            text="Mes projets"
                            path="#projets"
                        />
                        <Navigation 
                            theme={theme}
                            text="Mes réseaux"
                            path="#networks"
                        />
                    </ul>
                </nav>
            </div>
            <div id="img-header" style={ThemeImgHeader(theme)} className="dark">
                <div id="filtre"></div>
                <div>
                    <h1>{siteTitle}</h1>
                    <h4>Développeur web Full stack</h4>
                    <span>ReactJS - (Angular/symfony)</span>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}