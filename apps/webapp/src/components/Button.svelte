<script>
  export let text = 'Button';
  export let onClick = () => {};
</script>

<button on:click={onClick} class="btn">{text}</button>

<style>
  .btn {
    padding: 0.5rem 1rem;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #2563eb;
  }
</style>
