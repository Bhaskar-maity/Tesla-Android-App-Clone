import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = () => {
   return (
      <View style={styles.container}>
         <Pressable
            style={styles.button}
            onPress={() => {
               console.warn("clicked");
            }}
         >
            <Text style={styles.text}>tap</Text>
         </Pressable>
      </View>
   );
};

export default StyledButton;
