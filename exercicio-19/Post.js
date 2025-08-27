const Comment = require('./Comment.js')

class Post {
  constructor(title, content, author){
    this.title = title
    this.content = content
    this.author = author
    this.commentsList = []
  }

  addComment(comment, author) {
    this.commentsList.push(new Comment(comment, author))
  }
}

module.exports = Post