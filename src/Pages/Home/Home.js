import React from 'react'
import Head from '../../components/Head/Head'
import Login from '../../components/Login'
import './Home.css'
// import brlLogo from '../assets/brlLogo2.png'

const Home = () => {
  const brlLogo = "/assets/brlLogo2.png"
  return (
    <section className='homeSection'>
        <Head />
        <article className='flex justify-center items-center gap-10 homeScreen mx-20 py-2'>
          <div className='instruction flex flex-col items-center gap-4 w-2/6'>
            <h1 className='text-3xl'>INSTRUCTIONS</h1>
            <div className=''>
              <li>You will be provided with a set of schemas, of which you have to choose one and develop it.</li>
              <li>You have to develop the UI entirely on this platform.</li>
              <li>You can not change the choice of your schema.</li>
              <li>You have to use HTML and CSS to develop the User Interface.</li>
              <li>You can preview your schema during in the development mode.</li>
              <li>All the assets used in the UI schema will be provided in the portal itself.</li>
              <li>You can check your score in real time, and check your standings at the leaderboard.</li>
              <li>You won’t be able to make any changes in your tasks after the final submission.</li>
            </div>
          </div>
          <div id='line'></div>
          <div className='login-container flex flex-col items-center pl-10'>
            <img className='logo' src={brlLogo} alt='BRL Logo' />
            <Login />
          </div>
        </article>
    </section>
  )
}

export default Home