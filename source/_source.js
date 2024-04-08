'use strict'

// -- UTools

import { accessPoint } from './widgets/accessPoint.js'
import { header } from './widgets/header.js'
import { main } from './widgets/main.js'
import { footer } from './widgets/footer.js'
import { link } from './widgets/link.js'
import { button } from './widgets/button.js'
import { spacer } from './widgets/spacer.js'
import { title } from './widgets/title.js'
import { container } from './widgets/container.js'
import { tableOfContent } from './widgets/tableOfContent.js'
import { text } from './widgets/text.js'
import { commandPallette } from './widgets/commandPallete.js'
import { column } from './widgets/column.js'
import { row } from './widgets/row.js'

// -- 
const ut = {
    accessPoint: accessPoint,
    header: header,
    main: main,
    footer: footer,
    link: link,
    button: button,
    spacer: spacer,
    title: title,
    container: container,
    toc: tableOfContent,
    text: text,
    commandPallette: commandPallette,
    column: column,
    row: row,
}

export { ut }