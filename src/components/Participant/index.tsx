import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ParticipantProps {
  name: string
  onRemove: (name: string) => void
}

export default function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>

      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={() => onRemove(name)}>
          <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
    </View>
  )
}