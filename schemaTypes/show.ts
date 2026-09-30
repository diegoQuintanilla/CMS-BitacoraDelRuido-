import {defineField, defineType} from 'sanity'

export const showType = defineType({
  name: 'show',
  title: 'Shows',
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
      validation: Rule => Rule.required(),
    }),

    defineField({
  name: 'categoria',
  title: 'Categoría',
  type: 'string',
  options: {
    list: [
      { title: 'Rock', value: 'Rock' },
      { title: 'Metal', value: 'Metal' },
      { title: 'Festival', value: 'Festival' },
      { title: 'Internacional', value: 'Internacional' },
    ],
  },
}),

    defineField({
      name: 'fecha',
      title: 'Fecha',
      type: 'date',
      validation: Rule => Rule.required(),
    }),

    defineField({
  name: 'hora',
  title: 'Hora',
  type: 'string',
}),

    defineField({
      name: 'lugar',
      title: 'Lugar',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'ciudad',
      title: 'Ciudad',
      type: 'string',
    }),

    defineField({
  name: 'precio',
  title: 'Precio',
  type: 'string',
}),

defineField({
  name: 'estado',
  title: 'Estado',
  type: 'string',
  options: {
    list: [
      { title: 'Disponible', value: 'Disponible' },
      { title: 'Últimas entradas', value: 'Últimas entradas' },
      { title: 'Agotado', value: 'Agotado' },
    ],
  },
}),

    defineField({
      name: 'imagen',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'linkEntradas',
      title: 'Link para entradas',
      type: 'url',
    }),

    defineField({
      name: 'destacado',
      title: 'Show destacado',
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
})