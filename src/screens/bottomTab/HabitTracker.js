import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { Ionicons, Feather, EvilIcons, FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BottomModal, ModalTitle, SlideAnimation, ModalContent} from "react-native-modals";
import { useFocusEffect } from "@react-navigation/native";



const HabitTracker = () => {
  /*const [option, setOption] = useState("Today");
  const navigation = useNavigation();
  const [habits, setHabits] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState();
  const currentDay = new Date()
    .toLocaleDateString("en-US", { weekday: "short" })
    .slice(0, 3);

  useEffect(() => {
    fetchHabits();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchHabits();
    }, [])
  );

  const fetchHabits = async () => {
    try {
      const habitsData = await AsyncStorage.getItem("habits");
      if (habitsData !== null) {
        setHabits(JSON.parse(habitsData));
      }
    } catch (error) {
      console.log("error fetching habits", error);
    }
  };

  const saveHabits = async (updatedHabits) => {
    try {
      await AsyncStorage.setItem("habits", JSON.stringify(updatedHabits));
    } catch (error) {
      console.log("error saving habits", error);
    }
  };

  const handleLongPress = (habitId) => {
    const selectedHabit = habits?.find((habit) => habit._id == habitId);
    setSelectedHabit(selectedHabit);
    setModalVisible(true);
  };

  const handleCompletion = async () => {
    try {
      const habitId = selectedHabit?._id;
      const updatedCompletion = {
        ...selectedHabit?.completed,
        [currentDay]: true,
      };

      const updatedHabits = habits.map((habit) =>
        habit._id === habitId ? { ...habit, completed: updatedCompletion } : habit
      );

      await saveHabits(updatedHabits);
      setHabits(updatedHabits);
      setModalVisible(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const deleteHabit = async () => {
    try {
      const habitId = selectedHabit._id;
      const updatedHabits = habits.filter((habit) => habit._id !== habitId);
      await saveHabits(updatedHabits);
      setHabits(updatedHabits);
      setModalVisible(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getCompletedDays = (completedObj) => {
    if (completedObj && typeof completedObj === "object") {
      return Object.keys(completedObj).filter((day) => completedObj[day]);
    }
    return [];
  };

  const filteredHabits = habits?.filter((habit) => {
    return !habit.completed || !habit.completed[currentDay];
  });

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Ionicons name="logo-foursquare" size={27} color="black" />
          <AntDesign
            onPress={() => navigation.navigate('Habit')}
            name="plus"
            size={24}
            color="black"
          />
        </View>

        <Text style={{ marginTop: 5, fontSize: 23, fontWeight: "500" }}>
          Habits
        </Text>

      
                      <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginVertical: 8,
              }}
            >
              <TouchableOpacity
                onPress={() => setOption("Today")}
                style={{
                  backgroundColor: option == "Today" ? "#E0FFFF" : "transparent",
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  borderRadius: 25,
                }}
              >
                <Text style={{ textAlign: "center", color: "gray", fontSize: 14 }}>
                  Today
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setOption("Weekly")}
                style={{
                  backgroundColor: option == "Weekly" ? "#E0FFFF" : "transparent",
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  borderRadius: 25,
                }}
              >
                <Text style={{ textAlign: "center", color: "gray", fontSize: 14 }}>
                  Weekly
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setOption("Overall")}
                style={{
                  backgroundColor: option == "Overall" ? "#E0FFFF" : "transparent",
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  borderRadius: 25,
                }}
              >
                <Text style={{ textAlign: "center", color: "gray", fontSize: 14 }}>
                  Overall
                </Text>
              </TouchableOpacity>
            </View>

            {option == "Today" &&
              (filteredHabits?.length > 0 ? (
                <View>
                  {filteredHabits?.map((item, index) => (
                    <TouchableOpacity
                      key={item._id}
                      onLongPress={() => handleLongPress(item._id)}
                      style={{
                        marginVertical: 10,
                        backgroundColor: item?.color,
                        padding: 12,
                        borderRadius: 24,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "500",
                          color: "white",
                        }}
                      >
                        {item?.title}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ) : (
                <View
                  style={{
                    marginTop: 150,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "auto",
                  }}
                >
                  <Image
                    style={{ width: 60, height: 60, resizeMode: "cover" }}
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/128/10609/10609386.png",
                    }}
                  />

                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                      marginTop: 10,
                    }}
                  >
                    No habits for today
                  </Text>

                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                      marginTop: 10,
                    }}
                  >
                    No habits for today.Create one?
                  </Text>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('')}
                    style={{
                      backgroundColor: "#0071c5",
                      marginTop: 20,
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <Text>Create</Text>
                  </TouchableOpacity>
                </View>
              ))}

            {option == "Weekly" && (
              <View>
                {habits?.map((habit, index) => (
                  <TouchableOpacity
                    key={habit._id}
                    style={{
                      marginVertical: 10,
                      backgroundColor: habit.color,
                      padding: 15,
                      borderRadius: 24,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{ fontSize: 15, fontWeight: "500", color: "white" }}
                      >
                        {habit.title}
                      </Text>
                      <Text style={{ color: "white" }}>{habit.repeatMode}</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        marginVertical: 10,
                      }}
                    >
                      {days?.map((day, item) => {
                        const isCompleted = habit.completed && habit.completed[day];

                        return (
                          <TouchableOpacity key={day}>
                            <Text
                              style={{
                                color: day === currentDay ? "red" : "white",
                              }}
                            >
                              {day}
                            </Text>
                            {isCompleted ? (
                              <FontAwesome
                                name="circle"
                                size={24}
                                color="white"
                                style={{ marginTop: 12 }}
                              />
                            ) : (
                              <Feather
                                name="circle"
                                size={24}
                                color="white"
                                style={{ marginTop: 12 }}
                              />
                            )}
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}

              {option === "Overall" && (
                <View>
                  {habits?.map((habit, index) => (
                    <View key={habit._id}>
                      <TouchableOpacity
                        style={{
                          marginVertical: 10,
                          backgroundColor: habit.color,
                          padding: 15,
                          borderRadius: 24,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "500",
                              color: "white",
                            }}
                          >
                            {habit.title}
                          </Text>
                          <Text style={{ color: "white" }}>{habit.repeatMode}</Text>
                        </View>
                      </TouchableOpacity>

                      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 15 }}>
                        <Text>Completed On</Text>
                        <Text>{getCompletedDays(habit.completed).join(", ")}</Text>
                      </View>
                    </View>
                  ))}
                </View>
              )}

      </ScrollView>

      <BottomModal
        onBackdropPress={() => setModalVisible(!isModalVisible)}
        onHardwareBackPress={() => setModalVisible(!isModalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        modalTitle={<ModalTitle title="Choose Option" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        visible={isModalVisible}
        onTouchOutside={() => setModalVisible(!isModalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 280 }}>
          <View style={{ marginVertical: 10 }}>
            <Text>Options</Text>
            <TouchableOpacity
              onPress={handleCompletion}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                marginTop: 10,
              }}
            >
              <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color="black"
              />
              <Text>Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                marginTop: 10,
              }}
            >
              <Feather name="skip-forward" size={24} color="black" />
              <Text>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                marginTop: 12,
              }}
            >
              <Feather name="edit-2" size={24} color="black" />
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                marginTop: 12,
              }}
            >
              <EvilIcons name="archive" size={24} color="black" />
              <Text>Archive</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={deleteHabit}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                marginTop: 12,
              }}
            >
              <AntDesign name="delete" size={24} color="black" />
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        </ModalContent>
      </BottomModal>
      </SafeAreaView>
  );
  */
};

export default HabitTracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  habitCard: {
    marginVertical: 10,
    backgroundColor: "red",
    padding: 15,
    borderRadius: 24,
  },
  habitTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "white",
  },
  habitRepeatMode: {
    color: "white",
  },
  daysContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  dayText: {
    color: "white",
  },
  circleIcon: {
    marginTop: 12,
  },
  completedDaysContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  completedDaysText: {
    color: "white",
  },
  completedDays: {
    color: "white",
  },
  modalContent: {
    width: "100%",
    height: 280,
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 10,
  },
  optionText: {
    marginLeft: 12,
  },
  modalTitle: {
    marginVertical: 10,
  },
  modal: {
    width: "100%",
    height: 280,
  },
  modalOptions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 10,
  },
  modalOptionText: {
    marginLeft: 12,
  },
});
