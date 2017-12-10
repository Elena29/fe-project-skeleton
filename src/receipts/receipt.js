import React from 'react';

export default class Receipt extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired
    }


    render() {
        const { text, title } = this.props;
        return (
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        );
    }
}