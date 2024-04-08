'use strict'

import * as h from '../scripts/helpers.js'

export const text = (content) => {
    const widget = h.newWidget(
        'p',
        
        {
            'position': 'relative',
            'width': 'fit-content',
            'height': 'fit-content',
            'padding': '2px',
            'border': '0px',
            'margin': '3px',
            'box-sizing': 'border-box'
        },
        
        {},
        
        {
            setColor: function () {},
            setBackground: function () {},
            setFamily: function () {},
            setWeight: function () {},
            setKerning: function () {},
            setTracking: function () {},
        },
    )
    widget.innerText = content
    return widget
}