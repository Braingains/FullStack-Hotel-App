<template>
  <div>
    <bookings-form/>
    </div>
</template>

<script>
import BookingService from './services/BookingService.js'
import BookingsForm from './components/BookingsForm.vue'

export default {
  name: "app",
  components: {
    'bookings-form': BookingsForm
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