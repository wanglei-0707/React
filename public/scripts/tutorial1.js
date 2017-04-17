var Comment = React.createClass({
    rawMarkup: function(){
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return {__html: rawMarkup};
    },
    render: function(){
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function(){
        var commentNodes = this.props.data.map(function(comment){
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    getInitialState: function(){
        return {
            author: '',
            text: ''
        };
    },
    handleAuthorClick: function(event){
        this.setState({author: event.target.value})
    },
    handleTextClick: function(event){
        this.setState({text: event.target.value})
    },
    handleSubmit: function(event){
        event.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if(!author || !text){
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.setState({author: '', text: ''});
    },
    render: function(){
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorClick}/>
                <input type="text" placeholder="Say something..."  value={this.state.text} onChange={this.handleTextClick}/>
                <span>{this.state.author}{this.state.text}</span>
                <input type="submit" value="Post" />
            </form>
        );
    }
});

var CommentBox = React.createClass({
    loadCommentFromServer: function(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.error(this.props.url, status, err.roString());
            }.bind(this)
        });
    },
    handleCommentSubmit: function(comment){
        var comments = this.state.data;
        comment.id = Date.now();
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function(data){
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({data: comments});
                console.error(this.props.url, status, err.roString());
            }.bind(this)
        });
    },
    getInitialState: function(){
        return {
            data: []
        };
    },
    componentDidMount: function(){
        this.loadCommentFromServer();
        setInterval(this.loadCommentFromServer, this.props.pollInterval);
    },
    render: function(){
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox url="/api/comments" pollInterval={2000}/>,
    document.getElementById('content')
);
