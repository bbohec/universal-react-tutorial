import React from 'react';
import { Link } from 'react-router';

export default function SearchParameters() {
    return (
        <div className="card">
	        <div className="card-block">
	            Current: <strong>Search Parameters</strong><br/>
	            <Link to='/menu' className="btn btn-primary">Menu</Link>
        	</div>
        </div>
    );
}
