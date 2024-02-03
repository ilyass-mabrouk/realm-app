<script>
	export let data;

	const user = data.user;
</script>

{#if user}
	Connected user: {JSON.stringify(user)}
	<form method="POST" action="/logout">
		<button>Logout</button>
	</form>
{:else}
	Disconnected user <a href="/login">Login</a>
{/if}
