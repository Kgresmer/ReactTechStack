import React, {Component} from 'react';
import {StyleSheet, UIManager, View, Text } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './components/common'
import LibraryList from "./components/LibraryList";

export default class App extends Component<{}> {

    constructor() {
        super();
        UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={styles.container}>
                    <Header headerText="Redux Learning"/>
                    <View style={styles.listViewStyles}>
                        <LibraryList />
                    </View>
                </View>
            </Provider>
        );
    }
}

const styles = {
    container: {
    },
    listViewStyles: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 }, //IOS
        shadowOpacity: 0.9,
        elevation: 10, //Android
        position: 'relative'
    }
};
