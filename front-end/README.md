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
- mx-auto : margin-left: auto and margin-right: auto which put it in the center.
- [`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6`](https://tailwindcss.com/docs/grid-template-columns):
  - grid: by default this will be grid display opposite of flex.
  - grid-cols-1: for mobile design it will only have one column.
  - sm:grid-cols-2: for smallers screen it will have two.
  - lg:grid-cols-3: for largeers screen it will have three.
  - gap-3: for mobile design it will

#### For SSR(Service side rendering):

- we are introducing a function where it will fetch data (posts) from sanityClient and then will return it, we will use that props into Home. In typescript we can't just pass props into component we have to define types first.

- posts:[Post] - means that the type of posts will be as it described in the Post interface.

#### How to make dynamic pages whenever a user requst - [slug]

- We are going to use a technic where once a user requests a page it will be pre-fetched and made and then cached for further request by other users. we are going to use a sepcial function `getStaticPaths`, this will allow nextJs which routes it to a page that is pre-fecthed and pre-built in advance.

- Create `post` directory in the `/pages` folder and then create a file `{slug}.tsx`. This means from a url perspective: `/pages/post/{slug}`. now slug can be any dynamic value for a page.

- once we click on the submit button it will post the data to the api link. we can use the built-in server in next.js
