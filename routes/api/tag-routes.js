const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


  // Get all tags
router.get('/', async (req, res) => {
  try {
    const tagsData = await Tag.findAll();
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // Get a tag by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const tagsData = await Tag.findByPk(req.params.id, {
      where: {tags_id : req.params.id}
    });

    if (!tagsData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // Create a new tag 
router.post('/', async (req, res) => {
  try {
    const tagsData = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

  // update a tag's name by its `id` value
router.put('/:id',async  (req, res) => {
  try {
  const tagsData= await Tag.update(req.body,
    { where: { id: req.params.id, } });
res.status(200).json(tagsData);
} catch (err) {
  res.status(400).json(err);
}
});


 // delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagsData = await Tag.destroy({
      where: { id: req.params.id }
    });
    if (!tagsData) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
