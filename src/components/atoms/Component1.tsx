import React from 'react';
import { useSpring, animated } from 'react-spring';

import {Spring} from 'react-spring/renderprops'

export default function Component1() {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    })

    return (
        <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}>
      {props => <div style={props}>hello</div>}
</Spring>
    )
}

const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}
