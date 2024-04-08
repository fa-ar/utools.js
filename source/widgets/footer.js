'use strict'

import * as h from '../scripts/helpers.js'

export const footer = (...content) => {
    const widget = h.newWidget(
        'footer',
        
        {
            'display': 'flex',
            'height': '34px',
            'width': '100%',
            'padding': '0px',
            'border': '0px',
            'margin-top': 'auto',
            'bottom': '0%',
            'box-sizing': 'border-box',
        },
        
        {},
        
        {
            'data-pim-id': 'footer'
        },
    )
    widget.append(...content)
    return widget
}