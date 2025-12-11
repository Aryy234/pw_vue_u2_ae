<template>
  <div>
    <img
      src="https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif"
      alt="NO se encontró la imagen"
    />
    <div class="pregunta-container">
      <input type="text" placeholder="Hazme una pregunta" />
      <p>Recuerda terminar con el signo de interrogación (?)</p>
      <h2>Sere millonario?</h2>
      <h1>YES, NO</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
img {
  height: 100vh;
  width: 100vw;
  left: 200px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
}

.pregunta-container {
  position: relative;
  min-height: 100vh; /* altura de toda la pantalla */
  display: flex;
  /*flex-direction: column;*/ /* elementos uno debajo del otro */
  justify-content: center; /* centrado vertical */
  align-items: center; /* centrado horizontal */
  text-align: center;
  color: white;
}

input {
    width: 300px;
    padding: 10px 15px;
    border-radius: 25px;
    border: none;
}

unput:focus {
    outline: none;
}

p {
    margin-top: 10px;
    margin-bottom: 40px;
    font-size: 14px;
    color: #dddddd;
}

h2 {
    font-size: 32px;
    margin-bottom: 20px;
}
</style>