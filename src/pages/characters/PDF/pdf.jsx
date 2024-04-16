import React from "react";
import { PDFViewer, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { useRouter } from "next/router";

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
        padding: 20
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Define a custom PDF component to render character details
const CharacterPDF = ({ character }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Name: {character.name}</Text>
                <Text>Nickname: {character.nickname}</Text>
                <Text>Title: {character.title}</Text>
                <Text>Age: {character.age}</Text>
                <Text>Affiliation: {character.affiliation}</Text>
                <Text>Job: {character.job}</Text>
                <Text>Force Sensitive: {character.forceSensitive ? "Yes" : "No"}</Text>
                <Text>Species: {character.species}</Text>
                <Text>Homeworld: {character.homeWorld}</Text>
                <Text>Weapon: {character.weapon}</Text>
                <Text>Allignment: {character.allignment}</Text>
                <Text>Backstory: {character.backstory}</Text>
            </View>
        </Page>
    </Document>
);

// Main Character component
const Character = () => {
    const router = useRouter();
    const character = router.query.character;
    const parsedCharacter = character ? JSON.parse(character) : null;

    const handleDownload = () => {
        if (parsedCharacter) {
            const pdf = (
                <PDFViewer width="1000" height="600">
                    <CharacterPDF character={parsedCharacter} />
                </PDFViewer>
            );

            const blob = new Blob([pdf], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "character_details.pdf";
            link.click();
        }
    };

    return (
        <div className="bg-black min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto overflow-hidden rounded-lg shadow-xl bg-white">
                <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 sm:col-span-2">Character Details</h3>
                    <button onClick={handleDownload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download PDF</button>
                </div>
            </div>
        </div>
    );
};

export default Character;
