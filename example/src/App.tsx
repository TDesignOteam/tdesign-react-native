import 'setimmediate';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, useDrawerProgress } from '@react-navigation/drawer';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { ThemeProvider, useTheme } from '@src/theme';
import { Text, ScrollView, View, Button, PopupContainer } from '@src/components';
import { SafeAreaProvider, initialWindowMetrics, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCallback, Suspense, useState, useEffect, useMemo } from 'react';
import { ListItem } from './components/ListItem';
import componentConfig from './config.json';
import componentsMap from './componentList';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function ExampleList() {
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View className="flex1 bg">
      <StatusBar />
      <ScrollView>
        <View className="flex1 bg" style={{ paddingBottom: bottom }}>
          {componentConfig?.map?.((list, index) => {
            const endIndex = (list?.children?.length ?? 0) - 1;
            return (
              <View className="mt16" key={list.title + index}>
                <Text className="px12">{list.title}</Text>
                {list?.children?.map?.((child, childIndex) => {
                  return (
                    <ListItem
                      key={childIndex}
                      hideBorder={childIndex === endIndex}
                      label={child.title}
                      onPressItem={() => {
                        navigation.navigate(child.key as never);
                      }}
                    />
                  );
                })}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

function DrawerMenu(props: any) {
  const progress = useDrawerProgress();
  const { setThemeName, themeName } = useTheme();

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(progress?.value || 0, [0, 1], [-100, 0]);
    return {
      transform: [{ translateX }],
    };
  });

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View style={animatedStyle}>
        {/* <DrawerItemList {...props} /> */}
        {/* <DrawerItem
          label="Help"
          onPress={() => {
            console.log(111);
          }}
        /> */}
        <View className="mx12">
          <Button
            theme="primary"
            content="change theme"
            onPress={() => {
              setThemeName(themeName === 'light' ? 'dark' : 'light');
            }}
          />
        </View>
      </Animated.View>
    </DrawerContentScrollView>
  );
}
function Home() {
  const Menu = useCallback((props: any) => <DrawerMenu {...props} />, []);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
      }}
      drawerContent={Menu}
    >
      <Drawer.Screen name="ExampleList" component={ExampleList} />
    </Drawer.Navigator>
  );
}

function App(): JSX.Element {
  const [themeConfig, setThemeConfig] = useState({});

  // 测试异步加载主题
  useEffect(() => {
    setTimeout(() => {
      setThemeConfig({
        light: {
          colors: {
            fontGray4: 'violet',
          },
          classnames: {
            test: {
              backgroundColor: 'violet',
            },
          },
        },
      });
    }, 5000);
  }, []);

  const linkingMap = useMemo(() => {
    const result: Record<string, string> = {};
    componentConfig.forEach((component) => {
      component?.children?.forEach((child) => {
        result[child.key] = child.key;
      });
    });
    return result;
  }, []);

  return (
    <ThemeProvider config={themeConfig} theme="light">
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PopupContainer>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <NavigationContainer
              linking={{
                prefixes: [],
                config: {
                  screens: {
                    ...linkingMap,
                    Home: {
                      path: '',
                    },
                  },
                },
              }}
            >
              <Suspense
                fallback={
                  <View className="flex1 flexCenter">
                    <Text>loading...</Text>
                  </View>
                }
              >
                <Stack.Navigator
                  initialRouteName="ExampleList"
                  screenOptions={{
                    headerMode: 'screen',
                    presentation: 'card',
                    cardOverlayEnabled: true,
                    animationEnabled: true,
                    cardStyle: { flex: 1 },
                  }}
                >
                  <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                  {componentConfig?.map?.((list) => {
                    return list?.children?.map((item) => {
                      const LazyComponent = componentsMap[item.key];
                      function component(_props: any) {
                        return (
                          <ScrollView className="bg">
                            <LazyComponent {..._props} />
                          </ScrollView>
                        );
                      }
                      return (
                        <Stack.Screen
                          name={item.key}
                          options={{
                            headerBackTitleVisible: false,
                            headerTitle: item.title,
                            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                          }}
                        >
                          {(props) => component(props)}
                        </Stack.Screen>
                      );
                    });
                  })}
                </Stack.Navigator>
              </Suspense>
            </NavigationContainer>
          </SafeAreaProvider>
        </PopupContainer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

export default App;
