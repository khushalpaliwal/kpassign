import React, { Component } from "react";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from '../../theme/theme.json';

import App from "../App";

export default class Setup extends Component {
    render() {
      return (
        <>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
            <App/>
            </ApplicationProvider>
        </>
        );
      }
}