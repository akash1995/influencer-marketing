import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Dimensions,
  Pressable,
} from "react-native";
import Images from "../../common/assets/images";
import SvgIcon from "../../common/assets/images/SvgIcon";
import Fonts from "../../common/assets/fonts";
import { TouchableOpacity } from "react-native-gesture-handler";
const images = new Array(3).fill(Images.plant1);
export default class ProductDetailScreen extends Component {
  scrollX = new Animated.Value(0);

  constructor(props) {
    super(props);
    this.state = {
      tag: "all",
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
      amountValue: 1,
      totalValue: 11.99,
      actualCost: 11.99,
    };
  }

  addItem = () => {
    this.setState({ amountValue: this.state.amountValue + 1 });
    this.setState({
      totalValue: this.state.totalValue + this.state.actualCost,
    });
  };
  removeItem = () => {
    this.setState({ amountValue: this.state.amountValue - 1 });
    this.setState({
      totalValue: this.state.totalValue - this.state.actualCost,
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Pressable
          style={styles.cartBackIcon}
          onPress={() => this.props.navigation.goBack()}
        >
          <SvgIcon width={30} height={30} icon={"back2"} />
        </Pressable>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={1}
        >
          {images.map((image, imageIndex) => {
            return (
              <View
                style={{ width: this.state.width, height: this.state.height }}
                key={imageIndex}
              >
                <ImageBackground source={image} style={styles.card} />
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = this.scrollX.interpolate({
              inputRange: [
                this.state.width * (imageIndex - 1),
                this.state.width * imageIndex,
                this.state.width * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
        <View style={styles.productDetail}>
          <View style={styles.productDetailFirst}>
            <View style={styles.productSpecCon}>
              <Text style={styles.productQuan}>#plant</Text>
              <Text style={styles.productName}>Facial Cleaner</Text>
            </View>
            <View style={styles.cartAction}>
              <TouchableOpacity onPress={() => this.removeItem()}>
                <SvgIcon width={30} height={30} icon={"remove"} />
              </TouchableOpacity>

              <Text style={styles.itemCount}>{this.state.amountValue}</Text>
              <TouchableOpacity onPress={() => this.addItem()}>
                <SvgIcon width={30} height={30} icon={"add"} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.productDetailSec}>
            <View style={styles.ammountCon}>
              <View style={{ alignSelf: "center" }}>
                <SvgIcon width={25} height={27} icon={"dollar"} />
              </View>
              <Text style={styles.ammount}>{this.state.totalValue}</Text>
            </View>
          </View>
          <View style={styles.lineHr}></View>
          <View>
            <Text style={styles.productQuan}>Product Description</Text>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ height: 180 }}
            >
              <Text style={styles.productDes}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
              </Text>
            </ScrollView>
          </View>
          <View style={styles.cartBtn}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("CartScreen")}
            >
              <Text style={styles.cartText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  cartBackIcon: {
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 2,
  },
  scrollContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    height: "70%",
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4,
    backgroundColor: "#fff",
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    bottom: "5%",
  },
  productDetail: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    height: "50%",
  },
  productDetailFirst: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productDetailSec: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  productSpecCon: {
    paddingVertical: 5,
  },
  productName: {
    fontFamily: Fonts.type.FredokaOne,
    color: "#000",
    fontSize: 20,
  },
  productQuan: {
    color: "#000",
    fontFamily: Fonts.type.NunitoBlack,
    paddingVertical: 5,
    fontSize: 16,
    color: "#FB41BA",
  },
  cartAction: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  itemCount: {
    fontFamily: Fonts.type.NunitoBlack,
    color: "#000",
    fontSize: 20,
    paddingHorizontal: 15,
    alignContent: "center",
    alignItems: "center",
  },
  ammountCon: {
    flexDirection: "row",
    alignSelf: "center",
  },
  ammount: {
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 25,
    color: "#000",
  },
  cartBtn: {
    backgroundColor: "#FB41BA",
    borderRadius: 20,
    bottom: 0,
    padding: 20,
    margin: 20,
    position: "absolute",
    width: "100%",
  },
  cartText: {
    textAlign: "center",
    fontFamily: Fonts.type.FredokaOne,
    color: "#fff",
    fontSize: 16,
  },
  lineHr: {
    width: "100%",
    borderColor: "#7B7B7B",
    borderBottomWidth: 0.9,
    marginVertical: 10,
  },
  productDes: {
    color: "#000",
  },
});
