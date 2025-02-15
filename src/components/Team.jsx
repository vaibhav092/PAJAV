import React from 'react'
import {Users } from 'lucide-react';

function Team() {
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
    <div className='h-full bg-gradient-to-br from-green-200 via-teal-300 to-cyan-400 text-xl mt-10'>
            <div id='team' className='mt-26'>
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

export default Team