import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Button } from 'react-native-paper';
import moment from 'moment';
import { theme } from '../core/theme'


export default function BookScreen ({ navigation }) {
  const currentDate = moment().format('YYYY-MM-DD')
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const onTimeSlotPress = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  }

  const onBookNowPress = () => {
    // Code to handle the booking
    console.log('Booking', selectedTimeSlot);
    Alert.alert(
      'Booking Confirmed',
      'Your booking has been confirmed at '+selectedTimeSlot+'!',
      [{
        text: 'OK',
        onPress: () => navigation.navigate("Home")
      }]);
  }

  

  return (
    <SafeAreaView>
    <View>
      <Calendar 
        onDayPress={onDayPress}
        markedDates={{ [selectedDate]: { selected: true } }}
        minDate={currentDate}
        maxDate={maxDate}
      />
      <View style={styles.timeSlotsContainer}>
        {availableTimeSlots.map((timeSlot) => (
          <TouchableOpacity 
            key={timeSlot} 
            style={[styles.timeSlot, selectedTimeSlot === timeSlot && styles.selectedTimeSlot]}
            onPress={() => onTimeSlotPress(timeSlot)}
          >
            <Text style={selectedTimeSlot === timeSlot && styles.selectedTimeSlot}>{timeSlot}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button
        style={{alignSelf: 'center', backgroundColor: theme.colors.primary}}
        labelStyle={{ color: "white"}}
        mode="contained"
        disabled={!selectedTimeSlot}
        onPress={onBookNowPress}
      >
        Book Now
      </Button>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  timeSlotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 30,
  },
  timeSlot: {
    backgroundColor: '#eee',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  selectedTimeSlot: {
    backgroundColor: theme.colors.primary,
    color: "white"
  },
});