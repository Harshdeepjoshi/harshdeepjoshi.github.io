(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7527:function(e,t,i){Promise.resolve().then(i.bind(i,2533)),Promise.resolve().then(i.bind(i,2573)),Promise.resolve().then(i.bind(i,5481)),Promise.resolve().then(i.bind(i,8349)),Promise.resolve().then(i.bind(i,16)),Promise.resolve().then(i.bind(i,2802)),Promise.resolve().then(i.bind(i,3689)),Promise.resolve().then(i.bind(i,3322)),Promise.resolve().then(i.bind(i,1523)),Promise.resolve().then(i.bind(i,49))},2533:function(e,t,i){"use strict";i.r(t);var a=i(7437),s=i(3810),n=i(3145),l=i(4935),r=i(5846),o=i(5805);t.default=()=>{let e=[{icon:l.Z,text:"Coding"},{icon:r.Z,text:"Innovation"},{icon:o.Z,text:"Collaboration"}],t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},i={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return(0,a.jsx)("section",{id:"about",className:"py-20 bg-gray-800",children:(0,a.jsxs)("div",{className:"container mx-auto px-6",children:[(0,a.jsx)(s.E.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-3xl font-bold mb-8 text-center text-teal-500",children:"About Me"}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[(0,a.jsx)(s.E.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},className:"md:w-1/3 mb-8 md:mb-0",children:(0,a.jsx)(n.default,{src:"/placeholder.svg?height=400&width=400",alt:"Harshdeep Johi",width:400,height:400,className:"rounded-full shadow-lg"})}),(0,a.jsxs)(s.E.div,{variants:t,initial:"hidden",animate:"visible",className:"md:w-2/3 md:pl-8",children:[(0,a.jsx)(s.E.p,{variants:i,className:"text-lg mb-6",children:"Hello! I'm Harshdeep Joshi, a software engineer passionate about learning, evolving, and making a difference through technology. I thrive in dynamic environments where I can embrace new challenges, explore innovative solutions, and continually refine my skills."}),(0,a.jsx)(s.E.p,{variants:i,className:"text-lg mb-6",children:"Adaptability is at the core of my approach—whether it's mastering the latest tools, diving into a new domain, or solving complex problems, I'm always ready to learn and grow. I believe that staying curious and open to change is key to thriving in the ever-evolving world of technology."}),(0,a.jsx)(s.E.p,{variants:i,className:"text-lg mb-6",children:"When I'm not writing code, you'll find me exploring new tech trends, experimenting with creative projects, or collaborating with others to turn ideas into reality. Let's connect and build something extraordinary together!"}),(0,a.jsx)(s.E.div,{variants:t,className:"flex justify-center space-x-6",children:e.map((e,t)=>(0,a.jsxs)(s.E.div,{variants:i,className:"flex flex-col items-center",whileHover:{scale:1.1},children:[(0,a.jsx)(e.icon,{size:32,className:"text-teal-500 mb-2"}),(0,a.jsx)("span",{className:"text-sm text-gray-400",children:e.text})]},t))})]})]})]})})}},2573:function(e,t,i){"use strict";i.r(t);var a=i(7437),s=i(2265),n=i(3810),l=i(4743);t.default=()=>{let[e,t]=(0,s.useState)({name:"",email:"",message:""}),i=e=>{let{name:i,value:a}=e.target;t(e=>({...e,[i]:a}))};return(0,a.jsx)("section",{id:"contact",className:"py-20 bg-gray-900",children:(0,a.jsxs)("div",{className:"container mx-auto px-6",children:[(0,a.jsx)(n.E.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-3xl font-bold mb-8 text-center text-teal-500",children:"Contact Me"}),(0,a.jsxs)(n.E.form,{onSubmit:i=>{i.preventDefault(),console.log("Form submitted:",e),t({name:"",email:"",message:""})},className:"max-w-lg mx-auto",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium mb-2 text-gray-300",children:"Name"}),(0,a.jsx)(n.E.input,{type:"text",id:"name",name:"name",value:e.name,onChange:i,required:!0,className:"w-full px-3 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500",whileFocus:{scale:1.02},transition:{duration:.2}})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium mb-2 text-gray-300",children:"Email"}),(0,a.jsx)(n.E.input,{type:"email",id:"email",name:"email",value:e.email,onChange:i,required:!0,className:"w-full px-3 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500",whileFocus:{scale:1.02},transition:{duration:.2}})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium mb-2 text-gray-300",children:"Message"}),(0,a.jsx)(n.E.textarea,{id:"message",name:"message",value:e.message,onChange:i,required:!0,rows:4,className:"w-full px-3 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500",whileFocus:{scale:1.02},transition:{duration:.2}})]}),(0,a.jsxs)(n.E.button,{type:"submit",className:"w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:from-teal-600 hover:to-blue-600 transition duration-300 flex items-center justify-center",whileHover:{scale:1.05},whileTap:{scale:.95},children:["Send Message",(0,a.jsx)(l.Z,{size:20,className:"ml-2"})]})]})]})})}},5481:function(e,t,i){"use strict";i.r(t);var a=i(7437),s=i(3810),n=i(8819),l=i(5900),r=i(1047),o=i(3774);t.default=()=>{let{ref:e,inView:t}=(0,n.YD)({threshold:.1,triggerOnce:!0}),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},c={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5}}};return(0,a.jsx)("section",{id:"education",className:"py-20 bg-gray-900",ref:e,children:(0,a.jsxs)("div",{className:"container mx-auto px-6",children:[(0,a.jsx)(s.E.h2,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.5},className:"text-3xl font-bold mb-8 text-center text-teal-500",children:"Education"}),(0,a.jsxs)(s.E.div,{variants:i,initial:"hidden",animate:t?"visible":"hidden",className:"max-w-3xl mx-auto bg-gray-800 rounded-lg p-6 shadow-lg relative",children:[(0,a.jsx)(s.E.div,{className:"absolute left-0 top-0 bottom-0 w-1 bg-teal-500",initial:{height:0},animate:t?{height:"100%"}:{},transition:{duration:1,delay:.5}}),(0,a.jsxs)(s.E.div,{variants:c,className:"flex items-center mb-4",children:[(0,a.jsx)(l.Z,{size:24,className:"text-teal-500 mr-2"}),(0,a.jsx)("h3",{className:"text-xl font-semibold",children:"Bachelor of Technology in Computer Science and Engineering"})]}),(0,a.jsxs)(s.E.div,{variants:c,className:"flex items-center mb-2 text-gray-400",children:[(0,a.jsx)(r.Z,{size:18,className:"mr-2"}),(0,a.jsx)("p",{children:"2020 - 2024 (Expected)"})]}),(0,a.jsxs)(s.E.div,{variants:c,className:"flex items-center mb-4 text-gray-400",children:[(0,a.jsx)(o.Z,{size:18,className:"mr-2"}),(0,a.jsx)("p",{children:"XYZ Institute of Technology"})]}),(0,a.jsxs)(s.E.ul,{variants:i,className:"list-disc list-inside text-gray-300 space-y-2",children:[(0,a.jsx)(s.E.li,{variants:c,children:"CGPA: 8.5/10"}),(0,a.jsx)(s.E.li,{variants:c,children:"Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Web Development, Machine Learning"}),(0,a.jsx)(s.E.li,{variants:c,children:"Member of the College Coding Club"}),(0,a.jsx)(s.E.li,{variants:c,children:"Participated in various hackathons and coding competitions"})]})]})]})})}},8349:function(e,t,i){"use strict";i.r(t);var a=i(7437),s=i(3810),n=i(5135),l=i(598),r=i(2351);t.default=()=>{let e=[{name:"GitHub",icon:n.Z,url:"https://github.com"},{name:"LinkedIn",icon:l.Z,url:"https://linkedin.com"},{name:"Twitter",icon:r.Z,url:"https://twitter.com"}];return(0,a.jsx)("footer",{className:"bg-gray-900 py-12",children:(0,a.jsxs)("div",{className:"container mx-auto px-6 text-center",children:[(0,a.jsx)(s.E.div,{className:"flex justify-center space-x-6 mb-6",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:e.map(e=>(0,a.jsxs)(s.E.a,{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-teal-500 transition-colors duration-300",whileHover:{scale:1.1},whileTap:{scale:.9},children:[(0,a.jsx)(e.icon,{size:24}),(0,a.jsx)("span",{className:"sr-only",children:e.name})]},e.name))}),(0,a.jsxs)(s.E.p,{className:"text-gray-400",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:["\xa9 ",new Date().getFullYear()," Harshdeep Johi. All rights reserved."]}),(0,a.jsx)(s.E.p,{className:"text-gray-500 mt-2 text-sm",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:"Designed and built with Next.js and Tailwind CSS"})]})})}},16:function(e,t,i){"use strict";i.r(t);var a=i(7437),s=i(3810),n=i(6858),l=i(3145),r=i(4189);t.default=()=>(0,a.jsxs)("section",{id:"home",className:"relative flex items-center justify-center min-h-screen overflow-hidden",children:[(0,a.jsxs)("div",{className:"absolute inset-0 z-0",children:[(0,a.jsx)(l.default,{src:"/placeholder.svg?height=1080&width=1920",alt:"Background",layout:"fill",objectFit:"cover",quality:100}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900/60"})]}),(0,a.jsxs)(s.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-4xl mx-auto px-6 relative z-10 text-center",children:[(0,a.jsx)(s.E.h1,{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5,delay:.2},className:"text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500",children:"Harshdeep Joshi"}),(0,a.jsx)(s.E.p,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5,delay:.4},className:"text-xl md:text-2xl mb-8 text-gray-300",children:"Driven by curiosity, powered by adaptability"}),(0,a.jsxs)(s.E.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5,delay:.6},className:"flex justify-center space-x-4",children:[(0,a.jsx)(r.rU,{to:"projects",smooth:!0,offset:-70,duration:500,children:(0,a.jsxs)(s.E.button,{className:"inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:from-teal-600 hover:to-blue-600 transition duration-300",whileHover:{scale:1.05},whileTap:{scale:.95},children:["View My Projects",(0,a.jsx)(n.Z,{className:"ml-2",size:20})]})}),(0,a.jsx)(r.rU,{to:"contact",smooth:!0,offset:-70,duration:500,children:(0,a.jsx)(s.E.button,{className:"inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition duration-300",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Get in Touch"})})]})]})]})},2802:function(e,t,i){"use strict";i.r(t);var a=i(7437),s=i(3810),n=i(8819),l=i(3145),r=i(5135),o=i(6362);t.default=()=>{let{ref:e,inView:t}=(0,n.YD)({threshold:.1,triggerOnce:!0}),i={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return(0,a.jsx)("section",{id:"projects",className:"py-20 bg-gray-800",ref:e,children:(0,a.jsxs)("div",{className:"container mx-auto px-6",children:[(0,a.jsx)(s.E.h2,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.5},className:"text-3xl font-bold mb-8 text-center text-teal-500",children:"Projects"}),(0,a.jsx)(s.E.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},initial:"hidden",animate:t?"visible":"hidden",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[{title:"E-commerce Platform",description:"A full-stack e-commerce platform built with React, Node.js, and MongoDB.",image:"/placeholder.svg?height=200&width=300",github:"https://github.com",live:"https://example.com"},{title:"Weather App",description:"A weather application using React and OpenWeatherMap API.",image:"/placeholder.svg?height=200&width=300",github:"https://github.com",live:"https://example.com"},{title:"Task Manager",description:"A task management application built with React and Firebase.",image:"/placeholder.svg?height=200&width=300",github:"https://github.com",live:"https://example.com"}].map((e,t)=>(0,a.jsxs)(s.E.div,{variants:i,className:"bg-gray-900 rounded-lg overflow-hidden shadow-lg",children:[(0,a.jsx)(l.default,{src:e.image||"/placeholder.svg",alt:e.title,width:300,height:200,className:"w-full h-48 object-cover"}),(0,a.jsxs)("div",{className:"p-6",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold mb-2 text-teal-500",children:e.title}),(0,a.jsx)("p",{className:"text-gray-400 mb-4",children:e.description}),(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsxs)(s.E.a,{href:e.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-gray-300 hover:text-teal-500 transition duration-300",whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,a.jsx)(r.Z,{size:20,className:"mr-1"}),"GitHub"]}),(0,a.jsxs)(s.E.a,{href:e.live,target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-gray-300 hover:text-teal-500 transition duration-300",whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,a.jsx)(o.Z,{size:20,className:"mr-1"}),"Live Demo"]})]})]})]},t))})]})})}},3689:function(e,t,i){"use strict";i.r(t);var a=i(7437),s=i(3810),n=i(2735);t.default=()=>(0,a.jsx)("section",{id:"resume",className:"py-20 bg-gray-800",children:(0,a.jsx)("div",{className:"container mx-auto px-6",children:(0,a.jsxs)(s.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"max-w-3xl mx-auto text-center",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-8 text-teal-500",children:"Download My Resume"}),(0,a.jsx)("p",{className:"text-lg mb-8 text-gray-300",children:"Get a comprehensive overview of my skills, experience, and educational background by downloading my resume."}),(0,a.jsxs)(s.E.a,{href:"/path-to-your-resume.pdf",download:!0,className:"inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-teal-600 hover:to-blue-600 transition duration-300",whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,a.jsx)(n.Z,{className:"mr-2",size:20}),"Download Resume"]})]})})})},3322:function(e,t,i){"use strict";i.r(t);var a=i(7437),s=i(3810),n=i(8819);t.default=()=>{let{ref:e,inView:t}=(0,n.YD)({threshold:.1,triggerOnce:!0}),i={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5}}};return(0,a.jsx)("section",{id:"skills",className:"py-20 bg-gray-900",ref:e,children:(0,a.jsxs)("div",{className:"container mx-auto px-6",children:[(0,a.jsx)(s.E.h2,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.5},className:"text-3xl font-bold mb-8 text-center text-teal-500",children:"Skills & Technologies"}),(0,a.jsx)(s.E.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},initial:"hidden",animate:t?"visible":"hidden",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{name:"JavaScript",level:90},{name:"React",level:85},{name:"Node.js",level:80},{name:"Python",level:75},{name:"Java",level:70},{name:"SQL",level:85},{name:"Git",level:90},{name:"Docker",level:75},{name:"AWS",level:70},{name:"TypeScript",level:80}].map((e,n)=>(0,a.jsxs)(s.E.div,{variants:i,className:"bg-gray-800 rounded-lg p-6 shadow-lg",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold mb-2 text-teal-500",children:e.name}),(0,a.jsxs)("div",{className:"relative pt-1",children:[(0,a.jsx)("div",{className:"flex mb-2 items-center justify-between",children:(0,a.jsx)("div",{children:(0,a.jsxs)("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-500 bg-teal-200",children:[e.level,"%"]})})}),(0,a.jsx)("div",{className:"overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200",children:(0,a.jsx)(s.E.div,{initial:{width:0},animate:t?{width:"".concat(e.level,"%")}:{},transition:{duration:1,delay:.1*n},className:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"})})]})]},e.name))})]})})}}},function(e){e.O(0,[18,168,971,117,744],function(){return e(e.s=7527)}),_N_E=e.O()}]);