import React from "react";

export default class PaginationComponent extends React.Component{
    constructor(props){
        super(props);
    }

    handleClickOnButton (index) {
        const offset = (index - 1) * this.props.recordsPerPage;
        const url = "https://pokeapi.co/api/v2/pokemon/?limit=" + this.props.recordsPerPage + "&offset=" + offset;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(
                (data) => {
                    this.props.updateItems(data.results);
                },
                (error) => {
                    this.setState({
                        error: error
                    });
                }
            )
    }
    render () {
        const pages = Array.apply(1, {length: this.props.numberPages}).map(Function.call, Number);
        const buttonOfPage = pages.map((number, index) => (
            <button dangerouslySetInnerHTML={{__html: index+1}} onClick={this.handleClickOnButton.bind(this, index+1)}></button>
        ));
            return (
                <div className="pagination">
                    {buttonOfPage}
                </div>
            );
    }
}