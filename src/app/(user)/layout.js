

import '../styles/globals.css'


export default function UserLayout({ children }) {
  return (
    <html lang="en">
      <body >
      
          <section >
              <h1 className={'text-center'}> just user Routes</h1>
          </section>
        {children}
      </body>
    </html>
  );
}
