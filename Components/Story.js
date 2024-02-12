
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
                <Image source={{ uri: `https://images.unsplash.com/photo-1544435253-f0ead49638fa` }} style={{
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