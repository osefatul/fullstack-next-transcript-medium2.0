# Next.js + Tailwind CSS Example

Thats how we created this project repository:

- npx create-next-app --example with-tailwindcss with-tailwindcss-app

### index.jsx

- download Taiwind CSS intelliSense on Vscode for autocomplete
- IN TAILWIND WE START MOBILE FIRST DESIGN. EVERY DESIN WILL BE STARTED FOR MOBILE FIRST
- transcript is nothing but a javscript with specific type of variables.
- For [tailwind with nextjs](https://tailwindcss.com/docs/guides/nextjs)
- use div\*number to create a number of divs easily.
- [Width: w-44](https://tailwindcss.com/docs/width)- means the width: 11rem
- [Space: space-x-5](https://tailwindcss.com/docs/space)- space between 5px
- [Max-width: max-w-7xl](https://tailwindcss.com/docs/max-width)- maximuim width
- mx-auto : margin-left: auto and margin-right: auto

#### For SSR(Service side rendering):

- we are introducing a function where it will fetch data (posts) from sanityClient and then will return it, we will use that props into Home. In typescript we can't just pass props into component we have to define types first.

- posts:[Post] - means that the type of posts will as it described in the Post interface.
