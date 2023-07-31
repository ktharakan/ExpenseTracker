const {
  addExpense,
  deleteExpense,
  getExpense,
} = require("../controllers/expense");
const {
  getIncomes,
  deleteIncome,
  addIncome,
} = require("../controllers/income");

const router = require("express").Router();

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpense)
  .delete("/delete-expense/:id", deleteExpense);

module.exports = router;
