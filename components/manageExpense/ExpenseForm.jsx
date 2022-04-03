import { useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from './Input';

function ExpenseForm() {
  function amountChangeHandler() {}

  return (
    <View>
      <Input
        label='Amount'
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label='Date'
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label='Description'
        textInputConfig={{
          multiline: true,
          onChangeText: () => {},
          // autoCapitalize:"none",
          // autoCorrect: false,//default true
        }}
      />
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({});
