import * as React from 'react';
import { Container } from 'semantic-ui-react';

import * as c from '../cattributes/colors';
import { Cryptokitty } from './Cryptokitty'

interface IKittyCardProps {
	kitty: any;
}

class KittyCard extends React.Component<IKittyCardProps> {

  private hexToRgbA(hex) {
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+', .3)';
    }
    throw new Error('Bad Hex');
}

  render() {
    const { body, pattern, eye, mouth, primary, secondary, tertiary, eyeColor } = this.props.kitty
    const bgStyle = {
      backgroundColor: this.hexToRgbA(c.EyeColor[eyeColor])
    }

    return (
      <div style={{ ...styles.card, ...bgStyle }}>
        <Cryptokitty
          body={body}
          mouth={mouth}
          eye={eye}
          pattern={pattern}
          colors={[ c.Primary[primary], c.Secondary[secondary], c.Tertiary[tertiary], c.EyeColor[eyeColor]]}
        />
      </div>
    )
  }
}

const styles: React.CSSProperties = {
	card: {
    position: 'relative',
    borderRadius: '10px',
    boxShadow: '1px 1px 4px 2px rgba(177, 177, 177, .3)',
    height: "300px",
    width: "300px",
    margin: '5px 10px',
  }
};

export default KittyCard