import React from "react";
import ListComponent from "./ListComponent";

export default class TestApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.updateItems = this.updateItems.bind(this);
    }

    updateItems (items) {
        this.setState({items: items});
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=50&offset=50')
            .then((response) => {
                return response.json();
            })
            .then(
                (data) => {
                    this.setState({items : data.results});
                    console.error("items", this.state.items);
                    this.updateItems(this.state.items);
                },
                (error) => {
                    this.setState({
                        error: error
                    });
                }
            )
    }
    render () {
        return(
            <div>
                <div className="header">
                    <h1>Pokemons</h1>
                </div>
                <div className="container">
                    <ListComponent items={this.state.items}/>

                </div>
            </div>
        );
    }

}