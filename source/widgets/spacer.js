'use strict'

import * as h from '../scripts/helpers.js'

export const spacer = () => {
    const widget = h.newWidget(
        'div',
        
        {
            'display': 'flex',
            'flex-direction': 'row',
            'flex': '1',
            'height': 'fit-content',
        },
        
        {
            'data-ui-element': 'spacer'
        },
        
        {
            setDirection: function () {
                return this
            }
        },
    )
    return widget
}