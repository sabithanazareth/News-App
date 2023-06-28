import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import moment from "moment/moment";
import * as WebBrowser from "expo-web-browser";

const Article = (props) => {
  const getSource = async () => {
    WebBrowser.openBrowserAsync(props.url);
  };
  return (
    <Pressable style={styles.container} onPress={getSource}>
      <Image
        style={styles.image}
        source={{
          uri: props.urlToImage,
        }}
      />
      <View
        style={{
          padding: 20,
        }}
      >
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {props.description}
        </Text>
        <View style={styles.data}>
          <Text style={styles.heading}>
            by :{" "}
            <Text style={styles.author}>
              {props.author?.slice(0, 20)}
              {props.author?.length > 20 ? "..." : ""}
            </Text>
          </Text>
          <Text style={styles.date}>
            {moment(props.publishedAt).format("MMM Do YY")}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text>
            source: <Text style={styles.source}>{props.sourceName}</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 40,
    shadowOpacity: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: "#fff",
    marginTop: 20,
  },
  image: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  heading: {
    fontWeight: "400",
  },
  author: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#e63946",
  },
  date: {
    fontWeight: "bold",
    color: "#e63946",
    fontSize: 15,
  },
  source: {
    fontWeight: "bold",
    color: "#0077b6",
    fontSize: 15,
  },
});
