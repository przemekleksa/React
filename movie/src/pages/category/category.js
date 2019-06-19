import React, { Component } from 'react';
import Header from '../../components/header/header';
import Loader from '../../components/loader/loader';
import {connect} from 'react-redux';
import { loadCategoryFromApi } from '../../actions/category';

class Category extends Component {

    componentDidMount = () => {
        let cleanCategoryName = this.props.match.params.name;
        this.props.dispatch(loadCategoryFromApi(cleanCategoryName));
    }

    render () {
        return ( 
        <div>
            {!this.props.isLoading &&
                <Header 
                title={this.props.categoryFromApi.name} 
                breadcrumb={[
                    {
                    name: 'Categories',
                    link: '/categories'
                    },
                    {
                        name: this.props.categoryFromApi.name,
                        link: '/category/' + this.props.categoryFromApi.name.clean_name
                    },
                ]}
             />
            }
           
            <Loader isLoading={this.props.isLoading}/>
        </div>
     );
    }
    
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.category.isLoading,
        categoryFromApi: state.category.categoryApi
    }
}

export default connect(mapStateToProps, null)(Category);