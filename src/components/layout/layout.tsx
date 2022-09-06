import React from 'react'
import Footer from '@components/Footer/footer'
import Header from '@components/Header/header'
type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div>
        <Header/>
            {children}
         <Footer/>
    </div>
  )
}

export default Layout