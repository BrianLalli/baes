import React from 'react';
import { Link } from 'react-router-dom';

export default function Notes(){
    return (
        <div className="container mt-5" id='notes'>
            <div className='row justify-content-center'>
                <h2 className='col-12 col-lg-9'>Notes</h2>
                <ul className="list-group col-12 col-lg-9">
                    <li className="list-group-item">Note</li>
                    <li className="list-group-item">Note</li>
                    <li className="list-group-item">Note</li>
                    <li className="list-group-item">Note</li>
                    <li className="list-group-item">Note</li>
                </ul>
            </div>
        </div>
    )
}

