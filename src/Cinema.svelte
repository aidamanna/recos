<script>
  import * as cinemaClient from './clients/cinemaClient.js';

  let disabled = false;

  const handleGetRecosClick = async () => {
    disabled = true;
  }

</script>

<button on:click={ handleGetRecosClick } { disabled }>Get recos</button>

<style>

</style>