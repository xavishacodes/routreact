import React,{Component} from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import deletePost from '../actions/postActions';

class Post extends Component {
    handleClick=()=>{
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/');
    }

    // state = {
    //     post:null
    // }
    // componentDidMount() {
    //     // console.log(this.props);
    //     let id=this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //     .then(res => {
    //         this.setState({
    //             post:res.data
    //         })
    //     console.log(res);
    //     })
    //     // this.setState({id:id});
    // }
    render() {
        
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                    Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <dev className="center">Loading post..</dev>
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}
//the below is the function to dispatch an action from the Post component(delete)

// the below is the function to receive the updated state as props from the central state(Redux)
const mapStateToProps = (state,ownProps) => {
    let id=ownProps.match.params.post_id;
    return {
        post:state.posts.find(post => post.id == id)
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        deletePost: (id) => {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);