import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

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

         <StyledButton
            type="primary"
            content={"Custom Order"}
            onPress={() => {
               console.warn("Custom Order was pressed");
            }}
         />

         <StyledButton
            type="secondary"
            content={"Existing Inventory"}
            onPress={() => {
               console.warn("Existing Inventory was pressed");
            }}
         />
      </View>
   );
};

export default CarItem;
