import React, { Component } from 'react';

class News extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                to jest {this.props.match.params.page}
            </div>
         );
    }
}
 
export default News;