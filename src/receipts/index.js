import React from 'react';
import Receipt from './receipt';

export default class Receipts extends React.Component {
    static propTypes = {
        receipts: React.PropTypes.array.isRequired
    }

    render() {
        console.log(this.props.receipts);
        return(
            <div>
                <Receipt title="test" text="test text"/>
                <Receipt title="test2" text="test text2"/>
            </div>
        )
    }

    renderReceipts() {
        return (
            <ul>
                {
                    this.props.receipts.map(item =>
                        <li>
                            <Receipt title="test" text="test text"/>
                        </li>
                    )
                }
            </ul>
        )
    }
}

