import React, { useState } from 'react';
import { ThemeDark } from '../Themes/ThemeDark';
import { ThemeAHeader } from '../Themes/ThemeHeader';
import { ThemeLight } from '../Themes/ThemeWhite';

export default function Navigation(props) {
    const {path, text, theme} = props;
    const [hover, setHover] = useState('');

    function enter() {
        if(theme === ThemeDark) {
            setHover('rgb(150, 98, 31)')
        } 
        else
        if(theme === ThemeLight) {
            setHover('rgb(223, 154, 64)')
        }
    }

    function leave() {
        setHover('')
    }

    theme.hover.primary = hover;

    return (
        <li>
            <a href={path} onMouseEnter={enter} onMouseLeave={leave} style={ThemeAHeader(theme)}>{text}</a>
        </li>
    )
}