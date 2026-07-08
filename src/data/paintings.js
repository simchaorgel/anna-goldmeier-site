// Single source of truth for painting metadata.
// `file` matches the filename in src/assets/paintings/.
// Add the rest of the collection here (with real titles from Anna) when we build the Gallery page.
const raw = [
	{ file: '4.jpeg',  title: 'Serene Bay', medium: 'Oil on canvas' },
	{ file: '2.jpeg',  title: 'Sea of Flowers', medium: 'Oil on canvas' },
	{ file: '3.jpeg',  title: 'At the Kottel', medium: 'Oil on canvas' },
	{ file: '5.jpeg',  title: 'Vase of Daffodils', medium: 'Oil on canvas' },
	{ file: '6.jpeg',  title: 'Olive Grove, Galilee', medium: 'Oil on canvas' },
	{ file: '7.jpeg',  title: 'Tulips & Oranges', medium: 'Oil on canvas' },
	{ file: '17.jpeg', title: 'Kever Rochel', medium: 'Oil on canvas' },
	{ file: '9.jpeg',  title: 'Wildflowers', medium: 'Oil on canvas' },
	{ file: '10.jpeg',  title: 'The Western Wall', medium: 'Oil on canvas' },
	{ file: '11.jpeg',  title: 'Moshe in The Nile', medium: 'Oil on canvas' },
	{ file: '12.jpeg',  title: 'Orange Flower', medium: 'Oil on canvas' },
	{ file: '13.jpeg',  title: 'Spring Meadow', medium: 'Oil on canvas' },
	{ file: '14.jpeg', title: 'The White Cliffs', medium: 'Oil on canvas' },
	{ file: '15.jpeg', title: 'Deep Flowers', medium: 'Oil on canvas' },
	{ file: '16.jpeg', title: 'Oleh Regel', medium: 'Oil on canvas' },
	{ file: '8.jpeg',  title: 'Abstract Hills', medium: 'Oil on canvas' },
	{ file: '18.jpeg', title: 'Poppies, Valley Light', medium: 'Oil on canvas' },
	{ file: '19.jpeg', title: 'The Coloured Bay', medium: 'Oil on canvas' },
	{ file: '20.jpeg', title: 'Walking Home', medium: 'Oil on canvas' },
	{ file: '21.jpeg', title: 'The Content Tree', medium: 'Oil on canvas' },
	{ file: '22.jpeg', title: 'The Chafetz Chaim', medium: 'Oil on canvas' },
	{ file: '23.jpeg', title: 'Sea of Galilee', medium: 'Oil on canvas' },
	{ file: '1.jpeg',  title: 'Unusual Habitat', medium: 'Pencil' },
	{ file: '24.jpg', title: 'Evening Thoughts', medium: 'Oil on canvas' },
	{ file: '25.jpg', title: 'Season coming', medium: 'Oil on canvas' },
	{ file: '26.jpg', title: 'Kever Rachel', medium: 'Oil on canvas' },
	{ file: '27.jpg', title: 'The Tree of Life', medium: 'Oil on canvas' },
];

// Turn a title into a URL-friendly slug for the enquiry route (e.g. 'Tulips & Oranges' → 'tulips-and-oranges').
const slugify = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

// Public list — each painting gets a stable `slug` derived from its title.
export const paintings = raw.map((p) => ({ ...p, slug: slugify(p.title) }));

// Look up a painting's metadata by filename, or by slug (used by the enquiry route).
export const byFile = Object.fromEntries(paintings.map((p) => [p.file, p]));
export const bySlug = Object.fromEntries(paintings.map((p) => [p.slug, p]));

// Curated, ordered selections for the homepage (just filenames — titles come from the list above).
export const heroOrder = ['19.jpeg', '23.jpeg', '18.jpeg', '14.jpeg', '11.jpeg', '6.jpeg'];
export const selectedOrder = ['19.jpeg', '7.jpeg', '23.jpeg', '13.jpeg', '3.jpeg', '9.jpeg'];
