// Single source of truth for painting metadata.
// `file` matches the filename in src/assets/paintings/.
// Add the rest of the collection here (with real titles from Anna) when we build the Gallery page.
export const paintings = [
	{ file: '4.jpeg',  title: 'Serene Tree', medium: 'Oil on canvas' },
	{ file: '2.jpeg',  title: 'Sea of Flowers', medium: 'Oil on canvas' },
	{ file: '3.jpeg',  title: 'At the Kottel', medium: 'Oil on canvas' },
	{ file: '5.jpeg',  title: 'Vase of Flowers', medium: 'Oil on canvas' },
	{ file: '6.jpeg',  title: 'Olive Grove, Galilee', medium: 'Oil on canvas' },
	{ file: '7.jpeg',  title: 'Tulips & Oranges', medium: 'Oil on canvas' },
	{ file: '17.jpeg', title: 'Kever Rochel', medium: 'Oil on canvas' },
	{ file: '9.jpeg',  title: 'Wildflowers', medium: 'Oil on canvas' },
	{ file: '10.jpeg',  title: 'The Western Wall', medium: 'Oil on canvas' },
	{ file: '11.jpeg',  title: 'Reeds at the Water', medium: 'Oil on canvas' },
	{ file: '12.jpeg',  title: 'Orange Flower', medium: 'Oil on canvas' },
	{ file: '13.jpeg',  title: 'Spring Meadow', medium: 'Oil on canvas' },
	{ file: '14.jpeg', title: 'The White Cliffs', medium: 'Oil on canvas' },
	{ file: '15.jpeg', title: 'Deep Flowers', medium: 'Oil on canvas' },
	{ file: '16.jpeg', title: 'Oleh Regel', medium: 'Oil on canvas' },
	{ file: '8.jpeg',  title: 'Abstract Hills', medium: 'Oil on canvas' },
	{ file: '18.jpeg', title: 'Poppies, Valley Light', medium: 'Oil on canvas' },
	{ file: '19.jpeg', title: 'The Coloured Bay', medium: 'Oil on canvas' },
	{ file: '20.jpeg', title: 'Brothers and Sisters', medium: 'Oil on canvas' },
	{ file: '21.jpeg', title: 'The Content Tree', medium: 'Oil on canvas' },
	{ file: '22.jpeg', title: 'The Chafetz Chaim', medium: 'Oil on canvas' },
	{ file: '23.jpeg', title: 'Sea of Galilee', medium: 'Oil on canvas' },
	{ file: '1.jpeg',  title: 'Plant Life', medium: 'Pencil' },
];

// Look up a painting's metadata by filename.
export const byFile = Object.fromEntries(paintings.map((p) => [p.file, p]));

// Curated, ordered selections for the homepage (just filenames — titles come from the list above).
export const heroOrder = ['19.jpeg', '23.jpeg', '18.jpeg', '14.jpeg', '11.jpeg', '6.jpeg'];
export const selectedOrder = ['19.jpeg', '7.jpeg', '23.jpeg', '13.jpeg', '3.jpeg', '9.jpeg'];
