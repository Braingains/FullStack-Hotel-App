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

}
}
</script>

<style>

</style>