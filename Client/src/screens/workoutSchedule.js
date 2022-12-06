import React from 'react'
import {View, ScrollView, StyleSheet, Text } from 'react-native'
import { Input, Divider, useTheme } from '@rneui/themed';

const workoutSchedule = (props) => {
    return <>
        <ScrollView>
            <View style={styles.contentView}>
                <Text style={styles.subHeader}>Create Schedule:</Text>
                <Divider width={1} inset={true} insetType="middle" />
                <View style={{ alignItems: 'center' }}>
                    <Input
                        placeholder='Enter your schedule here:'
                        inputContainerStyle={{ paddingBottom: 200 }}
                        containerStyle={{ marginTop: 50 }}
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

export default workoutSchedule;