import React from 'react';

const PostDetails =(props)=>{
    console.log(props);
    return(
       
        <div className='card'>
            <div className='card-body'>
            <div className='card-heading text-info'>
                <h4>PostDetails</h4>
            </div>
            <hr/>
            <div className='card-text'>
                <h3>{props.match.params.topic} Page</h3>
                <p>Dummy Text Dummy Text Dummy Textv Dummy Text Dummy Text
                   Dummy Text Dummy Text Dummy Text
                </p>
                <p>You are on page number {props.location.search.split('=')[1]}</p>
           </div>
           </div>
        </div>
    )
}

export default PostDetails;