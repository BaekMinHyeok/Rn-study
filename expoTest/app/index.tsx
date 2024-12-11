import { Link } from "expo-router";
import * as Linking from 'expo-linking';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as WebBrowser from 'expo-web-browser';

export default function Home() {

  const redirectUrl = Linking.createURL('path/into/app', {
  queryParams: { hello: 'world' },
});
console.log(redirectUrl);
  return (
    <View
      style={styles.container}
    >
 {/* 시스템 브라우저로 열기 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL('https://expo.dev')}
      >
        <Text style={styles.buttonText}>Open URL with the system browser</Text>
      </TouchableOpacity>

      {/* 앱 내 브라우저로 열기 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => WebBrowser.openBrowserAsync('https://expo.dev')}
      >
        <Text style={styles.buttonText}>Open URL with an in-app browser</Text>
      </TouchableOpacity>

      
      <Link href="https://expo.dev">Open a URL</Link>
      <Link href="mailto:support@expo.dev">Open a URL</Link>
      <Link href="tel:+123456789">tel:+123456789</Link>
      <Link href="sms:+123456789">sms:+123456789</Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    button: {
    marginVertical: 10,
  },
      buttonText: {
    color: 'red',
    fontSize: 16,
  },
});