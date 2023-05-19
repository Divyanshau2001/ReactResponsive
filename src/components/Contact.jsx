import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>

            <form>
                <div>
                    <label >Name</label>
                    <input type="text" required placeholder= "Your Name"/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" required placeholder="Your Email Here" />
                 </div>
                <div>
                    <label htmlFor="">Message</label>
                    <input type="text" required placeholder="Your Qurey" />
                 </div>

                 <button type="submit">Submit</button>
            </form>
        </main>
    </div>
  )
}

export default Contact