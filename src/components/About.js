import React from 'react';
import Rainbow from '../hoc/Rainbow'

const About=() =>{
    
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader, it's seen as gibberish.</p>
        </div>
    )
}
export default Rainbow(About)