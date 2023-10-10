import {
  Button,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/EvilIcons";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import imagePath from "../Constant/imagePath";

// import * as Icon from 'react-native-feather';

const Home = ({ navigation }) => {
  const submit = () => {
    navigation.navigate("About");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="bg-white">
          <View className="flex-1 justify-between">
            <View className="ml-4 mt-4 mb-4">
              <View className="flex-1 items-center space-x-1 pl-2 " style={{display:'flex'}}>
                <Icon
                  name="location"
                  color={"#f26224"}
                  size={25}
                  style={{ paddingLeft: 4 }}
                />
                <Text style={{ fontWeight: 500, color: "#f26224" }}>
                  Kolkata
                </Text>
              </View>
              <Text style={{ fontSize: 12 }}>Exact Location Required!</Text>
            </View>

            <View className="flex-1 ">
              <View
                className="box-border rounded-lg h-10 p-1 border mt-4 ml-4 mb-4 flex-1 justify-center"
                style={{ width: 100 }}
              >
                <View className="mr-2">
                  <Icon1 color={"#f26224"} name="local-offer" size={25} />
                </View>
                <View>
                  <Text
                    className="font-semibold"
                    style={{ fontSize: 10, fontWeight: 500 }}
                  >
                    SPECIAL
                  </Text>
                  <Text
                    className="font-semibold"
                    style={{ fontSize: 10, fontWeight: 500 }}
                  >
                    OFFERS
                  </Text>
                </View>
              </View>
              <View>
                <Icon
                  name="user"
                  size={50}
                  color="#6e7372"
                  style={{ marginTop: 15, marginBottom: 12 }}
                />
              </View>
            </View>
          </View>

          <View className="flex flex-1  mt-5 p-3 ">
            <View
              className=" rounded-l-lg border w-1/4 h-14 items-center justify-center"
              style={{ backgroundColor: "#000" }}
            >
              <Text style={{ fontSize: 10, color: "#fff" }}>Delivery</Text>
              <Text style={{ fontSize: 10, color: "#fff" }}>30 MIN</Text>
            </View>
            <View
              className=" border w-1/4 items-center justify-center"
              style={{ backgroundColor: "#f5f5fa" }}
            >
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                Takesaway
              </Text>
              <Text style={{ fontSize: 10 }}>Select Store</Text>
            </View>
            <View
              className=" border w-1/4 items-center justify-center"
              style={{ backgroundColor: "#f5f5fa" }}
            >
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>Dive-in</Text>
              <Text style={{ fontSize: 10 }}>Select Store</Text>
            </View>
            <View
              className=" rounded-r-lg border w-1/4 items-center justify-center"
              style={{ backgroundColor: "#f5f5fa" }}
            >
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                Deliver to Train
              </Text>
              <Text style={{ fontSize: 10 }}>Select Station</Text>
            </View>
          </View>

          <View className="box-border rounded-lg h-10 w-15 border ml-3 mr-3 mt-1 ">
            <View className="flex-1">
              <Text className="p-2" style={{ fontSize: 12 }}>
                Search Pizzas and other dishes
              </Text>
              <Icon
                name="search"
                size={20}
                color="#6e7372"
                style={{ marginTop: 6, marginLeft: 115 }}
              />
            </View>
          </View>

          <Text className="mt-5 ml-3" style={{ fontSize: 20, fontWeight: 700 }}>
            What are you craving today?
          </Text>

          <View className="flex-1 mt-6 ml-7 ">
            <View className="">
              <View className="rounded-full overflow-hidden shadow">
                <Image
                  source={imagePath.icPizza}
                  style={{ height: 90, width: 90 }}
                />
              </View>
              <Text style={{ marginTop: 7, marginLeft: 9, fontWeight: 500 }}>
                Veg Pizza
              </Text>
            </View>

            <View className="ml-4">
              <Image
                source={imagePath.icPizza}
                style={{ height: 90, width: 90 }}
              />
              <Text style={{ marginTop: 7, marginLeft: 9, fontWeight: 500 }}>
                Veg Pizza
              </Text>
            </View>

            <View className="ml-4">
              <Image
                source={imagePath.icPizza}
                style={{ height: 90, width: 90 }}
              />
              <Text style={{ marginTop: 7, marginLeft: 9, fontWeight: 500 }}>
                Veg Pizza
              </Text>
            </View>
          </View>

          <View className="flex-1 mt-6 ml-7 ">
            <View className="">
              <Image
                source={imagePath.icPizza}
                style={{ height: 90, width: 90 }}
              />
              <Text style={{ marginTop: 7, marginLeft: 9, fontWeight: 500 }}>
                Veg Pizza
              </Text>
            </View>

            <View className="ml-4">
              <Image
                source={imagePath.icPizza}
                style={{ height: 90, width: 90 }}
              />
              <Text style={{ marginTop: 7, marginLeft: 9, fontWeight: 500 }}>
                Veg Pizza
              </Text>
            </View>

            <View className="ml-4">
              <Image
                source={imagePath.icPizza}
                style={{ height: 90, width: 90 }}
              />
              <Text style={{ marginTop: 7, marginLeft: 9, fontWeight: 500 }}>
                Veg Pizza
              </Text>
            </View>
          </View>

          <Text className="mt-5 ml-3" style={{ fontSize: 20, fontWeight: 700 }}>
            Recommended
          </Text>

          <View className="flex flex-nowrap">
            <ScrollView horizontal>
              <View
                style={{
                  marginTop: 23,
                  marginLeft: 20,
                  height: 300,
                  width: 260,
                  borderRadius: 25,
                }}
              >
                <View style={{ borderRadius: 20, overflow: "hidden" }}>
                  <ImageBackground
                    source={imagePath.icPizzaHut}
                    style={{ height: 300, width: 260 }}
                  >
                    <View
                      className="box-border rounded-xl border ml-3"
                      style={{
                        height: 22,
                        width: 70,
                        borderColor: "#fff",
                        marginTop: 130,
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          textAlign: "center",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                      >
                        Customise
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: 700,
                        marginLeft: 10,
                        marginTop: 7,
                      }}
                    >
                      Blazing Onion & Paprika
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        margin: 7,
                        fontSize: 12,
                        fontWeight: 500,
                        fontWeight: 500,
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Text>
                    <View className="flex-1">
                      <View>
                        <Text
                          style={{
                            fontSize: 20,
                            marginTop: 8,
                            marginLeft: 10,
                            color: "#fff",
                            fontWeight: 700,
                          }}
                        >
                          ₹829
                        </Text>
                        <Text
                          className="underline decoration-dashed"
                          style={{
                            color: "#fff",
                            marginLeft: 10,
                            fontSize: 12,
                            fontWeight: 700,
                          }}
                        >
                          Medium | New HandTossed
                        </Text>
                      </View>
                      <View className="ml-8 mt-4">
                        <Button color={"#e31717"} title="+ ADD"></Button>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </View>

              <View
                style={{
                  marginTop: 23,
                  marginLeft: 20,
                  height: 300,
                  width: 260,
                  borderRadius: 25,
                }}
              >
                <View style={{ borderRadius: 20, overflow: "hidden" }}>
                  <ImageBackground
                    source={imagePath.icPizzaHut}
                    style={{ height: 300, width: 260 }}
                  >
                    <View
                      className="box-border rounded-xl border ml-3"
                      style={{
                        height: 22,
                        width: 70,
                        borderColor: "#fff",
                        marginTop: 130,
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          textAlign: "center",
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                      >
                        Customise
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: 700,
                        marginLeft: 10,
                        marginTop: 7,
                      }}
                    >
                      Blazing Onion & Paprika
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        margin: 7,
                        fontSize: 12,
                        fontWeight: 500,
                        fontWeight: 500,
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Text>
                    <View className="flex-1">
                      <View>
                        <Text
                          style={{
                            fontSize: 20,
                            marginTop: 8,
                            marginLeft: 10,
                            color: "#fff",
                            fontWeight: 700,
                          }}
                        >
                          ₹829
                        </Text>
                        <Text
                          className="underline decoration-dashed"
                          style={{
                            color: "#fff",
                            marginLeft: 10,
                            fontSize: 12,
                            fontWeight: 700,
                          }}
                        >
                          Medium | New HandTossed
                        </Text>
                      </View>
                      <View className="ml-8 mt-4">
                        <Button color={"#e31717"} title="+ ADD"></Button>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </ScrollView>
          </View>

          <Text
            className="mt-12 ml-5"
            style={{ fontSize: 18, fontWeight: 700 }}
          >
            Payment Offers
          </Text>

          <ScrollView horizontal>
            <View
              className="mt-5 ml-4 box-border rounded-xl"
              style={{ height: 120, width: 290, backgroundColor: "#7aaff5" }}
            >
              <View className="flex-1">
                <View>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 18,
                      fontWeight: 600,
                      marginLeft: 10,
                      marginTop: 15,
                    }}
                  >
                    FreeCharge
                  </Text>
                </View>
                <View>
                  <View className="box-border" style={[styles.box]}></View>
                </View>
              </View>

              <Text
                style={{
                  color: "#fff",
                  marginLeft: 10,
                  fontSize: 12,
                  marginTop: 3,
                }}
              >
                Onion Pizza and Paprika Pizza is a savory and flavourful pizza
                made with a cripsy crust...
              </Text>

              <View className="flex-1">
                <View>
                  <Text
                    className="underline"
                    style={{
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: 12,
                      marginTop: 14,
                      marginLeft: 12,
                    }}
                  >
                    More Details
                  </Text>
                </View>
                <TouchableOpacity>
                  <View
                    className="box-border rounded-lg border  border-white"
                    style={{
                      marginLeft: 130,
                      marginTop: 13,
                      paddingTop: 3,
                      paddingLeft: 13,
                      paddingRight: 15,
                      paddingBottom: 3,
                    }}
                  >
                    <Text
                      style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}
                    >
                      Select
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View
              className="mt-5 ml-4 box-border rounded-xl"
              style={{ height: 120, width: 290, backgroundColor: "#c657eb" }}
            >
              <View className="flex-1">
                <View>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 18,
                      fontWeight: 600,
                      marginLeft: 10,
                      marginTop: 15,
                    }}
                  >
                    FreeCharge
                  </Text>
                </View>
                <View>
                  <View className="box-border" style={[styles.box]}></View>
                </View>
              </View>

              <Text
                style={{
                  color: "#fff",
                  marginLeft: 10,
                  fontSize: 12,
                  marginTop: 3,
                }}
              >
                Onion Pizza and Paprika Pizza is a savory and flavourful pizza
                made with a cripsy crust...
              </Text>

              <View className="flex-1">
                <View>
                  <Text
                    className="underline"
                    style={{
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: 12,
                      marginTop: 14,
                      marginLeft: 12,
                    }}
                  >
                    More Details
                  </Text>
                </View>
