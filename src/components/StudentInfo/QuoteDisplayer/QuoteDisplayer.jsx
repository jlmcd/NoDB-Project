import React from 'react'
import './QuoteDisplayer.css'

export default function QuoteDisplayer(props) {
    return(
        <div id="quote">
            <p>{props.quote}</p>
        </div>
    )
}