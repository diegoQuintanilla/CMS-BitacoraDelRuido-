import {defineField, defineType} from 'sanity'

export const noticiaType = defineType({
  name: 'noticia',
  title: 'Noticias',
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
      name: 'fecha',
      title: 'Fecha',
      type: 'date',
      options: {
        dateFormat: 'DD/MM/YYYY',
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          {title: 'Noticias', value: 'Noticias'},
          {title: 'Lanzamientos', value: 'Lanzamientos'},
          {title: 'Festivales', value: 'Festivales'},
          {title: 'Entrevistas', value: 'Entrevistas'},
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
      validation: Rule => Rule.max(200),
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
      name: 'destacada',
      title: '¿Es noticia destacada?',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: 'titulo',
      media: 'imagen',
      subtitle: 'categoria',
    },
  },
})