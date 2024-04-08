'use strict'

import * as h from '../scripts/helpers.js'

export const container = (...content) => {
    const widget = h.newWidget(
        'div',
        
        {
            'position': 'relative',
            'display': 'flex',
            'flex-direction': 'column',
            'width': 'fit-content',
            'height': 'fit-content',
            'border': '0%',
            'margin': '0%',
            'box-sizing': 'border-box',
            'overflow': 'hidden',
        },
        
        {
            'data-ui-element': 'container'
        },
        
        {
            setId: function (id) {
                this.id = id
                return  this
            },
            
            setWidth: function (width) {
                this.style.width = width
                return this
            },

            setMaxWidth: function (width) {
                this.style.maxWidth = width
                return this
            },
            
            setMinWidth: function (width) {
                this.style.minWidth = width
                return this
            },
            
            setHeight: function (height) {
                this.style.height = height
                return this
            },
            
            setMaxHeight: function (height) {
                this.style.maxHeight = height
                return this
            },

            setMinHeight: function (height) {
                this.style.minHeight = height
                return this
            },

            setTop: function (top) {
                this.style.top = top
                return this
            },
            
            setBottom: function (bottom) {
                this.style.bottom = bottom
                return this
            },
            
            setLeft: function (left) {
                this.style.left = left
                return this
            },
            
            setRight: function (right) {
                this.style.right = right
                return this
            },
            
            setBackground: function (color) {
                this.style.background = color
                return this
            },
            
            setPadding: function (padding) {
                this.style.padding = padding
                return this
            },
            
            setBorder: function (border) {
                this.style.border = border
                return this
            },

            setRadius: function (radius) {
                this.style.borderRadius = radius
                return this
            },
            
            setMargin: function (margin) {
                this.style.margin = margin
                return this
            },
            
            setZIndex: function (zindex) {
                this.style.zIndex = zindex
                return this
            },

            set: function () {},
        },
    )
    widget.append(...content)
    return widget
}