import React from 'react';
import Menu from './menu';
import { RingLoader } from 'react-spinners';

class CreatePosts extends React.Component {
  constructor(props) {
    super(props);
    this.loading = true;
    let userId = localStorage.getItem('userId');

    if (userId === undefined || userId === null || userId === '0') {
      window.location.href = '/login';
    }

    this.state = { posts: [], count: 0 };
    this.userId = userId;
    this.FetchPost();
    this.handleSubmit = this.handleSubmit.bind(this);

    document.title = localStorage.getItem('displayUsername') + ' - Posts';
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: event.target.title.value,
        body: event.target.body.value,
        userId: this.userId
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => {
        let allpost = this.state.posts;
        this.setState({ posts: [] });
        let newPost = { title: json.title, comment_count: 0, postid: 0 };
        allpost.unshift(newPost);
        this.setState({ posts: allpost, count: allpost.length });
      });
    document.getElementById('create-post-form').reset();
  }

  FetchPost() {
    fetch('http://jsonplaceholder.typicode.com/posts?userId=' + this.userId)
      .then(response => response.json())
      .then(data => {
        let update_post = [];
        for (let i = data.length - 1; i > -1; i--) {
          fetch(
            'http://jsonplaceholder.typicode.com/comments?postId=' + data[i].id
          )
            .then(resp => resp.json())
            .then(comments => {
              let oldPosts = this.state.posts;
              this.setState({ posts: [] });
              oldPosts[i].comment_count = comments.length;
              oldPosts[i].postid = data[i].id;
              this.setState({ posts: oldPosts });
            });

          update_post.push({
            title: data[i].title,
            comment_count: 0,
            postid: 0
          });
        }
        this.setState({ posts: update_post, count: update_post.length });
        this.loading = false;
      });
  }

  render() {
    let html;
    if (this.loading) {
      html = (
        <div align="center" className="sweet-loading">
          <RingLoader color={'#123abc'} loading={this.loading} />
        </div>
      );
    } else {
      html = (
        <div align="center">
          <Menu />
          <h4>Post here:</h4>
          <form
            onSubmit={this.handleSubmit}
            className="form-horizontal"
            id="create-post-form"
          >
            <div className="form-group">
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter title"
                  name="title"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-5">
                <textarea
                  className="form-control"
                  rows="5"
                  id="body"
                  placeholder="Enter Content"
                  name="body"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button>Post!</button>
              </div>
            </div>
          </form>
          <br />
          <br />
          <div>
            <h4>Your Posts (Total: {this.state.count}) </h4>
            <table className="table table-hover myPosts">
              <thead>
                <tr>
                  <th>Post Title</th>
                  <th>No of Comments</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.posts.map(function(element, id) {
                  return (
                    <tr key={id}>
                      <td>{element.title}</td>
                      <td>{element.comment_count}</td>
                      <td>
                        <a href={'/comments/' + element.postid}>
                          Show Comments
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    return <div>{html}</div>;
  }
}

export default CreatePosts;
