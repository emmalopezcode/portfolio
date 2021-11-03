
document.querySelector('#app').innerHTML = `
${nav}
<div class="skills-title">Portfolio</div>
<div class="projects">
${data.projects.map((project, index) => `
    <div class="project">
    ${index % 2 === 0 ?
        `<img class="project-img" src=${`./images/project-img/${project.image}.png`} alt="image"/>`
    : ''}
        <div class="project-description">
            <div class="project-title">${project.title} </div>
            ${project.description}
            <div class="cta">
                <a class="cta-btn github" href="${project.github}">Source Code</a>
                <a class="cta-btn demo" href="${project.demo}">Video Demo</a>
                ${project.interactive ? `<a class="cta-btn interactive" href="${project.interactive}">Live App</a>` : ''}
            </div>
        </div>
        ${index % 2 === 1 ?
            `<img class="project-img" src=${`./images/project-img/${project.image}.png`} alt="image"/>`
        : ''}
    </div>
`).join("")}
</div>
`
