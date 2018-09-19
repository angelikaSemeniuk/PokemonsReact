import React from "react";
import ListComponent from "./ListComponent";
import PaginationComponent from "./PaginationComponent";

export default class TestApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.recordsPerPage = 36;
        this.numberPages = 0;
        this.updateItems = this.updateItems.bind(this);
    }

    updateItems (items) {
        this.setState({items: items});
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=36&offset=0')
            .then((response) => {
                return response.json();
            })
            .then(
                (data) => {
                    this.numberPages = Math.ceil(data.count/this.recordsPerPage);
                    console.error("numberPages", this.numberPages);
                    this.updateItems(data.results);
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
                    <ListComponent items={this.state.items} />
                    <PaginationComponent
                        items={this.state.items}
                        numberPages={this.numberPages}
                        recordsPerPage={this.recordsPerPage}
                        updateItems={this.updateItems}
                    />
                </div>
            </div>
        );
    }
}