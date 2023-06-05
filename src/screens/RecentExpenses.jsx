import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const RecentExpenses = () => {
  return <ExpensesOutput expensePeriod="Last 7 Days" />;
};

const styles = StyleSheet.create({});

export default RecentExpenses;
