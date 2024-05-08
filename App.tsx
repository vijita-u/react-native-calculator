import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  heading: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sum: {
    backgroundColor: '#87CEEB',
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calculator: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: '#fff',
    fontSize: 24,
  },
  operand: {
    color: '#FFA500',
    fontSize: 24,
  },
  calculate: {
    color: '#000',
    fontSize: 24,
  },
  display: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

const App = () => {
  const [display, setDisplay] = useState<string>('0');
  const [operand, setOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  const pressButton = (value: string) => {
    if (display === '0') {
      setDisplay(value);
    } else {
      setDisplay(display + value); // Concatenating strings
    }
  };

  const pressOperator = (operation: string) => {
    setOperand(parseFloat(display));
    setOperator(operation);
    setDisplay('0');
  };

  const calculate = () => {
    const num = parseFloat(display);
    switch (operator) {
      case '+':
        setDisplay((operand + num).toString());
        break;
      case '-':
        setDisplay((operand - num).toString());
        break;
      case '*':
        setDisplay((operand * num).toString());
        break;
      case '/':
        setDisplay((operand / num).toString());
        break;
    }
    setOperand(null);
    setOperator(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.heading}>{display}</Text>
      </View>
      <View style={styles.calculator}>
        <View style={styles.subcontainer}>
          <Pressable style={styles.button} onPress={() => pressButton('1')}>
            <Text style={styles.number}>1</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => pressButton('2')}>
            <Text style={styles.number}>2</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => pressButton('3')}>
            <Text style={styles.number}>3</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => pressButton('4')}>
            <Text style={styles.number}>4</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => pressButton('5')}>
            <Text style={styles.number}>5</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => pressButton('6')}>
            <Text style={styles.number}>6</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => pressButton('7')}>
            <Text style={styles.number}>7</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => pressButton('8')}>
            <Text style={styles.number}>8</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => pressButton('9')}>
            <Text style={styles.number}>9</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => pressButton('0')}>
            <Text style={styles.number}>0</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => pressOperator('+')}>
            <Text style={styles.operand}>+</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => pressOperator('-')}>
            <Text style={styles.operand}>-</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => pressOperator('/')}>
            <Text style={styles.operand}>/</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => pressOperator('*')}>
            <Text style={styles.operand}>*</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={calculate}>
            <Text style={styles.operand}>=</Text>
          </Pressable>
          <Pressable style={styles.sum} onPress={() => setDisplay('0')}>
            <Text style={styles.calculate}>C</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default App;
