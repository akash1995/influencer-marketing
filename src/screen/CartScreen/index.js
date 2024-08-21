import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from "react-native";
import Images from "../../common/assets/images";
import SvgIcon from "../../common/assets/images/SvgIcon";
import Fonts from "../../common/assets/fonts";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import fonts from "../../common/assets/fonts";
const images = new Array(3).fill(Images.bodyDetail);

export default class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.cartCon}>
        <View style={styles.cartHeadCon}>
          <Pressable
            style={styles.cartBackIcon}
            onPress={() => this.props.navigation.goBack()}
          >
            <SvgIcon width={30} height={30} icon={"back2"} />
          </Pressable>
          <View style={styles.cartTitleCon}>
            <Text style={styles.headTitle}>Checkout</Text>
          </View>
        </View>
        <ScrollView
          style={{ padding: 10, marginBottom: 70 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.influencerList}>
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

            <View style={styles.cartItemListCon}>
              <View style={styles.cartItemImg}>
                <Image source={Images.plant4} style={styles.itemImg} />
              </View>
              <View style={styles.cartItemDesCon}>
                <Text style={styles.productName} numberOfLines={1}>
                  Green Plant
                </Text>
                <Text style={styles.productQuan} numberOfLines={1}>
                  Size:4.23 fl oz/125ml
                </Text>
                <View style={styles.itemCol}>
                  <View style={styles.amountCon}>
                    <View>
                      <SvgIcon width={15} height={15} icon={"dollar"} />
                    </View>
                    <Text style={styles.amount}>11.99</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemRightCon}>
                <View style={styles.dltIcon}>
                  <SvgIcon width={12} height={12} icon={"cancel"} />
                </View>
                <View style={styles.cartAction}>
                  <TouchableOpacity>
                    <SvgIcon width={24} height={24} icon={"remCircle"} />
                  </TouchableOpacity>

                  <Text style={styles.itemCount}>1</Text>
                  <TouchableOpacity style={styles.add}>
                    <SvgIcon width={15} height={15} icon={"addCircle"} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.influencerList}>
            <View style={styles.infulecerDetails}>
              <Pressable
                onPress={() =>
                  this.props.navigation.navigate("InfluencerDetailScreen")
                }
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Image source={Images.logo1} style={styles.logo} />
                <View>
                  <Text style={styles.infName}>@BorcelleHomes</Text>
                  <View style={styles.infFollow}>
                    <SvgIcon width={20} height={20} icon={"heartColor"} />
                    <Text style={styles.followCount}>5.9k Followers</Text>
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

            <View style={styles.cartItemListCon}>
              <View style={styles.cartItemImg}>
                <Image source={Images.wall2} style={styles.itemImg} />
              </View>
              <View style={styles.cartItemDesCon}>
                <Text style={styles.productName} numberOfLines={1}>
                  Wall Art
                </Text>
                <Text style={styles.productQuan} numberOfLines={1}>
                  Size:4.23 fl oz/125ml
                </Text>
                <View style={styles.itemCol}>
                  <View style={styles.amountCon}>
                    <View>
                      <SvgIcon width={15} height={15} icon={"dollar"} />
                    </View>
                    <Text style={styles.amount}>11.99</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemRightCon}>
                <View style={styles.dltIcon}>
                  <SvgIcon width={12} height={12} icon={"cancel"} />
                </View>
                <View style={styles.cartAction}>
                  <TouchableOpacity>
                    <SvgIcon width={24} height={24} icon={"remCircle"} />
                  </TouchableOpacity>

                  <Text style={styles.itemCount}>1</Text>
                  <TouchableOpacity style={styles.add}>
                    <SvgIcon width={15} height={15} icon={"addCircle"} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.searchBoxCon}>
            <View style={styles.searchTextBoxCon}>
              <TextInput
                style={styles.searchText}
                placeholder={"Promo Code"}
                placeholderTextColor={"#aaa"}
              />
              <Pressable style={styles.filerIocn}>
                <Text style={styles.applyBtn}>Apply</Text>
              </Pressable>
            </View>
          </View>
          <Text style={styles.billDetail}>Bill Details</Text>
          <View style={[styles.influencerList, { paddingVertical: 20 }]}>
            <View style={styles.subtotalCon}>
              <View style={{ flexDirection: "row" }}>
                <SvgIcon width={20} height={20} icon={"billRec"} />
                <Text style={[styles.subtotalText, { paddingHorizontal: 5 }]}>
                  Item Total
                </Text>
              </View>
              <View style={styles.amountCon}>
                <View>
                  <SvgIcon width={20} height={20} icon={"dollar"} />
                </View>
                <Text style={styles.subtotalAmt}>23.98</Text>
              </View>
            </View>
            <View style={styles.subtotalCon}>
              <View style={{ flexDirection: "row" }}>
                <SvgIcon width={20} height={20} icon={"delivery"} />
                <Text style={[styles.subtotalText, { paddingHorizontal: 5 }]}>
                  Delivery Charges
                </Text>
              </View>
              <View style={styles.amountCon}>
                <View>
                  <SvgIcon width={20} height={20} icon={"dollar"} />
                </View>
                <Text style={styles.subtotalAmt}>2.6</Text>
              </View>
            </View>
            <View style={styles.subtotalCon}>
              <View style={{ flexDirection: "row" }}>
                <SvgIcon width={20} height={20} icon={"lock"} />
                <Text style={[styles.subtotalText, { paddingHorizontal: 5 }]}>
                  Handling Charges
                </Text>
              </View>
              <View style={styles.amountCon}>
                <View>
                  <SvgIcon width={20} height={20} icon={"dollar"} />
                </View>
                <Text style={styles.subtotalAmt}>0.4</Text>
              </View>
            </View>
            <View
              style={{
                borderStyle: "dotted",
                borderWidth: 1,
                borderRadius: 1,
                width: "95%",
                alignSelf: "center",
              }}
            ></View>
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.billDetail}>Grand Total</Text>
              <View style={styles.amountCon}>
                <View>
                  <SvgIcon width={20} height={20} icon={"dollar"} />
                </View>
                <Text
                  style={[
                    styles.subtotalAmt,
                    { fontFamily: fonts.type.NunitoBlack },
                  ]}
                >
                  26.98
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.billDetail}>Address Details</Text>
          <View
            style={[
              styles.influencerList,
              { paddingVertical: 10, marginBottom: 30 },
            ]}
          >
            <View
              style={{
                paddingHorizontal: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <SvgIcon width={20} height={20} icon={"deliveryPoint"} />
                <Text style={styles.billDetail}>Delivery to - 29928</Text>
              </View>
              <View>
                {/* <SvgIcon width={30} height={30} icon={"downArrow"} /> */}
              </View>
            </View>
            <Text style={styles.deliveryAdd}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </ScrollView>
        <View style={styles.proceedBtn}>
          <TouchableOpacity
            style={[
              styles.cartBtn,
              {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
            ]}
            onPress={() => this.props.navigation.navigate("CheckoutScreen")}
          >
            <Text style={[styles.cartText]}>Pay</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SvgIcon width={27} height={27} icon={"dollarWhite"} />
              <Text style={[styles.cartText]}>26.98</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cartCon: {
    backgroundColor: "#fafafa",
    height: "100%",
  },
  cartHeadCon: {
    flexDirection: "row",
    height: 60,
    paddingHorizontal: 10,
    padding: 5,
    elevation: 1,
    shadowColor: "#000",
    borderColor: "#ebebeb",
  },
  itemCol: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartTitleCon: {
    alignSelf: "center",
    marginHorizontal: 10,
  },
  cartBackIcon: {
    alignSelf: "center",
  },
  headTitle: {
    fontFamily: Fonts.type.NunitoSemiBold,
    fontWeight: "700",
    fontSize: 18,
    color: "#000",
    textAlign: "center",
  },
  bagIcon: {
    alignSelf: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  cartItemListCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "100%",
  },
  itemImg: {
    height: 90,
    width: 90,
    borderRadius: 10,
  },
  cartItemDesCon: {
    alignSelf: "center",
    paddingHorizontal: 7,
    width: "50%",
  },
  productName: {
    fontFamily: Fonts.type.FredokaOne,
    color: "#000",
    fontSize: 14,
  },
  productQuan: {
    color: "#000",
    fontFamily: Fonts.type.NunitoLight,
    paddingVertical: 5,
  },
  amountCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  amount: {
    fontFamily: Fonts.type.NunitoBlack,
    fontSize: 14,
    color: "#000",
  },

  itemRightCon: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  cartAction: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  itemCount: {
    fontFamily: Fonts.type.NunitoBlack,
    color: "#000",
    fontSize: 16,
    paddingHorizontal: 10,
    alignContent: "center",
    alignItems: "center",
  },
  dltIcon: {
    alignItems: "flex-end",
  },
  add: {
    backgroundColor: "#000",
    borderRadius: 20,
    padding: 5,
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
    height: 50,
    borderColor: "#f9f9f9",
    borderWidth: 1,
    borderRadius: 10,
    color: "#000",
    backgroundColor: "#f9f9f9",
    fontFamily: Fonts.type.NunitoBold,
    paddingLeft: 35,
    width: "100%",
  },
  filerIocn: {
    width: "20%",
    borderRadius: 10,
    alignSelf: "center",
    position: "absolute",
    right: 10,
    backgroundColor: "#000",
  },
  applyBtn: {
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
  },
  subtotalCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    paddingVertical: 3,
    borderBottomColor: "#fff",
    borderBottomWidth: 0.2,
  },
  subtotalText: {
    color: "#000",
    fontFamily: Fonts.type.NunitoBold,
    fontSize: 16,
  },
  subtotalAmt: {
    fontFamily: Fonts.type.NunitoSemiBold,
    fontSize: 20,
    color: "#000",
  },
  proceedBtn: {
    paddingHorizontal: 10,
    width: "100%",
    position: "absolute",
    bottom: 1,
  },
  cartBtn: {
    backgroundColor: "#FB41BB",
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 20,
  },
  cartText: {
    textAlign: "center",
    fontFamily: Fonts.type.NunitoBlack,
    color: "#fff",
    fontSize: 25,
  },

  influencerList: {
    borderRadius: 60,
    borderRadius: 20,
    backgroundColor: "#fff",
    width: "100%",
    marginVertical: 10,

    elevation: 2,
    shadowColor: "#000",
    borderRadius: 15,
    borderColor: "#ebebeb",
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
    width: "100%",
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
    marginRight: 10,
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

  billDetail: {
    fontFamily: fonts.type.NunitoBold,
    color: "#000",
    fontSize: 20,
  },
  deliveryAdd: {
    color: "#000",
    padding: 10,
    fontFamily: fonts.type.NunitoRegular,
    fontSize: 16,
  },
});
