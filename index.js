/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/navigator";
import { name as appName } from "./app.json";
YellowBox.ignoreWarnings(["Warning: ..."]);

AppRegistry.registerComponent(appName, () => App);
