'use strict'

import React from 'react'
import { Color, SketchPicker } from 'react-color'
import setCustomBodyStyle from '../hooks/setCustomBodyStyle'

class ColorPicker extends React.Component<{}, any> {

    constructor(props: any) {
        super(props);

        // Define the default state or get the color from local storage
        const storedColor = localStorage.getItem('customColor');
        let R = localStorage.getItem('colorStateR');
        let G = localStorage.getItem('colorStateG');
        let B = localStorage.getItem('colorStateB');
        let A = localStorage.getItem('colorStateA');

        this.state = {
            color: {r: R, g: G, b: B, a: A} ,
        };
    }

    handleChange = (color: any) => {
        this.setState({ color: color.rgb }, () => {
          // Use the updated state after it has been set
          const { color } = this.state;
          localStorage.setItem('colorStateR', color.r);
          localStorage.setItem('colorStateG', color.g);
          localStorage.setItem('colorStateB', color.b);
          localStorage.setItem('colorStateA', color.a);
          localStorage.setItem('lastTypeModified', '1');
          setCustomBodyStyle();
        });
        localStorage.setItem('customColor', color.hex);
      };

    render() {

        return (
            <div>
                <SketchPicker color={this.state.color} onChange={this.handleChange} />
            </div>
        )
    }
}

export default ColorPicker