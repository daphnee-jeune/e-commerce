## Full-stack e-commerce website
<img width="1326" alt="Screenshot 2025-04-08 at 10 13 30 AM" src="https://github.com/user-attachments/assets/3bc516ff-81be-435c-b208-e6dad353ce5c" />

### Tech stack
 Next JS 15 - for server side rendering and routing  
 Tailwind CSS - for quick and efficient styling and responsiveness  
 Typescript - for type safety across the codebase  
 Zustand - for a lighweight state management solution  
 Stripe - for payment processing  
 
### Summary
Through building this project, I've learned server side rendering and routing with Next JS. I learnd how to leverage Zustand to effeciently manage and update the state logic around adding, removing, clearing, and updating the cart item and the pricing information. That logic lives in one file *useCartStore* and the data and functions are distributed in each file as needed. There is also strong type safety to ensure correct inputs and outputs throughout the code. The styling is done with Tailwind CSS to ensure a smooth UI and responsiveness across devices. Lastly, I am leveraging Stripe as a payment processor for the checkout flow.

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# e-commerce
