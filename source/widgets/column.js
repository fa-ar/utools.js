'use strict'

import * as h from '../scripts/helpers.js'

export const column = (...content) => {
    const widget = h.newWidget(
        'div',
        {
            'display': 'flex',
            'flex-direction': 'column',
            'overflow': 'hidden',
            'position': 'relative',
            'width': 'fit-content',
            'height': 'fit-content',
            'padding': 'none',
            'border': 'none',
            'margin': 'none',
        },
        
        {
            'data-ui-element': 'column'
        },
        
        {},
    )
    widget.append(...content)
    return widget
}