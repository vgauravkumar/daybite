import { Text, View, Image, StyleSheet } from 'react-native';
import { AntDesign, EvilIcons, Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const PostFooter = ({ data, flex }) => {
    return (
        <View
            style={{
                alignItems: 'left',
                // backgroundColor: 'red',
                height: '20%',
                borderWidth: 0.5,
                width: '100%',
                padding: 5,
                // height: '20%',
                flex: flex,
                position: 'relative',
                flexDirection: 'column'
            }}
        >
            <View style={styles.footerLike}>
                <AntDesign name="hearto" size={24} color="black" style={{ flex: 1, marginRight: 10, borderWidth: 0.5 }}/>
                {/* <AntDesign name="heart" size={24} color="red" style={{ flex: 1, marginRight: 10, borderWidth: 0.5 }} /> */}
                <FontAwesome name="comment-o" size={24} color="black" style={{ flex: 1, marginRight: 10, borderWidth: 0.5 }} />
                <FontAwesome name="send" size={24} color="black" style={{ flex: 1, marginRight: 10, borderWidth: 0.5 }} />
                <View style={{ flex: 8, marginRight: 10, borderWidth: 0.5 }} />
                <FontAwesome name="bookmark" size={24} color="black" style={{ flex: 0.75, marginRight: 0, borderWidth: 0.5, marginLeft: 5 }} />
                {/* <FontAwesome name="bookmark-o" size={24} color="black" style={{ flex: 1, marginRight: 10, borderWidth: 0.5 }} /> */}
            </View>
            <View style={styles.footerContent}>
                {/* <Text>likes: {data.likes}</Text>
                <Text>post_genesis: {data.post_genesis}</Text>
                <Text>pinned_comment: {data.pinned_comment}</Text> */}
            </View>
            <View style={styles.footerComments}>
                {/* <Text>likes: {data.likes}</Text>
                <Text>post_genesis: {data.post_genesis}</Text>
                <Text>pinned_comment: {data.pinned_comment}</Text> */}
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    footerLike: {
      flexDirection: 'row',
      backgroundColor: 'pink',
      flex: 2,
      borderWidth: 0.5,
      justifyContent: 'center',
      alignContent: 'center'
    },
    footerContent: {
        flex: 1,
        borderWidth: 0.5
    },
    footerComments: {
        flex: 2,
        borderWidth: 0.5
    }
  });

module.exports = {
    PostFooter
};