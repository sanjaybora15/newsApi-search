import React from 'react';

class Searchbar extends React.Component{
    constructor( props ) {
		super( props );
		this.state = {
			value: '',
			loading: false,
			currentPageNo: 1,
		};
    }
    
    //onSubmit of search query
    onFormSubmit = async e => {
        e.preventDefault();
        await this.props.onSubmit(this.state.value,this.state.currentPageNo);
    }

    //handle the input change
    handleSearch = (e) => {
        const q = e.target.value
        this.setState({value:q,loading:true})
    }

    
    render(){
        return (
            <div className="search-box">
                <form className="search-form" onSubmit={this.onFormSubmit}>
                    <input type="text"
                            name="q"
                            className="tbsearchbar"
                            value={this.state.value}
                            onChange={e => this.handleSearch(e)}
                            placeholder="Search Something..." 
                            required />    
                    <button type="submit" className="btn-submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
        )
    }
}

export default Searchbar
