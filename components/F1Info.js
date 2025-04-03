import React from "react";
import { View, ScrollView, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1',
    title: 'GP da Austrália',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Albert_Park_Circuit_2021.svg/1200px-Albert_Park_Circuit_2021.svg.png',
    text: ["• Cidade: Melbourne", "• Data: 16/03/25 - 01:00 BRT (UTC-3)", "• Circuito: Circuito de Albert Park."],
  },
  {
    id: '2',
    title: 'GP da China',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Shanghai_International_Racing_Circuit_track_map.svg/375px-Shanghai_International_Racing_Circuit_track_map.svg.png',
    text: ["• Cidade: Xangai", "• Data: 23/03/25 - 04:00 BRT (UTC-3)", "• Circuito: Circuito Internacional de Xangai."],
    description: ['oine']
  },
  {
    id: '3',
    title: 'GP do Japão',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Suzuka_circuit_map--2005.svg/1200px-Suzuka_circuit_map--2005.svg.png',
    text: ["• Cidade: Suzuka", "• Data: 06/04/25 - 02:00 BRT (UTC-3)", "• Circuito: Suzuka International Racing Course."],
  },
  {
    id: '4',
    title: 'GP do Bahrein',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Bahrain_International_Circuit--Grand_Prix_Layout.svg/375px-Bahrain_International_Circuit--Grand_Prix_Layout.svg.png',
    text: ["• Cidade: Sakhir", "• Data: 13/04/25 - 12:00 BRT (UTC-3)", "• Circuito: Bahrain International Circuit."],
  },
  {
    id: '5',
    title: 'GP da Arábia Saudita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Jeddah_Street_Circuit_2021.svg/375px-Jeddah_Street_Circuit_2021.svg.png',
    text: ["• Cidade: Jeddah", "• Data: 20/04/25 - 14:00 BRT (UTC-3)", "• Circuito: Jeddah Corniche Circuit."],
  },
  {
    id: '6',
    title: 'GP de Miami',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Hard_Rock_Stadium_Circuit_2022.svg/450px-Hard_Rock_Stadium_Circuit_2022.svg.png',
    text: ["• Cidade: Miami", "• Data: 04/05/25 - 17:00 BRT (UTC-3)", "• Circuito: Miami International Autodrome."],
  },
  {
    id: '7',
    title: 'GP da Emília-Romagna',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Imola_2009.svg/375px-Imola_2009.svg.png',
    text: ["• Cidade: Ímola", "• Data: 18/05/25 - 10:00 BRT (UTC-3)", "• Circuito: Autodromo Enzo e Dino Ferrari."],
  },
  {
    id: '8',
    title: 'GP de Mônaco',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Monte_Carlo_Formula_1_track_map.svg/375px-Monte_Carlo_Formula_1_track_map.svg.png',
    text: ["• Cidade: Monte Carlo", "• Data: 25/05/25 - 10:00 BRT (UTC-3)", "• Circuito: Circuit de Monaco."],
  },
  {
    id: '9',
    title: 'GP da Espanha',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Circuit_de_Catalunya_moto_2021.svg/375px-Circuit_de_Catalunya_moto_2021.svg.png',
    text: ["• Cidade: Barcelona", "• Data: 01/06/25 - 10:00 BRT (UTC-3)", "• Circuito: Circuit de Barcelona-Catalunya."],
  },
  {
    id: '10',
    title: 'GP do Canadá',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Circuit_Gilles_Villeneuve.svg/375px-Circuit_Gilles_Villeneuve.svg.png',
    text: ["• Cidade: Montreal", "• Data: 15/06/25 - 15:00 BRT (UTC-3)", "• Circuito: Circuit Gilles Villeneuve."],
  },
  {
    id: '11',
    title: 'GP da Áustria',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Circuit_Red_Bull_Ring.svg/375px-Circuit_Red_Bull_Ring.svg.png',
    text: ["• Cidade: Spielberg", "• Data: 29/06/25 - 10:00 BRT (UTC-3)", "• Circuito: Red Bull Ring."],
  },
  {
    id: '12',
    title: 'GP da Grã-Bretanha',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Silverstone_Circuit_2011.png/375px-Silverstone_Circuit_2011.png',
    text: ["• Cidade: Silverstone", "• Data: 06/07/25 - 11:00 BRT (UTC-3)", "• Circuito: Silverstone Circuit."],
  },
  {
    id: '13',
    title: 'GP da Bélgica',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Spa-Francorchamps_of_Belgium.svg/375px-Spa-Francorchamps_of_Belgium.svg.png',
    text: ["• Cidade: Budapeste", "• Data: 27/07/25 - 10:00 BRT (UTC-3)", "• Circuito: Circuit de Spa-Francorchamps."],
  },
  {
    id: '14',
    title: 'GP da Hungria',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Hungaroring.svg/375px-Hungaroring.svg.png',
    text: ["• Cidade: Mogyorod", "• Data: 03/08/25 - 10:00 BRT (UTC-3)", "• Circuito: Hungaroring."],
  },
  {
    id: '15',
    title: 'GP da Holanda',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Zandvoort_Circuit.png/1024px-Zandvoort_Circuit.png',
    text: ["• Cidade: Zandvoort,", "• Data: 31/08/25 - 10:00 BRT (UTC-3)", "• Circuito: Circuit Zandvoort."],
  },
  {
    id: '16',
    title: 'GP da Itália',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Monza_track_map.svg/1024px-Monza_track_map.svg.png',
    text: ["• Cidade: Monza", "• Data: 07/09/25 - 10:00 BRT (UTC-3)", "• Circuito: Autodromo Nazionale Monza."],
  },
  {
    id: '17',
    title: 'GP do Azerbaijão',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Baku_Formula_One_circuit_map.svg/500px-Baku_Formula_One_circuit_map.svg.png',
    text: ["• Cidade: Baku", "• Data: 21/09/25 - 08:00 BRT (UTC-3)", "• Circuito: Circuito Urbano de Baku."],
  },
  {
    id: '18',
    title: 'GP de Singapura',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Marina_Bay_circuit_2023.svg/375px-Marina_Bay_circuit_2023.svg.png',
    text: ["• Cidade: Singapura", "• Data: 05/10/25 - 09:00 BRT (UTC-3)", "• Circuito: Circuito Urbano de Marina Bay."],
  },
  {
    id: '19',
    title: 'GP dos Estados Unidos',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Austin_circuit.svg/375px-Austin_circuit.svg.png',
    text: ["• Cidade: Austin", "• Data: 19/10/25 - 16:00 BRT (UTC-3)", "• Circuito: Circuito das Américas."],
  },
  {
    id: '20',
    title: 'GP do México',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez_2015.svg/375px-Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez_2015.svg.png',
    text: ["• Cidade: Ciudad del México", "• Data: 26/10/25 - 17:00 BRT (UTC-3)", "• Circuito: Autódromo Hermanos Rodríguez."],
  },
  {
    id: '21',
    title: 'GP do Brasil',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace_%28AKA_Interlagos%29_track_map.svg/1200px-Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace_%28AKA_Interlagos%29_track_map.svg.png',
    text: ["• Cidade: São Paulo", "• Data: 09/11/25 - 17:00 BRT (UTC-3)", "• Circuito: Autódromo José Carlos Pace (Autódromo de Interlagos)."],
  },
  {
    id: '22',
    title: 'GP de Las Vegas',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Las_Vegas_Strip_Circuit_2023.png',
    text: ["• Cidade: Las Vegas", "• Data: 22/11/25 - 22:00 BRT (UTC-3)", "• Circuito: Circuito Urbano de Las Vegas."],
  },
  {
    id: '23',
    title: 'GP do Qatar',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Lusail_International_Circuit_2023.svg/1200px-Lusail_International_Circuit_2023.svg.png',
    text: ["• Cidade: Losail", "• Data: 30/11/25 - 13:00 BRT (UTC-3)", "• Circuito: Losail International Circuit."],
  },
  {
    id: '24',
    title: 'GP de Abu Dhabi',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Yas_Marina_Circuit.png/1200px-Yas_Marina_Circuit.png',
    text: ["• Cidade: Abu Dhabi", "• Data: 07/12/25 - 10:00 BRT (UTC-3)", "• Circuito: Yas Marina Circut."],
  },

];

