import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = () => {
   return (
      <View>
         <Pressable style={styles.button} onPress={console.warn("clicked")}>
            <Text>tap</Text>
         </Pressable>
      </View>
   );
};

export default StyledButton;
