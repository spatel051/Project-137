import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import axios from 'axios';

export default class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {},
            url: `http://localhost:5000/star?name=${this.props.navigation.getParam(
                "star_name"
            )}`
        };
    }

    getDetails = () => {
        const { url } = this.state;
        axios
        .get(url)
        .then(response => {
            this.setDetails(response.data.data);
        })
        .catch(error => {
            Alert.alert(error.message);
        });
    };

    componentDidMount() {
        this.getDetails();
    }

    setDetails = planetDetails => {
        this.setState({
            details: planetDetails
        });
    };

    render() {
        const { details } = this.state;
        if (details.specifications) {
            return(
                <View style = {styles.container}>
                    <Card>
                        <View>
                            <Text
                                style = {styles.cardItem}
                            >{`Distance: ${details.distance}`}</Text>
                            <Text
                                style = {styles.cardItem}
                            >{`Gravity: ${details.gravity}`}</Text>
                            <Text
                                style = {styles.cardItem}
                            >{`Mass: ${details.mass}`}</Text>
                            <Text
                                style = {styles.cardItem}
                            >{`Radius: ${details.radius}`}</Text>
                        </View>
                        <View style = {[styles.cardItem, { flexDirection: 'column'}]}>
                            <Text>{details.specifications ? `Specifications: `: ""}</Text>
                            {details.specifications.map((item, index) => (
                                <Text key = {index.toString()} styles = {{ marginLeft: 50}}>
                                    {item}
                                </Text>
                            ))}
                        </View>
                    </Card>
                </View>
            );
        }
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardItem: {
        marginBottom: 10
    }
});