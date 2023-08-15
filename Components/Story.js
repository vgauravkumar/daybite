
import { Text, View, Image } from 'react-native';

const Story = ({ image, index }) => {
    return (
        <View key={index}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 95,
                width: 100,
                // borderWidth: 0.5
                // width: 2
            }}
        >
            {/* <Text>ALPH: {image}</Text> */}
            <View
                style={{
                    alignContent: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image source={{ uri: `https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg` }} style={{
                    width: 80,
                    height: 80,
                    borderRadius: 100
                }} />
            </View>
        </View>
    )
};

module.exports = {
    Story
};