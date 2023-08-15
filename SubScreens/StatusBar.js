
import { ScrollView, Text, View } from 'react-native';
import { Story } from '../Components/Story';

const StatusBar = () => {
    const images = ["A", "B", "C", "D", "E", "F"];
    return (
        <View
            style={{
                // flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                height: 100,
                // borderWidth: 0.5,
                flexDirection: 'row'
            }}>
            <ScrollView horizontal={true}>
                {images.map((x, i) => <Story image={x} index={i} />)}
            </ScrollView>

        </View>
    )
};

module.exports = {
    StatusBar
};