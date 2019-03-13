import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Report = t.struct({
  title: t.String,
  location: t.String,
  description: t.String
  
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    title: {
      error: "It's okay if the title isn't that good just get information out there. Put anything here. Please and Thank you"
    },
    location: {
      error: 'Location of event so we can warn other people. Please and Thank you.'
    },
    description: {
      error: "If it's hard write a bit of it and come back and finish it later. You got this. Please and Thank you",
    },
  },
  stylesheet: formStyles,
};
export default class LinksScreen extends React.Component {
    handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }
  
  static navigationOptions = {
    title: 'Create Report',
  };

render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={Report} 
          options={options}
        />
        <Button
          title="Submit!"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
