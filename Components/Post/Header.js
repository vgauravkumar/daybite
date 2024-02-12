import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const PostHeader = ({ data, flex }) => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                // height: '10%',
                flex: flex,
                borderWidth: 0.5,
                width: '100%',
                padding: 10,
                // backgroundColor: "lightgreen",
                position: 'relative'
            }}
        >
            {/* <Text style={{ flex: 1, borderWidth: 0.5, margin: 5 }}>{"DP"}</Text> */}
            <Image source={{ uri: `https://images.unsplash.com/photo-1544435253-f0ead49638fa` }} style={{
                width: 35,
                height: 35,
                position: 'absolute',
                left: 10,
                // margin: 5,
                borderRadius: 100
            }} />
            <View style={{ borderWidth: 0.5, position: 'absolute', left: 55 }}>
                <Text style={{ fontSize: 15, color: 'black' }}>{data.user_name}</Text>
                <Text style={{ fontSize: 12.5, color: 'black' }}>{data.area_name}</Text>
            </View>
            <View style={{ borderWidth: 0.5, position: 'absolute', right: 10 }}>
                <AntDesign name="ellipsis1" size={24} color="black" />
            </View>

        </View>
    )
};

module.exports = {
    PostHeader
};