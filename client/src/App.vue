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
@import url('https://fonts.googleapis.com/css2?family=Pirata+One&display=swap');
  body{
font-family: 'Pirata One', cursive;  
background-image: url("https://www.thoughtco.com/thmb/mxLdjXG9JyTPYsi44KyNFoU4hV0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/-mayflower-ii-replica-at-sunset--massachusetts--73068552-59c4643ac412440010f73d33.jpg");
background-repeat: no-repeat;
background-size: 100%;
text-align: center;
}

</style>