import { WithStyles  } from '@material-ui/core/styles';
import React,{ Component } from 'react';
import { LayoutComponentStyle } from './styles';
 
export class LayoutComponent extends Component<WithStyles<LayoutComponentStyle>>{
    render(){
      const { children, classes } = this.props;

     
        return (
          <div  className={classes.wrapper}>
              {children}
          </div>
        );
    };
}