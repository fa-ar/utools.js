'use strict'

import * as h from '../scripts/helpers.js'

export const row = (...content) => {
    const widget = h.newWidget(
        'div',
        {
            'position': 'relative',
            'display': 'flex',
            'flex-direction': 'row',
            'height': 'fit-content',
            'width': '100%',
            'padding': '0px',
            'border': '0px',
            'margin': '0px',
            'box-sizing': 'border-box',   
        },
        
        {
            'data-ui-element': 'row'
        },
        
        {},
    )
    widget.append(...content)
    return widget
}