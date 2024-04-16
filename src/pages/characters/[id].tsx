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
const CharacterPDF = ({ character }: { character: any }) => (
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

const Character = () => {
    const router = useRouter();
    const character: string | null | undefined = router.query.character as string | null | undefined;
    const parsedCharacter = character ? JSON.parse(character) : null;

    const handleDownload = () => {
        if (parsedCharacter) {
            const pdf = (
                <Document>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.section}>
                            <Text>Name: {parsedCharacter.name}</Text>
                            <Text>Nickname: {parsedCharacter.nickname}</Text>
                            <Text>Title: {parsedCharacter.title}</Text>
                            <Text>Age: {parsedCharacter.age}</Text>
                            <Text>Affiliation: {parsedCharacter.affiliation}</Text>
                            <Text>Job: {parsedCharacter.job}</Text>
                            <Text>Force Sensitive: {parsedCharacter.forceSensitive ? "Yes" : "No"}</Text>
                            <Text>Species: {parsedCharacter.species}</Text>
                            <Text>Homeworld: {parsedCharacter.homeWorld}</Text>
                            <Text>Weapon: {parsedCharacter.weapon}</Text>
                            <Text>Allignment: {parsedCharacter.allignment}</Text>
                            <Text>Backstory: {parsedCharacter.backstory}</Text>
                        </View>
                    </Page>
                </Document>
            );

            // Render PDF content to string
            const pdfString = pdf.toString();

            // Create blob with PDF content
            const blob = new Blob([pdfString], { type: "application/pdf" });

            // Create object URL from blob
            const url = URL.createObjectURL(blob);

            // Create a link element to trigger download
            const link = document.createElement("a");
            link.href = url;
            link.download = `character_${parsedCharacter.name}.pdf`;
            link.click();
        }
    };

    return (
        <div className="bg-black min-h-screen py-8 px-4 sm:px-6 lg:px-8 p-1">
            {parsedCharacter && (
                <div className="max-w-7xl mx-auto overflow-hidden rounded-lg shadow-xl bg-white">
                    <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 sm:col-span-2">Character Details</h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{parsedCharacter.name}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Nickname</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{parsedCharacter.nickname}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">title</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{parsedCharacter.title}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">age</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{parsedCharacter.age}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Affiliation</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{parsedCharacter.affiliation}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Job</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{parsedCharacter.job}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Force Sensitive</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{parsedCharacter.forceSensitive ? "Yes" : "No"}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Species</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{parsedCharacter.species}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Homeworld</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{parsedCharacter.homeWorld}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Weapon</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{parsedCharacter.weapon}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Allignment</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{parsedCharacter.allignment}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Backstory</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{parsedCharacter.backstory}</dd>
                            </div>
                        </dl>
                    </div>
                    <button onClick={handleDownload} className="bg-gray-800 text-white p-2 rounded-md">Download PDF
                    </button>
                </div>
            )}
        </div>
    );
}

export default Character;
