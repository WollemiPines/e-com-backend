// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category,{
});

Category.hasMany(Products,{
});

Product.belongsToMany(Tags,{
  through:{
    model: ProductTag,
  },
});

Tag.belongsToMany(Product,{
  through:{
    model:ProductTag
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
