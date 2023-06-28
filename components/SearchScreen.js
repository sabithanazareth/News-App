import react from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SearchBar from "./SearchBar";
import Article from "./Article";
import axios from "axios";
import { useState } from "react";

const SearchScreen = () => {
  const [search, setSearch] = useState();
  const [articles, setArticles] = useState();

  const searchArticle = async () => {
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=dd4d21aa47a3477f9e8ed0057f2c9158&q=${search}`
      );
      setArticles(data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        search={search}
        setSearch={setSearch}
        onSubmit={searchArticle}
      />
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Article
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
            url={item.url}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
