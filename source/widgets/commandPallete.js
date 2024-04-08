'use strict'

import * as h from '../scripts/helpers.js'

export const commandPallette = (commands) => {
    document.addEventListener('keydown', (event) => {
        let keyCombination = ''
        if (event.altKey) keyCombination += 'alt+' && console.log(event.altKey)
        if (event.ctrlKey) keyCombination += 'ctrl+'
        if (event.shiftKey) keyCombination += 'shift+'
        keyCombination += event.key.toLocaleLowerCase()

        const mathcedCommand = commands.find(command => command.keyCombination === keyCombination)
        if (mathcedCommand && typeof mathcedCommand.action === 'function') {
            event.preventDefault()
            mathcedCommand.action()
        }
    })
}