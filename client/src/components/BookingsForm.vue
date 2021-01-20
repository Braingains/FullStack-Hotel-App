<template>
  <form id="bookings-form" v-on:submit="saveBooking" method="post">
      <h1>🏴‍☠️🏴‍☠️🏴‍☠️ Add a Shipmate 🏴‍☠️🏴‍☠️🏴‍☠️</h1>
    <div class="inputForm">
      <label for="name">What be the name?:</label>
      <input type="text" id="name" v-model="name" required/>
    </div>
    <div class="inputForm">
      <label for="email">Pigeon ID:</label>
      <input type="email" id="email" v-model="email" required/>
    </div>
    <div class="inputForm">
      <label for="checkinTrue">On board</label>
      <input type="radio" id="checkinTrue" v-model="checkin" :value="true">
      <label for="checkinFalse">Overboard</label>
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
<style lang="css" scoped>
input{
  background-color: burlywood;
}
#save{
        border-radius: 20px;
        background-color: burlywood;
}
.inputForm{
        

}

</style>