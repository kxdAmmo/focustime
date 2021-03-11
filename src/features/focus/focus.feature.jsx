import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

import { RoundedButton } from '../../components/rounded-button/rounded-button.component.jsx'
import { fontSizes, spacing } from '../../utils/sizes.js'
import { colors } from '../../utils/colors.js'

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null)

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput}
            onSubmitEditing = {
              ({ nativeEvent }) => setSubject(nativeEvent.text)
            }
          />
          <RoundedButton title='+' size={50} onPress={() => addSubject(subject)}/>
        </View>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },

  innerContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'center',
  },

  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.large
  },

  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center'
  },

  textInput: {
    flex: 1,
    marginRight: spacing.md
  } 
});
