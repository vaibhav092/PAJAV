import React from 'react'
import { User2, Wind, Droplet, Flame, Globe, BookOpen, Users, Lightbulb, Earth } from 'lucide-react';

function About() {
  return (
    <div className='h-full bg-gradient-to-br from-green-200 via-teal-300 to-cyan-400 text-xl'>
    <div  className="mt-26" id='about'>
    <div className="max-w-[1500px] mx-auto p-6 space-y-10">
      {/* Header */}
      <header className="mb-8">
        <h2 className="text-3xl text-center font-bold text-green-900 mb-4">About Society PAJAV</h2>
      </header>

      {/* Who We Are */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-teal-800 flex items-center gap-2">
          <User2 className="h-6 w-6" />
          Who We Are
        </h3>
        <div className="text-gray-800 space-y-4">
          <p>
            Society PAJAV (Prithvi, Agni, Jal, Aakash, Vaayu) is a non-profit organization dedicated to protecting and preserving the five fundamental elements of nature—Earth, Fire, Water, Air, and Space. Our name represents the core forces that sustain life, and our mission is to restore ecological balance by promoting sustainability, conservation, and environmental awareness.
          </p>
          <p>
            With a strong commitment to scientific research, traditional wisdom, and community-driven initiatives, we strive to address pressing environmental challenges such as deforestation, climate change, pollution, water scarcity, and biodiversity loss. Our holistic approach integrates education, policy advocacy, green technology, and grassroots participation to create long-term, impactful solutions.
          </p>
        </div>
      </section>

      {/* Why PAJAV */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-teal-800 flex items-center gap-2">
          <Globe className="h-6 w-6" />
          Why PAJAV?
        </h3>
        <div className="text-gray-800 space-y-4">
          <p>
            The natural world is in crisis—forests are disappearing, rivers are drying up, air pollution is rising, and extreme weather events are becoming more frequent. These disruptions threaten not only ecosystems but also human health, food security, and the overall well-being of future generations.
          </p>
          <p>
            At Society PAJAV, we believe that understanding and respecting the balance of nature is key to a sustainable future. By working collectively, we can mitigate environmental damage and create a world where humans and nature coexist harmoniously.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-teal-800 flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-green-800 font-semibold">🌱 Sustainability</p>
            <p className="text-gray-700">Promoting long-term ecological balance through responsible resource usage.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-green-800 font-semibold">🌎 Conservation</p>
            <p className="text-gray-700">Protecting natural habitats, biodiversity, and endangered species.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-green-800 font-semibold">💡 Innovation</p>
            <p className="text-gray-700">Encouraging green technologies and renewable energy solutions.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-green-800 font-semibold">👥 Community Engagement</p>
            <p className="text-gray-700">Empowering individuals and local groups to take meaningful environmental action.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg md:col-span-2">
            <p className="text-green-800 font-semibold">📖 Education & Awareness</p>
            <p className="text-gray-700">Spreading knowledge about climate change, pollution control, and eco-friendly practices.</p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-teal-800 flex items-center gap-2">
          <Lightbulb className="h-6 w-6" />
          What We Do
        </h3>
        <p className="text-gray-800">Our work is structured around five key environmental domains:</p>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 flex items-center gap-2">
              <Earth className="h-5 w-5" />
              Prithvi (Earth Conservation)
            </h4>
            <p className="text-gray-700">Reforestation, soil conservation, waste management, and sustainable agriculture.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 flex items-center gap-2">
              <Flame className="h-5 w-5" />
              Agni (Clean Energy & Fire Management)
            </h4>
            <p className="text-gray-700">Renewable energy advocacy, wildfire prevention, and energy conservation.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 flex items-center gap-2">
              <Droplet className="h-5 w-5" />
              Jal (Water Protection)
            </h4>
            <p className="text-gray-700">River restoration, clean water access, rainwater harvesting, and ocean conservation.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 flex items-center gap-2">
              <Wind className="h-5 w-5" />
              Vaayu (Air Quality & Pollution Control)
            </h4>
            <p className="text-gray-700">Air pollution reduction programs, emission control, and urban green spaces.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Aakash (Space & Cosmic Awareness)
            </h4>
            <p className="text-gray-700">Climate research, space sustainability, and cosmic education.</p>
          </div>
        </div>
        <p className="text-gray-800 mt-4">
          Through collaborations with communities, researchers, policymakers, and volunteers, we implement programs that bring real change at local, national, and global levels.
        </p>
      </section>

      {/* Join Us */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-teal-800 flex items-center gap-2">
          <Users className="h-6 w-6" />
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdn3X2dA-j60MDl8P5Uzw6CNivArjZcB0VkbEXRoiUA_fxJFA/viewform" target='_blank' className='font-medium'>
          Join Us in Making a Difference(Google Form Link )
          </a>
        </h3>
        <div className="text-gray-800 space-y-4">
          <p>
            At Society PAJAV, we believe that small actions lead to big impacts. Whether you're an individual looking to contribute, an organization aiming for sustainability, or a policymaker advocating for change, there's a place for everyone in our movement.
          </p>
          <p className="text-green-800 font-semibold text-lg">
            👉 Get involved today! Be a part of the solution and help us create a healthier planet for generations to come. 🌍💚
          </p>
        </div>
      </section>
    </div>
    </div>
    </div>
  )
}

export default About