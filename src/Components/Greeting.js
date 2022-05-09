import React from 'react'

function Greeting({deg}) {
  return (
    <div>
        <div id='circle-container'>
        <div className='circle' style={{transform: `perspective(1000px) rotateY(${deg}deg) rotateX(15deg)` }}>
          <i style={{ "--char-index": 1 }} class="char devicon-javascript-plain colored"></i>
          <i style={{ "--char-index": 2 }} class="char devicon-react-original colored"></i>
          <i style={{ "--char-index": 3 }} class="char devicon-ruby-plain colored"></i>
          <i style={{ "--char-index": 4 }} class="char devicon-rails-plain colored"></i>
          <i style={{ "--char-index": 5 }} class="char devicon-sqlite-plain colored"></i>
          <i style={{ "--char-index": 6 }} class="char devicon-microsoftsqlserver-plain colored"></i>
          <i style={{ "--char-index": 7 }} class="char devicon-html5-plain colored"></i>
          <i style={{ "--char-index": 8 }} class="char devicon-css3-plain colored"></i>
          <i style={{ "--char-index": 9 }} class="char devicon-vscode-plain colored"></i>
          <i style={{ "--char-index": 10 }} class="char devicon-npm-original-wordmark colored"></i>
          <i style={{ "--char-index": 11 }} class="char devicon-github-original colored"></i>
          <i style={{ "--char-index": 12 }} class="char devicon-canva-original colored"></i>
          <i style={{ "--char-index": 13 }} class="char devicon-figma-plain colored"></i>
        </div>
      </div>
        <div id='greeting-container'>
            <p>Hello, I'm <span>David Sands.</span></p>
            <p>I'm a full-stack software engineer.</p>
        </div>
     </div>
  )
}

export default Greeting