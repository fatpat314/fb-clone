import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <div className='widgets'>
            <iframe
                title="facebook"
                src="https://stackoverflow.com/questions/30951633/why-facebook-is-not-working-in-iframe"
                width="340"
                height="100"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
            ></iframe>

        </div>
    )
}

export default Widgets;