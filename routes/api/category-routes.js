// create a router for /api/categories and load relevant tables
// The `/api/categories` endpoint
const router = require("express").Router();
const { Category, Product } = require("../../models");

router.get("/", async (req, res) => {
  // find all categories
  try {
    // create an async function to run the query SELECT * FROM category join product
    const categoriesData = await Category.findAll({
      include: [{ model: Product }],
    });
    // return the output of the select query
    res.status(200).json(categoriesData);
  } catch (err) {
    // this would catch all of the non-user error
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  try {
    // create an async function to run the query SELECT * FROM category join product WHERE category.id = req.params.id
    const categoriesData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    // if there's no result, return with a 404 and message
    if (!categoriesData) {
      return res.status(400).json({ message: "No category with this id." });
    }

    // else return the result of the query
    res.status(200).json(categoriesData);
  } catch (err) {
    // this would catch all of the non-user error
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    // create an async function to run the query INSERT INTO category ...
    const categoriesData = await Category.create(req.body);
    res.status(200).json(categoriesData);
  } catch (err) {
    // this would catch all of the non-user error
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    // create an async function to run the query UPDATE category SET ... WHERE id = req.params.id
    const categoriesData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // if no such category id is stored in the table, return a 404 and message
    if (!categoriesData) {
      return res.status(400).json({ message: "No category with this id." });
    }

    // else return the number of records updated
    res.status(200).json(categoriesData);
  } catch (err) {
    // this would catch all of the non-user error
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    // create an async function to run the query DELETE FROM category WHERE id  = req.params.id
    const categoriesData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    // if no such category id is stored in the table, return a 404 and message
    if (!categoriesData) {
      return res.status(400).json({ message: "No category with this id." });
    }

    // else return the number of records affected
    res.status(200).json(categoriesData);
  } catch (err) {
    // this would catch all of the non-user error
    res.status(500).json(err);
  }
});

module.exports = router;
