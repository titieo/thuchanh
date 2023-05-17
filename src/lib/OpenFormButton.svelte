<script>
	export let visible, additionalClasses;
</script>

<button
	class="absolute bottom-2 right-2 rounded-full cursor-pointer text-white p-2 w-14 h-14 flex-center {additionalClasses}"
	on:click={() => (visible = true)}
	><svg
		xmlns="http://www.w3.org/2000/svg"
		width="32"
		height="32"
		viewBox="0 0 24 24"
		><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" /></svg
	></button
>
