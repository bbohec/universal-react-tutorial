import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Menu extends React.Component {
	render() {
		/*const { custom } = this.props;*/
	    return (
			
	    	<main>
	    		{/*<main className="container"}>*/}
		    	<div className = "row pt-1">
			    	<div className="col-sm-6 offset-sm-3 col-md-8 offset-md-2 col-lg-4 offset-lg-4">
				        <div className="card text-center">
					        <div className="card-block">
					            <h3 className="card-title">Menu</h3>
					            <div className="btn-group-vertical">
					            	<Link to='/searchParameters' className="btn btn-secondary">Search Parameters</Link>
					            	<Link to='/index' className="btn btn-secondary">Index</Link>
					            	<Link to='/about' className="btn btn-secondary">About</Link>
					            </div>
					            <p>{this.props.initialState.title}</p>
				        	</div>
				        </div>
			        </div>
			    </div>
		    </main>
	    );
	}
}

function mapStateToProps(state) {
    return {
        initialState: state.initialState
    };
}

export default connect(mapStateToProps)(Menu);


/*
const wrapper = connect(
    (state) => {
        return { custom: state };
    }
);

export default wrapper(Menu);*/