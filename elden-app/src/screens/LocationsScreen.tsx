import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { getLocations, API_BASE_URL } from '../api/client';
import EldenCard from '../components/EldenCard';
import { Colors, Spacing } from '../components/Theme';
import { Location } from '../types';

const LocationsScreen = () => {
    const [data, setData] = useState<Location[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getLocations()
            .then(res => setData(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return (
        <View style={styles.center}>
            <ActivityIndicator size="large" color={Colors.primary} />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => (
                    <EldenCard
                        index={index}
                        title={item.name}
                        subtitle={item.region}
                        description={item.description}
                        imageUrl={item.imageUrl ? `${API_BASE_URL}${item.imageUrl}` : undefined}
                    />
                )}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    list: { padding: Spacing.md },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.background }
});

export default LocationsScreen;
