<script>
  export let recommendation;

  const articleName = recommendation._embedded["o:variation"].name;
  const price = (recommendation._embedded["o:variation"].pricing.retailPrice / 100).toFixed(2);
</script>


<li>
  <p>{ articleName }</p>
  <p>{ price }</p>
</li>
