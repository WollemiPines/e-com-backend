const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagsData = await Tag.findAll();
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagsData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
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


router.post('/', async (req, res) => {
  try {
    const tagsData = await Tag.create({
      tag_id: req.body.tag_id,
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id',async  (req, res) => {
  // update a tag's name by its `id` value
  try {
  const selId= await selId.findOne({ where: { tag_id: req.body.tag_id } });
  selId.name = req.body.name 
  await selId.save()
res.status(200).json(selId);
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
