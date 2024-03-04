import React from 'react'
import image1 from '../pages/Images/StoryStroll.png'

const About = () => {
  return (
    <div>
      <div className='py-40 bg-black text-white text-center px-4'>
        <h1 className='font-bold text-5xl lg:text-7xl leading-snug mb-5'>About Us</h1>
      </div>
      <div className='max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 py-10'>
        <div className=''>
          <p>Welcome to StoryStroll, your digital haven for captivating narratives and thought-provoking tales.
            At StoryStroll, we believe in the power of stories to inspire, entertain, and connect us.
          </p> <br />

          <p>
            Our mission is to curate and share the best stories from around the world, across genres and styles, to create a diverse and inclusive community of readers and writers. Whether you're a seasoned bookworm or just starting your literary journey, StoryStroll has something for everyone.
          </p>

          <p>
            From short stories and poetry to essays and book reviews, our blog is a treasure trove of literary delights. We're passionate about storytelling in all its forms, and we're committed to providing a platform for emerging writers to showcase their talent.
          </p> <br />

          <p>
            If you have a story to tell, we want to hear it! Join our community of avid readers and writers, and let your imagination take flight. Subscribe now to stay updated on our latest stories and embark on a literary adventure with us.
          </p> <br />

          <p>Thank you for visiting <a href="/"><span className=' font-bold'>Story</span><span className='text-orange-500 font-bold'>Stroll</span></a>. We hope you enjoy your stay!</p>
        </div>
        <div className='px-10 flex items-center justify-center'>
          <img src={image1} alt="" className='rounded h-[20rem] w-[20rem]' />
        </div>
      </div>
    </div>
  )
}

export default About
