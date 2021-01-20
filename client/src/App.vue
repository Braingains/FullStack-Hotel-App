<template>
  <div>
    <p>APP.VUE</p>
    </div>
</template>

<script>
import BookingService from './services/BookingService.js'
export default {
  name: "app",
  data() {
    return {
      bookings: []
    };
  },
  mounted() {
    this.fetchBookings();
  },

  methods: {
    fetchBookings(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }

}
</script>

<style>

</style>