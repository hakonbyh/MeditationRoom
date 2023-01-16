import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


const AvailableTimeSlots = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    // Call an API or function to get available time slots for the selected date
    //const newTimeSlots = getAvailableTimeSlots(day.dateString);
    const newTimeSlots = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]
    setAvailableTimeSlots(newTimeSlots);
  }

  const onTimeSlotPress = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  }

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Calendar 
        onDayPress={onDayPress}
        markedDates={{ [selectedDate]: { selected: true } }}
      />
      <View style={styles.timeSlotsContainer}>
        {availableTimeSlots.map((timeSlot) => (
          <TouchableOpacity 
            key={timeSlot} 
            style={[styles.timeSlot, selectedTimeSlot === timeSlot && styles.selectedTimeSlot]}
            onPress={() => onTimeSlotPress(timeSlot)}
          >
            <Text>{timeSlot}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeSlot: {
    backgroundColor: '#eee',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  selectedTimeSlot: {
    backgroundColor: '#00b894'
  },
});

export default AvailableTimeSlots;
