import { Text, View } from 'react-native';
import { PostHeader } from '../Components/Post/Header';

const PostTemplate = ({ data, index }) => {
    return (
        // <Text>HEHEHEHE</Text>
        <View style={{
            backgroundColor: 'white',
            borderBlockColor: 'black',
            // padding: 2,
            // margin: 2,
            // justifyContent: 'center',
            alignItems: 'center',
            height: 500,
            width: "100%",
            borderColor: "black",
            borderWidth: 0.5
        }} key={{ index }}>
            <PostHeader data={data} />
            {/* Picture */}
            {/* PostFooter */}
            <Text>likes: {data.likes}</Text>
            <Text>post_genesis: {data.post_genesis}</Text>
            <Text>pinned_comment: {data.pinned_comment}</Text>
            <Text>Index: {index}</Text>
        </View>
    )
};

module.exports = {
    PostTemplate
};