import { HomeScreen } from './screen/test';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      backgroundColor: 'blue',
      // padding: 5,
      flex: 1
    }}>

      <ScrollView>
        <HomeScreen />
        {/* <StatusBar style="auto" /> */}
      </ScrollView>
    </View>
  );
}