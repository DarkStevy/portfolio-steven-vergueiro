import React from 'react';

export default function SectionPage(props) {
    const {title, id, theme, content} = props;

    return (
        <section id={id} style={theme}>
            <h2>{title}</h2>
            {content}
        </section>
    )
}