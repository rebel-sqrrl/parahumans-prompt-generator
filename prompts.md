---
---
<style>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 0;
}
li {
    align-self: center;
}
</style>
<p><i>Copied from the Gaylor prompt generator</i></p>
<ul>
{% for prompt in site.data.prompts %}
<li>
{% if prompt.incest %}
    [Incest]
{% endif %}
{% if prompt.nsfw %}
    [NSFW]
{% endif %}
    {{ prompt.name }}
</li>
{% endfor %}
</ul>