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

export default class InfluencerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: "all",
    };
  }

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={Images.homeImg2} style={styles.banImg} />
        <View style={styles.headerContainer}>
          <Text style={styles.headerLeftTTL}>Welcome to Milo</Text>
          <Text style={styles.headersmallttl}>
            Start earning from what you love today
          </Text>

          <Pressable
            style={styles.catThumCon}
            onPress={() =>
              this.props.navigation.navigate("ProductDetailScreen")
            }
          >
            <Text style={styles.startedBtn}>Get Started</Text>
          </Pressable>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.influencerList}>
            <View style={{ marginBottom: 20 }}>
              <View style={styles.infulecerDetails}>
                <Pressable
                  onPress={() =>
                    this.props.navigation.navigate("InfluencerDetailScreen")
                  }
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Image source={Images.logo2} style={styles.logo} />
                  <View>
                    <Text style={styles.infName}>@Morgan&Decor</Text>
                    <View style={styles.infFollow}>
                      <SvgIcon width={20} height={20} icon={"heartColor"} />
                      <Text style={styles.followCount}>4.5k Followers</Text>
                    </View>
                  </View>
                </Pressable>
                <View>
                  <Pressable
                    style={styles.followCon}
                    onPress={() =>
                      this.props.navigation.navigate("ProductDetailScreen")
                    }
                  >
                    <Text style={styles.followBtn}>Follow</Text>
                  </Pressable>
                </View>
              </View>

              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={{ marginTop: 7, borderRadius: 50 }}
              >
                <Pressable
                  style={styles.catThumCon}
                  onPress={() =>
                    this.props.navigation.navigate("ProductDetailScreen")
                  }
                >
                  <View style={styles.thumCon}>
                    <Image source={Images.plant4} style={styles.thumb} />
                    <View style={styles.productDetail}>
                      <Text style={styles.productName} numberOfLines={2}>
                        Peperomia Green Plant
                      </Text>

                      <View style={styles.cartCon}>
                        <Text style={styles.productPrice}>$18.00</Text>
                      </View>
                      <View style={styles.lineHr}></View>
                      <Text style={styles.addtocart}>Add to cart</Text>
                    </View>
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
                    <View style={styles.productDetail}>
                      <Text style={styles.productName} numberOfLines={2}>
                        The Art House
                      </Text>

                      <View style={styles.cartCon}>
                        <Text style={styles.productPrice}>$10.00</Text>
                      </View>
                      <View style={styles.lineHr}></View>
                      <Text style={styles.addtocart}>Add to cart</Text>
                    </View>
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
                    <View style={styles.productDetail}>
                      <Text style={styles.productName} numberOfLines={2}>
                        RGB Wireless Charger
                      </Text>

                      <View style={styles.cartCon}>
                        <Text style={styles.productPrice}>$45.00</Text>
                      </View>
                      <View style={styles.lineHr}></View>
                      <Text style={styles.addtocart}>Add to cart</Text>
                    </View>
                  </View>
                </Pressable>
              </ScrollView>
            </View>

            <View style={{ marginBottom: 20 }}>
              <View style={styles.infulecerDetails}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={Images.logo1} style={styles.logo} />
                  <View>
                    <Text style={styles.infName}>@BorcelleHomes</Text>
                    <View style={styles.infFollow}>
                      <SvgIcon width={20} height={20} icon={"heartColor"} />
                      <Text style={styles.followCount}>2.5k Followers</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Pressable
                    style={styles.followCon}
                    onPress={() =>
                      this.props.navigation.navigate("ProductDetailScreen")
                    }
                  >
                    <Text style={styles.followBtn}>Follow</Text>
                  </Pressable>
                </View>
              </View>

              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={{ marginTop: 7, borderRadius: 50 }}
              >
                <Pressable
                  style={styles.catThumCon}
                  onPress={() =>
                    this.props.navigation.navigate("ProductDetailScreen")
                  }
                >
                  <View style={styles.thumCon}>
                    <Image source={Images.wall4} style={styles.thumb} />
                    <View style={styles.productDetail}>
                      <Text style={styles.productName} numberOfLines={2}>
                        Space Art Wall
                      </Text>

                      <View style={styles.cartCon}>
                        <Text style={styles.productPrice}>$18.00</Text>
                      </View>
                      <View style={styles.lineHr}></View>
                      <Text style={styles.addtocart}>Add to cart</Text>
                    </View>
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
                    <View style={styles.productDetail}>
                      <Text style={styles.productName} numberOfLines={2}>
                        Bigsmall Vintage Gramophone
                      </Text>

                      <View style={styles.cartCon}>
                        <Text style={styles.productPrice}>$15.00</Text>
                      </View>
                      <View style={styles.lineHr}></View>
                      <Text style={styles.addtocart}>Add to cart</Text>
                    </View>
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
                    <View style={styles.productDetail}>
                      <Text style={styles.productName} numberOfLines={2}>
                        Study Lamp LED
                      </Text>

                      <View style={styles.cartCon}>
                        <Text style={styles.productPrice}>$18.00</Text>
                      </View>
                      <View style={styles.lineHr}></View>
                      <Text style={styles.addtocart}>Add to cart</Text>
                    </View>
                  </View>
                </Pressable>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D0D1FF",
    flex: 1,
  },
  headerContainer: {
    padding: 20,
    alignItems: "center",
    paddingVertical: 120,
    position: "absolute",
    alignSelf: "center",
  },
  banImg: { width: "100%", height: 315, borderRadius: 15 },

  headerLeftTTL: {
    fontSize: 25,
    color: "#000",
    fontFamily: Fonts.type.NunitoBlack,
    textAlign: "center",
  },
  headersmallttl: {
    fontSize: 20,
    color: "#000",
    fontFamily: Fonts.type.NunitoSemiBold,
    textAlign: "center",
    width: 230,
  },

  catThumCon: {
    marginRight: 10,
    marginVertical: 5,
  },
  thumCon: {
    borderRadius: 15,
    borderColor: "#ebebeb",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  thumb: {
    width: 180,
    height: 150,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 8,
    backgroundColor: "#fff",
  },

  cartCon: {
    width: "100%",
  },
  influencerList: {
    borderRadius: 60,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginTop: -20,
  },
  startedBtn: {
    backgroundColor: "#FB41BB",
    padding: 15,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#fff",
    borderRadius: 30,
    marginTop: 10,
  },

  logo: {
    borderRadius: 50,
    width: 70,
    height: 70,
  },
  infName: {
    color: "#000",
    fontSize: 20,
    fontFamily: Fonts.type.NunitoBlack,
  },
  infulecerDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#999",
  },
  infFollow: { flexDirection: "row", color: "#000" },
  followCount: {
    color: "#999",
    fontSize: 16,
    fontFamily: Fonts.type.NunitoBlack,
  },
  followCon: {
    backgroundColor: "#6E57FB",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  followBtn: {
    fontFamily: Fonts.type.NunitoBlack,
    color: "#fff",
  },
  productDetail: {
    width: 160,
    height: 120,
    alignSelf: "center",
    paddingVertical: 8,
  },

  productName: {
    color: "#000",
    fontFamily: Fonts.type.NunitoBlack,
    textAlign: "left",
  },
  productPrice: {
    color: "#000",
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 16,
  },

  addtocart: {
    borderTopWidth: 1,
    borderColor: "#999",
    color: "#FB41BA",
    textAlign: "center",
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 17,
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    width: "100%",
    paddingVertical: 5,
  },
});
