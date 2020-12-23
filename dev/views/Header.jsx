import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SvgMenu from '../icons/SvgMenu.jsx';
import SvgMagnifierPlace from '../icons/SvgMagnifierPlace.jsx';

class Header extends React.Component {
	InputhandleChange(e) {
    	console.log(e.target.value);
  	}
  	/*SearchhandleClick(e) {

  	}*/
	render() {
		/*const { custom } = this.props;*/
		/*console.log(this.props);*/
		return (
	    	<nav className="navbar navbar-light fixed-top bg-faded">
	    		{/*<div className="container">*/}
					<div className="row">
						<div className="col-sm-6 offset-sm-3 col-md-8 offset-md-2 col-lg-4 offset-lg-4">
							<div className="input-group">
								<Link to='/menu' className="input-group-addon">
									<SvgMenu />
								</Link>
								<input type="text" className="form-control" onChange={this.InputhandleChange} placeholder="What do you search ?" aria-describedby="basic-addon1">
								</input>
								<Link to='/index' className="input-group-addon" onClick={this.SearchhandleClick}>
									<SvgMagnifierPlace />
								</Link>
							</div>
						</div>
					</div>
				{/*</div>*/}
			</nav>
	    );
	}
}

function mapStateToProps(state) {
    return {
        initialState: state.initialState
    };
}

export default connect(mapStateToProps)(Header);

/*const wrapper = connect(
    (state) => {
        return { custom: state };
    }
);

export default wrapper(Header);*/