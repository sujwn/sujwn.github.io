<script lang="ts">
  export let label: string;
</script>

<span class="badge">{label}</span>

<style>
  .badge {
    display: inline-block;
    padding: 4px 10px;
    font-size: 12px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text-muted);
  }
</style>
