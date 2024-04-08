'use strict'

// -- Var/Const type checking
export const type = (type) => {
    switch (type) {
        case 'boolean':
            return typeof value === 'boolean'

        case 'number':
            return typeof value === 'number'
        
        case 'string':
            return typeof value === 'string'

        case 'object':
            return typeof value === 'object' && value.every((item) => typeof item !== 'undefined')

        case 'array':        
            return Array.isArray(value)

        case 'tuple':
            return Array.isArray(value) && value.every((item) => typeof item !== 'undefined')

        case 'any':
            return true

        case 'null':
            return value === null

        default:
            throw new Error(`Unsupported type: ${type}`)
    }
}

// -- Function return type checking
export const enforce = (returnType, logic) => (...args) => {
    for (const arg of args) {
        if (typeof arg !== returnType) {
            log(`Return type: <${typeof arg}> does not match specified type: <${typeof returnType}>`, 'error')
            return '{ Returned type } <undefined>'
        }
    }
        
    const result = logic(...args)
    
    if (typeof result === returnType) {
        return result
    }
    else {
        log(`Return type: <${typeof result}> does not match specified type: <${typeof returnType}>`, 'error')
        return  '{ Returned type } <undefined>'
    }
}

// -- Error Handling
export const log = (message, type) => {
    const error_type = type.toLowerCase()
    const types = {
        log: { label: '{ Log }', color: 'white'},
        info: { label: '{ Info }', color: 'blue'},
        help: { label: '{ Help }', color: 'green'},
        success: { label: '{ Success }', color: 'green'},
        warning: { label: '{ Warning }', color: 'black'},
        error: { label: '{ Error }', color: 'red'},
    }
    const {label, color} = types[error_type]
    console.log(`%c${label} ${message}`, `display: inline-block; border-left: 1.5px solid ${color};`)
}