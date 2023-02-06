import React, {useState, useEffect} from 'react'
import {Text, TextInput, TouchableRipple} from 'react-native-paper'
import {View, StyleSheet} from 'react-native'
const Login = ({navigation}) => {
  const [loginTest, setloginTest] = useState({
    id: '',
    pw: ''
  })
  const [loginInputs, setLoginInputs] = useState({
    id: '',
    pw: ''
  })

  const handlerClickLoginButton = (navigation: any) => {
    if(loginTest.id !== loginInputs.id){
      alert('id를 다시 확인해주세요.')
      return
    } else if(loginTest.pw !== loginInputs.pw){
      alert('pw를 다시 확인해주세요.')
      return
    }
    setLoginInputs({id: '', pw: ''})
    navigation.navigate('Calendar')
  }

  const handlerChangeInput = (key, value) => {
    setLoginInputs(prevState => {
      return {...prevState, [key]: value}
    })
  }

  useEffect(() => {
    setloginTest({
      id: 'test',
      pw: '123123'
    })
  }, [])
  
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginTitle}>집안일 반반</Text>
      <TextInput style={styles.loginInput} value={loginInputs.id} label="아이디" onChangeText={text => handlerChangeInput('id', text)} autoCapitalize="none" placeholder="아이디 입력" left={<TextInput.Icon icon="account" />} />
      <TextInput style={styles.loginInput} value={loginInputs.pw} label="비밀번호" onChangeText={text => handlerChangeInput('pw', text)} autoCapitalize="none" secureTextEntry={true} placeholder="비밀번호 입력" left={<TextInput.Icon icon="lock" />} />
      <TouchableRipple style={styles.loginButton} onPress={() => {handlerClickLoginButton(navigation)}} rippleColor="rgba(0, 0, 0, .32)"><Text style={styles.loginButtonText}>로그인</Text></TouchableRipple>
    </View>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16
  },
  loginTitle: {
    fontSize: 18, fontWeight: 'bold'
  },
  loginInput: {
    width: '100%', marginTop: 12
  },
  loginButton: {
    width: 180, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000', marginTop: 12
  },
  loginButtonText: {
    color: 'white', fontSize: 16
  }
})

export default Login