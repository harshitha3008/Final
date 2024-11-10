const express = require('express');
const Recipe = require('../models/Recipe');
const router = express.Router();

// Route to get all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipes' });
  }
});

// Route to add a new recipe
router.post('/', async (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    ingredients: req.body.ingredients,
    process: req.body.process,
  });

  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ message: 'Error adding recipe' });
  }
});

// Route to delete a recipe by ID
router.delete('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    await recipe.remove();
    res.json({ message: 'Recipe deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting recipe' });
  }
});

module.exports = router;
