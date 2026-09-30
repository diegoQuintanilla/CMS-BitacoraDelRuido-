import {defineType, defineArrayMember} from 'sanity'

export const blockContentType = defineType({
  name: 'blockContent',
  title: 'Contenido',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',

      styles: [
        {title: 'Párrafo', value: 'normal'},
        {title: 'Título 2', value: 'h2'},
        {title: 'Título 3', value: 'h3'},
        {title: 'Título 4', value: 'h4'},
        {title: 'Cita', value: 'blockquote'},
      ],

      lists: [
        {title: 'Viñetas', value: 'bullet'},
        {title: 'Numerada', value: 'number'},
      ],

      marks: {
        decorators: [
          {title: 'Negrita', value: 'strong'},
          {title: 'Cursiva', value: 'em'},
          {title: 'Subrayado', value: 'underline'},
        ],

        annotations: [
          {
            name: 'link',
            title: 'Enlace',
            type: 'object',
            fields: [
              {
                name: 'href',
                title: 'URL',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),

    defineArrayMember({
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})