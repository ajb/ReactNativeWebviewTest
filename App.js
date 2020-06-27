import React, { useRef } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const webviewRef = useRef()

  // setTimeout(() => {
  //   webviewRef.current.injectJavaScript("window.ReactNativeWebViewMessage = 'lol';")
  // }, 1000)

  function handleMessage(message) {
    let parsedMessage = JSON.parse(message)

    switch(parsedMessage.type) {
      case 'CONNECT_BT':
      alert('connect bt called')
      return
    }
  }

  return (
    <WebView
      ref={webviewRef}
      source={{ uri: 'http://172.20.10.3:3000' }}
      onMessage={(e) => handleMessage(e.nativeEvent.data)}
    />
  )
}
