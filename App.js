import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
   return (
      <View style={styles.container}>
         <View style={styles.carContainer}>
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
   title: {},
   subtitle: {},
});
