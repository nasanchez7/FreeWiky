import { Poppins } from '@next/font/google'
import "../styles/globals.css"
import NavBar from './components/NavBar/NavBar'
const font = Poppins({ subsets: ['latin'], weight: ["300", "400", "500", "700", "900"] })

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body style={{backgroundColor: "white", display: "flex"}} className={font.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
