import { Text, View } from 'react-native';
import { PostHeader } from '../Components/Post/Header';
import { PostContent } from '../Components/Post/Content';
import { PostFooter } from '../Components/Post/Footer';

const PostTemplate = ({ data, index }) => {
    return (
        // <Text>HEHEHEHE</Text>
        <View style={{
            backgroundColor: 'white',
            borderBlockColor: 'black',
            padding: 2,
            // backgroundColor: 'green',
            flexDirection: 'column',
            // margin: 2,
            // justifyContent: 'center',
            alignItems: 'center',
            height: 500,
            width: "100%",
            borderColor: "black",
            borderWidth: 0.5
        }} key={{ index }}>
            <PostHeader data={data} flex={0.85}/>
            <PostContent flex={8}/>
            <PostFooter data={data} flex={1.75} />
            
        </View>
    )
};

module.exports = {
    PostTemplate
};