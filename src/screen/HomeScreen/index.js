import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  TouchableHighlight,
} from "react-native";
import Images from "../../common/assets/images";
import SvgIcon from "../../common/assets/images/SvgIcon";
import Fonts from "../../common/assets/fonts";
import fonts from "../../common/assets/fonts";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: "all",
    };
  }

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <View style={styles.userDetail}>
                <Text style={styles.user}>
                  <Text style={styles.userName}>Milo</Text>
                </Text>
              </View>
              <View style={styles.notification}>
                <SvgIcon width={29} height={29} icon={"dollarGreen"} />
                <Text style={styles.pocketValue}>$30.00</Text>
              </View>
            </View>
            <View style={styles.headerTwo}>
              <View style={styles.headerLeft}>
                <Text style={styles.headerLeftTTL}>
                  Uncover a universe of inspiration.
                </Text>
              </View>
              <View style={styles.headerRight}>
                <Image source={Images.homeImg} style={styles.banImg} />
              </View>
            </View>
          </View>

          <View style={styles.SearchCon}>
            <Pressable
              style={styles.searchBoxCon}
              onPress={() => this.props.navigation.navigate("SearchScreen")}
            >
              <View style={styles.searchTextBoxCon}>
                <View style={styles.searchIcon}>
                  <SvgIcon icon={"search"} width={30} height={30} />
                </View>
                <TextInput
                  style={styles.searchText}
                  placeholder={"Search for products"}
                  placeholderTextColor={"#aaa"}
                  editable={false}
                  selectTextOnFocus={false}
                />
                <Pressable style={styles.filerIocn}>
                  <SvgIcon width={30} height={30} icon={"camera"} />
                </Pressable>
              </View>
            </Pressable>
          </View>
          <Pressable
            style={styles.catCon}
            onPress={() => this.props.navigation.navigate("InfluencerScreen")}
          >
            <Text style={styles.catText}>Plants</Text>
            <SvgIcon width={20} height={20} icon={"arrowRight"} />
          </Pressable>
          <View style={{ paddingLeft: 20 }}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{ marginTop: 7 }}
            >
              <Pressable
                style={styles.catThumCon}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <View style={styles.thumCon}>
                  <Image source={Images.plant1} style={styles.thumb} />
                </View>
                <View style={styles.cartIcon}>
                  <SvgIcon width={20} height={20} icon={"heart"} />
                </View>
              </Pressable>
              <Pressable
                style={styles.catThumCon}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <View style={styles.thumCon}>
                  <Image source={Images.plant5} style={styles.thumb} />
                </View>
                <View style={styles.cartIcon}>
                  <SvgIcon width={20} height={20} icon={"heart"} />
                </View>
              </Pressable>
              <Pressable
                style={styles.catThumCon}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <View style={styles.thumCon}>
                  <Image source={Images.plant3} style={styles.thumb} />
                </View>
                <View style={styles.cartIcon}>
                  <SvgIcon width={20} height={20} icon={"heart"} />
                </View>
              </Pressable>
              <Pressable
                style={styles.catThumCon}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <View style={styles.thumCon}>
                  <Image source={Images.plant4} style={styles.thumb} />
                </View>
                <View style={styles.cartIcon}>
                  <SvgIcon width={20} height={20} icon={"heart"} />
                </View>
              </Pressable>
              <Pressable
                style={styles.catThumCon}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <View style={styles.thumCon}>
                  <Image source={Images.plant6} style={styles.thumb} />
                </View>
                <View style={styles.cartIcon}>
                  <SvgIcon width={20} height={20} icon={"heart"} />
                </View>
              </Pressable>
            </ScrollView>
          </View>

          <View style={styles.catCon}>
            <Text style={styles.catText}>Wall decor</Text>
            <SvgIcon width={20} height={20} icon={"arrowRight"} />
          </View>
          <View style={{ paddingLeft: 20 }}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{ marginTop: 7 }}
            >
              <Pressable
                style={styles.catThumCon}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <View style={styles.thumCon}>
                  <Image source={Images.wall1} style={styles.thumb} />
                </View>
                <View style={styles.cartIcon}>
                  <SvgIcon width={20} height={20} icon={"heart"} />
                </View>
              </Pressable>
              <Pressable
                style={styles.catThumCon}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <View style={styles.thumCon}>
                  <Image source={Images.wall2} style={styles.thumb} />
                </View>
                <View style={styles.cartIcon}>
                  <SvgIcon width={20} height={20} icon={"heart"} />
                </View>
              </Pressable>
              <Pressable
                style={styles.catThumCon}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <View style={styles.thumCon}>
                  <Image source={Images.wall3} style={styles.thumb} />
                </View>
                <View style={styles.cartIcon}>
                  <SvgIcon width={20} height={20} icon={"heart"} />
                </View>
              </Pressable>
              <Pressable
                style={styles.catThumCon}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <View style={styles.thumCon}>
                  <Image source={Images.wall4} style={styles.thumb} />
                </View>
                <View style={styles.cartIcon}>
                  <SvgIcon width={20} height={20} icon={"heart"} />
                </View>
              </Pressable>
              <Pressable
                style={styles.catThumCon}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <View style={styles.thumCon}>
                  <Image source={Images.wall5} style={styles.thumb} />
                </View>
                <View style={styles.cartIcon}>
                  <SvgIcon width={20} height={20} icon={"heart"} />
                </View>
              </Pressable>
            </ScrollView>
          </View>

          <View style={styles.catCon}>
            <Text style={styles.catText}>Personalized gifts</Text>
            <SvgIcon width={20} height={20} icon={"arrowRight"} />
          </View>
          <View style={{ paddingLeft: 20 }}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{ marginTop: 7 }}
            >
              <Pressable
                style={styles.catThumCon}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <View style={styles.thumCon}>
                  <Image source={Images.per1} style={styles.thumb} />
                </View>
                <View style={styles.cartIcon}>
                  <SvgIcon width={20} height={20} icon={"heart"} />
                </View>
              </Pressable>
              <Pressable
                style={styles.catThumCon}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <View style={styles.thumCon}>
                  <Image source={Images.per3} style={styles.thumb} />
                </View>
                <View style={styles.cartIcon}>
                  <SvgIcon width={20} height={20} icon={"heart"} />
                </View>
              </Pressable>
              <Pressable
                style={styles.catThumCon}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <View style={styles.thumCon}>
                  <Image source={Images.per4} style={styles.thumb} />
                </View>
                <View style={styles.cartIcon}>
                  <SvgIcon width={20} height={20} icon={"heart"} />
                </View>
              </Pressable>
              <Pressable
                style={styles.catThumCon}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <View style={styles.thumCon}>
                  <Image source={Images.per5} style={styles.thumb} />
                </View>
                <View style={styles.cartIcon}>
                  <SvgIcon width={20} height={20} icon={"heart"} />
                </View>
              </Pressable>
              <Pressable
                style={styles.catThumCon}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <View style={styles.thumCon}>
                  <Image source={Images.per6} style={styles.thumb} />
                </View>
                <View style={styles.cartIcon}>
                  <SvgIcon width={20} height={20} icon={"heart"} />
                </View>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "#B2E2E2",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  headerTwo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    alignItems: "center",
  },
  headerLeft: {
    width: "40%",
  },
  headerLeftTTL: {
    fontSize: 25,
    color: "#000",
    fontFamily: Fonts.type.NunitoSemiBold,
    fontWeight: "bold",
  },
  headerRight: {
    width: "70%",
  },
  userDetail: {
    flexDirection: "row",
  },
  user: {
    color: "#000",
    alignSelf: "center",
    fontSize: 40,
  },
  userName: {
    color: "#1a1a1a",
    fontFamily: Fonts.type.NunitoBlack,
  },
  profilepic: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  notification: {
    flexDirection: "row",
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: "space-around",
    width: "30%",
    paddingVertical: 8,
    alignSelf: "center",
    backgroundColor: "#fff",
  },
  pocketValue: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },

  SearchCon: {
    paddingHorizontal: 20,
    marginTop: -30,
  },
  searchTtl: {
    color: "#000",
    fontSize: 20,
    fontFamily: Fonts.type.NunitoBlack,
  },
  searchBoxCon: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchTextBoxCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 2,
    shadowColor: "#000",
    borderRadius: 15,
    borderColor: "#ebebeb",
  },
  searchText: {
    height: 60,
    borderColor: "#f9f9f9",
    borderWidth: 1,
    borderRadius: 10,
    color: "#000",
    backgroundColor: "#f9f9f9",
    fontFamily: Fonts.type.NunitoBold,
    paddingLeft: 35,
    width: "100%",
    fontSize: 20,
    paddingLeft: 50,
  },
  filerIocn: {
    width: "10%",
    borderRadius: 10,
    alignSelf: "center",
    position: "absolute",
    right: 0,
  },
  searchIcon: {
    alignItems: "center",
    alignSelf: "center",
    width: "10%",
    position: "absolute",
    left: 5,
    zIndex: 1,
  },
  bannerCon: {
    paddingHorizontal: 20,
  },
  banImg: { width: "100%", height: 180, borderRadius: 15 },
  catCon: {
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  catText: {
    color: "#000",
    fontFamily: Fonts.type.NunitoBold,
    fontSize: 20,
    marginRight: 10,
    marginVertical: 5,
  },
  catBtn: {
    marginRight: 10,
  },
  activeCatText: {
    backgroundColor: "#1e1b1b",
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
  deactiveCatText: {
    backgroundColor: "#fff",
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
  },
  catThumCon: {
    marginRight: 10,
    marginVertical: 5,
  },
  thumCon: {
    // width: 190,
    borderRadius: 15,
    elevation: 0.5,
    borderColor: "#ebebeb",
    borderWidth: 0.1,
  },
  thumb: {
    width: 180,
    height: 150,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 8,
  },
  productDetail: {
    paddingHorizontal: 10,
    // backgroundColor: '#fff',
    width: 160,
    height: 90,
    // borderRadius: 10,
    alignSelf: "center",
    position: "absolute",
    bottom: 5,
    padding: 5,

    // elevation: 0.6,
  },

  productName: {
    color: "#000",
    fontFamily: Fonts.type.NunitoBlack,
    textAlign: "left",
    width: "90%",
    position: "absolute",
    bottom: 45,
    left: 10,
  },
  productPrice: {
    color: "#000",
    fontFamily: Fonts.type.NunitoBlack,
    alignSelf: "center",
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
  },
  viewmoreCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
  },
  viewmore: {
    color: "#183f35",
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 16,
    marginTop: 10,
  },
  cartCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },

  cartIcon: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 20,
    position: "absolute",
    right: 2,
    top: 2,
  },
  productDes: {
    color: "#000",
  },
  ingreCon: {
    width: "33%",
    paddingVertical: 20,
  },
  ingreListCon: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    flex: 1,
    flexWrap: "wrap",
    paddingBottom: 30,
  },
  ingreText: {
    fontSize: 26,
    fontFamily: Fonts.type.FredokaOne,
    textAlign: "center",
    color: "#183f35",
  },
  ingreType: {
    color: "#000",
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 16,
    alignSelf: "center",
  },
  ingreIcon: {
    alignSelf: "center",
  },
});
