import React from 'react';
import { executeNextFrame } from '../../utils/nextframe';

class HighlightJs extends React.Component {

    renderSyntaxHighlighting(element) {
        executeNextFrame(() => hljs.highlightBlock(element));
    }

    render() {
        return (
            <div className="highlighjs">
                <pre>
                    <code
                        ref={element => this.renderSyntaxHighlighting(element)}
                    >
                        {this.props.code}
                    </code>
                </pre>
            </div>

        );
    }
}

export default HighlightJs;