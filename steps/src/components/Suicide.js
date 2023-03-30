// import logo from './logo.svg';
import './suicide.css';
import Navbar from './Navbar';

function Suicide() {
  return (
    
    <div className="App">
      <Navbar />

      <p className="head1">Help is available
        Speak with someone today</p>
      <p class="head2">
      Remember, suicide is a permanent solution to a temporary problem. 
      There is help available, and with the right support, you can overcome your struggles and find a brighter future.
      </p>
      
    
      <h2 class="gov">
          Connect to Government Officials anonymously
        </h2>
      <div class="govt">
        
         <a class="govt_site" href="http://icallhelpline.org/">Official website </a> 

         <p class="govt_no">Mobile No.- 9152987821</p>
      </div>
      <div className="contact">
        <h1  class="prof" >Contact to a  professional</h1> 
       <a href="https://www.practo.com/delhi/psychiatrist"><img class="practo" src="https://i2.wp.com/www.cosmoderma.healios.co.in/wp-content/uploads/2019/04/practo.png" /></a>
       <a href="https://www.practo.com/delhi/psychiatrist"><img class="felicity" src="https://www.felicity.care/assets/images/logo.png" /></a>
      
      </div>
      <div className="reachout" >
        <div className="box">
          <h2>Remember :</h2>
          <p class="remember">
          Breaking Isolation: Depression can make you feel isolated and alone, but talking to someone can help you break out of that cycle of isolation and loneliness. When you reach out to others, you can start to build a supportive network of friends and family members who care about you.
<br/><br/>
Getting Support: When you reach out to others, you can receive emotional support and encouragement. This can help you feel less alone and more hopeful about the future. People who are supportive can also help you make a plan to get the help you need to manage your depression.
<br/><br/>
Improving Your Mental Health: Talking about your feelings with a trusted friend or family member, or a mental health professional, can help you better understand your depression and develop a plan to manage it. With the right support and treatment, you can begin to feel better and overcome your depression.
<br/><br/>
Reducing Stigma: Depression is a common and treatable mental health condition, but it is often stigmatized. Reaching out to others can help reduce the stigma associated with depression and promote a more open and understanding society.
<br/><br/>
Encouraging Self-Care: When you reach out to others, you can receive practical advice and support to help you take care of yourself. This may include tips for eating well, getting enough sleep, and engaging in physical activity
          </p>
        </div>
      </div>
    
      <div class="chat-container">
  <div class="chat-header">
    <h3>Chat with a Chatbot</h3>
  </div>
  <div class="chat-messages">
    <div class="chat-message user-message">
      <p>Hello, how can I help you today?</p>
    </div>
    <div class="chat-message bot-message">
      <p>I'm looking for information on a specific topic.</p>
    </div>
    <div class="chat-message user-message">
      <p>Sure, what topic are you interested in?</p>
    </div>
  </div>
  <div class="chat-input-container">
    <form>
      <input type="text" class="chat-input" placeholder="Type your message here..."></input>
      <button type="submit" class="chat-submit-button">Submit</button>
    </form>
  </div>
</div>



    
    </div>
  );
}

export default Suicide;
