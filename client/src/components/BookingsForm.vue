<template>
  <form id="bookings-form" method="post">
      <h2> Add Booking </h2>
    <div class="inputForm">
      <label for="name">Name:</label>
      <input type="text" id="name" required/>
    </div>
    <div class="inputForm">
      <label for="email">Email:</label>
      <input type="email" id="email" required/>
    </div>
    <div class="inputForm">
      <label for="checkinTrue">Checked in</label>
      <input type="radio" id="checkinTrue" name="checkin" value="checked in">
      <label for="checkinFalse">Not Checked in</label>
      <input type="radio" id="checkinFalse" name="checkin" value="not checkeded in">
    </div>
  </form>
  


</template>

<script>
export default {
    name: 'bookings-form',
    methods: {

    }
}
</script>

<style>

</style>