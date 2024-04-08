'use strict'

import * as u from './utils.js'

// -- 
const html = document.querySelector('html')
html.style.position = 'absolute'
html.style.display = 'flex'
html.style.flexDirection = 'column'
html.style.width = '100%'
html.style.height = '100%'
html.style.padding = '0px'
html.style.border = '0px'
html.style.margin = '0px'
html.style.overflow = 'hidden'
html.style.boxSizing = 'border-box'
html.style.scrollBehavior = 'smooth'
html.style.fontFamily = 'sans-serif'
html.style.fontSize = '16px'
html.style.letterSpacing = '0.5px'
html.style.lineHeight = '1.5'

export const root = document.querySelector('body')
root.id = 'root'
root.style.position = 'relative'
root.style.width = 'inherit'
root.style.height = 'inherit'
root.style.padding = 'inherit'
root.style.border = 'inherit'
root.style.margin = 'inherit'
root.style.overflow = 'inherit'
root.style.boxSizing = 'inherit'

// -- 
const setElement = (name) => {
    return document.createElement(name)
}

// -- 
const setStyles = (element, styles) => {
    for (const style in styles) {
        element.style[style] = styles[style]
    }
    return element
}

// --
const setAttributes = (element, attributes) => {
    for (const attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute])
    }
    return element
}

// --
const setMethods = (element, methods) => {
    for (const method in methods) {
        element[method] = methods[method]
    }
    return element
}

// -- 
export const newWidget = (name, styles, attributes, methods) => {
    const widget = setElement(name)
    setStyles(widget, styles || {})
    setAttributes(widget, attributes || {})
    setMethods(widget, methods || {})
    return widget
}