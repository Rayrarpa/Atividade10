import { useState } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';

export default function Ex04() {
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionar = () => {
    if (!texto.trim()) return;
    setTarefas([...tarefas, texto.trim()]); 
    setTexto('');
  };

  const remover = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  return (
    <View>
      <TextInput placeholder="Nova tarefa" value={texto} onChangeText={setTexto} />
      <Button title="Adicionar" onPress={adicionar} />
      <FlatList
        data={tarefas}
        scrollEnabled={false}
        keyExtractor={(_, i) => String(i)}
        renderItem={({ item, index }) => (
          <View>
            <Text>{item}</Text>
            <Button title="Remover" onPress={() => remover(index)} />
          </View>
        )}
      />
    </View>
  );
}
