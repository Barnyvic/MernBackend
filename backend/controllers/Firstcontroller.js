//importing asyncHandler from express-async-handler
const asyncHandler = require("express-async-handler");

// @desc Get all the data from the database
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc Create a new goal
// @route POST /api/goals
// @access private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.test) {
    res.status(400);
    throw new Error("Missing test");
  }
  res.status(200).json({ message: "Create goals" });
});

// @desc Update a goal
// @route PUT /api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc Delete a goal
// @route DELETE /api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
