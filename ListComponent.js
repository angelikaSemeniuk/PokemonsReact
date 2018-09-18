import React from "react";

export default class ListComponent extends React.Component{
    constructor(props) {
        super(props);
    }
    render () {
        const listElements = this.props.items.map((item, index) => (
            <li key={index}>
                {item.name}
            </li>
        ))

        return(
            <div className="list">
                <ul>{listElements}</ul>
            </div>
        );
    }

}