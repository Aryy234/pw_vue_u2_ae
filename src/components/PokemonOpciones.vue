<template>
  <div class="opciones-container">
    <ul>
      <li>Pokemon 1</li>
      <li>Pokemon 2</li>
      <li>Pokemon 3</li>
      <li>Pokemon 4</li>
    </ul>
  </div>
</template>

<script>
export default {
 

}
</script>

<style>
  ul{
    list-style-type: none;
    padding: 0;
  }
  li{
    background-color: #f2f2f2;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .opciones-container li:hover {
    background-color: #e0e0e0;
  }

</style>