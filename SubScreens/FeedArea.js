import { ScrollView, Text, View } from 'react-native';
import { PostTemplate } from './Post';

const data = [
    {
        user_name: "Thomas Jampson",
        dish_name: "Egg omlet",
        likes: 1,
        post_genesis: 1691937616000,
        pinned_comment: "Recipie: Egg!",
    },
    {
        user_name: "Thomas Jampson",
        dish_name: "Egg omlet",
        likes: 2,
        post_genesis: 1691939616000,
        pinned_comment: "Recipie: Egg!",
    },
    {
        user_name: "Thomas Jampson",
        dish_name: "Egg omlet",
        likes: 2,
        post_genesis: 1691939616000,
        pinned_comment: "Recipie: Egg!",
    },
    {
        user_name: "Thomas Jampson",
        dish_name: "Egg omlet",
        likes: 2,
        post_genesis: 1691939616000,
        pinned_comment: "Recipie: Egg!",
    },
    {
        user_name: "Thomas Jampson",
        dish_name: "Egg omlet",
        likes: 2,
        post_genesis: 1691939616000,
        pinned_comment: "Recipie: Egg!",
    },
    {
        user_name: "Thomas Jampson",
        dish_name: "Egg omlet",
        likes: 2,
        post_genesis: 1691939616000,
        pinned_comment: "Recipie: Egg!",
    },
    {
        user_name: "Thomas Jampson",
        dish_name: "Egg omlet",
        likes: 2,
        post_genesis: 1691939616000,
        pinned_comment: "Recipie: Egg!",
    },
    {
        user_name: "Thomas Jampson",
        dish_name: "Egg omlet",
        likes: 2,
        post_genesis: 1691939616000,
        pinned_comment: "Recipie: Egg!",
    },
    {
        user_name: "Thomas Jampson",
        dish_name: "Egg omlet",
        likes: 2,
        post_genesis: 1691939616000,
        pinned_comment: "Recipie: Egg!",
    },
    {
        user_name: "Thomas Jampson",
        dish_name: "Egg omlet",
        likes: 2,
        post_genesis: 1691939616000,
        pinned_comment: "Recipie: Egg!",
    },
    {
        user_name: "Thomas Jampson",
        dish_name: "Egg omlet",
        likes: 2,
        post_genesis: 1691939616000,
        pinned_comment: "Recipie: Egg!",
    },
    {
        user_name: "Thomas Jampson",
        dish_name: "Egg omlet",
        likes: 2,
        post_genesis: 1691939616000,
        pinned_comment: "Recipie: Egg!",
    },
    {
        user_name: "Thomas Jampson",
        dish_name: "Egg omlet",
        likes: 2,
        post_genesis: 1691939616000,
        pinned_comment: "Recipie: Egg!",
    },
    {
        user_name: "Thomas Jampson",
        dish_name: "Egg omlet",
        likes: 2,
        post_genesis: 1691939616000,
        pinned_comment: "Recipie: Egg!",
    },
    {
        user_name: "Thomas Jampson",
        dish_name: "Egg omlet",
        likes: 2,
        post_genesis: 1691939616000,
        pinned_comment: "Recipie: Egg!",
    },
    {
        user_name: "Thomas Jampson",
        dish_name: "Egg omlet",
        likes: 2,
        post_genesis: 1691939616000,
        pinned_comment: "Recipie: Egg!",
    }
]

const FeedArea = () => {
    return (
        <View
            style={{
                flex: 8,
                // justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightgreen',
            }}
        >
            {data.map((d, i) => <PostTemplate data={d} />)}
        </View>
    )
};

module.exports = {
    FeedArea
};