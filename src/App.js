import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './components/common'
import LibraryList from "./components/LibraryList";

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={styles.container}>
                    <Header headerText="Redux Learning"/>
                    <LibraryList />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
