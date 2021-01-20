<template>
  <div>
    <bookings-form/>
    <bookings-grid :bookings="bookings" />
    </div>
</template>

<script>
import BookingService from './services/BookingService.js'
import BookingsForm from './components/BookingsForm.vue'
import BookingsGrid from './components/BookingsGrid.vue'

export default {
  name: "app",
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  },

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