'use strict'

import * as h from '../scripts/helpers.js'

export const link = (url = '{ empty link }') => {
    const widget = h.newWidget(
        'a',
        
        {
            'position': 'relative',
            'width': 'fit-content',
            'height': 'fit-content',
            'padding': '2px',
            'border': '0px',
            'margin': '3px',
            'box-sizing': 'border-box'
        },
        
        {
            'href': 'javascript:void(0)' || url,
        },
        
        {
            setText: function (text) {
                this.textContent = text
                return this
            },

            setTarget: function (target) {
                this.setAttribute('target', target)
            },

            setAction: function (action) {
                this.addEventListener('click', action)
                return this
            },
        },
    )
    widget.innerText = url
    return widget
}