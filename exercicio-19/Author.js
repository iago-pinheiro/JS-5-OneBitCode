const Post = require('./Post')

class Author {
  constructor(name){
    this.name = name
    this.postList = []
  }

  createPost(title, content){
    const post = new Post(title, content, this.name)
    this.postList.push(post)
    return post
  }
}

module.exports = Author