
import { Text, View } from 'react-native';

const StatusBar = () => {
    return (
        <View
            style={{
                // flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'green',
                height: 100
            }}>
            <Text>THIS IS THE TEXT</Text>
        </View>
    )
};

module.exports = {
    StatusBar
};