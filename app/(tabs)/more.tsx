import CreateForm from '@/components/todo/createForm';
import { StyleSheet, Image, Platform, View,Text } from 'react-native';
import { useDispatch } from 'react-redux';

export default function TabTwoScreen() {
  const dispatch = useDispatch()

  return (
    <View style={styles.main}>
      <Text style={styles.title}>My To list</Text>
      <View>
        <CreateForm/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 main:{
  flex:1,
  backgroundColor:'white',
  paddingHorizontal:20,
  paddingVertical:20
 },
 title:{
  fontSize:22,
  fontWeight:'500',
  color:'black'
 }
});
