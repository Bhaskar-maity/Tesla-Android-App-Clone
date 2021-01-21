import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

const CarItem = () => {
   return (
      <View style={styles.carContainer}>
         <ImageBackground
            style={styles.image}
            source={require("../../assets/images/ModelS.jpeg")}
         />

         <View style={styles.titles}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subtitle}>Starting at $89000</Text>
         </View>
      </View>
   );
};

export default CarItem;
