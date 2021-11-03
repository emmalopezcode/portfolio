
function toMain() {
  //document.getElementById('demo').scrollIntoView()
  console.log('help')
}

document.querySelector('#app').innerHTML = `
<div id='box-container'>
  ${Array(24).fill(1).map(box => `
    <div class='box' style='background-color:
    hsl( 0, 0%, ${Math.random()*10+25}%'> </div>
  `).join("")}

  <div class="greeting">
      <p>Hello, I'm <span id='name'>Emma Lopez</span>. </p>
      <p>I'm a Web Developer.</p>
      <div class='btn' onclick="scrollToNav()">Let's get started!</div>
  </div>
</div>

${nav}

<div class="page1"id='about'>
  <div class="main-text"  id='nav-test'> not your average dev </div>

  <div class="about-section">
    <div class='face'>
      <div class="face-text">
        <div class="name">
          Emma Lopez
        </div>
        student and software developer
      </div>
    </div>

    <div class="about-container">
      <div class="about-title">
        about me
      </div>
      <div class="about">
        ${data.about}
      </div>
    </div>
  </div>
</div>

<div class="skills-title">
Experience
</div>

<div class="experience-tiles">

  ${data.experience.map((job, index) => `
  <div class="experience-tile">
    ${(index % 2 == 1) ?
      `<img class="exp-img" src='./images/company-img/${job.company.toLowerCase()}.jpg'/>` : ''}
    
    <div class="exp-content">
      <div class="company">${job.company}</div>
      <div class="job-title">${job.position}</div>
      <div class="job-period">${job['time-span']}</div>
      <ul class="points">
        ${job.points.map(point => `
        <div class="point">${point}</div>
        `).join("")}
      </ul>
      <div class="buzzwords">
        ${job.buzzwords.map(buzzword => `
        <div class="buzzword">${buzzword}</div>
        `).join("")}
      </div>

    </div>
    ${ (index % 2 == 0) ?
      `<img class="exp-img" src='./images/company-img/${job.company.toLowerCase()}.jpg'/>` : ''}

  </div>`).join("")}
</div>

<div class="skills-title">
Skills
</div>

<div class="set-title">Frontend</div>
<div class="skillset">
   ${data.skills.Frontend.map(skill => `

    <div class="skill" >
      <div class="skill-header">
        <img class="skill-icon" src='./images/cs-icons/${skill.title.toLowerCase()}.png'>
        </img>
        <div class="skill-title">
          ${skill.title}
        </div>
      </div>
      <div class="skill-footer">
        <a href='./portfolio.html' class="see-skill-projects">
          projects
        </a>
      </div>
    </div>`
   ).join("")}
</div>
<div class="set-title">Backend</div>
<div class="skillset">

   ${data.skills.Backend.map(skill => `

    <div class="skill" >
      <div class="skill-header">
        <img class="skill-icon" src='./images/cs-icons/${skill.title.toLowerCase()}.png'>
        </img>
        <div class="skill-title">
          ${skill.title}
        </div>
      </div>
      <div class="skill-footer">
        <a href='./portfolio.html' class="see-skill-projects">
          projects
        </a>
      </div>
    </div>`
   ).join("")}
    
  
    

</div>

<div class='main-footer'>
  <div class='skills-title'>Any Questions?</div>
  <div class='reach-out'>Feel free to reach out!</div>
  <div class='flex'>
    <a class='contact-me' href='./contact.html'>Contact Me</a>
  </div>
  
</div>
`


