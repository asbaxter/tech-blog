const { Post } = require('../models');

const postdata = [
  {
    title: 'HI',
    post_text: 'asdfghfdgdfsgsdfgdsfg',
    user_id: 1
  },
  {
    title: 'dsfgsdfgsdf',
    post_text: 'sdfgsfdgds',
    user_id: 2
  },
  {
    title: 'dfgdfgfdsgfdsgsdfg',
    post_text: 'dsfgsfdgfsdgdsfgsd',
    user_id: 1
  },
  {
    title: 'dfgdgfdgdfsg',
    post_text: 'dsfgfsdgdgfdsgfdsfdg',
    user_id: 2
  },
  {
    title: 'dfgfdgdfgdsgsd',
    post_text: 'dsfgdfsgfdgdgdf',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
