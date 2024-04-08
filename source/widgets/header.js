'use strict'

import * as h from '../scripts/helpers.js'

export const header = (...content) => {
    const widget = h.newWidget(
        'header',
        
        {
            'position': 'sticky',
            'display': 'flex',
            'height': '34px',
            'width': '100%',
            'padding': '0%',
            'border': '0%',
            'margin': '0%',
            'box-sizing': 'border-box',
        },
        
        {
            'data-ui-element': 'header',
        },
        
        {

        },
    )
    widget.append(...content)
    return widget
}