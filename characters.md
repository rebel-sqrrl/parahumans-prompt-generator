---
---
<style>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 0;
}
li {
    align-self: center;
}
</style>
<div>
{% assign groups = "Undersiders, Breakthrough" | split: ", " %}
{% assign chars_groups = site.data.characters | map: "groups" %}
{% for char_groups in chars_groups %}
    {% assign groups = groups | concat: char_groups %}
{% endfor %}
{% for group in groups %}
    <h2>{{ group }}</h2>
    <ul>
    {% for character in site.data.characters %}
        {% if character.groups contains group %}
            <li>
            {% assign num_cape_names = character.cape_name | size %}
            {% if character.name != "" and num_cape_names > 0 %}
                {{ character.name }} ({{ character.cape_name | join: ", " }})
            {% elsif character.name != "" %}
                {{ character.name }}
            {% else %}
                {{ character.cape_name | join: "," }}
            {% endif %}
            </li>
        {% endif %}
    {% endfor %}
    </ul>
{% endfor %}
    <h2>Other</h2>
    <ul>
    {% for character in site.data.characters %}
        {% assign num_groups = character.groups | size %}
        {% if num_groups == 0 %}
            <li>
            {% assign num_cape_names = character.cape_name | size %}
            {% if character.name != "" and num_cape_names > 0 %}
                {{ character.name }} ({{ character.cape_name | join: ", " }})
            {% elsif character.name != "" %}
                {{ character.name }}
            {% else %}
                {{ character.cape_name | join: "," }}
            {% endif %}
            </li>
        {% endif %}
    {% endfor %}
    </ul>
</div>