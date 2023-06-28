import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

import Article from "../components/Article";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [articles, setArticles] = useState();
  async function getNews() {
    try {
      const { data } = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd4d21aa47a3477f9e8ed0057f2c9158"
      );
      setArticles(data.articles);
    } catch (error) {
      console.error(error);
    }
  }

  // fires when we first open the app. That is why empty dependency array. As and when state changes this function is called.
  useEffect(() => {
    getNews();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
});
