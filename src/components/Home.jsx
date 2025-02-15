import React from 'react'
import { User2, Wind, Droplet, Flame, Globe, BookOpen, Users, Lightbulb, Earth } from 'lucide-react';


function Home() {

    
return (
    <div className='h-full bg-gradient-to-br from-green-200 via-teal-300 to-cyan-400 text-xl'>
        <div className="max-w-4xl mx-auto p-6 space-y-8 mt-26" id='home'>
            <h2 className='text-3xl font-bold text-gray-800 leading-relaxed text-center'>Extending hope and empowering future</h2>
          {/* Introduction Section */}
          <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">Introduction</h2>
        <div className="space-y-4 text-gray-800 leading-relaxed">
          <p>
            Nature is built on a delicate balance of five fundamental elements—Earth (Prithvi), Fire (Agni), Water (Jal), Air (Vaayu), and Space (Aakash)—which sustain all life forms. However, modern industrialization, deforestation, pollution, and climate change have disturbed this harmony, leading to alarming environmental crises.
          </p>
          <p>
            Society PAJAV was founded with the vision of restoring this natural equilibrium by integrating scientific advancements with traditional ecological wisdom. Our organization is dedicated to environmental conservation, sustainable development, and community-driven ecological awareness. Through our various initiatives, we work to protect natural resources, promote renewable energy, advocate for eco-friendly policies, and empower individuals to become custodians of nature.
          </p>
          <p>
            At PAJAV, we believe that every action counts—whether it's planting a tree, reducing waste, conserving water, or supporting clean energy. By working together, we can heal the planet and ensure a greener, healthier future for all.
          </p>
          <p className="font-semibold text-green-900">
            Join us in our mission to preserve the five elements and protect the Earth for future generations.
          </p>
        </div>
      </section>
      {/* Vision Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">Vision</h2>
        <p className="text-gray-800 leading-relaxed">
          Society PAJAV envisions a world where humanity coexists harmoniously with nature, ensuring the conservation and balanced utilization of the five essential elements—Earth (Prithvi), Fire (Agni), Water (Jal), Air (Vaayu), and Space (Aakash). By integrating traditional wisdom with modern science, we aim to restore ecological balance and foster a sustainable future for generations to come.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">Mission</h2>
        <p className="text-gray-800 mb-4">
          Our mission is to drive a global movement that promotes environmental consciousness and action through:
        </p>
        <div className="space-y-3 pl-6">
          <p className="text-gray-800">
            <span className="font-semibold text-teal-800">Sustainability Education & Awareness</span> – Educating individuals, communities, and institutions about the importance of nature conservation and sustainable living practices.
          </p>
          <p className="text-gray-800">
            <span className="font-semibold text-teal-800">Natural Resource Conservation</span> – Advocating for and implementing measures to protect Earth's precious resources, including forests, rivers, clean air, and biodiversity.
          </p>
          <p className="text-gray-800">
            <span className="font-semibold text-teal-800">Renewable Energy & Green Innovation</span> – Supporting the transition towards clean energy solutions and fostering technological advancements that align with environmental sustainability.
          </p>
          <p className="text-gray-800">
            <span className="font-semibold text-teal-800">Community Engagement & Empowerment</span> – Encouraging active participation from communities to protect and restore their local ecosystems.
          </p>
          <p className="text-gray-800">
            <span className="font-semibold text-teal-800">Collaboration & Policy Advocacy</span> – Working alongside governments, non-profits, and businesses to shape policies and initiatives for a greener future.
          </p>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">Objectives</h2>
        <div className="space-y-3 pl-6">
          <p className="text-gray-800">
            <span className="font-semibold text-teal-800">Environmental Awareness & Education</span> – Conduct workshops, seminars, and campaigns to educate people on ecological balance and sustainability.
          </p>
          <p className="text-gray-800">
            <span className="font-semibold text-teal-800">Conservation & Restoration</span> – Undertake projects for afforestation, water conservation, clean energy promotion, and pollution control.
          </p>
          <p className="text-gray-800">
            <span className="font-semibold text-teal-800">Policy Advocacy</span> – Work with policymakers to implement sustainable development practices.
          </p>
          <p className="text-gray-800">
            <span className="font-semibold text-teal-800">Community Engagement</span> – Mobilize communities to actively participate in nature conservation efforts.
          </p>
          <p className="text-gray-800">
            <span className="font-semibold text-teal-800">Scientific Research & Innovation</span> – Support and fund research for green technology, renewable energy, and environmental conservation.
          </p>
        </div>
      </section>


    </div>
    </div>
)
}

export default Home