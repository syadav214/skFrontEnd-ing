import React from 'react';

import Menu from './menu';

import { RingLoader } from 'react-spinners';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.loading = true;
    let userId = localStorage.getItem('userId');

    if (userId === undefined || userId === null || userId === '0') {
      window.location.href = '/login';
    }

    this.postId = this.props.match.params.id;
    this.state = { comments: [] };
    this.Comments();

    document.title = localStorage.getItem('displayUsername') + ' - Comments';
  }

  Comments() {
    fetch('http://jsonplaceholder.typicode.com/comments?postId=' + this.postId)
      .then(response => response.json())
      .then(data => {
        let update_comments = [];
        for (let i = data.length - 1; i > -1; i--) {
          update_comments.push({
            name: data[i].name,
            body: data[i].body,
            email: data[i].email
          });
        }
        this.loading = false;
        this.setState({ comments: update_comments });
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
          <table className="table table-hover myProfile">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Comments</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.comments.map(function(element, id) {
                return (
                  <tr key={id}>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>{element.body}</td>
                    <td>
                      {' '}
                      <textarea
                        rows="5"
                        id="feedback"
                        placeholder="Enter Feedback"
                        name="body"
                      />{' '}
                    </td>
                    <td>
                      <button className="btn">Submit Feedback</button>{' '}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }

    return <div>{html}</div>;
  }
}

export default Comments;
