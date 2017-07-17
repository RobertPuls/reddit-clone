import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 1,
      title: "A Poem",
      img_url: "http://via.placeholder.com/350x250",
      like: 3,
      description: "a peom description",
      created: "a few seconds ago",
      comments: [{
        comment: "this is a comment",
      }, {
        comment: "this is also a comment"
      }]
    }, {
      id: 2,
      title: "A post",
      img_url: "http://via.placeholder.com/350x250",
      like: 0,
      description: "a post description",
      created: "a few seconds ago",
      comments: [{
        comment: "this is a comment",
      }]
    }, {
      id: 3,
      title: "A test",
      img_url: "http://via.placeholder.com/350x250",
      like: 0,
      description: "a test description",
      created: "a few seconds ago",
      comments: [{
        comment: "this is a test comment",
      }, {
        comment: "this is also a test comment"
      }]
    }]
  }
});
