import React from 'react'
import vg from "../assets/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"
const Home = () => {
    return (

        <>
            <div className='home' id='home'>
                <main>
                    <h1>techyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>
            <div className="home2" id>
                <img src={vg} alt="graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems
                        you face
                        everyday. We are leading tech company whose aim is top
                        increase the
                        problem solving ability in children.
                    </p>
                </div>
            </div>
            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Voluptas obcaecati, reiciendis dolorem rerum est, enim quo magni adipisci officia soluta animi ad quas quos numquam aut, itaque earum quasi!
                        Magnam dignissimos suscipit architecto eveniet quod, fuga natus ipsam nam expedita sapiente aspernatur quam itaque excepturi distinctio voluptatibus quasi, impedit alias similique consequuntur aperiam fugit.
                        Iusto nostrum quidem quam numquam deleniti.</p>
                </div>
            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{ animationDelay: "0.3s" }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{ animationDelay: "0.5s" }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{ animationDelay: "0.7s" }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{ animationDelay: "1s" }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}
export default Home;