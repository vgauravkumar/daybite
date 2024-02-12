import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const PostContent = ({ data, flex }) => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                // height: '70%',
                flex: flex,
                borderWidth: 0.5,
                width: '100%',
                // padding: 10,
                position: 'relative'
            }}
        >
            {/* <Text style={{ flex: 1, borderWidth: 0.5, margin: 5 }}>{"DP"}</Text> */}
            <Image source={{ uri: `https://images.unsplash.com/photo-1581139196946-6c4f026acaa0` }} style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                // left: 10,
                // margin: 5,
                // borderRadius: 100
            }} />

        </View>
    )
};

module.exports = {
    PostContent
};