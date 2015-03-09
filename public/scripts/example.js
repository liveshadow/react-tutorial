var converter = new Showdown.converter();


var Comment = React.createClass({
    render: function() {
        var rawMarkup = converter.makeHtml(this.props.children.toString())
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        return (
        <div classname="commentList">
            <Comment author="Pete Hunt">This is a comment</Comment>
            <Comment author="Jordan Walke">This is *another* comment</Comment>
        </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
        <div classname="commentForm">
            Hello World! I am a CommentForm.
        </div>
        );
    }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementById('content')
)
