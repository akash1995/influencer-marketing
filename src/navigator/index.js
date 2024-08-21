import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import "react-native-gesture-handler";

import HomeScreen from "../screen/HomeScreen";
import ProductListScreen from "../screen/ProductListScreen";
import ProductDetailScreen from "../screen/ProductDetailScreen";
import SearchScreen from "../screen/SearchScreen";
import CartScreen from "../screen/CartScreen";
import CheckoutScreen from "../screen/CheckoutScreen";
import InfluencerScreen from "../screen/InfluencerScreen";
import InfluencerDetailScreen from "../screen/InfluencerDetailScreen";
import StoryScreen from "../screen/StoryScreen";
import SplashScreen from "../screen/splash";

const AppNavigation = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
    InfluencerScreen: {
      screen: InfluencerScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
    InfluencerDetailScreen: {
      screen: InfluencerDetailScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
    StoryScreen: {
      screen: StoryScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
    ProductListScreen: {
      screen: ProductListScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
    ProductDetailScreen: {
      screen: ProductDetailScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
    CartScreen: {
      screen: CartScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
    CheckoutScreen: {
      screen: CheckoutScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
  },
  {
    navigationOptions: {
      gestureEnabled: false,
      headerVisible: false,
    },
    headerMode: "screen",
  }
);

export default createAppContainer(AppNavigation);
