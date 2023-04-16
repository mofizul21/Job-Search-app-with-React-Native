import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Linking } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
    Nearbyjobs,
    Popularjobs,
    ScreenHeaderBtn,
    Welcome,
} from "../components";

const Home = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                    ),
                    headerTitle: "",
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}
                >
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${ searchTerm }`)
                            }
                        }}
                    />

                    <Popularjobs />
                    <Nearbyjobs />

                    <View style={{ display: "flex", flexDirection: "row", flex: 1, flexWrap: 'wrap', margin: 20 }}>
                        <Text>The job search app created by </Text>
                        <Text style={{ color: 'blue' }}
                            onPress={() => Linking.openURL('https://mofizul.xyz')}>
                            Mofizul Islam
                        </Text>
                        <Text>.</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;