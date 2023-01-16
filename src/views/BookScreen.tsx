import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import moment from 'moment';

const AvailableTimeSlots = () => {
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  const maxDate = moment().add(2, 'weeks').format('YYYY-MM-DD');
  
  useEffect(() => {
    onDayPress({ dateString: selectedDate });
  }, []);

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    // Call an API or function to get available time slots for the selected date
    //const newTimeSlots = getAvailableTimeSlots(day.dateString);
    const newTimeSlots = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]
    setAvailableTimeSlots(newTimeSlots);
  }

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Calendar 
        onDayPress={onDayPress}
        markedDates={{ [selectedDate]: { selected: true } }}
        maxDate={maxDate}
      />
      <View style={styles.timeSlotsContainer}>
        {availableTimeSlots.map((timeSlot) => (
          <TouchableOpacity key={timeSlot} style={styles.timeSlot}>
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
});

export default AvailableTimeSlots;