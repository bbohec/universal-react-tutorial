import React from 'react';
import { Link } from 'react-router';

export default function Index() {
    return (
        <div className="card">
	        <div className="card-block">
	            Current: <strong>Index</strong><br/>
	            <Link to='/menu' className="btn btn-primary">Menu</Link>
        	</div>
        </div>
    );
}
