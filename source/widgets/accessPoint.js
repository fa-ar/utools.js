'use strict'

import * as h from '../scripts/helpers.js'

export const accessPoint = (...content) => {
    const widget = h.newWidget(
        'section',
        
        {
            'position': 'absolute',
            'display': 'flex',
            'flex-direction': 'column',
            'width': '100%',
            'height': '100%',
            'border': '0%',
            'margin': '0%',
            'padding': '0%',
            'box-sizing': 'border-box',
            'overflow': 'hidden',
            'z-index': '0',
        },
        
        {
            'data-ui-element': 'accessPoint',
            'data-ui-theme': 'default',
        },
        
        {
            init: function () {
                const root = h.root
                root.append(this)
                return root
            },

            setNav: function (...navContent) {
                widgetNav.append(...navContent)
                return widgetNav
            },

            toggleNav: function () {
                widgetNav.toggle()
            },

            setNav: function (...content) {
                widgetNav.append(...content)
                return widget
            },

            setCmdPallete: function  () {

            },

            setContex: function () {},
        },
    )
    widget.append(...content)
    return widget
}