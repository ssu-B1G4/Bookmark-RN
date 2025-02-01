import {Platform} from 'react-native';

export const getCustomUserAgent = () =>
  Platform.select({
    ios: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1 bookmark-webview',
    android:
      'Mozilla/5.0 (Linux; Android 10; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36 bookmark-webview',
    default: 'bookmark-webview',
  });
