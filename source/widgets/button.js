'use strict'

import * as h from '../scripts/helpers.js'

export const button = (label) => {
    const widget = h.newWidget(
        'button',
        
        {
            'position': 'relative',
            'background-color': 'white',
            'color': 'black',
            'width': 'fit-content',
            'height': 'fit-content',
            'padding': '5px',
            'border': '1px solid',
            'margin': '3px',
            'box-sizing': 'border-box',
            'border-radius': '3px',
            'cursor': 'pointer',
            'transition': 'transform 0.1s ease-in-out'
        },
        
        {
            'data-element-id': 'button',
        },
        
        {
            setStyle: function (style) {
                switch (style) {
                    case 'borderless':
                        this.style.border = 'none'
                        this.style.color = 'black'
                        this.style.background = 'white'
                        return this
                    
                    case 'plain':
                        this.style.border = 'none'
                        this.style.color = 'black'
                        this.style.background = 'white'
                        return this

                    case 'prominent':
                        this.style.border = 'none'
                        this.style.color = 'black'
                        this.style.background = 'lightgrey'
                        this.style.border = 'solid 1px transparent'
                        return this

                    default:
                        return this
                }
            },

            setAction: function (action) {
                this.addEventListener('click', action)
                return this
            },

            setColor: function (color) {
                this.style.color = color
                return this
            },

            setBackground: function (color) {
                this.syle.background = color
                return this 
            },
        },
    )
    widget.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)'
    })
    widget.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)'
    })
    widget.addEventListener('mousedown', function () {
        this.style.transform = 'scale(0.95)'
    })
    widget.addEventListener('mouseup', function () {
        this.style.transform = 'scale(1)'
    })
    widget.innerText = label || '{ button }'
    return widget 
}