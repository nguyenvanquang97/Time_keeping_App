import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import Search from '../../assets/svg/search';
type SearchBarProps = {
 
  text?: string;
  handleChangText?: (text: string) => void;
  placeholder?:string
  width?:any
};
export default function SearchBar({handleChangText,text,placeholder,width}:SearchBarProps) {
  const [value, setValue] = useState('');
  return (
    <View style={styles.row}>
      <View style={[styles.search,{width:width??"100%"}]}>
       <Search/>
        <TextInput
          style={styles.textInput}
          multiline={true}
          onChangeText={text=>{if(handleChangText){
            handleChangText(text)
          }}}
          placeholder={placeholder??"Tìm kiếm"}
          placeholderTextColor="#bfbfbf"
      
          value={text?text:""}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    flex:1,
    height: 32,
    backgroundColor:"#F3F3F3",
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius:8,
    paddingLeft:17
  },
  textInput: {
    flex: 1,
    paddingVertical: 5,
    fontSize: 14,
    justifyContent: 'center',
    
  },
  row: {
    flexDirection: 'row',
    height: 48,
    paddingVertical: 8,
  },
});
