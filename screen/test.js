import { StyleSheet, Text, View } from 'react-native';
import { Banner } from '../SubScreens/Banner'
import { StatusBar } from '../SubScreens/StatusBar';
import { FeedArea } from '../SubScreens/FeedArea';

const HomeScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'lightblue',
            padding: 15
        }}>
            <Banner />
            <StatusBar />
            <FeedArea />

        </View>

    );
};


module.exports = {
    HomeScreen
}