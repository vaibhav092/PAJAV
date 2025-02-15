import React from 'react'
import { User2, Wind, Droplet, Flame, Globe, BookOpen, Users, Lightbulb, Earth } from 'lucide-react';


function Home() {
    const teamData = [
        {
          id: 1,
          task: "Logo",
          members: [
            "Pranav Warvadekar",
            "Arush Gupta",
            "Saurabh ",
            "Ashish Upadhyay "
          ]
        },
        {
          id: 2,
          task: "Poster",
          members: [
            "Divyatmika sah ",
            "Shreya chadha"
          ]
        },
        {
          id: 3,
          task: "Website",
          members: [
            "Anshul",
            "Ankit",
            "Yuvraj",
            "Divyam",
            "Vaibhav",
            "Nikita",
            "Ayush pandey"
          ]
        },
        {
          id: 4,
          task: "Social Media",
          members: [
            "Prakriti rai",
            "Anjali pandey",
            "Sujal kumar",
            "Saumya",
            "Aadi aggarwal",
            "Satvik Harit"
          ]
        },
        {
          id: 5,
          task: "Tagline",
          members: [
            "Dhruv Raheja",
            "Sarthak",
            "Ansh pruthi"
          ]
        },
        {
          id: 6,
          task: "GD Moderator",
          members: [
            "Vipul choudhary ",
            "Pradeep kumar "
          ]
        },
        {
          id: 7,
          task: "Outreach",
          members: [
            "Vipul Choudhary ",
            "Pradeep kumar ",
            "Aarush Gupta ",
            "Yash rajput",
            "Saurabh ",
            "Ashish Upadhyay",
            "Simran Arora",
            "Ashwani kumar",
            "Chirag dua",
            "Pallav garg",
            "Bhuvnesh gupta",
            "Vishal sharma",
            "Shubham mishra",
            "Suyash kumar agrahari",
            "Vaibhav gupta",
            "Ritesh kumar",
            "Ekansh bahal",
            "Abhinav",
            "Tushar malik"
          ]
        },
        {
          id: 8,
          task: "Report Preparation",
          members: [
            "Rishav Singh",
            "Rashi mahani"
          ]
        },
        {
          id: 9,
          task: "WhatsApp Group Moderator",
          members: [
            "Vipul Choudhary"
          ]
        },
        {
          id: 10,
          task: "Meeting Attendance Compilation",
          members: [
            "Deepanshu pandey",
            "Kritik goel"
          ]
        },
        {
          id: 13,
          task: "Event Planner",
          members: [
            "Ashish Dhinwa",
            "Abhinab Kumar",
            "Sneha Jain",
            "Parth",
            "Aayush goyal",
            "Ankit kumar singh",
            "Advait Parashar",
            "Pulkit rustagi",
            "Lavanya Saini",
            "Devansh dwivedi",
            "Saurabh ",
            "Divyatmika sah "
          ]
        },
        {
          id: 14,
          task: "Registration Manager",
          members: [
            "Sarif"
          ]
        }
    ];
    
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
    <div  className="" id='about'>
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Header */}
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-green-900 mb-4">About Society PAJAV</h2>
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
    <div id='team'>
    <div className="max-w-7xl mx-auto p-6">
      <header className="mb-12">
        <h2 className="text-3xl font-bold text-green-900 flex items-center gap-3">
          <Users className="h-8 w-8" />
          Our Team
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamData.map((team) => (
          <div key={team.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-green-100">
            <div className="bg-green-50 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-green-900">{team.task}</h3>
                </div>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  {team.members.length} {team.members.length === 1 ? 'member' : 'members'}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <ul className="space-y-2">
                {team.members.map((member, index) => (
                  <li 
                    key={index}
                    className="px-3 py-2 bg-green-50 rounded-md text-gray-800 hover:bg-green-100 transition-colors"
                  >
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>

    </div>
)
}

export default Home