<script>
  import * as cinemaClient from './clients/cinemaClient.js';

  let disabled = false;
  let fetchCinema;

  const handleGetRecosClick = async () => {
    disabled = true;

    fetchCinema = cinemaClient.getCinemaJson();
  }

</script>

<button on:click={ handleGetRecosClick } { disabled }>Get recos</button>
{#if disabled}
  {#await fetchCinema then cinema}
    <h1>{ cinema.headline }</h1>
  {/await}
{/if}

<style>

</style>