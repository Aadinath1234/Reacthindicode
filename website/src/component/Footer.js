import React from 'react';
import { CommonContext } from './CommonContext';
class Footer extends React.Component {
    render() {
        return (
            <CommonContext.Consumer>
                {
                    (
                        { color }
                    ) => (
                        <h1
                        style={{backgroundColor:color}}
                        >Hello this is the Footer  page </h1>
        )
                }

            </CommonContext.Consumer>
        )
    }
}
export default Footer;
