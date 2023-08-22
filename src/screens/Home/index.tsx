import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";
import { useState } from "react";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState<string>('')

  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome!")
    }
    setParticipants((state) => [participantName, ...state])

    setParticipantName("")
  }

  function handleParticipantRemove(name: string) {
    
    
    Alert.alert("Remover Participante", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants((state) => state.filter(participant => participant !== name))
          
          Alert.alert("Deletado!", `O participante ${name} foi deletado!`)
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ] )
  }

  return (
    <View  style={styles.container}>
      <Text style={styles.title}>
        Nome do Evento
      </Text>

      <Text style={styles.subtitle}>
        Segunda, 21 de Agosto de 2023.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor='#6B6B6B'
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant 
              key={item} 
              name={item} 
              onRemove={handleParticipantRemove} 
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença!
          </Text>
        )}
      />
    </View>
  )
}