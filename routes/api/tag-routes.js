// The `/api/tags` endpoint
// create routes for /api/tags and load tables relevant to the route
const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

router.get("/", async (req, res) => {
  // find all tags
  try {
    // create an async function to run the query SELECT * FROM tag join productTag as prodcuts join product
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: "products" }],
    });
    // load results with status 200
    res.status(200).json(tagData);
  } catch (err) {
    // catch non-user errors
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  try {
    // create async function to run the query SELECT * FROM tag join productTag as products join product where req.params.id = tagId
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: "products" }],
    });

    // if nothing is returned, return status 400 and message
    if (!tagData) {
      return res.status(400).json({ message: "No tag with this id." });
    }
    // else show results
    res.status(200).json(tagData);
  } catch (err) {
    //catch non-user error
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    // runs query INSERT INTO tag
    const tagData = await Tag.create(req.body);
    // return status 200 if successfully run
    res.status(200).json(tagData);
  } catch (err) {
    // catch non-user error
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    // runs UPDATE tag .. WHERE req.params.id = tagId
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // if not found, return status 400 and message
    if (!tagData) {
      return res.status(400).json({ message: "No tag with this id." });
    }

    // else return number of records affected
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    //runs DELETE FROM tags WHERE req.params.id = tagId
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    // if query unsuccessful, return 404 and message
    if (!tagData) {
      return res.status(400).json({ message: "No tag with this id." });
    }
    // else return number of rows affected
    res.status(200).json(tagData);
  } catch (err) {
    //catches all non-user error
    res.status(500).json(err);
  }
});

module.exports = router;
