import React from "react";

export default class ListComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    render () {
        const listElements = this.props.items.map((item) => {
            return (
                <div className="item">
                    <h2>{item.name}</h2>
                </div>
            );
        })
        return(
            <div className="list">{listElements}</div>
        );
    }
}