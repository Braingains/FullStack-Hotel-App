<template>
<div class="booking">
    <h2>{{ booking.name }} </h2>
    <p> {{ booking.email}} </p>
    <div class="checkinUpdate">
    <form id='checkinUpdate' v-on:submit="changeStatus">
      <label for="checkinTrue">Checked in</label>
      <input type="radio" id="checkinTrue" v-model="booking.checkin" :value="true">
      <label for="checkinFalse">Not Checked in</label>
      <input type="radio" id="checkinFalse" v-model="booking.checkin" :value="false">
      <button type="submit" value="Save">Confirm Check-in details</button>
    </form>
    </div>
    <button v-on:click='deleteBooking'>Delete Booking</button>
</div>
</template>

<script>
import BookingService from '@/services/BookingService.js'
import { eventBus } from '@/main.js'
export default {
    name: 'booking',
    props: ['booking'],
    methods: {
        changeStatus(){    
            // e.preventDefault;
            // const updatedBooking = this.booking;         
            if(this.booking.checkin === true){
                this.booking.checkin = false
            }else {
                this.booking.checkin = true
            }
            // BookingService.updateBooking(this.booking._id, updatedBooking)
            eventBus.$emit('booking-updated', this.booking._id, this.booking)
        },

        deleteBooking(){
            BookingService.deleteBooking(this.booking._id)
            .then(() => eventBus.$emit('booking-deleted', this.booking._id))
        }
    }

}
</script>

<style lang="css">
    .booking{
        margin: 20px;
        background-color: rgb(174, 93, 50);
        border-radius: 20px;
        text-align: center;
        border-style: groove;
        width: fit-content;
    }

    button {
        border-radius: 20px;
        background-color: burlywood;
    }


</style>