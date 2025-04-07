import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { SafeAreaView } from 'react-native-safe-area-context';


const FaArea = ({navigation}) => {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    email: '',
    pais: '',
    equipe: '',
    champ: '',
    frequencia: 5 ,
    acompanha: 5,
    temporada: false,
    watch: false,
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const limpar = () => {
    setFormData({
      nome: '',
      idade: '',
      email: '',
      pais: '',
      equipe: '',
      champ: '',
      frequencia: 5,
      acompanha: 5,
      temporada: false,
      watch: false,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Fã Area F1</Text>

        {['Nome', 'Idade', 'Email', 'País'].map((placeholder, index) => (
          <TextInput
            key={index}
            placeholder={placeholder}
            value={formData[placeholder.toLowerCase()]}
            onChangeText={(value) => handleChange(placeholder.toLowerCase(), value)}
            style={styles.input}
            keyboardType={placeholder === 'Idade' ? 'numeric' : 'default'}
          />
        ))}

        <Text style={styles.label}>Qual sua equipe preferida:</Text>
        <Picker
          selectedValue={formData.equipe}
          onValueChange={(value) => handleChange('equipe', value)}
          style={styles.picker}
        >
          {['Mercedes', 'Ferrari', 'Red Bull', 'Mclaren', 'Aston Martin', 'Kick Sauber', 'Racing Bulls', 'Alpine', 'Haas', 'Williams'].map((team) => (
            <Picker.Item key={team} label={team} value={team} />
          ))}
        </Picker>

        <Text style={styles.label}>Quantos títulos a equipe tem:</Text>
        <Picker
          selectedValue={formData.champ}
          onValueChange={(value) => handleChange('champ', value)}
          style={styles.picker}
        >
          {Array.from({ length: 16 }, (_, i) => i + 1).map((num) => (
            <Picker.Item key={num} label={num.toString()} value={num.toString()} />
          ))}
        </Picker>

        <Text style={styles.label}> Com que frequencia assiste as corridas? {formData.frequencia.toFixed(1)}</Text>
        <Slider
          minimumValue={0}
          maximumValue={5}
          step={0.1}
          value={formData.frequencia}
          onValueChange={(value) => handleChange('frequencia', value)}
        />

        <Text style={styles.label}>Há quantos anos acompanha F1? {formData.acompanha.toFixed(1)}</Text>
        <Slider
          minimumValue={0}
          maximumValue={75}
          step={0.1}
          value={formData.acompanha}
          onValueChange={(value) => handleChange('acompanha', value)}
        />

        {[
          { label: 'Está gostando da temporada de 2025?', key: 'temporada' },
          { label: 'Já assistiu algum GP no Autódromo?', key: 'watch' },
        ].map(({ label, key }) => (
          <View key={key} style={styles.switchRow}>
            <Text>{label}</Text>
            <Switch value={formData[key]} onValueChange={(value) => handleChange(key, value)} />
          </View>
        ))}

        <View style={styles.buttonRow}>
          <Button title="Salvar" onPress={() => alert('Obrigado por responder!')} />
          <Button title="Limpar" onPress={limpar} color="red" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
    fontWeight: 'bold',
    
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  picker: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom:20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopEndRadius:20,
    borderBottomLeftRadius:20,
    borderWidth: 2,
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: 'red',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    color: 'black',
    fontWeight: 'bold',
    
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});


export default FaArea;