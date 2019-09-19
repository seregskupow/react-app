import React from 'react'
import Title from '../Title'

export default function Contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us"/>
                    <form className="mt-5" action="https://formspree.io/sergskypow@gmail.com" method="POST">
                        {/*Name*/}
                        <div className="form-group">
                            <input type="text" name="firstName" className="form-control" placeholder="sereg"/>
                        </div>
                        {/*Email*/}
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="sereg@email.com"/>
                        </div>
                        {/*Subject*/}
                        <div className="form-group">
                            <input type="text" name="subject" className="form-control" placeholder="important"/>
                        </div>
                        {/*Message*/}
                        <div className="form-group">
                            <textarea name="message"rows="10" className="form-control" placeholder="hello buddy"></textarea>
                        </div>
                        {/*Suubmit*/}
                        <div className="form-group my-3">
                            <input type="submit" value="Send" className="form-control bg-primary text-white"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
