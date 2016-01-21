/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
  Dimensions
} from 'react-native';

let windowWidth = Dimensions.get('window').width
let windowHeight = Dimensions.get('window').height

class toasts extends Component {

  constructor(props) {
    super(props)
    this.animatedValue = new Animated.Value(-70)
    this.state = {
      modalShown: false,
      toastColor: 'green',
      message: 'Success!'
    }
  }

  callToast(message, type) {
    if(this.state.modalShown) return
    this.setToastType(message, type)
    this.setState({ modalShown: true })
    Animated.timing(
      this.animatedValue,
      {
        toValue: 0,
        duration: 350
      }).start(this.closeToast())
  }
  
  closeToast() {
    setTimeout(() => {
      this.setState({ modalShown: false })
      Animated.timing(
      this.animatedValue,
      { 
        toValue: -70,
        duration: 350
      }).start()
    }, 2000)
  }

  setToastType(message='Success!', type='success') {
    let color
    if (type == 'error') color = 'red'
    if (type == 'primary') color = '#2487DB'
    if (type == 'warning') color = '#ec971f'
    if (type == 'success') color = 'green'
    this.setState({ toastColor: color, message: message })
  }

  render() {
    return (
      <View>
        <View style={styles.container}>

          <View style={ styles.buttonContainer }>
              <TouchableHighlight onPress={ () => this.callToast('YOYOYO') } underlayColor="ddd" style={{ height:60, justifyContent: 'center', alignItems: 'center', backgroundColor: 'ededed', borderWidth: 1, borderColor: 'ddd' }}>
                <Text>Open Success Toast</Text>
              </TouchableHighlight>
            </View>

            <View style={ styles.buttonContainer }>
              <TouchableHighlight onPress={ () => this.callToast('Error toast called!', 'error') } underlayColor="ddd" style={{ height:60, justifyContent: 'center', alignItems: 'center', backgroundColor: 'ededed', borderWidth: 1, borderColor: 'ddd' }}>
                <Text>Open Error Toast</Text>
              </TouchableHighlight>
            </View>

            <View style={ styles.buttonContainer }>
              <TouchableHighlight onPress={ () => this.callToast('Warning toast called!','warning') } underlayColor="ddd" style={{ height:60, justifyContent: 'center', alignItems: 'center', backgroundColor: 'ededed', borderWidth: 1, borderColor: 'ddd' }}>
                <Text>Open Warning Toast</Text>
              </TouchableHighlight>
            </View>

            <View style={ styles.buttonContainer }>
              <TouchableHighlight onPress={ () => this.callToast('Primary toast called!', 'primary') } underlayColor="ddd" style={{ height:60, justifyContent: 'center', alignItems: 'center', backgroundColor: 'ededed', borderWidth: 1, borderColor: 'ddd' }}>
                <Text>Open Primary Toast</Text>
              </TouchableHighlight>
            </View>

        </View>

        <Animated.View  style={{ transform: [{ translateY: this.animatedValue }], height: 70, backgroundColor: this.state.toastColor, position: 'absolute',left:0, top:0, right:0, justifyContent:  'center' }}>
          <Text style={{ marginLeft: 10,  color: 'white',  fontSize:16, fontWeight: 'bold' }}>
            { this.state.message }
          </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70
  },
  buttonContainer: {
    marginTop:10
  }
});

AppRegistry.registerComponent('toasts', () => toasts);
