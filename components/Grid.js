import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet, FlatList, ScrollView } from "react-native";



// O componente recebe a propriedade `route`, que contém os parâmetros passados pela navegação.
const Grid = ({ route }) => {
    // Extraindo o objeto 'producer' passado via navegação

    const drivers = [
        {
            id: "1",
            Equipe: "Scuderia Ferrari HP",
            image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/ferrari",
            Pilotos: ["Lewis Hamilton #44", "Charles Leclerc #16"],
        },
        {
            id: "2",
            Equipe: "Mclaren F1 Team",
            image: "https://brandlogos.net/wp-content/uploads/2022/04/mclaren_formula_1_team-logo-brandlogos.net_.png",
            Pilotos: ["Lando Norris #4  ", "Oscar Piastri #81"],
        },
        {
            id: "3",
            Equipe: "Mercedes-AMG Petronas Formula One Team",
            image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/mercedes",
            Pilotos: ["George Russel #63", "Kimi Antonelli #12"],
        },
        {
            id: "4",
            Equipe: "Red Bull Racing",
            image: "https://brandlogo.org/wp-content/uploads/2024/04/Oracle-Red-Bull-Racing-Logo-300x300.png.webp",
            Pilotos: ["Max Verstappen #1", "Yuki Tsunoda #22"],
        },
        {
            id: "5",
            Equipe: "Aston Martin Aramco Formula One Team",
            image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/aston%20martin",
            Pilotos: ["Fernando Alonso #14", "Lance Stroll #18"],
        },
        {
            id: "6",
            Equipe: "Stake F1 Team Kick Sauber",
            image: "https://www.sportmonks.com/wp-content/uploads/2024/03/kick-sauber-team-logo.png",
            Pilotos: ["Gabriel Bortoleto #5", "Nico Hulkenberg #27"],
        },
        {
            id: "7",
            Equipe: "Visa Cash App Racing Bulls Formula One Team",
            image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/fom-website/2018-redesign-assets/team%20logos/racing%20bulls",
            Pilotos: ["Isack Hadjar #6", "Liam Lawson #30"],
        },
        {
            id: "8",
            Equipe: "MoneyGram Haas F1 Team",
            image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/haas",
            Pilotos: ["Esteban Ocon #31", "Oliver Bearman #87"],
        },
        {
            id: "9",
            Equipe: "BWT Alpine F1 Team",
            image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/alpine",
            Pilotos: ["Jack Doohan #7", "Pierre Gasly #10"],
        },
        {
            id: "10",
            Equipe: "Willians Racing",
            image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/williams",
            Pilotos: ["Carlos Sainz #55", "Alexander Albon #23"],
        },
    ];

    // Componente para renderizar cada item da lista de produções
    const DriversItem = ({ equipe, image, pilotos }) => (
        <View style={styles.item}>
            <Image source={{ uri: image }} style={styles.itemImage} />
            <View style={styles.infoContainer}>
                <Text style={styles.itemTitle}>{equipe}</Text>
                {pilotos.map((piloto, index) => (
                    <Text key={index} style={styles.itemText}>• {piloto}</Text>
                ))}
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* ScrollView para permitir rolagem da tela */}
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>


                <View style={styles.card}>
                    <Text style={styles.info}>
                        O Campeonato Mundial de Fórmula 1 é a principal competição de automobilismo do mundo, com uma rica história e tradição.{"\n"}
                        A temporada de 2025 promete ser emocionante, com equipes e pilotos de alto nível competindo em circuitos icônicos ao redor do mundo.{"\n"}
                        A Fórmula 1 é conhecida por sua tecnologia avançada, velocidade e rivalidades intensas entre equipes e pilotos.{"\n"}
                        A temporada de 2025 contará com novas regras e inovações, tornando-a ainda mais competitiva e emocionante. {"\n"} Veja abaixo as equipes e pilotos que farão parte desta temporada:
                    </Text>
                </View>

                <Text style={styles.gridTitle}>Equipes e Pilotos</Text>

                {/* FlatList para exibir as equipes e pilotos */}
                <FlatList
                    data={drivers} // Lista de equipes e pilotos
                    renderItem={({ item }) => <DriversItem equipe={item.Equipe} image={item.image} pilotos={item.Pilotos} />}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatListContainer}
                    nestedScrollEnabled={true} // Permite rolagem dentro do ScrollView
                />
            </ScrollView>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
    scrollContainer: {
        alignItems: "center",
        padding: 20,
    },
    image: {
        marginTop: 20,
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    equipe: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#FFF",
    },
    card: {
        backgroundColor: "white",
        padding: 25,
        borderRadius: 32,
        alignItems: "center",
        marginBottom: 20,
        width: 320,
        borderRadius: 0,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 1,
        borderColor: "red",
    },
    info: {
        fontSize: 20,
        color: "black",
        fontWeight: "400",
        marginBottom: 10,
    },
    Pilotos: {
        fontSize: 14,
        color: "#FFF",
        marginTop: 5,
        marginBottom: 20,
    },
    gridTitle: {
        color: "Black",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        textTransform: "uppercase",
    },
    flatListContainer: {
        paddingBottom: 20,
    },
    item: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        alignItems: "center",
        width: 350,
        elevation: 5,
        color: "black",
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 1,
        borderColor: "red",
    },
    itemImage: {
        width: 130  ,
        height: 65,
        marginRight: 20,
    },
    infoContainer: {
        flex: 23,
    },
    itemTitle: {
        fontSize: 22,
        color: "black",
        fontWeight: "bold",
    },
    itemText: {
        fontSize: 18,
        color: "black",
    },
});

export default Grid;