const Item = ({ title, image, text }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    {image && <Image source={{ uri: image }} style={styles.image} />}
    {text && text.map((line, index) => <Text key={index} style={styles.text}>{line}</Text>)}
  </View>
);

const Card = ({ image, text, }) => (
  <View style={styles.card}>
    {image && <Image source={{ uri: image }} style={styles.source} />}
    {text && text.map((line, index) => <Text key={index} style={styles.title}>{line}</Text>)}
    {description && <Text style={styles.description}>{description}</Text>}
  </View>
);

const App = ({ navigation }) => (
  <SafeAreaProvider>
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerTitle}>Formula 1 Lively</Text>
        <Image style={styles.logoImage} source={{ uri: 'https://static.cdnlogo.com/logos/f/35/formula-1-8211-f1-thumb.png' }} />
        <Item
          title="Sobre Nós:"
          text={["Temos como objetivo te deixar atualizado sobre todos os dias, horários e locais de da Fórmula 1, sendo assim te mantendo atualizado e tendo todas as informações na palma da sua mão."]}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Grid")}
        >
          <Item title="GRID DE 2025" />
        </TouchableOpacity>

        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} image={item.image} text={item.text} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </ScrollView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:2,
  },
  headerTitle: {
    color: 'black',
    fontSize: 40,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 13,
    width: '95%',
    borderRadius: 0,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: 'red',
    borderWidth: 1,
  },
  title: {
    fontSize: 25,
    color: 'black',
    fontWeight: "700",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  logoImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 25,
    marginTop: 5,
    color: 'black',
    textAlign: 'left',
    fontWeight: '750',
  },
  description: {
    fontSize: 18,
    marginTop: 5,
    color: 'black',
    textAlign: 'left',
  },
  card: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 13,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
});

export default App;
