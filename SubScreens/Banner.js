
import { Text, View } from 'react-native';

const Banner = () => {
    return (
        <View
            style={{
                // flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                height: 40,
                borderWidth: 0.5,
                // padding: 5,
                flexDirection: 'row',
                paddingHorizontal: 16
            }}>
            <Text style={{ flex: 5 }}>INSTAGRAM</Text>
            <Text style={{ flex: 1 }}>ICON</Text>
            <Text style={{ flex: 1 }}>ICON</Text>
            <Text style={{ flex: 1 }}>ICON</Text>
        </View>
    )
};

module.exports = {
    Banner
};