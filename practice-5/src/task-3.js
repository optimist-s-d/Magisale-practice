/* eslint-disable react/prop-types */
import React from "react";

export default class Tabs extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selected: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.setState({
            selected: e.target.value
        });
    }

    renderHeader(){
        const headers = this.props.tabs.map((tab, index) => {
            let activeClass = this.state.selected === index ? 'list-group-item active':'list-group-item';
            return <li className={activeClass} key={index} value={index} onClick={this.handleClick}>{this.props.headerTpl({item:tab, index:index})}</li>
        });
        return headers;
    }

    renderContent(){
        const contents = this.props.tabs.map((tab, index) => {
            let hidden = this.state.selected === index ? '':'d-none';
            return <div className={hidden} key={index}>{this.props.contentTpl({item:tab, index:index})}</div>
        });
        return contents;
    }

    render() {
        return (
            <div className="row">
                <ul className="col-3 list-group">
                    {this.renderHeader()}
                </ul>
                <div className="col-9">
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}

Tabs.defaultProps = {
    headerTpl: props => props.item.header,
    contentTpl: props => props.item.content
}