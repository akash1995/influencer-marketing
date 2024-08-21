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
  SafeAreaView,
  StatusBar,
} from "react-native";
import Images from "../../common/assets/images";
import SvgIcon from "../../common/assets/images/SvgIcon";
import Fonts from "../../common/assets/fonts";
import fonts from "../../common/assets/fonts";
import StoryContainer from "../StoryScreen/StoryContainer";

export default class InfluencerDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: "all",
      stories: [
        { type: "image", url: "https://example.com/image1.jpg" },
        { type: "video", url: "https://example.com/video1.mp4" },
        { type: "image", url: "https://example.com/image2.jpg" },
        { type: "video", url: "https://example.com/video2.mp4" },
      ],
    };
  }

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}></View>
        <Pressable
          style={styles.cartBackIcon}
          onPress={() => this.props.navigation.goBack()}
        >
          <SvgIcon width={30} height={30} icon={"back2"} />
        </Pressable>
        <View style={styles.influencerList}>
          <View style={styles.infulecerDetails}>
            <Image source={Images.logo2} style={styles.logo} />
            <View>
              <Text style={styles.infName}>@Morgan&Decor</Text>
              <Text style={styles.infTags}>Home and Decor, kitchenware</Text>

              <View style={styles.infFollow}>
                <SvgIcon width={20} height={20} icon={"heartColor"} />
                <Text style={styles.followCount}>4.5k Followers</Text>
              </View>
              <Text style={styles.infDes}>
                Your premier source for stylish home decor and elegant
                kitchenware
              </Text>
            </View>
            <View style={styles.lineHr}></View>
            <View style={styles.infBtn}>
              <Pressable
                style={styles.followCon}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <Text style={styles.followBtn}>Follow</Text>
              </Pressable>
              <Pressable
                style={styles.followConMsg}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <Text style={styles.followMsgBtn}>Message</Text>
              </Pressable>
              <Pressable
                style={styles.followConCon}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetailScreen")
                }
              >
                <Text style={styles.followConBtn}>Contact</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <ScrollView
          style={styles.infStory}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          <Pressable
            style={{ marginRight: 20 }}
            onPress={() => this.props.navigation.navigate("StoryScreen")}
          >
            <View style={styles.storyItem}>
              <Image source={Images.wall4} style={styles.storyHighlight} />
            </View>
            <Text style={styles.storyTxt}>Just Launched</Text>
          </Pressable>
          <Pressable
            style={{ marginRight: 20 }}
            onPress={() => this.props.navigation.navigate("StoryScreen")}
          >
            <View style={styles.storyItem}>
              <Image source={Images.profilePic} style={styles.storyHighlight} />
            </View>
            <Text style={styles.storyTxt}>Reviews</Text>
          </Pressable>
          <Pressable
            style={{ marginRight: 20 }}
            onPress={() => this.props.navigation.navigate("StoryScreen")}
          >
            <View style={styles.storyItem}>
              <Image source={Images.plant4} style={styles.storyHighlight} />
            </View>
            <Text style={styles.storyTxt}>Trending!</Text>
          </Pressable>
          <Pressable
            style={{ marginRight: 20 }}
            onPress={() => this.props.navigation.navigate("StoryScreen")}
          >
            <View style={styles.storyItem}>
              <Image source={Images.per1} style={styles.storyHighlight} />
            </View>
            <Text style={styles.storyTxt}>Best Sellers</Text>
          </Pressable>
        </ScrollView>
        <View style={styles.storylineHr}></View>
        <View style={{ marginTop: 7, marginHorizontal: 12, borderRadius: 50 }}>
          <Text style={styles.catText}>Recommended</Text>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{ marginTop: 7, marginHorizontal: 12, borderRadius: 50 }}
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
                  Wall Art
                </Text>

                <View style={styles.cartCon}>
                  <Text style={styles.productPrice}>$10.00</Text>
                </View>
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
                <Text style={styles.addtocart}>Add to cart</Text>
              </View>
            </View>
          </Pressable>
        </ScrollView>
        <View style={{ marginTop: 7, marginHorizontal: 12, borderRadius: 50 }}>
          <Text style={styles.catText}>Best sellers</Text>
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
                <Text style={styles.addtocart}>Add to cart</Text>
              </View>
            </View>
          </Pressable>
        </ScrollView>
        <View style={{ marginTop: 7, marginHorizontal: 12, borderRadius: 50 }}>
          <Text style={styles.catText}>New Arrivals</Text>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{ marginTop: 7, marginHorizontal: 12, borderRadius: 50 }}
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
                  Wall Art
                </Text>

                <View style={styles.cartCon}>
                  <Text style={styles.productPrice}>$18.00</Text>
                </View>
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
                <Text style={styles.addtocart}>Add to cart</Text>
              </View>
            </View>
          </Pressable>
        </ScrollView>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  infStory: { padding: 20, marginRight: 20 },
  storyItem: {
    marginRight: 5,
    borderColor: "#FB41BA",
    borderWidth: 3,
    borderRadius: 100,
  },
  storyTxt: {
    color: "#000",
    fontFamily: Fonts.type.NunitoRegular,
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  headerContainer: {
    backgroundColor: "#D0D1FF",
    padding: 20,
    alignItems: "center",
    paddingVertical: 120,
  },

  influencerList: {
    // position: "absolute",
    // top: 100,
    marginTop: -100,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  logo: {
    borderRadius: 50,
    width: 70,
    height: 70,
  },
  storyHighlight: {
    borderRadius: 50,
    width: 90,
    height: 90,
  },
  infName: {
    color: "#000",
    fontSize: 25,
    fontFamily: Fonts.type.NunitoBlack,
  },
  infulecerDetails: {
    paddingHorizontal: 10,
  },
  infFollow: {
    flexDirection: "row",
    color: "#000",
    alignItems: "center",
    marginTop: 5,
  },
  followCount: {
    color: "#999",
    fontSize: 19,
    fontFamily: Fonts.type.NunitoBold,
    marginLeft: 8,
  },
  followCon: {
    backgroundColor: "#6E57FB",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  followConMsg: {
    backgroundColor: "#EAEAEA",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  followConCon: {
    backgroundColor: "#EAEAEA",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  followBtn: {
    fontFamily: Fonts.type.NunitoBlack,
    color: "#fff",
  },
  followMsgBtn: {
    fontFamily: Fonts.type.NunitoBlack,
    color: "#000",
  },
  followConBtn: {
    fontFamily: Fonts.type.NunitoBlack,
    color: "#000",
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
  catText: {
    color: "#000",
    fontFamily: Fonts.type.NunitoBold,
    fontSize: 20,
    marginRight: 10,
    marginVertical: 5,
  },
  infTags: {
    color: "#7B7B7B",
    fontSize: 18,
    fontFamily: Fonts.type.NunitoSemiBold,
    marginTop: 5,
  },
  infDes: {
    color: "#7B7B7B",
    fontSize: 18,
    fontFamily: Fonts.type.NunitoSemiBold,
    paddingVertical: 10,
    marginTop: 10,
  },
  lineHr: {
    width: "100%",
    borderColor: "#7B7B7B",
    borderBottomWidth: 0.9,
    marginVertical: 20,
  },
  storylineHr: {
    width: "100%",
    borderColor: "#7B7B7B",
    borderBottomWidth: 0.9,
  },
  infBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
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
  cartBackIcon: {
    position: "absolute",
    top: 10,
    left: 10,
  },
});