<TouchableOpacity>
                <View
                  className="box-border rounded-lg border  border-white"
                  style={{
                    marginLeft: 130,
                    marginTop: 13,
                    paddingTop: 3,
                    paddingLeft: 13,
                    paddingRight: 15,
                    paddingBottom: 3,
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}
                  >
                    Select
                  </Text>
                </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          <Text className="mt-6 ml-5" style={{ fontSize: 18, fontWeight: 700 }}>
            Cheesy Rewards
          </Text>

          <View
            className="mt-5 ml-4 box-border border border-slate-300 rounded-xl"
            style={{ height: 190, width: 330 }}
          >
            <View className="flex-1">
              <View>
                <Image
                  source={imagePath.icButGet}
                  style={{
                    height: 80,
                    width: 85,
                    marginLeft: 15,
                    marginTop: 30,
                  }}
                />
              </View>
              <View style={[styles.line]}></View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    marginLeft: 10,
                    marginTop: 30,
                  }}
                >
                  ProxInfotexh Rewards
                </Text>
                <Text
                  style={{
                    marginLeft: 11,
                    marginTop: 7,
                    fontSize: 12,
                    color: "#a5a2a6",
                  }}
                >
                  1 Website = 100 Points
                </Text>
                <Text
                  style={{
                    marginLeft: 11,
                    marginTop: 5,
                    fontSize: 12,
                    color: "#a5a2a6",
                  }}
                >
                  3 Web apps = 1000 * 10 Points
                </Text>
              </View>
            </View>

            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: "#dcdce0",
                width: "85%",
                marginLeft: 20,
                marginTop: 10,
                height: 1,
              }}
            ></View>

            <View className="flex-1">
              <View>
                <Text
                  style={{
                    marginLeft: 10,
                    marginTop: 20,
                    color: "#1e22fa",
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                >
                  Enroll now & start collecting points
                </Text>
              </View>

              <TouchableOpacity>
                <View
                  className="box-border rounded-md"
                  style={{
                    height: 30,
                    width: 75,
                    marginTop: 15,
                    marginLeft: 35,
                    backgroundColor: "#e3150e",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      padding: 5,
                      color: "#fff",
                    }}
                  >
                    Enroll Now
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    marginTop: 23,
    marginLeft: 20,
    height: 210,
    width: 260,
    borderRadius: 25,
  },

  box: {
    height: 30,
    width: 96,
    marginTop: 1,
    marginLeft: 90,
    backgroundColor: "#fff",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
  },
  line: {
    borderLeftWidth: 1,
    borderLeftColor: "#dcdce0",
    height: 100,
    marginLeft: 15,
    marginTop: 20,
  },
  buttonStyle: {
    height: 23,
    width: 65,
    marginTop: 18,
    marginLeft: 30,
    borderRadius: 10,
  },
});
