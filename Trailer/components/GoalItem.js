import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PressableButton from './PressableButton';
import { colors, commonStyles } from '../styles';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons

export default function GoalItem({ item, onDelete }) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Details', { goal: item })}
      style={({ pressed }) => (pressed ? [commonStyles.goalItem, commonStyles.goalItemPressed] : commonStyles.goalItem)}
      android_ripple={{ color: colors.ripple, borderless: false }}
    >
      <View style={commonStyles.goalItemContent}>
        <Text>{item.text}</Text>
        <PressableButton
          pressedFunction={() => onDelete(item.id)}
          componentStyle={commonStyles.button}
          pressedStyle={commonStyles.buttonPressed}
        >
          <MaterialIcons name="delete" size={24} color="white" />
        </PressableButton>
      </View>
    </Pressable>
  );
}