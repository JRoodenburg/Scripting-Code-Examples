import React from 'react';
import HighlightJs from '../highlightjs/highlightjs';

class ExampleDetail extends React.Component {

    renderSyntaxHighlighting(element) {
        hljs.highlightBlock(element);
    }

    render() {
        return (
            <div className="exampleDetail">
                <div className="exampleDetail__title">
                    {this.props.title}
                </div>
                <div className="exampleDetail__description">
                    {this.props.description}
                </div>
                <HighlightJs
                    code={this.props.example}
                    language={this.props.language}
                />
            </div>

        );
    }
}

export default ExampleDetail;