import React from 'react'

const Home = () => {
  return (
    <div>
       <div class="bg-gradient-to-r from-blue-900 to-purple-900 p-8 rounded-lg text-white">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="bg-blue-800 p-6 rounded-lg flex flex-col items-center text-center">
            <img src="https://placehold.co/100x100" alt="Profile Picture" class="rounded-full mb-4"/>
            <h2 class="text-xl font-bold">Arianne Quimpo</h2>
            <p class="text-sm">@arianne05</p>
            <p class="mt-2">A journey of a thousand miles begin with a single step</p>
            <button class="mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
        </div>
        
        <div class="md:col-span-2 bg-blue-800 p-6 rounded-lg">
            <h1 class="text-3xl font-bold">Welcome Arianne!</h1>
            <p class="mt-2">Graduate at Cavite State University, taking the course of Bachelor of Science and Information Technology award with honor.</p>
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        
        <div class="bg-blue-800 p-6 rounded-lg">
            <h2 class="text-xl font-bold">Achievements</h2>
            <p class="mt-2">See all my accomplishments and awards here.</p>
            <button class="mt-4 bg-gradient-to-r from-yellow-500 to-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
        </div>
        
        <div class="bg-blue-800 p-6 rounded-lg">
            <h2 class="text-xl font-bold">Technical Skills</h2>
            <p class="mt-2">View technical skill and capabilities here.</p>
            <button class="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg">Learn More</button>
        </div>
        
        <div class="bg-blue-800 p-6 rounded-lg">
            <h2 class="text-xl font-bold">Education</h2>
            <p class="mt-2">Relevant degree and certifications are listed here.</p>
            <button class="mt-4 bg-gradient-to-r from-yellow-500 to-green-500 text-white py-2 px-4 rounded-lg">Learn More</button>
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        
        <div class="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg text-center">
            <h2 class="text-xl font-bold">Let's talk! Connect with me and discuss about UI/UX design.</h2>
            <p class="mt-2">For more information contact me in this following social:</p>
            <div class="mt-4 flex justify-center">
                <input type="email" placeholder="Your email" class="p-2 rounded-l-lg"/>
                <button class="bg-blue-700 text-white py-2 px-4 rounded-r-lg">Send</button>
            </div>
        </div>
        
        <div class="bg-blue-800 p-6 rounded-lg">
            <h2 class="text-xl font-bold">Projects</h2>
            <p class="mt-2">Unleash potential of your skill in UI/UX designing.</p>
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        
        <div class="bg-blue-800 p-6 rounded-lg">
            <h2 class="text-xl font-bold">Proficiency</h2>
            <p class="mt-2">My top programming language and database management.</p>
            <button class="mt-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2 px-4 rounded-lg">View More</button>
        </div>
        
        <div class="bg-blue-800 p-6 rounded-lg">
            <h2 class="text-xl font-bold">What's New?</h2>
            <p class="mt-2">See latest updates here.</p>
        </div>
    </div>
    <div class="grid grid-cols-1 gap-6 mt-6">
        
        <div class="bg-blue-800 p-6 rounded-lg">
            <h2 class="text-xl font-bold">System Overview</h2>
            <p class="mt-2">Collection and preview of the owner's developed system.</p>
        </div>
    </div>
</div>  
    </div>
  )
}

export default Home