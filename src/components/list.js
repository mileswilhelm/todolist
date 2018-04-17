import React from 'react';
import ListItem from './list_item';

const List = (props) => {
    const listItems = props.items.map((item) => {
        return (
            <ListItem 
                key={item.id}
                content={item.content}
                onItemChange={props.onItemChange}
            />
        );
    });
    return (
        <div className="ui segments raised">
            {listItems}
        </div>
    );
}

export default List;