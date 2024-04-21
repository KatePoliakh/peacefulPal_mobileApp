import AsyncStorage from "@react-native-async-storage/async-storage";

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