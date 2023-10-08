const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  });

  return BlogPost;
};
