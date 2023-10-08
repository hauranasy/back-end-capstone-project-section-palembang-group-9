const { BlogPost } = require('../models/BlogPost');

const getAllPosts = async (req, res) => {
  try {
    const posts = await BlogPost.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching blog posts' });
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await BlogPost.findByPk(id);
    if (!post) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.json(post);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching blog post' });
  }
};
