import React from 'react'
import {View, ScrollView, StyleSheet, Text, Button} from 'react-native'
import { Chip, Divider, useTheme, Input } from '@rneui/themed';

const workoutScreen = (props) => {
    return <>
        <ScrollView>
            <View style={styles.contentView}>
                <Text style={styles.subHeader}>Workouts:</Text>
                <Divider width={1} insetType="middle" />
                <View style={{ alignItems: 'center' }}>
                    <Chip title="Exercises" 
                        titleStyle={{ fontWeight: 'bold', fontSize: 40 }} 
                        containerStyle={{ marginVertical: 50 }}
                        onPress={() => {props.navigation.navigate("Exercises")}} 
                    />
                    <Chip title="Schedule" 
                        titleStyle={{ fontWeight: 'bold', fontSize: 40 }} 
                        containerStyle={{ marginVertical: 50 }} 
                        onPress={() => {props.navigation.navigate("Schedule")}}
                    />
                    <Chip title="Notes" 
                        titleStyle={{ fontWeight: 'bold', fontSize: 40 }} 
                        containerStyle={{ marginVertical: 50 }} 
                        onPress={() => {props.navigation.navigate("Notes")}}
                    />
                </View>
            </View>
        </ScrollView>
    </>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        alignItems: 'center',
    },
    contentView: {
        flex: 1,
        marginTop: 0,
    },
    subHeader: {
        color : "black",
        textAlign : 'left',
        fontWeight : '300',
        fontSize: 50,
        paddingVertical : 5,
        marginBottom : 10,
        marginLeft : 10,
      },
});

export default workoutScreen;