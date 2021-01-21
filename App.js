import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function App() {
   return (
      <View style={styles.container}>
         <View style={styles.carContainer}>
            <ImageBackground
               style={styles.image}
               source={require("./assets/images/ModelS.jpeg")}
            />

            <View style={styles.titles}>
               <Text style={styles.title}>Model S</Text>
               <Text style={styles.subtitle}>Starting at $89000</Text>
            </View>
         </View>

         <StatusBar style="auto" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },

   carContainer: {
      width: "100%",
      height: "100%",
   },

   titles: {
      marginTop: "30%",
      alignItems: "center",
   },
   title: {
      fontSize: 40,
      fontWeight: "600",
   },
   subtitle: {
      fontSize: 17,
      color: "black",
   },
   image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
   },
});
