import {defineField, defineType} from 'sanity'

export const especialType = defineType({
  name: 'especial',
  title: 'Especiales',
  type: 'document',

  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'artista',
      title: 'Artista / Banda',
      type: 'string',
    }),

    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          {title: 'Especial', value: 'Especial'},
          {title: 'Biografía', value: 'Biografía'},
          {title: 'Ranking', value: 'Ranking'},
          {title: 'Aniversario', value: 'Aniversario'},
        ],
      },
    }),

    defineField({
      name: 'imagen',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'descripcion',
      title: 'Descripción corta',
      type: 'text',
      rows: 3,
    }),

    defineField({
  name: 'contenido',
  title: 'Contenido',
  type: 'array',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}),

    defineField({
      name: 'destacado',
      title: 'Artículo destacado',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: 'titulo',
      subtitle: 'artista',
      media: 'imagen',
    },
  },
})