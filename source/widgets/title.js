'use strict'

import * as h from '../scripts/helpers.js'

let titleCount = 0

export const title = (text = '{ title }', level = '2') => {
    titleCount++
    const id = `title-${text.replace(/\s+/g, '-').toLowerCase()}-${titleCount}`
    const widget = h.newWidget(
        'h' +  level,
        
        {
            'position': 'relative',
            'width': 'fit-content',
            'height': 'fit-content',
            'padding': '5px',
            'border': 'none',
            'margin': '3px',
            'box-sizing': 'border-box',
            'border-radius': '3px',
            'cursor': 'pointer',
            'transition': 'transform 0.1s ease-in-out'
        },
        
        {
            'id': id,
        },
        
        {},
    )
    widget.innerText = text
    return widget
}