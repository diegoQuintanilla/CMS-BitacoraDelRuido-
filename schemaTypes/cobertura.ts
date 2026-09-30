import {defineField, defineType} from 'sanity'

export const coberturaType = defineType({
  name: 'cobertura',
  title: 'Coberturas',
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
      name: 'banda',
      title: 'Banda / Artista',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'fecha',
      title: 'Fecha',
      type: 'date',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'lugar',
      title: 'Lugar',
      type: 'string',
    }),

    defineField({
  name: "categoria",
  title: "Categoría",
  type: "string",
  options: {
    list: [
      { title: "Recital", value: "Recital" },
      { title: "Festival", value: "Festival" },
      { title: "Cobertura Especial", value: "Cobertura Especial" },
      { title: "Show Internacional", value: "Show Internacional" },
      { title: "Show Nacional", value: "Show Nacional" },
    ],
    layout: "dropdown",
  },
  initialValue: "Recital",
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
      name: 'galeria',
      title: 'Galería',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
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
      name: 'videoYoutube',
      title: 'Video de YouTube (opcional)',
      type: 'url',
    }),

    defineField({
      name: 'destacada',
      title: 'Cobertura destacada',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: 'titulo',
      subtitle: 'banda',
      media: 'imagen',
    },
  },
})