import React from 'react';

class ListItem extends React.Component {

    render() {
        return (
            <div
                className="listItem"
                onClick={this.props.onClick}
            >
                <div className="listItem__title">{this.props.title}</div>
            </div>
        );
    }
}

export default ListItem;