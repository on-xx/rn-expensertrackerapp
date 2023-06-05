import { View, StyleSheet, FlatList } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2021-01-05"),
  },
  {
    id: "e3",
    description: "Some Bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A Book",
    amount: 14.99,
    date: new Date("2021-02-19"),
  },
  {
    id: "e5",
    description: "Another Book",
    amount: 18.59,
    date: new Date("2021-02-22"),
  },
];

const ExpensesOutput = ({ expenses, expensePeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensePeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

const styles = StyleSheet.create();

export default ExpensesOutput;
