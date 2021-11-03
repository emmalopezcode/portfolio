document.querySelector('#app').innerHTML = `
${nav}

<div class="skills-title">Contact Me</div>
  <div class='flex'>
    <div class='contact-links'>
      <a href='https://www.github.com/emmalopezcode'>  
        <p><i class='fa fa-github icon'></i></p>
      </a>
      <a href='https://www.linkedin.com/in/emma-lopez-112729197/'>        
        <p><i class='fa fa-linkedin icon'></i></p>
      </a>
      <a href='https://www.facebook.com/blueemmam/'>
        <p><i class='fa fa-facebook icon'></i></p>
      </a>
      <a href='mailto:emmalopezcode@gmail.com'>
        <p><i class='fa fa-envelope icon'></i></p>
      </a>
    </div>
  </div>
  <div class='flex'>
    <form 
      action="https://formspree.io/f/mgerjakz"
      method="POST"
    >
      <div class='grid'>
        <div style='color:white;' class="styled-input wide">
            Name
            <input type="text" name='name' required />
          </div>
          <div style='color:white;' class="styled-input wide">
            Email
            <input type="text" type='email' required />
          </div>
      </div>
      <div style='color:white;' class="styled-input wide">
        Message
					<textarea rows='10' required name='message'></textarea>
			</div>
      <div class='right'>
        <button type='submit'>Send</button>
      </div>
      </div>
    </form>



  <div style='padding:5%'></div>

`