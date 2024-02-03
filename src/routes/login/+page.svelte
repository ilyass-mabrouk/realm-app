<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
</script>

<form
	action="?/auth:signin"
	method="POST"
	use:enhance={() => {
		return async ({ result }) => {
			if (result.type === 'success') {
				goto('/');
			}
		};
	}}
>
	<input type="text" placeholder="email" value="test@gmail.com" name="email" /><br />
	<input type="password" placeholder="password" value="123456" name="password" /><br />
	<button>Sign in</button>
</form>
