import {Home, Map, User} from 'lucide-react-native';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type BottomTabBarProps = {
  onTabPress: (path: string) => void;
  currentPath: string;
};

function BottomTabBar({onTabPress, currentPath}: BottomTabBarProps) {
  const activeColor = Platform.select({
    default: '#198155',
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.tab} onPress={() => onTabPress('/')}>
          <Home
            size={24}
            color={currentPath === '/' ? activeColor : '#8E8E93'}
          />
          <Text
            style={[
              styles.label,
              currentPath === '/' && [styles.activeLabel, {color: activeColor}],
            ]}>
            홈
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tab}
          onPress={() => onTabPress('/myplace')}>
          <Map
            size={24}
            color={currentPath === '/myplace' ? activeColor : '#8E8E93'}
          />
          <Text
            style={[
              styles.label,
              currentPath === '/myplace' && [
                styles.activeLabel,
                {color: activeColor},
              ],
            ]}>
            내 장소
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tab}
          onPress={() => onTabPress('/mypage')}>
          <User
            size={24}
            color={currentPath === '/mypage' ? activeColor : '#8E8E93'}
          />
          <Text
            style={[
              styles.label,
              currentPath === '/mypage' && [
                styles.activeLabel,
                {color: activeColor},
              ],
            ]}>
            마이페이지
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flexDirection: 'row',
    height: Platform.select({
      ios: 50,
      android: 60,
    }),
    backgroundColor: '#FFFFFF',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#E5E5EA',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Platform.select({
      ios: 6,
      android: 8,
    }),
  },
  label: {
    fontSize: Platform.select({
      ios: 10,
      android: 12,
    }),
    marginTop: 4,
    color: '#8E8E93',
    fontWeight: Platform.select({
      ios: '500',
      android: '400',
    }),
  },
  activeLabel: {
    fontWeight: Platform.select({
      ios: '600',
      android: '500',
    }),
  },
});

export default BottomTabBar;
