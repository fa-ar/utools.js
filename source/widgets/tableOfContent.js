'use strict'

import * as h from '../scripts/helpers.js'
import { log } from '../scripts/utils.js'

export const tableOfContent = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const titles = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
        const tocList = h.newWidget(
            'ul', 
            
            {},
            
            {
                'data-element-id': 'toc'
            },
            
            {}
        )
    
        titles.forEach((title) => {
            const titleText = title.innerText
            const titleId = title.getAttribute('id')
            
            if (!titleId) {
                log(titleText)
                return
            }
            
            const tocItem = document.createElement('li')
            const tocLink = document.createElement('a')
            
            tocLink.href = `#${titleId}`
            tocLink.textContent = titleText
    
            tocItem.appendChild(tocLink)
            tocList.appendChild(tocItem)
        })
        const tocContainer = document.createElement('div')
        tocContainer.append(tocList)
        console.log(tocContainer)
        return tocContainer
        //console.log(titles)
        //console.log(tocList)
        //return tocList
    })
}