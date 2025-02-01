import React, {useRef, useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import {WebViewNavigation} from 'react-native-webview/lib/WebViewTypes';
import BottomTabBar from '../components/BottomTabBar';
import {getCustomUserAgent} from '../utils/userAgent';

function WebViewScreen() {
  const webViewRef = useRef<WebView>(null);
  const [currentPath, setCurrentPath] = useState('/');

  const handleTabPress = (path: string) => {
    setCurrentPath(path);
    webViewRef.current?.injectJavaScript(`
      window.location.href = '${path}';
      true;
    `);
  };

  const handleNavigationStateChange = (navState: WebViewNavigation) => {
    try {
      const urlParts = navState.url.split('b1g4-bookmark.vercel.app');
      if (urlParts.length > 1) {
        const path = urlParts[1] || '/';
        setCurrentPath(path);
      }
    } catch (error) {
      console.error('Navigation state error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{uri: 'https://b1g4-bookmark.vercel.app/'}}
        style={styles.webview}
        userAgent={getCustomUserAgent()}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        geolocationEnabled={true}
        onNavigationStateChange={handleNavigationStateChange}
      />
      <BottomTabBar onTabPress={handleTabPress} currentPath={currentPath} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    marginBottom: Platform.select({
      ios: 80,
      android: 60,
    }),
  },
});

export default WebViewScreen;
