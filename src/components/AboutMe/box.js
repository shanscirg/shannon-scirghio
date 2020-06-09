import React from 'react';

export default function Box (props) {
    return(
        <div class="border border-info rounded .bg-light mx-auto d-block">{props.children}</div>
    )
}