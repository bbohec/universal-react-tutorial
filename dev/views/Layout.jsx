import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Header from '../views/Header.jsx';

class Layout extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }
    _handleClick() {
        alert(this.props.custom.title);
    }
    render() {
        const { custom } = this.props;
        var styleBucket = {
            "bodyStyle" : {
                "paddingTop" : "70px"
            }
        }
        return (
            <html>
                <head>
                    <title>{custom.title}</title>
                    <meta charSet="utf-8"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"/>
                </head>
                <body style={styleBucket.bodyStyle} className="container-fluid">
                    <Header/>
                    {/*<p>Isn't server-side rendering remarkable?</p>*/}
                    {/*<button onClick={this._handleClick}>Click Me</button>*/}
                    {this.props.children}
                    <script dangerouslySetInnerHTML={{
                        __html: 'window.PROPS=' + JSON.stringify(custom)
                    }} />
                    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'/>
                    <script src='https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js'/>
                    <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js'/>
                    <script src='/bundle.js' />
                </body>
            </html>
        );
    }
}

const wrapper = connect(
    (state) => {
        return { custom: state };
    }
);

export default wrapper(Layout);
