'use strict'

import { ut } from '../source/_source.js'

ut.accessPoint(
// ----
    ut.header(
        ut.button('utools')
            .setAction(() => {
                alert('utools')
            })
        ,

        ut.button('plain button')
        .setStyle('borderless')
        .setColor('blue'),
        
        ut.button('prominent button')
        .setStyle('prominent'),

        ut.button(),
        ut.spacer(),
        ut.link(),
    ),

// ----
    ut.main(
        ut.container(
            ut.row(
                ut.text('container'),
                ut.spacer(),
                ut.link(),
            ),


        )
            .setWidth('300px')
            .setHeight('300px')
            .setRadius('5px')
            .setBackground('teal')
        ,

        ut.title('test title'),
        ut.link(),
        ut.spacer()
            .setDirection()
        ,

        ut.link(),
    ),

// ----
    ut.footer(
        ut.text('footer'),
        ut.container()
            .setWidth('100%')
            .setHeight('100%')
            .setBorder('solid 2px')
            .setRadius('5px')
            .setBackground('teal')
        ,
    ),
    
)
.init()