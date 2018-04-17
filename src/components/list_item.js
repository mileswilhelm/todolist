import React, {Component} from 'react';

class ListItem extends Component {

    render() {
        return (
            <div className="ui segment">
                <input 
                    value={this.props.content}
                    onChange={event => this.onItemChange(event.target.value)}
                    className="list-item--input item" 
                />
                <i className="trash red alternate outline icon right floated"></i>
            </div>
        );
    }

    onItemChange(content) {
        this.setState({content});
        console.log(content);
    }
}

export default ListItem;