<template>
  <form id="bookings-form" v-on:submit="saveBooking" method="post">
      <h2> Add Booking </h2>
    <div class="inputForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required/>
    </div>
    <div class="inputForm">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required/>
    </div>
    <div class="inputForm">
      <label for="checkinTrue">Checked in</label>
      <input type="radio" id="checkinTrue" v-model="checkin" :value="true">
      <label for="checkinFalse">Not Checked in</label>
      <input type="radio" id="checkinFalse" v-model="checkin" :value="false">
    </div>
    <input type="submit" value="Save" id="save">
  </form>



</template>


<script>
import { eventBus } from '@/main.js'
import BookingService from '../services/BookingService';

export default {
    name: 'bookings-form',
    data() {
        return {
            name : "",
            email: "",
            checkin: false
        }
    },
    methods: {
        saveBooking(e) {
            e.preventDefault();
            const booking = {
                name: this.name,
                email: this.email,
                checkin: this.checkin
            };
            BookingService.postBooking(booking).then((res) => eventBus.$emit("booking-added", res))
        }

    }
}
</script>

<style>

</style>