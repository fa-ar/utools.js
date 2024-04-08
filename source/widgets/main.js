'use strict'

import * as h from '../scripts/helpers.js'

export const main = (...content) => {
    const widget = h.newWidget(
        'main',
        
        {
            'position': 'relative',
            'display': 'flex',
            'flex': '1',
            'flex-direction': 'column',
            'width': '100%',
            'height': '100%',
            'padding': '0px',
            'border': '0px',
            'margin': '0px',
            'overflow': 'none',
            'box-sizing': 'border-box',
        },
        
        {
            'data-ui-element': 'main'
        },
        
        {},
    )
    widget.append(...content)
    return widget
}