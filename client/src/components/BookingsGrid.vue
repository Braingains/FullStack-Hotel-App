<template>
    <div class="bookings-grid">
        <booking v-for="booking in bookings" :booking="booking" />
    </div>
  
</template>

<script>
import BookingService from '@/services/BookingService.js'
import { eventBus } from '@/main.js'
import Booking from './Booking.vue'

export default {
    name: 'bookings-grid',
    components: {
        'booking': Booking
    },
    data() {
        return {
            bookings: []
        }
    },
    mounted(){
        BookingService.getBookings().then(bookings => this.bookings = bookings)

        eventBus.$on('booking-added', (booking) => {
            this.bookings.push(booking)
        })

        eventBus.$on('booking-deleted', (id) => {
            let index = this.bookings.findIndex(booking => booking._id === id)
            this.bookings.splice(index, 1)
        })

        // eventBus.$on('booking-updated', (id, booking) => {
        //     // let index = this.bookings.findIndex(booking => booking._id === id)
        //     // this.booking = booking;
        //     const updatedBooking = {...booking, checkin = !booking.checkin};
        //     BookingService.updateBooking(updatedBooking)
        //     const index = this.bookings.findIndex(booking => booking._id === updatedBooking._id);
        //     this.bookings.splice(index, 1, updatedBooking);
        // })

        eventBus.$on('booking-updated', booking => {
         const updatedBooking = {
        ...booking,
        checked_in: !booking.checked_in
         };
         BookingService.updateBooking(updatedBooking);
        const index = this.bookings.findIndex(booking => booking._id === updatedBooking._id);
        this.bookings.splice(index, 1, updatedBooking);
        });



}
}
</script>

<style lang="css" scoped>
    .bookings-grid {
        display: flex;
        flex-wrap: wrap;
        margin: 20px;
        color: black;
        justify-content: space-evenly;


    }

</style>