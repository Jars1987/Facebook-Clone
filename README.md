# Next.js + Tailwind + Next Auth FacebooK Clone

Another clone, this time facebook clone in order to understand Next Auth
application.

Take outs:

- NextAuth makes it really simple to implement authentication have to have acess
  to a session
- When deploying the OAuth application URI for facebook using Next Auth should
  use the following url :
  https://yourappname.vercel.app/api/auth/callback/facebook
- It was a good practice for debuging and ended up needing to downgrade firebase
  to 9.1.2 to be able to deploy it properly
- Next Auth needs a secret to be able to use it in production (I generated one
  randomly in my terminal with openssl rand -base64 32)
- It was fun to practice how to convert images to base64 and than upload it to
  firebase storage, save the firebase url for the image in the firebase db
  firestore so that we can use it whenever we want

Check the demo here: https://facebook-clone-qro42ebvv-jars1987.vercel.app/
