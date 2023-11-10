import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import commonStyles from '../style/style'


type CustomButtonProps = {
  backgroundColor: string;
  textColor: string;
  name: string;
  width?: any;
};

export default function CustomButton({ backgroundColor, textColor, name, width }: CustomButtonProps) {
  return (


    <View style={[styles.button, { backgroundColor, width: width ?? '92%' }]}>
      <Text style={[commonStyles.text_14, { color: textColor, textAlign: 'center' }]}>{name}</Text>
    </View>


  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  }
})