import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text style={styles.heading}>The Counter App</Text>
      <View>
        <Button
          onPress={() => {
            setCount(count + 1);
          }}
          title="Press me to increase the Count"
        />
        <Text style={styles.heading}>{count}</Text>

        <Button
          onPress={() => {
            setCount(count - 1);
          }}
          title="Press me to decrease the Count"
        />
        <TouchableOpacity
          onPress={() => {
            setCount(0);
          }}
          style={styles.button}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    padding: 40,
    fontSize: 50,
    color: 'lavender',
  },
  button: {
    alignItems: 'center',
    padding: 20,
    fontSize: 40,
    backgroundColor: 'red',
    borderRadius: 30,
    margin: 80,
  },
});
export default CounterScreen;
