import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from '../SubScreens/StatusBar';
import { FeedArea } from '../SubScreens/FeedArea';

const HomeScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'lightblue',
            padding: 5
        }}>
            <StatusBar />
            <FeedArea />

        </View>

    );
};


module.exports = {
    HomeScreen
}